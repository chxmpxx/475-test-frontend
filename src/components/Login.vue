<template>
  <body>
    <div class="split-screen">
      <div class="right form ">
        <form>
          <div>
            <section class="copy text-white">
              <h1 class="md:text-yellow-900">J&K</h1>
              <span class="fac md:text-yellow-900">Factory and Sell</span>
            </section>
            <div class="input-container name">
              <input
                class="text-base"
                type="username"
                placeholder="ชื่อผู้ใช้"
                v-model="form.username"
                id="fname"
              />
            </div>
            <div class="input-container password">
              <input
                class="text-base"
                type="password"
                placeholder="รหัสผ่าน"
                v-model="form.password"
                id="password"
              />
            </div>
          </div>
        </form>
        <div class="absolute w-96 mt-96">
          <button v-on:click="validate()" class="login-btn mt-2" type="submit">
            เข้าสู่ระบบ
          </button>
        </div>
      </div>
    </div>
  </body>
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";
export default {
  data() {
    return {
      admin: "",
      validated: false,
      form: {
        username: null,
        password: null,
      },
    };
  },
  async created() {
    await this.getData();
  },
  methods: {
    async getData() {
      try {
        let response = await axios.get("http://127.0.0.1:8000/api/admin");
        console.log(response);
        this.admin = response.data;
        console.log(this.admin);
      } catch (e) {
        console.error(e);
      }
    },
    async validate() {
      for (let i = 0; i < this.admin.length; i++) {
        if (
          this.form.username == this.admin[i].username &&
          this.form.password == this.admin[i].password &&
          this.form.username &&
          this.form.password
        ) {
          this.validate = true;
          break;
        }
      }
      if (this.validate == true) {
        this.login();
      } else {
        Swal.fire({
          title: "ข้อมูลไม่ถูกต้อง",
          text: "ชื่อผู้ใช้หรือรหัสผ่านผิด",
          icon: "error",
          confirmButtonColor: "#d33",
          confirmButtonText: "กลับ",
        });
      }
    },
    async login() {
      this.$router.push("/order-list");
    },
  },
};
</script>

<style scoped lang="scss">
:root {
  font-size: 100%;
  font-size: 16px;
  line-height: 1.5;
}

body {
  padding: 0;
  margin: 0;
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)),
    url("../assets/bg.jpg");
}

h1 {
  position: relative;
  font-size: 8em;
  font-weight: bold;
  font-style: italic;
}

.fac {
  position: absolute;
  margin-left: -3.75em;
  margin-top: -1.2em;
}

.right {
  margin-top: -7em;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 25%;
  width: 50%;
  height: auto;
}

.split-screen {
  display: flex;
  flex-direction: row;
  height: 100vh;
}

.right .copy {
  color: #c47759;
  text-align: center;
  padding: 1em;
}

.right .copy span {
  font-size: 2em;
  font-weight: bold;
  font-style: italic;
}

.form input[type="username"],
.form input[type="password"] {
  display: block;
  width: 65%;
  box-sizing: border-box;
  border-radius: 8px;
  border: 1px solid #c4c4c4;
  padding: 0.55em;
  margin-left: 17%;
  margin-bottom: 1.25rem;
  font-size: 0.85em;
  font-weight: bold;
  outline: none;
}

.login-btn {
  display: block;
  width: 35%;
  background: #c47759;
  color: white;
  font-weight: 700;
  border: none;
  padding: 0.55rem;
  border-radius: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  transition: 0.2s;
  margin-left: 32%;
  font-size: 1.05em;
}

.login-btn:hover {
  color: white;
  background: #52716c;
  cursor: pointer;
  transition: 0.2s;
}

.toOrderList {
  text-decoration: none;
}
</style>
