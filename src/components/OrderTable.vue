<template>
  <section class="py-1 bg-blueGray-50">
    <div class="w-full xl:w-3/4 mb-12 xl:mb-0 px-4 mx-auto">
      <div
        class="relative flex flex-col min-w-0 break-words w-full mb-6 rounded "
      >
        <div class="block w-full overflow-x-auto">
          <table
            class="items-center bg-transparent w-full border-collapse cursor"
          >
            <thead>
              <tr class="bg-yellow-700">
                <th
                  class="px-6 bg-blueGray-50 text-yellow-50 align-middle border border-solid border-blueGray-100 py-3 text-lg uppercase whitespace-nowrap font-medium text-center"
                >
                  รหัสคำสั่งซื้อ
                </th>
                <th
                  class="px-6 bg-blueGray-50 text-yellow-50 align-middle border border-solid border-blueGray-100 py-3 text-lg uppercase whitespace-nowrap font-medium text-center"
                >
                  ชื่อลูกค้า
                </th>
                <th
                  class="px-6 bg-blueGray-50 text-yellow-50 align-middle border border-solid border-blueGray-100 py-3 text-lg uppercase whitespace-nowrap font-medium text-center"
                >
                  ประเภท
                </th>
                <th
                  class="px-6 bg-blueGray-50 text-yellow-50 align-middle border border-solid border-blueGray-100 py-3 text-lg uppercase whitespace-nowrap font-medium text-center"
                >
                  อัญมณี
                </th>
                <th
                  class="px-6 bg-blueGray-50 text-yellow-50 align-middle border border-solid border-blueGray-100 py-3 text-lg uppercase whitespace-nowrap font-medium text-center"
                >
                  จำนวน
                </th>
                <th
                  class="px-6 bg-blueGray-50 text-yellow-50 align-middle border border-solid border-blueGray-100 py-3 text-lg uppercase whitespace-nowrap font-medium text-center"
                >
                  วันส่งมอบ
                </th>
                <th
                  class="px-6 bg-blueGray-50 text-yellow-50 align-middle border border-solid border-blueGray-100 py-3 text-lg uppercase whitespace-nowrap font-medium text-center"
                >
                  สถานะ
                </th>
              </tr>
            </thead>

            <tbody>
              <tr
                @click="viewOrder(info.jewelry_id)"
                class="cursor-pointer hover:bg-yellow-200 text-center body-table"
                v-for="(info, index) in List"
                v-bind:key="index"
              >
                <td
                  class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-base whitespace-nowrap p-4 "
                >
                  {{ info.o_id }}
                </td>
                <td
                  class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-base whitespace-nowrap p-4 "
                >
                  {{ info.c_name }}
                </td>
                <td
                  class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-base whitespace-nowrap p-4 "
                >
                  {{ info.jewelry_type }} {{ info.gem_size }} มิลลิเมตร
                </td>
                <td
                  class="border-t-0 px-6 align-center border-l-0 border-r-0 text-base whitespace-nowrap p-4"
                >
                  {{ info.gem_name }} {{ info.gem_weight }} กะรัต
                </td>
                <td
                  class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-base whitespace-nowrap p-4"
                >
                  {{ info.gem_pieces }} ชิ้น
                </td>
                <td
                  class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-base whitespace-nowrap p-4"
                >
                  {{ info.deadline }}
                </td>
                <td
                  class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-base whitespace-nowrap p-4"
                >
                  {{ info.status }}
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
      OrderList: [],
      JewelryList: [],
      List: [],
    };
  },
  methods: {
    async loadData() {
      try {
        let response = await axios.get("http://127.0.0.1:8000/api/order");
        let response2 = await axios.get(
          "http://127.0.0.1:8000/api/jewelry-info"
        );
        let response3 = await axios.get("http://127.0.0.1:8000/api/customer");
        this.OrderList = response.data;
        this.JewelryList = response2.data;
        this.CustomerList = response3.data;
        console.log(this.OrderList);

        for (var i = 0; i < this.JewelryList.length; i++) {
          for (var j = 0; j < this.OrderList.length; j++) {
            for (var k = 0; k < this.CustomerList.length; k++) {
              if (this.JewelryList[i].o_id == this.OrderList[j].o_id) {
                if (this.OrderList[j].c_id == this.CustomerList[k].c_id)
                  this.List.push({
                    o_id: this.JewelryList[i].o_id,
                    c_id: this.CustomerList[k].c_id,
                    jewelry_id: this.JewelryList[i].id,

                    c_name: this.CustomerList[k].c_name,
                    jewelry_type: this.JewelryList[i].jewelry_type,
                    gem_size: this.JewelryList[i].gem_size,
                    gem_name: this.JewelryList[i].gem_name,
                    gem_weight: this.JewelryList[i].gem_weight,
                    gem_pieces: this.JewelryList[i].gem_pieces,
                    deadline: this.OrderList[j].deadline_date,
                    status: this.OrderList[j].status,
                  });
              }
            }
          }
        }
        console.log(1);
        console.log(this.List);
      } catch (e) {
        console.error(e);
      }
    },
    viewOrder(id) {
      this.$router.push({ name: "OrderInfo", params: { id: id } });
    },
  },

  async created() {
    await this.loadData();
  },
};
</script>

<style scoped lang="scss">
.body-table {
  background-color: #ebcbb3;
}

tr:nth-child(even) {
  background-color: #dcb9a4;
}
</style>
