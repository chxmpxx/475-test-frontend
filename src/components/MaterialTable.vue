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
                  class="px-6 text-yellow-50 align-middle border border-solid border-blueGray-100 py-3 text-lg uppercase whitespace-nowrap font-medium text-center"
                >
                  ชนิดของวัตถุดิบ
                </th>
                <th
                  class="px-6 text-yellow-50 align-middle border border-solid border-blueGray-100 py-3 text-lg uppercase whitespace-nowrap font-medium text-center"
                >
                  กะรัต
                </th>
                <th
                  class="px-6 text-yellow-50 align-middle border border-solid border-blueGray-100 py-3 text-lg uppercase whitespace-nowrap font-medium text-center"
                >
                  สี
                </th>
                <th
                  class="px-6 text-yellow-50 align-middle border border-solid border-blueGray-100 py-3 text-lg uppercase whitespace-nowrap font-medium text-center"
                >
                  ปริมาณวัตถุดิบ
                </th>
              </tr>
            </thead>

            <tbody>
              <tr
                @click="alertDisplay(Material.total_amount, Material.m_id)"
                class="cursor-pointer text-center body-table"
                v-for="(Material, index) in MaterialList"
                v-bind:key="index"
              >
                <td
                  class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-base whitespace-nowrap p-4"
                >
                  {{ Material.m_type }}
                </td>
                <td
                  class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-base whitespace-nowrap p-4 "
                >
                  {{ Material.m_weight }}
                </td>
                <td
                  class="border-t-0 px-6 align-center border-l-0 border-r-0 text-base whitespace-nowrap p-4"
                >
                  {{ Material.color }}
                </td>
                <td
                  class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-base whitespace-nowrap p-4"
                >
                  {{ Material.total_amount }}
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
import Swal from "sweetalert2";
export default {
  data() {
    return {
      MaterialList: {},
      form: {
        id: "",
        total_amount: "",
      },
    };
  },
  methods: {
    async loadUsers() {
      try {
        let response = await axios.get("http://127.0.0.1:8000/api/material");
        console.log(response);
        this.MaterialList = response.data;
        console.log(this.MaterialList);
      } catch (e) {
        console.error(e);
      }
    },
    async created() {
      await this.loadUsers();
    },
    alertDisplay(amount, mid) {
      console.log(amount);
      console.log(mid);
      Swal.fire({
        title: "เพิ่มปริมาณวัตถุดิบ",
        text: "กรุณากรอกปริมาณวัตถุดิบที่ต้องการเพิ่ม",
        input: "text",
        icon: "info",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "ยืนยัน",
        cancelButtonText: "ยกเลิก",
      }).then((result) => {
        if (result.isConfirmed) {
          if (result.value > 0) {
            amount += parseInt(result.value);
            this.form.total_amount = amount;
            this.form.id = mid;
            console.log(this.form.total_amount);
            let response = axios.put(
              `http://127.0.0.1:8000/api/material/${mid}`,
              this.form,
              this.form.id
            );
            Swal.fire({
              title: "เพิ่มปริมาณวัตถุดิบสำเร็จ!",
              icon: "success",
              confirmButtonColor: "#3085d6",
              confirmButtonText: "ยืนยัน",
            }).then((result) => {
              if (result.isConfirmed) {
                this.$router.go();
              }
            });
          } else {
            Swal.fire({
              title: "เกิดข้อผิดพลาด",
              text: "ตัวเลขไม่ถูกต้อง",
              icon: "error",
              confirmButtonColor: "#d33",
              confirmButtonText: "กลับ",
            });
          }
        }
      });
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
