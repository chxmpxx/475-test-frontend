<template>
  <div class="bg-yellow-50 min-h-screen font-prompt">
    <div>
      <Navbar />
      <div>
        <div class="py-16 text-center text-yellow-800 ">
          <h2 class="font-bold text-6xl">
            เพิ่มคำสั่งซื้อ
          </h2>
        </div>

        <div class="flex justify-center">
          <form class="w-1/2 max-w-4xl">
            <div class="py-3 -mt-10 text-left text-black">
              <h2 class="font-bold text-4xl">
                ข้อมูลลูกค้า
                <button
                  @click="change()"
                  class="absolute text-xl text-white mx-4 my-1 text-center w-36 py-1 max-w-lg bg-red-700 hover:bg-red-800 transition duration-250 md:w-"
                >
                  เปลี่ยนลูกค้า
                </button>
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
                    class="appearance-none block w-full bg-gray-200 text-gray-700 text-xl border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    type="text"
                    placeholder="ชื่อและนามสกุล"
                    disabled
                    v-bind:value="customer.c_name"
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
                  class="appearance-none block w-full bg-gray-200 text-gray-700 text-xl border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  type="text"
                  placeholder="เบอร์โทรศัพท์"
                  disabled
                  v-bind:value="customer.c_phone"
                />
              </div>
              <div class="w-full md:w-1/5 px-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xl font-bold mb-2"
                >
                  ประเภท
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 text-xl border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  type="text"
                  placeholder="ประเภท"
                  disabled
                  v-bind:value="customer.type"
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
                  class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 text-xl py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  placeholder="ที่อยู่"
                  disabled
                  v-bind:value="customer.address"
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
                <div>
                  <label class="text-base">อัปโหลดรูปใบสั่งซื้อสินค้า: </label>
                  <input
                    class="text-sm"
                    type="file"
                    name="purchase order"
                    accept="image/*"
                    @change="handleChangeO"
                    :class="
                      errors_o.order_image
                        ? 'border-red-600'
                        : 'border-gray-200'
                    "
                  />
                </div>
              </h2>
            </div>
            <div class="flex flex-wrap -mx-3 mb-5 mt-4">
              <div class="w-full md:w-2/4 px-3 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xl font-bold mb-2"
                >
                  รหัสคำสั่งซื้อ
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 text-xl border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  type="text"
                  placeholder="รหัสคำสั่งซื้อ"
                  v-model="form_o.o_id"
                  :class="errors_o.o_id ? 'border-red-600' : 'border-gray-200'"
                />
              </div>
              <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xl font-bold mb-2"
                >
                  ชนิดของวัตถุดิบ
                </label>
                <div class="relative">
                  <select
                    v-model="form_o.metal"
                    :class="
                      errors_o.metal ? 'border-red-600' : 'border-gray-200'
                    "
                    class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 text-xl py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  >
                    <option>ทอง 14K สีเหลือง</option>
                    <option>ทอง 14K สีโรสโกลด์</option>
                    <option>ทอง 14K สีขาว</option>
                    <option>ทอง 18K สีเหลือง</option>
                    <option>ทอง 18K สีโรสโกลด์</option>
                    <option>ทอง 18K สีขาว</option>
                    <option>เงิน</option>
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
              <div class="flex flex-wrap w-full mb-6 md:mb-0">
                <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xl font-bold mb-2"
                  >
                    ประเภทเครื่องประดับ
                  </label>
                  <input
                    class="appearance-none block w-full bg-gray-200 text-gray-700 text-xl border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    type="text"
                    placeholder="ประเภทเครื่องประดับ"
                    v-model="form_j.jewelry_type"
                    :class="
                      errors_j.jewelry_type
                        ? 'border-red-600'
                        : 'border-gray-200'
                    "
                  />
                </div>
                <div class="w-full md:w-1/2 px-3">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xl font-bold mb-2"
                  >
                    จำนวนเครื่องประดับ(ชิ้น)
                  </label>
                  <input
                    class="appearance-none block w-full bg-gray-200 text-gray-700 text-xl border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    type="text"
                    placeholder="จำนวนเครื่องประดับ(ชิ้น)"
                    v-model="form_j.jewelry_piece"
                    :class="
                      errors_j.jewelry_piece
                        ? 'border-red-600'
                        : 'border-gray-200'
                    "
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
                  class="appearance-none block w-full bg-gray-200 text-gray-700 text-xl border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  type="date"
                  v-model="form_o.order_date"
                  :class="
                    errors_o.order_date ? 'border-red-600' : 'border-gray-200'
                  "
                />
              </div>
              <div class="w-full md:w-2/4 px-3 mt-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xl font-bold mb-2"
                >
                  วันที่ส่งมอบสินค้า
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 text-xl border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  type="date"
                  v-model="form_o.deadline_date"
                  :class="
                    errors_o.deadline_date
                      ? 'border-red-600'
                      : 'border-gray-200'
                  "
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
                <div>
                  <label class="text-base">อัปโหลดรูปอัญมณี: </label>
                  <input
                    class="text-sm"
                    type="file"
                    name="jewelry"
                    accept="image/*"
                    @change="handleChangeG"
                    :class="
                      errors_j.gem_image ? 'border-red-600' : 'border-gray-200'
                    "
                  />
                </div>
              </h2>
            </div>
            <div class="flex flex-wrap -mx-3 mb-5 mt-4">
              <div class="w-full md:w-2/4 px-3 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xl font-bold mb-2"
                >
                  ชื่ออัญมณี
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 text-xl border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  type="text"
                  placeholder="ชื่ออัญมณี"
                  v-model="form_j.gem_name"
                  :class="
                    errors_j.gem_name ? 'border-red-600' : 'border-gray-200'
                  "
                />
              </div>
              <div class="w-full md:w-2/4 px-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xl font-bold mb-2"
                >
                  น้ำหนักของอัญมณี(กะรัต)
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 text-xl border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  type="text"
                  placeholder="น้ำหนักของอัญมณี (กะรัต)"
                  v-model="form_j.gem_weight"
                  :class="
                    errors_j.gem_weight ? 'border-red-600' : 'border-gray-200'
                  "
                />
              </div>
              <div class="w-full md:w-2/4 px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xl font-bold mb-2"
                >
                  ขนาดของอัญมณี(มิลลิเมตร)
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 text-xl border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  type="text"
                  placeholder="ขนาดของอัญมณี (มิลลิเมตร)"
                  v-model="form_j.gem_size"
                  :class="
                    errors_j.gem_size ? 'border-red-600' : 'border-gray-200'
                  "
                />
              </div>
              <div class="w-full md:w-2/4 px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xl font-bold mb-2"
                >
                  จำนวนชิ้นของอัญมณี(ชิ้น)
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 text-xl border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  type="text"
                  placeholder="จำนวนชิ้นของอัญมณี (ชิ้น)"
                  v-model="form_j.gem_pieces"
                  :class="
                    errors_j.gem_pieces ? 'border-red-600' : 'border-gray-200'
                  "
                />
              </div>
            </div>
          </form>
        </div>
        <div class="py-3 text-center text-black">
          <button
            v-on:click="addOrder"
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
import Swal from "sweetalert2";
import Navbar from "@/components/Navbar.vue";
import axios from "axios";
export default {
  data() {
    return {
      // is1: true,
      // is2: false,
      // is3: false,
      CustomerList: {},
      customer: {},
      id: "",
      name: "",
      tel: "",
      type: "",
      address: "",

      errors_o: {
        o_id: false,
        c_id: false,
        order_date: false,
        deadline_date: false,
        order_image: false,
      },

      form_o: {
        o_id: null,
        c_id: 0,
        order_date: null,
        deadline_date: null,
        status: "คำสั่งซื้อใหม่",
        metal: "ทอง 14K สีเหลือง",
        order_image: null,
      },

      errors_j: {
        o_id: false,
        jewelry_type: false,
        jewelry_piece: false,
        gem_weight: false,
        gem_size: false,
        gem_name: false,
        gem_pieces: false,
        gem_image: false,
      },

      form_j: {
        o_id: null,
        jewelry_type: null,
        jewelry_piece: null,
        gem_weight: null,
        gem_size: null,
        gem_name: null,
        gem_pieces: null,
        gem_image: null,
      },
    };
  },

  components: {
    Navbar,
  },

  async created() {
    this.id = this.$route.params.id;
    this.showData(this.id);
  },

  methods: {
    handleChangeO(event) {
      this.form_o.order_image = event.target.files[0];
    },
    handleChangeG(event) {
      this.form_j.gem_image = event.target.files[0];
    },
    async showData(id) {
      let url = `http://127.0.0.1:8000/api/customer/${id}`;
      let response = await axios.get(url);
      this.customer = response.data;
      console.log(this.customer);
      // console.log(response);
    },
    addOrder() {
      this.form_j.o_id = this.form_o.o_id;
      this.form_o.c_id = this.id;

      if (
        !this.form_o.o_id ||
        !this.form_o.c_id ||
        !this.form_o.order_date ||
        !this.form_o.deadline_date ||
        !this.form_o.order_image ||
        !this.form_j.o_id ||
        !this.form_j.jewelry_type ||
        !this.form_j.jewelry_piece ||
        !this.form_j.gem_weight ||
        !this.form_j.gem_size ||
        !this.form_j.gem_name ||
        !this.form_j.gem_pieces ||
        !this.form_j.gem_image
      ) {
        Swal.fire({
          title: "เกิดข้อผิดพลาด",
          text: "กรุณากรอกข้อมูลให้ครบถ้วน",
          icon: "error",
          confirmButtonColor: "#d33",
          confirmButtonText: "กลับ",
        });
        if (!this.form_o.o_id) {
          this.errors_o.o_id = true;
        } else {
          this.errors_o.o_id = false;
        }
        if (!this.form_o.c_id) {
          this.errors_o.c_id = true;
        } else {
          this.errors_o.c_id = false;
        }
        if (!this.form_o.order_date) {
          this.errors_o.order_date = true;
        } else {
          this.errors_o.order_date = false;
        }
        if (!this.form_o.deadline_date) {
          this.errors_o.deadline_date = true;
        } else {
          this.errors_o.deadline_date = false;
        }
        if (!this.form_o.order_image) {
          this.errors_o.order_image = true;
        } else {
          this.errors_o.order_image = false;
        }
        if (!this.form_j.o_id) {
          this.errors_j.o_id = true;
        } else {
          this.errors_j.o_id = false;
        }
        if (!this.form_j.jewelry_type) {
          this.errors_j.jewelry_type = true;
        } else {
          this.errors_j.jewelry_type = false;
        }
        if (!this.form_j.jewelry_piece) {
          this.errors_j.jewelry_piece = true;
        } else {
          this.errors_j.jewelry_piece = false;
        }
        if (!this.form_j.gem_weight) {
          this.errors_j.gem_weight = true;
        } else {
          this.errors_j.gem_weight = false;
        }
        if (!this.form_j.gem_size) {
          this.errors_j.gem_size = true;
        } else {
          this.errors_j.gem_size = false;
        }
        if (!this.form_j.gem_name) {
          this.errors_j.gem_name = true;
        } else {
          this.errors_j.gem_name = false;
        }
        if (!this.form_j.gem_pieces) {
          this.errors_j.gem_pieces = true;
        } else {
          this.errors_j.gem_pieces = false;
        }
        if (!this.form_j.gem_image) {
          this.errors_j.gem_image = true;
        } else {
          this.errors_j.gem_image = false;
        }
      } else {
        Swal.fire({
          title: "ยืนยันการเพิ่มคำสั่งซื้อ",
          text: "โปรดตรวจสอบให้เรียบร้อยก่อนทำการเพิ่มคำสั่งซื้อ",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "ยืนยัน",
          cancelButtonText: "ยกเลิก",
        }).then(async (result) => {
          if (result.isConfirmed) {
            let payload_o = new FormData();
            payload_o.append("o_id", this.form_o.o_id);
            payload_o.append("c_id", this.form_o.c_id);
            payload_o.append("order_date", this.form_o.order_date);
            payload_o.append("deadline_date", this.form_o.deadline_date);
            payload_o.append("status", this.form_o.status);
            payload_o.append("metal", this.form_o.metal);
            payload_o.append("order_image", this.form_o.order_image);

            let payload_j = new FormData();
            payload_j.append("o_id", this.form_j.o_id);
            payload_j.append("jewelry_type", this.form_j.jewelry_type);
            payload_j.append("jewelry_piece", this.form_j.jewelry_piece);
            payload_j.append("gem_weight", this.form_j.gem_weight);
            payload_j.append("gem_size", this.form_j.gem_size);
            payload_j.append("gem_name", this.form_j.gem_name);
            payload_j.append("gem_pieces", this.form_j.gem_pieces);
            payload_j.append("gem_image", this.form_j.gem_image);
            try {
              console.log(this.form_j.gem_image);
              // console.log(this.form_o);
              // console.log(this.form_j);
              let res_o = await axios.post(
                "http://127.0.0.1:8000/api/order",
                payload_o
              );
              let res_j = await axios.post(
                "http://127.0.0.1:8000/api/jewelry-info",
                payload_j
              );
            } catch (e) {
              console.error(e);
            }
            Swal.fire({
              title: "เพิ่มคำสั่งซื้อสำเร็จ!",
              text: "กลับหน้าคำสั่งซื้อ",
              icon: "success",
              confirmButtonColor: "#3085d6",
              confirmButtonText: "กลับ",
            }).then((result) => {
              if (result.isConfirmed) {
                this.$router.push("/order-list");
              }
            });
          } else {
            this.$router.go();
          }
        });
      }
    },
    // typeCheck() {
    //   this.errors = []
    //   if (this.form.pieces == "1") {
    //     this.is1 = true;
    //     this.is2 = false;
    //     this.is3 = false;
    //   } else if (this.form.pieces == "2") {
    //     this.is1 = true;
    //     this.is2 = true;
    //     this.is3 = false;
    //   } else if (this.form.pieces == "3"){
    //     this.is1 = true;
    //     this.is2 = true;
    //     this.is3 = true;
    //   }
    // },
    change() {
      this.$router.push("/select-customer");
    },
  },
};
</script>

<style scoped lang="scss"></style>
