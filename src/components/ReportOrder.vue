<template>
  <section class="py-1 bg-blueGray-50">
    <div class="w-full xl:w-3/4 mb-12 xl:mb-0 px-4 mx-auto">
      <div
        class="relative flex flex-col min-w-0 break-words w-full mb-6 rounded "
      >
        <div class="block w-full overflow-x-auto items-center">
          <table
            class="items-center bg-transparent w-full border-collapse cursor table-fixed h-4/6"
          >
            <thead>
              <tr class="bg-yellow-700 min-w-0 ">
                <th
                  class="px-6 bg-blueGray-50 text-yellow-50 align-middle border border-solid border-blueGray-100 py-3 text-lg uppercase whitespace-nowrap font-medium text-center"
                >
                  คำสั่งซื้อ
                </th>
                <th
                  class="px-6 bg-blueGray-50 text-yellow-50 align-middle border border-solid border-blueGray-100 py-3 text-lg uppercase whitespace-nowrap font-medium text-center"
                >
                  เครื่องประดับ
                </th>
                <th
                  class="px-6 bg-blueGray-50 text-yellow-50 align-middle border border-solid border-blueGray-100 py-3 text-lg uppercase whitespace-nowrap font-medium text-center"
                >
                  วัตถุดิบ
                </th>
                <th
                  class="px-6 bg-blueGray-50 text-yellow-50 align-middle border border-solid border-blueGray-100 py-3 text-lg uppercase whitespace-nowrap font-medium text-center"
                >
                  ปริมาณที่ใช้
                </th>
                <th
                  class="px-6 bg-blueGray-50 text-yellow-50 align-middle border border-solid border-blueGray-100 py-3 text-lg uppercase whitespace-nowrap font-medium text-center"
                >
                  วันที่ส่งมอบ
                </th>
              </tr>
            </thead>

            <tbody>
              <tr
                v-for="(show, index) in form"
                v-bind:key="index"
                class=" text-center body-table"
              >
                <td
                  class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-base font-medium whitespace-nowrap p-4 "
                >
                  {{ show.o_id }}
                </td>
                <td
                  class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-base font-medium whitespace-nowrap p-4 "
                >
                  {{ show.jewel }}
                </td>
                <td
                  class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-base font-medium whitespace-nowrap p-4 "
                >
                  {{ show.material }}
                </td>
                <td
                  class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-base font-medium whitespace-nowrap p-4"
                >
                  {{ show.usage }}
                </td>
                <td
                  class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-base font-medium whitespace-nowrap p-4"
                >
                  {{ show.deadline }}
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
      mat: {},
      order: {},
      jewelry: {},
      form: [],
      subForm: {
        o_id: "",
        jewel: "",
        material: "",
        usage: "",
        deadline: "",
      },
    };
  },
  methods: {
    async loadUsers() {
      try {
        let response = await axios.get(
          "http://127.0.0.1:8000/api/material-list"
        );
        this.mat = response.data;
        console.log("order");
        console.log(this.mat);
        let response2 = await axios.get("http://127.0.0.1:8000/api/order");
        this.order = response2.data;
        console.log(this.order);
        let response3 = await axios.get(
          "http://127.0.0.1:8000/api/jewelry-info"
        );
        this.jewelry = response3.data;
        console.log(this.jewelry);
        this.filter();
      } catch (e) {
        console.error(e);
      }
    },

    async filter() {
      for (let i = 0; i < this.order.length; i++) {
        if (this.order[i].status == "เสร็จสิ้นการชุบเครื่องประดับ") {
          this.subForm.o_id = this.order[i].o_id;
          this.subForm.deadline = this.order[i].deadline_date;
          this.subForm.material = this.order[i].metal;
          for (let j = 0; j < this.jewelry.length; j++) {
            if (this.order[i].o_id == this.jewelry[j].o_id) {
              this.subForm.jewel = this.jewelry[i].jewelry_type;
            }
          }
          for (let j = 0; j < this.mat.length; j++) {
            if (this.order[i].o_id == this.mat[j].o_id) {
              this.subForm.usage =
                this.mat[j].before_amount - this.mat[j].after_amount;
            }
          }
          this.form.push({
            o_id: this.subForm.o_id,
            jewel: this.subForm.jewel,
            material: this.subForm.material,
            usage: this.subForm.usage,
            deadline: this.subForm.deadline,
          });
        }
      }
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

tr:nth-child(even) {
  background-color: #d4ac9a;
}
</style>
