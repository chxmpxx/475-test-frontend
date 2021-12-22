<template>
  <div class="bg-yellow-50 min-h-screen font-prompt">
    <div>
      <Navbar />
      <div>
        <div class="text-center py-16 ">
          <h2 class="text-6xl font-bold text-yellow-800">ลงทะเบียนพนักงาน</h2>
        </div>
        <div class="flex justify-center">
          <form class="w-1/2 max-w-4xl">
            <div class="flex flex-wrap -mx-3 mb-5 mt-4">
              <div class="w-full md:w-1/2 px-3 md:mb-0">
                <label
                  class="block tracking-wide text-gray-700 text-xl font-bold mb-2"
                >
                  ตำแหน่ง
                </label>
                <div class="relative">
                  <select
                    class="block appearance-none w-full border bg-gray-200 border-gray-200 text-gray-700 text-xl py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    v-model="form.job"
                    :class="errors.job ? 'border-red-600' : 'border-gray-200'"
                  >
                    <option value="ช่างฝัง">ช่างฝัง</option>
                    <option value="ช่างขึ้นตัวเรือน">ช่างขึ้นตัวเรือน</option>
                    <option value="ช่างขัด">ช่างขัด</option>
                    <option value="ช่างชุบ">ช่างชุบ</option>
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
                  วันที่รับเข้าทำงาน
                </label>
                <input
                  class="appearance-none block w-full  bg-gray-200 text-gray-700 text-xl border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  type="date"
                  v-model="form.start_date"
                  :class="
                    errors.start_date ? 'border-red-600' : 'border-gray-200'
                  "
                />
              </div>
              <div class="w-full md:w-3/4 px-3 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xl font-bold mb-2"
                >
                  ชื่อและนามสกุล
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 text-xl border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  type="text"
                  placeholder="ชื่อและนามสกุล"
                  v-model="form.name"
                  :class="
                    errors.name ? 'border-red-600 border-2' : 'border-gray-200'
                  "
                />
              </div>
              <div class="w-full md:w-1/4 px-3 md:mb-0">
                <label
                  class="block tracking-wide text-gray-700 text-xl font-bold mb-2"
                >
                  เพศ
                </label>
                <div class="relative">
                  <select
                    class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 text-xl py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    v-model="form.gender"
                    :class="
                      errors.gender ? 'border-red-600' : 'border-gray-200'
                    "
                  >
                    <option>ชาย</option>
                    <option>หญิง</option>
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
                  อายุ
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 text-xl border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  type="number"
                  placeholder="อายุ"
                  v-model="form.age"
                  :class="errors.age ? 'border-red-600' : 'border-gray-200'"
                />
              </div>
              <div class="w-full md:w-1/2 px-3 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xl font-bold mb-2"
                >
                  วันเกิด
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 text-xl border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  type="date"
                  v-model="form.birth_date"
                  :class="
                    errors.birth_date ? 'border-red-600' : 'border-gray-200'
                  "
                />
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
                  v-model="form.tel"
                  :class="errors.tel ? 'border-red-600' : 'border-gray-200'"
                />
              </div>
              <div class="w-full md:w-1/2 px-3 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xl font-bold mb-2"
                >
                  เงินเดือน
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 text-xl border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  type="number"
                  placeholder="เงินเดือน"
                  v-model="form.salary"
                  :class="errors.salary ? 'border-red-600' : 'border-gray-200'"
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
            v-on:click="addEm"
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
import Swal from "sweetalert2";
import Navbar from "@/components/Navbar.vue";
export default {
  data() {
    return {
      errors: {
        job: false,
        start_date: false,
        name: false,
        gender: false,
        age: false,
        birth_date: false,
        tel: false,
        salary: false,
        address: false,
      },
      form: {
        job: "ช่างฝัง",
        start_date: null,
        name: null,
        gender: "ชาย",
        age: null,
        birth_date: null,
        tel: null,
        salary: null,
        address: null,
      },
    };
  },
  components: {
    Navbar,
  },
  methods: {
    addEm() {
      if (
        !this.form.job ||
        !this.form.start_date ||
        !this.form.name ||
        !this.form.gender ||
        !this.form.age ||
        !this.form.birth_date ||
        !this.form.tel ||
        !this.form.salary ||
        !this.form.address
      ) {
        Swal.fire({
          title: "เกิดข้อผิดพลาด",
          text: "กรุณากรอกข้อมูลให้ครบถ้วน",
          icon: "error",
          confirmButtonColor: "#d33",
          confirmButtonText: "กลับ",
        });
        if (!this.form.job) {
          this.errors.job = true;
        }
        if (!this.form.start_date) {
          this.errors.start_date = true;
        }
        if (!this.form.name) {
          this.errors.name = true;
        }
        if (!this.form.gender) {
          this.errors.gender = true;
        }
        if (!this.form.age) {
          this.errors.age = true;
        }
        if (!this.form.birth_date) {
          this.errors.birth_date = true;
        }
        if (!this.form.tel) {
          this.errors.tel = true;
        }
        if (!this.form.salary) {
          this.errors.salary = true;
        }
        if (!this.form.address) {
          this.errors.address = true;
        }
      } else {
        Swal.fire({
          title: "ยืนยันการลงทะเบียนพนักงาน",
          text: "โปรดตรวจสอบข้อมูลให้เรียบร้อยก่อนทำรายการ",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "ยืนยัน",
          cancelButtonText: "ยกเลิก",
        }).then((result) => {
          if (result.isConfirmed) {
            try {
              console.log(this.form);
              let response = axios.post(
                "http://127.0.0.1:8000/api/employee-manager",
                this.form
              );
              console.log(response);
            } catch (e) {
              console.error(e);
            }
            Swal.fire({
              title: "ลงทะเบียนพนักงานสำเร็จ!",
              text: "กลับหน้าพนักงาน",
              icon: "success",
              confirmButtonColor: "#3085d6",
              confirmButtonText: "กลับ",
            }).then((result) => {
              if (result.isConfirmed) {
                this.$router.push("/employee");
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
