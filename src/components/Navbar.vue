<template>
  <div class="sm:flex">
    <div class="sm:flex sm:justify-between font-sans bg-yellow-700 w-full py-1">
      <div class="flex justify-between px-4 text-yellow-50 text-3xl">
        <a class="flex mb-3" href="http://localhost:8080/order-list">
          <img
            class="block h-8 w-auto mt-3"
            src="../assets/logo.png"
            alt="J&K"
          />
          <div class="hidden lg:block font-semibold px-5 mt-2.5">
            J&K Factory and Sell
          </div>
          <div class="lg:hidden block font-semibold px-5 mt-2.5">
            J&K
          </div>
        </a>
        <button @click="isOpen = !isOpen" class="sm:absolute sm:hidden">
          <font-awesome-icon
            :icon="['fas', 'bars']"
            class="text-white text-3xl"
            v-if="!isOpen"
          />
          <font-awesome-icon
            :icon="['fas', 'times']"
            class="text-white text-3xl"
            v-if="isOpen"
          />
        </button>
      </div>
      <div :class="isOpen ? 'block' : 'hidden'" class="sm:block pt-1">
        <div
          class="md:space-x-5 sm:text-2xl text-xl relative sm:flex font-prompt"
        >
          <a
            class="p-3 block text-yellow-50 sm:hover:text-yellow-400 sm:hover:bg-yellow-700 hover:bg-yellow-800 transition duration-250"
            href="http://localhost:8080/order-list"
            >คำสั่งซื้อ</a
          >
          <a
            class="p-3 block text-yellow-50 sm:hover:text-yellow-400 sm:hover:bg-yellow-700 hover:bg-yellow-800 transition duration-250"
            href="http://localhost:8080/customer"
            >ลูกค้า</a
          >
          <a
            class="p-3 block text-yellow-50 sm:hover:text-yellow-400 sm:hover:bg-yellow-700 hover:bg-yellow-800 transition duration-250"
            href="http://localhost:8080/material"
            >วัตถุดิบ</a
          >
          <a
            class="p-3 block text-yellow-50 sm:hover:text-yellow-400 sm:hover:bg-yellow-700 hover:bg-yellow-800 transition duration-250"
            href="http://localhost:8080/material-list"
            >รายการเบิก-คืนวัตถุดิบ</a
          >
          <a
            class="p-3 block text-yellow-50 sm:hover:text-yellow-400 sm:hover:bg-yellow-700 hover:bg-yellow-800 transition duration-250 border-b-2 border-opacity-20 sm:border-opacity-0"
            href="http://localhost:8080/employee"
            >พนักงาน</a
          >
          <a
            class="p-3 block text-yellow-50 sm:hover:text-yellow-400 sm:hover:bg-yellow-700 hover:bg-yellow-800 transition duration-250 border-b-2 border-opacity-20 sm:border-opacity-0"
            href="http://localhost:8080/report"
            >รายงาน</a
          >
          <Account class="hidden sm:block" />
        </div>
        <div class="relative sm:hidden ">
          <div tabindex="-1" class="relative z-10 my-1 ">
            <div class="flex items-center mt-3"></div>
            <div
              class="absolute top-auto right-0 w-full text-left font-prompt text-white rounded-b-lg bg-yellow-700 shadow-xl text-xl "
            >
              <a
                class="block px-3 py-2.5 hover:bg-yellow-800 transition duration-250 "
                href=""
                >เปลี่ยนรหัสผ่าน</a
              >
              <a
                class="block px-4 py-2.5 rounded-b-lg text-red-50 bg-red-500 hover:bg-red-600 transition duration-250 border-1 border-t-2"
                href="http://localhost:8080/"
                >ออกจากระบบ</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Account from "@/components/Account.vue";
export default {
  components: {
    Account,
  },
  data() {
    return {
      isOpen: false,
    };
  },
};
</script>

<style scoped lang="scss"></style>
