<template>
  <div>
    <div v-if="status1" class="py-3 text-center text-black">
      <button
        v-on:click="status01"
        class="font-normal text-2xl p-2 w-68 bg-yellow-700 text-white hover:bg-yellow-800 transition duration-250"
      >
        แจกงานฝังอัญมณี
      </button>
    </div>

    <div v-if="status5" class="flex flex-wrap -mx-3 mb-10 mt-4">
      <div class="w-full md:w-2/4 px-3 md:mb-0">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xl font-bold mb-2"
        >
          ชื่อพนักงานฝังอัญมณี
        </label>
        <input
          v-if="status0"
          class="mb-4 appearance-none block w-full bg-gray-200 text-gray-700 text-xl border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          type="text"
          disabled
          v-bind:value="e_id_name"
        />
        <div v-if="!status0" class="relative pb-4">
          <select
            v-model="e_id_name"
            :disabled="disabled == 1"
            :class="errors.e_id_name ? 'border-red-600' : 'border-gray-200'"
            class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 text-xl py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          >
            <option disabled>เฉพาะฝังอัญมณีเท่านั้น</option>
            <option
              v-for="(Employee, index) in selectedEmployee"
              v-bind:key="index"
              >{{ Employee.id }} {{ Employee.name }}
            </option>
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

      <div class="w-full md:w-1/4 px-3 mb-6 md:mb-0">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xl font-bold mb-2"
        >
          สถานะงาน
        </label>
        <input
          class="appearance-none block w-full bg-gray-200 text-gray-700 text-xl border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          type="text"
          placeholder="สถานะงาน"
          disabled
          v-bind:value="task_status"
        />
      </div>

      <div class="w-full md:w-1/4 px-3 mb-6 md:mb-0">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xl font-bold mb-2"
        >
          จำนวนครั้งที่ไม่ผ่าน
        </label>
        <input
          class="appearance-none block w-full bg-gray-200 text-gray-700 text-xl border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          type="text"
          placeholder="0"
          disabled
          v-bind:value="form_input.fail_count"
        />
      </div>
      <div class="w-full md:w-2/4 px-3">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xl font-bold mb-2"
        >
          วันที่มอบหมายงาน
        </label>
        <input
          class="appearance-none block w-full bg-gray-200 text-gray-700 text-xl border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          type="date"
          placeholder="วันที่มอบหมายงาน"
          v-model="form_input.start_date"
          :disabled="disabled == 1"
          :class="errors.start_date ? 'border-red-600' : 'border-gray-200'"
        />
      </div>
      <div class="w-full md:w-2/4 px-3">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xl font-bold mb-2"
        >
          วันที่ส่งมอบงาน
        </label>
        <input
          class="appearance-none block w-full bg-gray-200 text-gray-700 text-xl border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          type="date"
          placeholder="วันที่ส่งมอบงาน"
          v-model="form_input.due_date"
          :disabled="disabled == 1"
          :class="errors.due_date ? 'border-red-600' : 'border-gray-200'"
        />
      </div>
    </div>

    <div v-if="status2" class="py-3 text-center text-black">
      <button
        v-on:click="status02"
        type="button"
        class="font-normal text-2xl p-2 w-44 bg-yellow-700 text-white hover:bg-yellow-800 transition duration-250"
      >
        อัปเดต
      </button>
    </div>

    <div v-if="status4" class="py-3 text-center text-black">
      <button
        v-on:click="good"
        type="button"
        class="mr-3 font-normal text-2xl p-2 w-44 bg-green-700 text-white hover:bg-green-800 transition duration-250"
      >
        ผ่าน
      </button>
      <button
        v-on:click="bad"
        type="button"
        class="ml-3 font-normal text-2xl p-2 w-44 bg-red-700 text-white hover:bg-red-800 transition duration-250"
      >
        ไม่ผ่าน
      </button>
    </div>

    <div v-if="status3" class="py-3 text-center text-black">
      <button
        v-on:click="status03"
        type="button"
        class="font-normal text-2xl p-2 w-44 bg-yellow-700 text-white hover:bg-yellow-800 transition duration-250"
      >
        อัปเดต
      </button>
    </div>

    <div v-if="status4" class="py-3 text-center text-black">
      <button
        v-on:click="status04"
        type="button"
        class="font-normal text-2xl p-2 w-44 bg-yellow-700 text-white hover:bg-yellow-800 transition duration-250"
      >
        ยกเลิก
      </button>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Swal from "sweetalert2";
import axios from "axios";
export default {
  props: {
    o_info: {},
  },
  data() {
    return {
      disabled: 0,
      task_status: "กำลังดำเนินงาน",
      e_name: "",

      status0: false, // ถ้าฝังอัญมณีจะไม่มีให้เลือกชื่อพนักงาน
      status1: true, // ถ้าแจกงานแล้วจะเป็น F
      status2: false, // ไว้ส่งข้อมูล ot ถ้าส่งแล้วจะเป็น F
      status3: false, // ไว้กดอัปเดทข้อมูลว่าผ่าน, ไม่ผ่าน
      status4: false, // ไว้ส่งข้อมูล ผ่าน, ไม่ผ่าน
      status5: false, // ถ้ายังไม่ได้แจกงานจะไม่โชว์ข้อมูล

      e_id_name: "",
      E_ID_NAME: [],

      employee_info: {},
      selectedEmployee: [],
      ot_all: {},
      ot_info: {},

      form_input: {
        o_id: "",
        e_id: "",
        task_name: "ฝังอัญมณี",
        start_date: "",
        due_date: "",
        task_status: 0,
        fail_count: 0,
      },

      errors: {
        e_id_name: "",
        start_date: "",
        due_date: "",
      },
    };
  },

  components: {
    Navbar,
  },

  async created() {
    if (this.o_info.status != "เสร็จสิ้นการขึ้นตัวเรือน") {
      let res = await axios.get("http://127.0.0.1:8000/api/order-task");
      this.ot_all = res.data;

      for (var i = 0; i < this.ot_all.length; i++) {
        if (
          this.ot_all[i].o_id == this.o_info.o_id &&
          (this.ot_all[i].task_name == "ฝังอัญมณี" ||
            this.ot_all[i].task_name == "เสร็จสิ้นการฝังอัญมณี")
        ) {
          this.ot_info = this.ot_all[i];
        }
      }

      this.form_input.e_id = this.ot_info.e_id;
      this.disabled = (this.disabled + 1) % 2;

      this.form_input.fail_count = this.ot_info.fail_count;
      this.form_input.start_date = this.ot_info.start_date;
      this.form_input.due_date = this.ot_info.due_date;

      this.status0 = true;
      this.status1 = false;
      this.status5 = true;

      if (this.o_info.status == "ฝังอัญมณี") {
        this.status3 = true;
      } else {
        this.task_status = "เสร็จสิ้น";
      }
    }
    await this.showData();
  },

  methods: {
    async showData() {
      let response1 = await axios.get(
        "http://127.0.0.1:8000/api/employee-manager"
      );
      this.employee_info = response1.data;
      this.filter();
    },

    async filter() {
      for (var i = 0; i < this.employee_info.length; i++) {
        if (this.employee_info[i].job == "ช่างฝัง") {
          this.selectedEmployee.push({
            id: this.employee_info[i].id,
            name: this.employee_info[i].name,
          });
        }
        if (this.employee_info[i].id == this.form_input.e_id) {
          this.e_name = this.employee_info[i].name;
        }
      }
      if (this.o_info.status != "เสร็จสิ้นการขึ้นตัวเรือน") {
        this.e_id_name = this.ot_info.e_id + " " + this.e_name;
      }
    },
    async status01() {
      this.status1 = false;
      this.status2 = true;
      this.status5 = true;
    },

    status02() {
      this.form_input.o_id = this.o_info.o_id;
      this.E_ID_NAME = this.e_id_name.split(" ");
      this.form_input.e_id = this.E_ID_NAME[0];

      if (
        !this.e_id_name ||
        !this.form_input.start_date ||
        !this.form_input.due_date
      ) {
        Swal.fire({
          title: "เกิดข้อผิดพลาด",
          text: "กรุณากรอกข้อมูลให้ครบถ้วน",
          icon: "error",
          confirmButtonColor: "#d33",
          confirmButtonText: "กลับ",
        });
        if (!this.e_id_name) {
          this.errors.e_id_name = true;
        } else {
          this.errors.e_id_name = false;
        }
        if (!this.form_input.start_date) {
          this.errors.start_date = true;
        } else {
          this.errors.start_date = false;
        }
        if (!this.form_input.due_date) {
          this.errors.due_date = true;
        } else {
          this.errors.due_date = false;
        }
      } else {
        Swal.fire({
          title: "ยืนยันการแจกงานฝังอัญมณี",
          text: "โปรดตรวจสอบข้อมูลให้เรียบร้อยก่อนทำรายการ",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "ยืนยัน",
          cancelButtonText: "ยกเลิก",
        }).then(async (result) => {
          if (result.isConfirmed) {
            try {
              await axios.post(
                "http://127.0.0.1:8000/api/order-task",
                this.form_input
              );
              await axios.put(
                `http://127.0.0.1:8000/api/order/up/${this.o_info.o_id}`
              );
            } catch (e) {
              console.error(e);
            }
            Swal.fire({
              title: "แจกงานฝังอัญมณีสำเร็จ!",
              text: "กลับหน้าคำสั่งซื้อ",
              icon: "success",
              confirmButtonColor: "#3085d6",
              confirmButtonText: "กลับ",
            }).then((result) => {
              this.status2 = false;
              if (result.isConfirmed) {
                this.$router.go();
              }
            });
          } else {
            this.$router.go();
          }
        });
        this.status1 = false;
        this.status5 = true;
      }
    },

    status03() {
      this.status3 = false;
      this.status4 = true;
    },

    status04() {
      this.status4 = false;
      this.status3 = true;
    },

    // ผ่าน
    good() {
      Swal.fire({
        title: "ยืนยันการฝังอัญมณีผ่าน",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "ยืนยัน",
        cancelButtonText: "ยกเลิก",
      }).then(async (result) => {
        if (result.isConfirmed) {
          try {
            await axios.put(
              `http://127.0.0.1:8000/api/good/${this.ot_info.id}`
            );
            await axios.put(
              `http://127.0.0.1:8000/api/order/up/${this.o_info.o_id}`
            );
          } catch (e) {
            console.error(e);
          }
          Swal.fire({
            title: "เสร็จสิ้นการฝังอัญมณี!",
            icon: "success",
            confirmButtonColor: "#3085d6",
            confirmButtonText: "กลับ",
          }).then((result) => {
            if (result.isConfirmed) {
              this.$router.go();
            }
          });
        } else {
          this.$router.go();
        }
        this.status3 = false;
        this.status4 = false;
      });
    },
    // ไม่ผ่าน
    bad() {
      Swal.fire({
        title: "ยืนยันการฝังอัญมณีไม่ผ่าน",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "ยืนยัน",
        cancelButtonText: "ยกเลิก",
      }).then(async (result) => {
        if (result.isConfirmed) {
          try {
            await axios.put(`http://127.0.0.1:8000/api/bad/${this.ot_info.id}`);
          } catch (e) {
            console.error(e);
          }
          Swal.fire({
            title: "ไม่ผ่านการฝังอัญมณี!",
            icon: "error",
            confirmButtonColor: "#d33",
            confirmButtonText: "กลับ",
          }).then((result) => {
            if (result.isConfirmed) {
              this.$router.go();
            }
          });
        } else {
          this.$router.go();
        }
        this.status3 = true;
        this.status4 = false;
      });
    },
  },
};
</script>

<style scoped lang="scss"></style>
