<template>
  <div class="bg-yellow-50 min-h-screen font-prompt">
    <div>
      <Navbar />
      <div>
        <div class="text-center py-16 ">
          <h2 class="text-6xl font-bold text-yellow-800">
            เพิ่มรายการเบิก-คืนวัตถุดิบ
          </h2>
        </div>
        <div class="flex justify-center">
          <form class="w-1/2 max-w-4xl">
            <div class="flex flex-wrap -mx-3 mb-5 mt-4">
              <div class="w-full px-3 md:mb-0">
                <label
                  class="block tracking-wide text-gray-700 text-xl font-bold mb-2"
                >
                  ชื่อและนามสกุลของพนักงาน
                </label>
                <div class="relative pb-4">
                  <select
                    v-model="form_other.e_name"
                    :class="
                      errors_other.e_name ? 'border-red-600' : 'border-gray-200'
                    "
                    class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 text-xl py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  >
                    <option disabled>เฉพาะขึ้นตัวเรือนเท่านั้น</option>
                    <option
                      v-for="(Employee, index) in selectedEmployee"
                      v-bind:key="index"
                      >{{ Employee.id }} {{ Employee.name }}</option
                    >
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
                  class="block tracking-wide text-gray-700 text-xl font-bold mb-2"
                >
                  รหัสคำสั่งซื้อ
                </label>
                <!-- <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 text-xl border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  type="text"
                  placeholder="รหัสคำสั่งซื้อ"
                  v-model="form.o_id"
                  :class="errors.o_id ? 'border-red-600' : 'border-gray-200'"
                /> -->
                <div class="relative pb-4">
                  <select
                    v-model="form.o_id"
                    :class="
                      errors_other.o_id ? 'border-red-600' : 'border-gray-200'
                    "
                    class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 text-xl py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  >
                    <option
                      v-for="(Order, index) in order"
                      v-bind:key="index"
                      >{{ Order.o_id }}</option
                    >
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
                  class="block tracking-wide text-gray-700 text-xl font-bold mb-2"
                >
                  ชนิดของวัตถุดิบ
                </label>
                <div class="relative">
                  <select
                    class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 text-xl py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    v-model="form.m_id"
                    :class="errors.m_id ? 'border-red-600' : 'border-gray-200'"
                  >
                    <option value="1">ทอง 14K สีเหลือง</option>
                    <option value="2">ทอง 14K สีโรสโกลด์</option>
                    <option value="3">ทอง 14K สีขาว</option>
                    <option value="4">ทอง 18K สีเหลือง</option>
                    <option value="5">ทอง 18K สีโรสโกลด์</option>
                    <option value="6">ทอง 18K สีขาว</option>
                    <option value="7">เงิน</option>
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
                  วันที่ส่งมอบวัตถุดิบ
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 text-xl border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  type="date"
                  v-model="form.taken_date"
                  :class="
                    errors.taken_date ? 'border-red-600' : 'border-gray-200'
                  "
                />
              </div>
              <!-- <div class="w-full md:w-1/2 px-3 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xl font-bold mb-2"
                >
                  วันที่ได้รับวัตถุดิบคืน
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 text-xl border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  type="date"
                  v-model="form.return_date"
                  :class="
                    errors.return_date ? 'border-red-600' : 'border-gray-200'
                  "
                />
              </div> -->
              <div class="w-full md:w-1/2 px-3 md:mb-0">
                <label
                  class="block tracking-wide text-gray-700 text-xl font-bold mb-2"
                >
                  ปริมาณของวัตถุดิบที่ส่งมอบ
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 text-xl border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  type="number"
                  placeholder="ปริมาณของวัตถุดิบที่ส่งมอบ"
                  v-model="form.before_amount"
                  :class="
                    errors.before_amount ? 'border-red-600' : 'border-gray-200'
                  "
                />
              </div>
              <!-- <div class="w-full md:w-1/2 px-3 md:mb-0">
                <label
                  class="block tracking-wide text-gray-700 text-xl font-bold mb-2"
                >
                  ปริมาณของวัตถุดิบที่ได้รับ
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 text-xl border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  type="text"
                  placeholder="ปริมาณของวัตถุดิบที่ได้รับ"
                  v-model="form.after_amount"
                  :class="
                    errors.after_amount ? 'border-red-600' : 'border-gray-200'
                  "
                />
              </div> -->
            </div>
          </form>
        </div>
        <div class="py-3 text-center text-black">
          <button
            v-on:click="addMaterialList()"
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
import Navbar from "@/components/Navbar.vue";
import Swal from "sweetalert2";
import axios from "axios";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
export default {
  data() {
    return {
      employee: {},
      selectedEmployee: [],
      order: [],
      allorder: {},
      material: {},
      checkAmount: "",
      errors_other: {
        e_name: false,
        m_type: false,
        o_id: false,
      },
      form_other: {
        e_name: null,
        m_type: null,
      },
      errors: {
        e_id: false,
        o_id: false,
        m_id: false,
        taken_date: false,
        return_date: false,
        before_amount: false,
        // after_amount: false,
      },
      form: {
        e_id: null,
        o_id: null,
        m_id: null,
        taken_date: null,
        return_date: null,
        before_amount: null,
        // after_amount: null,
      },
      materialForm: {
        total_amount: "",
      },
    };
  },
  components: {
    Navbar,
  },

  async created() {
    await this.loaddata();
  },
  methods: {
    async loaddata() {
      try {
        let response = await axios.get(
          "http://127.0.0.1:8000/api/employee-manager"
        );
        this.employee = response.data;
        console.log(this.employee);
        this.filter();
        console.log(this.selectedEmployee);
        let response2 = await axios.get("http://127.0.0.1:8000/api/order");
        this.allorder = response2.data;
        console.log(this.allorder);
        this.orderFilter();
        console.log(this.order);
        let response3 = await axios.get("http://127.0.0.1:8000/api/material");
        this.material = response3.data;
        console.log(this.material);
      } catch (e) {
        console.error(e);
      }
    },
    async filter() {
      for (var i = 0; i < this.employee.length; i++) {
        if (this.employee[i].job == "ช่างขึ้นตัวเรือน") {
          this.selectedEmployee.push({
            id: this.employee[i].id,
            name: this.employee[i].name,
          });
        }
      }
    },
    async orderFilter() {
      for (var i = 0; i < this.allorder.length; i++) {
        if (this.allorder[i].status == "ขึ้นตัวเรือน") {
          this.order.push({
            o_id: this.allorder[i].o_id,
          });
        }
      }
    },

    async getMatAmount() {
      for (var i = 0; i < this.material.length; i++) {
        if (this.form.m_id == this.material[i].m_id) {
          this.checkAmount = this.material[i].total_amount;
          this.materialForm.total_amount = this.material[i].total_amount;
          console.log(this.materialForm.total_amount);
        }
      }
    },
    async addMaterialList() {
      this.getMatAmount();
      if (this.form.before_amount > this.checkAmount) {
        Swal.fire({
          title: "เกิดข้อผิดพลาด",
          text: "ปริมาณของวัตถุดิบที่ส่งมอบไม่ถูกต้อง",
          icon: "error",
          confirmButtonColor: "#d33",
          confirmButtonText: "กลับ",
        });
      } else {
        if (
          !this.form_other.e_name ||
          !this.form.o_id ||
          !this.form.m_id ||
          !this.form.taken_date ||
          // !this.form.return_date ||
          !this.form.before_amount
          // !this.form.after_amount
        ) {
          Swal.fire({
            title: "เกิดข้อผิดพลาด",
            text: "กรุณากรอกข้อมูลให้ครบถ้วน",
            icon: "error",
            confirmButtonColor: "#d33",
            confirmButtonText: "กลับ",
          });
          if (!this.form_other.e_name) {
            this.errors_other.e_name = true;
          }
          if (!this.form.o_id) {
            this.errors_other.o_id = true;
          }
          if (!this.form.m_id) {
            this.errors.m_id = true;
          }
          if (!this.form.taken_date) {
            this.errors.taken_date = true;
          }
          // if (!this.form.return_date) {
          //   this.errors.return_date = true;
          // }
          if (!this.form.before_amount) {
            this.errors.before_amount = true;
          }
          // if (!this.form.after_amount) {
          //   this.errors.after_amount = true;
          // }
        } else {
          this.E_ID_NAME = this.form_other.e_name.split(" ");
          this.form.e_id = this.E_ID_NAME[0];
          console.log(this.form);
          Swal.fire({
            title: "ยืนยันการเพิ่มรายการเบิกวัตถุดิบ",
            text: "โปรดตรวจสอบให้เรียบร้อยก่อนทำการเพิ่มรายการเบิกวัตถุดิบ",
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
                  "http://127.0.0.1:8000/api/material-list",
                  this.form
                );
                console.log(response);
                this.materialForm.total_amount -= this.form.before_amount;
                console.log(this.materialForm.total_amount);
                let response2 = axios.put(
                  `http://127.0.0.1:8000/api/material/${this.form.m_id}`,
                  this.materialForm,
                  this.form.m_id
                );
                console.log(response2);
              } catch (e) {
                console.error(e);
              }
              Swal.fire({
                title: "เพิ่มรายการเบิกวัตถุดิบสำเร็จ!",
                text: "กลับหน้ารายการเบิกวัตถุดิบ",
                icon: "success",
                confirmButtonColor: "#3085d6",
                confirmButtonText: "กลับ",
              }).then((result) => {
                if (result.isConfirmed) {
                  this.$router.push("/material-list");
                }
              });
            } else {
              this.$router.go();
            }
          });
        }
      }
    },
    //   alertDisplay() {
    // Swal.fire({
    //   title: "ยืนยันการเพิ่มรายการเบิก-คืนวัตถุดิบ",
    //   text: "โปรดตรวจสอบให้เรียบร้อยก่อนทำการเพิ่มรายการเบิก-คืนวัตถุดิบ",
    //   icon: "warning",
    //   showCancelButton: true,
    //   confirmButtonColor: "#3085d6",
    //   cancelButtonColor: "#d33",
    //   confirmButtonText: "ยืนยัน",
    //   cancelButtonText: "ยกเลิก",
    // }).then((result) => {
    //   if (result.isConfirmed) {
    //     Swal.fire({
    //       title: "เพิ่มรายการเบิก-คืนวัตถุดิบสำเร็จ!",
    //       text: "กลับหน้ารายการเบิก-คืนวัตถุดิบหรือทำรายการต่อ",
    //       icon: "success",
    //       showCancelButton: true,
    //       confirmButtonColor: "#3085d6",
    //       cancelButtonColor: "#7367f0",
    //       confirmButtonText: "กลับหน้ารายการเบิก-คืนวัตถุดิบ",
    //       cancelButtonText: "ทำรายการต่อ",
    //     }).then((result) => {
    //       if (result.isConfirmed) {
    //         this.$router.push("/material-list");
    //       } else {
    //         this.$router.go();
    //       }
    //     });
    //   }
    // });
    // },
  },
};
</script>

<style scoped lang="scss"></style>
