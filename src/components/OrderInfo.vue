<template>
  <div class="bg-yellow-50 min-h-screen font-prompt">
    <div>
      <Navbar />
      <div>
        <div class="py-16 text-center text-yellow-800 ">
          <h2 class="font-bold text-6xl">
            รหัสคำสั่งซื้อ {{ order_info.o_id }}
          </h2>
          <h2 class="font-normal text-3xl mt-4 text-green-700">
            {{ order_info.status }}
          </h2>
        </div>

        <div class="flex justify-center">
          <form class="w-1/2 max-w-4xl">
            <div class="py-3 -mt-10 text-left text-black">
              <h2 class="font-bold text-4xl">
                ข้อมูลลูกค้า
              </h2>
            </div>
            <div class="flex flex-wrap -mx-3 mb-5 mt-4">
              <div class="w-full md:w-2/5 px-3 md:mb-0">
                <label
                  class="relative block uppercase tracking-wide text-gray-700 text-xl font-bold mb-2"
                >
                  ชื่อและนามสกุล
                </label>
                <div class="relative">
                  <input
                    class="appearance-none block w-full bg-gray-300 text-gray-700 text-xl border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    type="text"
                    placeholder="ชื่อและนามสกุล"
                    v-bind:disabled="this.status === true ? true : false"
                    v-model="customer_info.c_name"
                  />
                </div>
              </div>
              <div class="w-full md:w-2/5 px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xl font-bold mb-2"
                >
                  เบอร์โทรศัพท์
                </label>
                <input
                  class="appearance-none block w-full bg-gray-300 text-gray-700 text-xl border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  type="text"
                  placeholder="เบอร์โทรศัพท์"
                  v-bind:disabled="this.status === true ? true : false"
                  v-model="customer_info.c_phone"
                />
              </div>
              <div class="w-full md:w-1/5 px-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xl font-bold mb-2"
                >
                  ประเภท
                </label>
                <input
                  class="appearance-none block w-full bg-gray-300 text-gray-700 text-xl border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  type="text"
                  placeholder="ประเภท"
                  v-bind:disabled="this.status === true ? true : false"
                  v-model="customer_info.type"
                />
              </div>
            </div>
            <label
              class="block uppercase tracking-wide text-gray-700 text-xl font-bold mb-2"
            >
              ที่อยู่
            </label>
            <div class="flex flex-wrap -mx-3 mb-4">
              <div class="w-full md:w-full px-3 mb-2 md:mb-0">
                <textarea
                  name="about"
                  rows="3"
                  class="block appearance-none w-full bg-gray-300 border border-gray-200 text-gray-700 text-xl py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  placeholder="ที่อยู่"
                  v-bind:disabled="this.status === true ? true : false"
                  v-model="customer_info.address"
                ></textarea>
              </div>
            </div>
          </form>
        </div>
        <div class="flex justify-center mt-10">
          <form class="w-1/2 max-w-4xl">
            <div class="py-3 -mt-10 text-left text-black">
              <h2 class="font-bold text-4xl">
                ข้อมูลคำสั่งซื้อ
              </h2>
            </div>

            <div>
              <img
                :src="getImagePath(order_image)"
                height="200px"
                width="350px"
                class="ml-72"
              />
            </div>

            <div class="flex flex-wrap -mx-3 mb-5 mt-4">
              <div class="w-full md:w-2/4 px-3 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xl font-bold mb-2"
                >
                  รหัสคำสั่งซื้อ
                </label>
                <input
                  class="appearance-none block w-full bg-gray-300 text-gray-700 text-xl border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  type="text"
                  placeholder="รหัสคำสั่งซื้อ"
                  v-bind:disabled="this.status === true ? true : false"
                  v-model="order_info.o_id"
                />
              </div>
              <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xl font-bold mb-2"
                >
                  ชนิดของวัตถุดิบ
                </label>
                <div class="relative">
                  <input
                    class="appearance-none block w-full bg-gray-300 text-gray-700 text-xl border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    type="text"
                    v-bind:disabled="this.status === true ? true : false"
                    v-model="order_info.metal"
                  />
                </div>
              </div>
              <div class="flex flex-wrap w-full mb-6 md:mb-0">
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xl font-bold mb-2"
                  >
                    ประเภทเครื่องประดับ
                  </label>
                  <input
                    class="appearance-none block w-full bg-gray-300 text-gray-700 text-xl border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    type="text"
                    placeholder="ประเภทเครื่องประดับ"
                    v-bind:disabled="this.status === true ? true : false"
                    v-model="jewelry_info.jewelry_type"
                  />
                </div>
                <div class="w-full md:w-1/2 px-3">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xl font-bold mb-2"
                  >
                    จำนวนเครื่องประดับ
                  </label>
                  <input
                    class="appearance-none block w-full bg-gray-300 text-gray-700 text-xl border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    type="text"
                    placeholder="จำนวนเครื่องประดับ(ชิ้น)"
                    v-bind:disabled="this.status === true ? true : false"
                    v-bind:value="jewelry_info.jewelry_piece + ' ชิ้น'"
                  />
                </div>
              </div>
              <div class="w-full md:w-2/4 px-3 mt-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xl font-bold mb-2"
                >
                  วันที่สั่งสินค้า
                </label>
                <input
                  class="appearance-none block w-full bg-gray-300 text-gray-700 text-xl border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  type="text"
                  v-bind:disabled="this.status === true ? true : false"
                  v-model="order"
                />
              </div>
              <div class="w-full md:w-2/4 px-3 mt-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xl font-bold mb-2"
                >
                  วันที่ส่งมอบสินค้า
                </label>
                <input
                  class="appearance-none block w-full bg-gray-300 text-gray-700 text-xl border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  type="text"
                  v-bind:disabled="this.status === true ? true : false"
                  v-model="deadline"
                />
              </div>
            </div>
          </form>
        </div>
        <div class="flex justify-center mt-10">
          <form class="w-1/2 max-w-4xl">
            <div class="py-3 -mt-10 text-left text-black">
              <h2 class="font-bold text-4xl">
                ข้อมูลอัญมณี
              </h2>
            </div>

            <div>
              <img
                :src="getImagePath(gem_image)"
                height="200px"
                width="350px"
                class="ml-72"
              />
            </div>

            <div class="flex flex-wrap -mx-3 mb-5 mt-4">
              <div class="w-full md:w-2/4 px-3 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xl font-bold mb-2"
                >
                  ชื่ออัญมณี
                </label>
                <input
                  class="appearance-none block w-full bg-gray-300 text-gray-700 text-xl border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  type="text"
                  placeholder="ชื่ออัญมณี"
                  v-bind:disabled="this.status === true ? true : false"
                  v-bind:value="jewelry_info.gem_name"
                />
              </div>
              <div class="w-full md:w-2/4 px-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xl font-bold mb-2"
                >
                  น้ำหนักของอัญมณี
                </label>
                <input
                  class="appearance-none block w-full bg-gray-300 text-gray-700 text-xl border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  type="text"
                  placeholder="น้ำหนักของอัญมณี (กะรัต)"
                  v-bind:disabled="this.status === true ? true : false"
                  v-bind:value="jewelry_info.gem_weight + ' กะรัต'"
                />
              </div>
              <div class="w-full md:w-2/4 px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xl font-bold mb-2"
                >
                  ขนาดของอัญมณี
                </label>
                <input
                  class="appearance-none block w-full bg-gray-300 text-gray-700 text-xl border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  type="text"
                  placeholder="ขนาดของอัญมณี (มิลลิเมตร)"
                  v-bind:disabled="this.status === true ? true : false"
                  v-bind:value="jewelry_info.gem_size + ' มิลลิเมตร'"
                />
              </div>
              <div class="w-full md:w-2/4 px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xl font-bold mb-2"
                >
                  จำนวนชิ้นของอัญมณี
                </label>
                <input
                  class="appearance-none block w-full bg-gray-300 text-gray-700 text-xl border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  type="text"
                  placeholder="จำนวนชิ้นของอัญมณี (ชิ้น)"
                  v-bind:disabled="this.status === true ? true : false"
                  v-bind:value="jewelry_info.gem_pieces + ' ชิ้น'"
                />
              </div>
            </div>
          </form>
        </div>

        <!-- -------------------------- S T A T E --------------------------- -->

        <div v-if="wait" class="flex justify-center mt-10">
          <form class="w-1/2 max-w-4xl">
            <div class="py-3 -mt-10 text-left text-black">
              <h2 class="font-bold text-4xl">
                ข้อมูลสถานะคำสั่งซื้อ
                <div>
                  <label class="text-base text-green-700"
                    >สถานะปัจจุบัน: {{ order_info.status }}</label
                  >
                </div>
              </h2>
            </div>

            <OrderState1 v-if="state1" :o_info="order_info" />
            <OrderState2 v-if="state2" :o_info="order_info" />
            <OrderState3 v-if="state3" :o_info="order_info" />
            <OrderState4 v-if="state4" :o_info="order_info" />
          </form>
        </div>
        <div v-if="wait">
          <OrderStateM v-if="state5" :o_info="order_info" />

          <!-- <div class="flex justify-center">
            <form class="w-1/2 max-w-4xl">
              <OrderState5 v-if="state5" :o_info="order_info" />
            </form>
          </div> -->
        </div>

        <br />
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import axios from "axios";

import OrderState1 from "@/components/OrderState1.vue";
import OrderState2 from "@/components/OrderState2.vue";
import OrderState3 from "@/components/OrderState3.vue";
import OrderState4 from "@/components/OrderState4.vue";
import OrderStateM from "@/components/OrderStateM.vue";
import OrderState5 from "@/components/OrderState5.vue";

export default {
  data() {
    return {
      status: true,
      wait: false,

      e_id_name: "",
      E_ID_NAME: [],

      employee_info: {},
      selectedEmployee: [],
      jewelry_info: {},
      order_info: {},
      customer_info: {},
      dateF: "",
      dateArr: [],
      deadlineDate: "",
      deadline: [],
      orderDate: "",
      order: [],
      order_image: "",
      gem_image: "",

      state1: true,
      state2: false,
      state3: false,
      state4: false,
      state5: false,

      form_input: {
        o_id: "",
        e_id: "",
        task_name: "",
        start_date: "",
        due_date: "",
        task_status: "กำลังดำเนินงาน",
        fail_count: 0,
      },
    };
  },

  components: {
    Navbar,
    OrderState1,
    OrderState2,
    OrderState3,
    OrderState4,
    OrderStateM,
    OrderState5,
  },

  async created() {
    this.id = this.$route.params.id;
    await this.showData(this.id);
    await this.checkState();
  },

  methods: {
    handleChangeO(event) {
      this.form_o.order_image = event.target.files[0];
    },
    handleChangeG(event) {
      this.form_j.gem_image = event.target.files[0];
    },
    async showData(id) {
      let response0 = await axios.get(
        "http://127.0.0.1:8000/api/employee-manager"
      );
      this.employee_info = response0.data;

      let url = `http://127.0.0.1:8000/api/jewelry-info/${id}`;
      let response = await axios.get(url);
      this.jewelry_info = response.data;
      this.gem_image = this.jewelry_info.gem_image;

      let oid = this.jewelry_info.o_id;
      let url2 = `http://127.0.0.1:8000/api/order/${oid}`;
      let response2 = await axios.get(url2);
      this.order_info = response2.data;
      this.order_image = this.order_info.order_image;
      this.deadlineDate = this.order_info.deadline_date;
      console.log(this.deadlineDate);
      this.changeFormat1(this.deadlineDate);
      this.orderDate = this.order_info.order_date;
      this.changeFormat2(this.orderDate);

      let cid = this.order_info.c_id;
      let url3 = `http://127.0.0.1:8000/api/customer/${cid}`;
      let response3 = await axios.get(url3);
      this.customer_info = response3.data;
    },
    async changeFormat1(date) {
      this.dateF = date;
      this.dateArr = this.dateF.split("-");
      console.log(this.dateArr);
      const months = [
        "มกราคม",
        "กุมภาพันธ์",
        "มีนาคม",
        "เมษายน",
        "พฤษภาคม",
        "มิถุนายน",
        "กรกฎาคม",
        "สิงหาคม",
        "กันยายน",
        "ตุลาคม",
        "พฤศจิกายน",
        "ธันวาคม",
      ];
      let current_datetime = this.dateArr;
      let formatted_date =
        current_datetime[2] +
        " " +
        months[current_datetime[1] - 1] +
        " " +
        current_datetime[0];
      this.deadline.push(formatted_date);
    },
    async changeFormat2(date) {
      this.dateF = date;
      this.dateArr = this.dateF.split("-");
      const months = [
        "มกราคม",
        "กุมภาพันธ์",
        "มีนาคม",
        "เมษายน",
        "พฤษภาคม",
        "มิถุนายน",
        "กรกฎาคม",
        "สิงหาคม",
        "กันยายน",
        "ตุลาคม",
        "พฤศจิกายน",
        "ธันวาคม",
      ];
      let current_datetime = this.dateArr;
      let formatted_date =
        current_datetime[2] +
        " " +
        months[current_datetime[1] - 1] +
        " " +
        current_datetime[0];
      this.order.push(formatted_date);
    },

    getImagePath(image) {
      return "http://127.0.0.1:8000" + image;
    },

    checkState() {
      if (
        this.order_info.status != "คำสั่งซื้อใหม่" &&
        this.order_info.status != "ขึ้นตัวเรือน"
      ) {
        this.state2 = true;
      }
      if (
        this.order_info.status != "คำสั่งซื้อใหม่" &&
        this.order_info.status != "ขึ้นตัวเรือน" &&
        this.order_info.status != "เสร็จสิ้นการขึ้นตัวเรือน" &&
        this.order_info.status != "ฝังอัญมณี"
      ) {
        console.log("aaa");
        this.state3 = true;
      }
      if (
        this.order_info.status != "คำสั่งซื้อใหม่" &&
        this.order_info.status != "ขึ้นตัวเรือน" &&
        this.order_info.status != "เสร็จสิ้นการขึ้นตัวเรือน" &&
        this.order_info.status != "ฝังอัญมณี" &&
        this.order_info.status != "เสร็จสิ้นการฝังอัญมณี" &&
        this.order_info.status != "ขัดเครื่องประดับ"
      ) {
        this.state4 = true;
      }
      if (this.order_info.status == "เสร็จสิ้นการชุบเครื่องประดับ") {
        this.state5 = true;
      }
      this.wait = true;
    },
  },
};
</script>

<style scoped lang="scss"></style>
