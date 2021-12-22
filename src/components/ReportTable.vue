<template>
  <section class="py-1 bg-blueGray-50">
    <div class="w-full xl:w-3/4 mb-12 xl:mb-0 px-4 mx-auto">
      <div
        class="relative flex flex-col min-w-0 break-words w-full mb-6 rounded "
      >
        <div class="block w-full overflow-x-auto items-center">
          <table
            class="items-center bg-transparent w-full border-collapse cursor table-fixed"
          >
            <thead>
              <tr class="bg-yellow-700 min-w-0 ">
                <th
                  class="px-6 bg-blueGray-50 text-yellow-50 align-middle border border-solid border-blueGray-100 py-3 text-lg uppercase whitespace-nowrap font-medium text-center"
                >
                  ทอง 14K สีเหลือง
                </th>
                <th
                  class="px-6 bg-blueGray-50 text-yellow-50 align-middle border border-solid border-blueGray-100 py-3 text-lg uppercase whitespace-nowrap font-medium text-center"
                >
                  ทอง 14K สีโรสโกลด์
                </th>
                <th
                  class="px-6 bg-blueGray-50 text-yellow-50 align-middle border border-solid border-blueGray-100 py-3 text-lg uppercase whitespace-nowrap font-medium text-center"
                >
                  ทอง 14K สีขาว
                </th>
                <th
                  class="px-6 bg-blueGray-50 text-yellow-50 align-middle border border-solid border-blueGray-100 py-3 text-lg uppercase whitespace-nowrap font-medium text-center"
                >
                  ทอง 18K สีเหลือง
                </th>
                <th
                  class="px-6 bg-blueGray-50 text-yellow-50 align-middle border border-solid border-blueGray-100 py-3 text-lg uppercase whitespace-nowrap font-medium text-center"
                >
                  ทอง 18K สีโรสโกลด์
                </th>
                <th
                  class="px-6 bg-blueGray-50 text-yellow-50 align-middle border border-solid border-blueGray-100 py-3 text-lg uppercase whitespace-nowrap font-medium text-center"
                >
                  ทอง 18K สีขาว
                </th>
                <th
                  class="px-6 bg-blueGray-50 text-yellow-50 align-middle border border-solid border-blueGray-100 py-3 text-lg uppercase whitespace-nowrap font-medium text-center"
                >
                  เงิน
                </th>
              </tr>
            </thead>

            <tbody>
              <tr class=" text-center body-table">
                <td
                  class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-base font-medium whitespace-nowrap p-4 "
                >
                  {{ Sum.yellow14k }}
                </td>
                <td
                  class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-base font-medium whitespace-nowrap p-4 "
                >
                  {{ Sum.roseGold14k }}
                </td>
                <td
                  class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-base font-medium whitespace-nowrap p-4"
                >
                  {{ Sum.white14k }}
                </td>
                <td
                  class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-base font-medium whitespace-nowrap p-4"
                >
                  {{ Sum.yellow18k }}
                </td>
                <td
                  class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-base font-medium whitespace-nowrap p-4"
                >
                  {{ Sum.roseGold18k }}
                </td>
                <td
                  class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-base font-medium whitespace-nowrap p-4"
                >
                  {{ Sum.white18k }}
                </td>
                <td
                  class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-base font-medium whitespace-nowrap p-4"
                >
                  {{ Sum.silver }}
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
      Sum: {
        yellow14k: 0,
        roseGold14k: 0,
        white14k: 0,
        yellow18k: 0,
        roseGold18k: 0,
        white18k: 0,
        silver: 0,
      },
      mat: {},
      order: {},
    };
  },
  methods: {
    async loadUsers() {
      try {
        let response = await axios.get(
          "http://127.0.0.1:8000/api/material-list"
        );
        this.mat = response.data;
        let response2 = await axios.get("http://127.0.0.1:8000/api/order");
        this.order = response2.data;
        this.sumMat();
      } catch (e) {
        console.error(e);
      }
    },
    async sumMat() {
      for (let j = 0; j < this.order.length; j++) {
        if (this.order[j].status == "เสร็จสิ้นการชุบเครื่องประดับ") {
          for (let i = 0; i < this.mat.length; i++) {
            if (this.mat[i].o_id == this.order[j].o_id) {
              if (this.mat[i].m_id == 1) {
                this.Sum.yellow14k += parseInt(
                  this.mat[i].before_amount - parseInt(this.mat[i].after_amount)
                );
              } else if (this.mat[i].m_id == 2) {
                this.Sum.roseGold14k += parseInt(
                  this.mat[i].before_amount - parseInt(this.mat[i].after_amount)
                );
              } else if (this.mat[i].m_id == 3) {
                this.Sum.white14k += parseInt(
                  this.mat[i].before_amount - parseInt(this.mat[i].after_amount)
                );
              } else if (this.mat[i].m_id == 4) {
                console.log(parseInt(this.Sum.yellow18k));
                this.Sum.yellow18k += parseInt(
                  this.mat[i].before_amount - parseInt(this.mat[i].after_amount)
                );
              } else if (this.mat[i].m_id == 5) {
                this.Sum.roseGold18k += parseInt(
                  this.mat[i].before_amount - parseInt(this.mat[i].after_amount)
                );
              } else if (this.mat[i].m_id == 6) {
                this.Sum.white18k += parseInt(
                  this.mat[i].before_amount - parseInt(this.mat[i].after_amount)
                );
              } else if (this.mat[i].m_id == 7) {
                this.Sum.silver += parseInt(
                  this.mat[i].before_amount - parseInt(this.mat[i].after_amount)
                );
              }
            }
          }
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
