<template>
  <section class="py-1 bg-blueGray-50">
    <div class="w-full xl:w-3/4 mb-12 xl:mb-0 px-4 mx-auto">
      <div
        class="relative flex flex-col min-w-0 break-words w-full mb-6 rounded "
      >
        <div class="block w-full overflow-x-auto items-center">
          <table
            class="items-center bg-transparent w-full border-collapse cursor"
          >
            <thead>
              <tr class="bg-yellow-700">
                <th
                  class="px-6 bg-blueGray-50 text-yellow-50 align-middle border border-solid border-blueGray-100 py-3 text-lg uppercase whitespace-nowrap font-medium text-center"
                >
                  หมายเลข
                </th>
                <th
                  class="px-6 bg-blueGray-50 text-yellow-50 align-middle border border-solid border-blueGray-100 py-3 text-lg uppercase whitespace-nowrap font-medium text-center"
                >
                  ชื่อพนักงาน
                </th>
                <th
                  class="px-6 bg-blueGray-50 text-yellow-50 align-middle border border-solid border-blueGray-100 py-3 text-lg uppercase whitespace-nowrap font-medium text-center"
                >
                  ตำแหน่ง
                </th>
                <th
                  class="px-6 bg-blueGray-50 text-yellow-50 align-middle border border-solid border-blueGray-100 py-3 text-lg uppercase whitespace-nowrap font-medium text-center"
                >
                  เพศ
                </th>
                <th
                  class="px-6 bg-blueGray-50 text-yellow-50 align-middle border border-solid border-blueGray-100 py-3 text-lg uppercase whitespace-nowrap font-medium text-center"
                >
                  อายุ
                </th>
                <th
                  class="px-6 bg-blueGray-50 text-yellow-50 align-middle border border-solid border-blueGray-100 py-3 text-lg uppercase whitespace-nowrap font-medium text-center"
                >
                  เบอร์โทรศัพท์
                </th>
              </tr>
            </thead>

            <tbody>
              <tr
                @click="viewProfile(Employee.id)"
                class="cursor-pointer text-center body-table"
                v-for="(Employee, index) in EmployeeList"
                v-bind:key="index"
              >
                <th
                  class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-base whitespace-nowrap p-4"
                >
                  {{ Employee.id }}
                </th>
                <td
                  class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-base whitespace-nowrap p-4 "
                >
                  {{ Employee.name }}
                </td>
                <td
                  class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-base whitespace-nowrap p-4"
                >
                  {{ Employee.job }}
                </td>
                <td
                  class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-base whitespace-nowrap p-4"
                >
                  {{ Employee.gender }}
                </td>
                <td
                  class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-base whitespace-nowrap p-4"
                >
                  {{ Employee.age }}
                </td>
                <td
                  class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-base whitespace-nowrap p-4"
                >
                  {{ Employee.tel }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      EmployeeList: {},
    };
  },
  methods: {
    async loadUsers() {
      try {
        let response = await axios.get(
          "http://127.0.0.1:8000/api/employee-manager"
        );
        console.log(response);
        this.EmployeeList = response.data;
        console.log(this.EmployeeList);
      } catch (e) {
        console.error(e);
      }
    },
    viewProfile(id) {
      this.$router.push({ name: "EmployeeInfo", params: { id: id } });
    },
  },

  async created() {
    await this.loadUsers();
  },
};
</script>

<style scoped lang="scss">
.body-table {
  background-color: #ebcbb3;
}

.body-table:hover {
  background-color: #fde68a;
}

tr:nth-child(even) {
  background-color: #d4ac9a;
}
</style>
