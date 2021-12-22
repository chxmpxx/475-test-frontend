<template>
  <div>
    <!-- <div v-if="status1" class="py-3 text-center text-black">
      <button
        v-on:click="status01"
        class="font-normal text-2xl p-2 w-68 bg-yellow-700 text-white hover:bg-yellow-800 transition duration-250"
      >
        อัปเดตสถานะการชำระเงิน
      </button>
    </div>

    <div v-if="status5" class="mb-3">
      <h2 class="font-bold text-4xl">
        <div>
          <label class="text-base">อัปโหลดรูปใบเสร็จเก็บเงิน: </label>
          <input
            class="text-sm"
            type="file"
            name="bill"
            accept="image/*"
            @change="handleChange"
            :class="errors.bill_image ? 'border-red-600' : 'border-gray-200'"
          />
        </div>
      </h2>
    </div>

    <div v-if="status6">
      <img
        :src="getImagePath(bill_image)"
        height="200px"
        width="350px"
        class="ml-48 mb-3"
      />
    </div>

    <div v-if="status2" class="py-3 text-center text-black">
      <button
        v-on:click="status02"
        type="button"
        class="font-normal text-2xl p-2 w-44 bg-yellow-700 text-white hover:bg-yellow-800 transition duration-250"
      >
        อัปเดต
      </button>
    </div> -->
  </div>
</template>

<script>
// import Navbar from "@/components/Navbar.vue";
// import Swal from "sweetalert2";
// import axios from "axios";
// export default {
//   props: {
//     o_info: {},
//   },
//   data() {
//     return {
//       status1: true, 
//       status2: false,
//       status5: false, 
//       status6: false,

//       bill_image: null,
//       errors: {
//         bill_image: "",
//       },
//     };
//   },

//   components: {
//     Navbar,
//   },

//   async created() {
//     if (this.o_info.status == "ชำระเงินเรียบร้อย") {
//       this.bill_image = this.o_info.bill_image;
//       this.status1 = false;
//       this.status6 = true;
//     }
//   },

//   methods: {
//     getImagePath(image) {
//       return "http://127.0.0.1:8000" + image;
//     },

//     handleChange(event) {
//       this.bill_image = event.target.files[0];
//     },

//     async status01() {
//       this.status1 = false;
//       this.status2 = true;
//       this.status5 = true;
//     },

//     status02() {
//       if (!this.bill_image) {
//         Swal.fire({
//           title: "เกิดข้อผิดพลาด",
//           text: "กรุณาเพิ่มรูปใบเสร็จเก็บเงิน",
//           icon: "error",
//           confirmButtonColor: "#d33",
//           confirmButtonText: "กลับ",
//         });
//         if (!this.bill_image) {
//           this.errors.this.bill_image = true;
//         }
//       } else {
//         let payload = new FormData();
//         payload.append("bill_image", this.bill_image);

//         Swal.fire({
//           title: "ยืนยันการอัปเดตสถานะชำระเงิน",
//           text: "โปรดตรวจสอบข้อมูลให้เรียบร้อยก่อนทำรายการ",
//           icon: "warning",
//           showCancelButton: true,
//           confirmButtonColor: "#3085d6",
//           cancelButtonColor: "#d33",
//           confirmButtonText: "ยืนยัน",
//           cancelButtonText: "ยกเลิก",
//         }).then(async (result) => {
//           if (result.isConfirmed) {
//             try {
//               console.log(this.o_info.o_id);
//               console.log(payload.getClientOriginalName);
//               await axios.put(
//                 `http://127.0.0.1:8000/api/order/${this.o_info.o_id}`,
//                 payload,
//                 this.o_info.o_id
//               );
//             } catch (e) {
//               console.error(e);
//             }
//             Swal.fire({
//               title: "อัปเดตสถานะชำระเงินสำเร็จ!",
//               text: "กลับหน้าคำสั่งซื้อ",
//               icon: "success",
//               confirmButtonColor: "#3085d6",
//               confirmButtonText: "กลับ",
//             }).then((result) => {
//               this.status2 = false;
//               if (result.isConfirmed) {
//                 this.$router.go();
//               }
//             });
//           } else {
//             this.$router.go();
//           }
//         });
//         this.status1 = false;
//         this.status5 = true;
//       }
//     },
//   },
// };
</script>

<style scoped lang="scss"></style>
