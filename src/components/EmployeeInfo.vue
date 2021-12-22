<template>
  <div class="bg-yellow-50 min-h-screen font-prompt">
    <div>
      <Navbar />
      <div>
        <div class="text-center py-10 pt-24">
          <h2 class="text-6xl font-bold text-yellow-800">
            {{ employee.name }}
          </h2>
        </div>
        <div class="flex justify-center">
          <div class="max-w-xl text-left">
            <div class="flex flex-wrap -mx-3 mb-5 mt-4">
              <div class="w-full px-3 md:mb-0">
                <label
                  class="block tracking-wide text-gray-700 text-3xl font-bold mb-2"
                >
                  ตำแหน่ง : {{ employee.job }}
                </label>
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-5 mt-4">
              <div class="w-full px-3 md:mb-0">
                <label
                  class="block tracking-wide text-gray-700 text-3xl font-bold mb-2"
                >
                  เพศ : {{ employee.gender }}
                </label>
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-5 mt-4">
              <div class="w-full px-3 md:mb-0">
                <label
                  class="block tracking-wide text-gray-700 text-3xl font-bold mb-2"
                >
                  อายุ : {{ employee.age }} ปี
                </label>
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-5 mt-4">
              <div class="w-full px-3 md:mb-0">
                <label
                  class="block tracking-wide text-gray-700 text-3xl font-bold mb-2"
                >
                  วันเกิด : {{ reformat[1] }}
                </label>
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-5 mt-4">
              <div class="w-full px-3 md:mb-0">
                <label
                  class="block tracking-wide text-gray-700 text-3xl font-bold mb-2"
                >
                  วันที่เข้าทำงาน : {{ reformat[0] }}
                </label>
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-5 mt-4">
              <div class="w-full px-3 md:mb-0">
                <label
                  class="block tracking-wide text-gray-700 text-3xl font-bold mb-2"
                >
                  เบอร์ติดต่อ : {{ employee.tel }}
                </label>
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-5 mt-4">
              <div class="w-full px-3 md:mb-0">
                <label
                  class="block tracking-wide text-gray-700 text-3xl font-bold mb-2"
                >
                  เงินเดือน : {{ salaryFormat }} บาท
                </label>
              </div>
            </div>
            <div class="w-full text-2xl font-semibold text-left">
              {{ employee.address }}
            </div>
          </div>
        </div>
        <div class="py-3 text-center text-black">
          <button
            v-on:click="edit(id)"
            class="font-normal text-2xl p-2 w-40 mt-5 bg-yellow-700 text-white hover:bg-yellow-800 transition duration-250"
          >
            <font-awesome-icon :icon="['fas', 'edit']" /> แก้ไข
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
export default {
  data() {
    return {
      id: "",
      employee: {},
      dateF: "",
      dateArr: [],
      reformat: [],
      salaryFormat: "",
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
    async showData(id) {
      let url = `http://127.0.0.1:8000/api/employee-manager/${id}`;
      let response = await axios.get(url);
      this.employee = response.data;
      // console.log(this.employee);
      // console.log(response);
      this.changeFormat(this.employee.start_date);
      this.changeFormat(this.employee.birth_date);
      this.addComma(this.employee.salary);
    },

    async addComma(salary) {
      this.salaryFormat = salary
        .toString()
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,"); //https://blog.abelotech.com/posts/number-currency-formatting-javascript/
      console.log(this.salaryFormat);
    },

    async changeFormat(date) {
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
      this.reformat.push(formatted_date);
    },

    edit(id) {
      this.$router.push({ name: "EditEmployee", params: { id: id } });
    },
  },
};
</script>

<style scoped lang="scss"></style>
