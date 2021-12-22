<template>
  <section class="py-1">
    <div class="w-full xl:w-3/4 mb-12 xl:mb-0 px-4 mx-auto">
      <div
        class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 rounded "
      >
        <div class="block w-full overflow-x-auto">
          <table
            class="items-center bg-transparent w-full border-collapse cursor"
          >
            <thead>
              <tr class="bg-yellow-700">
                <th
                  class="px-6 text-yellow-50 align-middle border border-solid border-yellow-100 py-3 text-lg uppercase whitespace-nowrap font-medium text-center"
                >
                  รหัสลูกค้า
                </th>
                <th
                  class="px-6 text-yellow-50 align-middle border border-solid border-blueGray-100 py-3 text-lg uppercase whitespace-nowrap font-medium text-center"
                >
                  ชื่อลูกค้า
                </th>
                <th
                  class="px-6 text-yellow-50 align-middle border border-solid border-blueGray-100 py-3 text-lg uppercase whitespace-nowrap font-medium text-center"
                >
                  เบอร์โทรศัพท์
                </th>
                <th
                  class="px-6 text-yellow-50 align-middle border border-solid border-blueGray-100 py-3 text-lg uppercase whitespace-nowrap font-medium text-center"
                >
                  ประเภท
                </th>
              </tr>
            </thead>

            <tbody>
              <tr
                @click="viewProfile(Customer.c_id)"
                class="cursor-pointer text-center body-table"
                v-for="(Customer, index) in CustomerList"
                v-bind:key="index"
              >
                <td
                  class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-base whitespace-nowrap p-4 "
                >
                  {{ Customer.c_id }}
                </td>
                <td
                  class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-base whitespace-nowrap p-4 "
                >
                  {{ Customer.c_name }}
                </td>
                <td
                  class="border-t-0 px-6 align-center border-l-0 border-r-0 text-base whitespace-nowrap p-4"
                >
                  {{ Customer.c_phone }}
                </td>
                <td
                  class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-base whitespace-nowrap p-4"
                >
                  {{ Customer.type }}
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
      CustomerList: {},
    };
  },
  methods: {
    async loadUsers() {
      try {
        let response = await axios.get("http://127.0.0.1:8000/api/customer");
        console.log(response);
        this.CustomerList = response.data;
        console.log(this.CustomerList);
      } catch (e) {
        console.error(e);
      }
    },
    viewProfile(id) {
      this.$router.push({ name: "CustomerInfo", params: { id: id } });
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
  background-color: #dcb9a4;
}
</style>
