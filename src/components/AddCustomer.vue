<template>
  <div class="bg-yellow-50 min-h-screen font-prompt">
    <div>
      <Navbar />
      <div>
        <div class="text-center py-16 ">
          <h2 class="text-6xl font-bold text-yellow-800">ลงทะเบียนลูกค้า</h2>
        </div>
        <div class="flex justify-center">
          <form class="w-1/2 max-w-4xl">
            <div class="flex flex-wrap -mx-3 mb-5 mt-4">
              <div class="w-full px-3 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xl font-bold mb-2"
                >
                  ชื่อและนามสกุล
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 text-xl border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  type="text"
                  placeholder="ชื่อและนามสกุล"
                  v-model="form.c_name"
                  :class="
                    errors.c_name
                      ? 'border-red-600 border-2'
                      : 'border-gray-200'
                  "
                />
              </div>
              <div class="w-full md:w-1/2 px-3 md:mb-0">
                <label
                  class="block tracking-wide text-gray-700 text-xl font-bold mb-2"
                >
                  ประเภท
                </label>
                <div class="relative">
                  <select
                    class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 text-xl py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    v-model="form.type"
                    :class="errors.type ? 'border-red-600' : 'border-gray-200'"
                  >
                    <option value="ลูกค้าทั่วไป">ลูกค้าทั่วไป</option>
                    <option value="บริษัท">บริษัท</option>
                  </select>
                  <div
                    class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
                  >
                    <svg
                      class="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div class="w-full md:w-1/2 px-3 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xl font-bold mb-2"
                >
                  เบอร์โทรศัพท์
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 text-xl border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  type="text"
                  placeholder="เบอร์โทรศัพท์"
                  v-model="form.c_phone"
                  :class="errors.c_phone ? 'border-red-600' : 'border-gray-200'"
                />
              </div>
              <div class="w-full px-3 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xl font-bold mb-2"
                >
                  ที่อยู่
                </label>
                <textarea
                  class="appearance-none block w-full bg-gray-200 text-gray-700 text-xl border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  placeholder="ที่อยู่"
                  rows="3"
                  v-model="form.address"
                  :class="errors.address ? 'border-red-600' : 'border-gray-200'"
                />
              </div>
            </div>
          </form>
        </div>
        <div class="py-3 text-center text-black">
          <button
            v-on:click="addCustomer"
            class="font-normal text-2xl p-2 w-44 bg-yellow-700 text-white hover:bg-yellow-800 transition duration-250"
          >
            บันทึกข้อมูล
          </button>
        </div>
        <br />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Navbar from "@/components/Navbar.vue";
import Swal from "sweetalert2";
export default {
  data() {
    return {
      errors: {
        c_name: false,
        type: false,
        c_phone: false,
        address: false,
      },
      form: {
        c_name: null,
        type: "ลูกค้าทั่วไป",
        c_phone: null,
        address: null,
      },
    };
  },
  components: {
    Navbar,
  },
  methods: {
    addCustomer() {
      if (
        !this.form.c_name ||
        !this.form.type ||
        !this.form.c_phone ||
        !this.form.address
      ) {
        Swal.fire({
          title: "เกิดข้อผิดพลาด",
          text: "กรุณากรอกข้อมูลให้ครบถ้วน",
          icon: "error",
          confirmButtonColor: "#d33",
          confirmButtonText: "กลับ",
        });
        if (!this.form.c_name) {
          this.errors.c_name = true;
        }
        if (!this.form.type) {
          this.errors.type = true;
        }
        if (!this.form.c_phone) {
          this.errors.c_phone = true;
        }
        if (!this.form.address) {
          this.errors.address = true;
        }
      } else {
        Swal.fire({
          title: "ยืนยันการลงทะเบียนลูกค้า",
          text: "โปรดตรวจสอบให้เรียบร้อยก่อนทำการลงทะเบียนลูกค้า",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "ยืนยัน",
          cancelButtonText: "ยกเลิก",
        }).then((result) => {
          if (result.isConfirmed) {
            console.log(this.form);
            try {
              let response = axios.post(
                "http://127.0.0.1:8000/api/customer",
                this.form
              );
              console.log(response);
            } catch (e) {
              console.error(e);
            }
            Swal.fire({
              title: "ลงทะเบียนลูกค้าสำเร็จ!",
              text: "กลับหน้ารายชื่อลูกค้า",
              icon: "success",
              confirmButtonColor: "#3085d6",
              confirmButtonText: "กลับ",
            }).then((result) => {
              if (result.isConfirmed) {
                this.$router.push("/customer");
              }
            });
          } else {
            this.$router.go();
          }
        });
      }
    },
  },
};
</script>

<style scoped lang="scss"></style>
