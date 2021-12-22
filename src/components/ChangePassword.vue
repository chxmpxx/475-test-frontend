<template>
  <div class="bg-yellow-50 min-h-screen font-prompt">
    <div>
      <Navbar />
      <div>
        <div class="text-center py-16 ">
          <h2 class="text-6xl font-bold text-yellow-800">เปลี่ยนรหัสผ่าน</h2>
        </div>
        <div class="flex justify-center">
          <form class="w-1/5 max-w-4xl">
            <div class="flex flex-wrap -mx-3 mb-5 ">
              <div class="w-full px-3 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xl font-bold mb-2"
                >
                  ชื่อผู้ใช้
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 text-xl border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  type="text"
                  placeholder="ชื่อผู้ใช้"
                  v-model="form.username"
                  :class="
                    errors.username
                      ? 'border-red-600 border-2'
                      : 'border-gray-200'
                  "
                />
              </div>
              <div class="w-full px-3 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xl font-bold mb-2"
                >
                  รหัสผ่านเดิม
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 text-xl border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  type="password"
                  placeholder="รหัสผ่าน"
                  v-model="form.oldPassword"
                  :class="
                    errors.oldPassword ? 'border-red-600' : 'border-gray-200'
                  "
                />
              </div>
              <div class="w-full px-3 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xl font-bold mb-2"
                >
                  รหัสผ่านใหม่
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 text-xl border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  type="password"
                  placeholder="รหัสผ่านใหม่"
                  v-model="form.password"
                  :class="
                    errors.password ? 'border-red-600' : 'border-gray-200'
                  "
                />
              </div>
              <div class="w-full px-3 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xl font-bold mb-2"
                >
                  ยืนยันรหัสผ่านใหม่
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 text-xl border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  type="password"
                  placeholder="ยืนยันรหัสผ่านใหม่"
                  v-model="form.confirm"
                  :class="errors.confirm ? 'border-red-600' : 'border-gray-200'"
                />
              </div>
            </div>
          </form>
        </div>
        <div class="py-3 text-center text-black">
          <button
            v-on:click="changePassword()"
            class="font-normal text-2xl p-2 w-44 bg-yellow-700 text-white hover:bg-yellow-800 transition duration-250"
          >
            เปลี่ยนรหัสผ่าน
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
      admin: {},
      adminId: "",
      adminPassword: "",
      validate: false,
      errors: {
        username: false,
        password: false,
        confirm: false,
        oldPassword: false,
      },
      form: {
        username: null,
        password: null,
        confirm: null,
        oldPassword: null,
      },
    };
  },
  components: {
    Navbar,
  },

  async created() {
    await this.loadAdmin();
  },
  methods: {
    async loadAdmin() {
      try {
        let response = await axios.get("http://127.0.0.1:8000/api/admin");
        console.log(response);
        this.admin = response.data;
        console.log(this.admin);
      } catch (e) {
        console.error(e);
      }
    },
    async changePassword() {
      this.validate = false;
      if (
        !this.form.username ||
        !this.form.password ||
        !this.form.confirm ||
        !this.form.oldPassword
      ) {
        Swal.fire({
          title: "เกิดข้อผิดพลาด",
          text: "กรุณากรอกข้อมูลให้ครบถ้วน",
          icon: "error",
          confirmButtonColor: "#d33",
          confirmButtonText: "กลับ",
        });
        if (!this.form.username) {
          this.errors.username = true;
        }
        if (!this.form.oldPassword) {
          this.errors.oldPassword = true;
        }
        if (!this.form.password) {
          this.errors.password = true;
        }
        if (!this.form.confirm) {
          this.errors.confirm = true;
        }
      } else {
        for (let i = 0; i < this.admin.length; i++) {
          if (
            this.form.username == this.admin[i].username &&
            this.form.oldPassword == this.admin[i].password
          ) {
            this.validate = true;
            this.adminId = this.admin[i].id;
            this.adminPassword = this.admin[i].password;
            break;
          }
        }
        console.log(this.validate);
        if (this.validate == true) {
          if (this.form.password == this.form.confirm) {
            if (this.form.password == this.adminPassword) {
              Swal.fire({
                title: "เกิดข้อผิดพลาด",
                text: "รหัสผ่านใหม่ต้องไม่ซ้ำกับรหัสผ่านเดิม",
                icon: "error",
                confirmButtonColor: "#3085d6",
                confirmButtonText: "กลับ",
              });
              this.errors.username = false;
              this.errors.oldPassword = true;
              this.errors.password = true;
              this.errors.confirm = true;
            } else {
              Swal.fire({
                title: "ยืนยันการเปลี่ยนรหัสผ่าน",
                text: "โปรดตรวจสอบให้เรียบร้อยก่อนทำเปลี่ยนรหัสผ่าน",
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
                    let response = axios.put(
                      `http://127.0.0.1:8000/api/admin/${this.adminId}`,
                      this.form,
                      this.adminId
                    );
                    console.log(response);
                  } catch (e) {
                    console.error(e);
                  }
                  Swal.fire({
                    title: "เปลี่ยนรหัสผ่านสำเร็จ!",
                    text: "กลับหน้าเข้าสู่ระบบ",
                    icon: "success",
                    confirmButtonColor: "#3085d6",
                    confirmButtonText: "กลับ",
                  }).then((result) => {
                    if (result.isConfirmed) {
                      this.$router.push("/");
                    }
                  });
                }
              });
            }
          } else {
            Swal.fire({
              title: "เกิดข้อผิดพลาด",
              text: "รหัสผ่านไม่ตรงกัน",
              icon: "error",
              confirmButtonColor: "#3085d6",
              confirmButtonText: "กลับ",
            });
            this.errors.username = false;
            this.errors.oldPassword = false;
            this.errors.password = true;
            this.errors.confirm = true;
            this.validate = false;
          }
        } else {
          Swal.fire({
            title: "เกิดข้อผิดพลาด",
            text: "ชื่อผู้ใช้หรือรหัสผ่านผิด",
            icon: "error",
            confirmButtonColor: "#3085d6",
            confirmButtonText: "กลับ",
          });
          this.errors.username = true;
          this.errors.oldPassword = true;
          this.errors.password = false;
          this.errors.confirm = false;
        }
      }
    },
  },
};
</script>

<style scoped lang="scss"></style>
