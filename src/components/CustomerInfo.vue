<template>
  <div class="bg-yellow-50 min-h-screen font-prompt">
    <div>
      <Navbar />
      <div>
        <div class="text-center py-10 pt-32">
          <h2 class="text-6xl font-bold text-yellow-800">
            {{ customer.c_name }}
          </h2>
        </div>
        <div class="flex justify-center">
          <div class="flex flex-wrap w-1/4 max-w-4xl text-left">
            <div class="flex flex-wrap -mx-3 mb-5 mt-4">
              <div class="w-full px-3 md:mb-4">
                <label
                  class="block tracking-wide text-gray-700 text-3xl font-bold mb-2"
                >
                  เบอร์ติดต่อ : {{ customer.c_phone }}
                </label>
              </div>
              <div class="w-full px-3 md:mb-0">
                <label
                  class="block tracking-wide text-gray-700 text-3xl font-bold mb-2"
                >
                  ประเภท : {{ customer.type }}
                </label>
              </div>
            </div>
            <div class="w-full text-2xl font-semibold text-left">
              {{ customer.address }}
            </div>
          </div>
        </div>
        <div class="py-3 text-center text-black">
          <button
            v-on:click="edit(id)"
            class="font-normal text-2xl p-2 w-40 mt-14 bg-yellow-700 text-white hover:bg-yellow-800 transition duration-250"
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
      customer: {},
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
      let url = `http://127.0.0.1:8000/api/customer/${id}`;
      let response = await axios.get(url);
      this.customer = response.data;
      console.log(this.customer);
      // console.log(response);
    },
    edit(id) {
      this.$router.push({ name: "EditCustomer", params: { id: id } });
    },
  },
};
</script>

<style scoped lang="scss"></style>
