<template>
  <div class="relative">
    <button
      v-if="isOpen"
      @click="isOpen = false"
      class="cursor-default fixed inset-0 bg-black opacity-20 z-10 h-full w-full"
    ></button>
    <button @click="isOpen = !isOpen" tabindex="-1" class="relative z-20 my-1">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-10 w-10 mb-1 md:mr-7 sm:mr-3 rounded-full text-yellow-50"
        fill="none"
        viewBox="0 -1 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <div
        v-if="isOpen"
        class="absolute top-auto right-8 mt-1 w-40 text-left font-prompt bg-yellow-50  text-yellow-700 shadow-xl text-xl rounded-lg "
      >
        <button
          @click="changePassword()"
          class="block px-4 py-2.5 w-40 hover:bg-yellow-700 hover:text-white transition duration-250 "
        >
          เปลี่ยนรหัสผ่าน
        </button>
        <button
          @click="logout()"
          class="block px-4 py-2.5 w-40 rounded-b-lg text-red-500 hover:bg-red-500 hover:text-white transition duration-250 border-t-2"
        >
          ออกจากระบบ
        </button>
      </div>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
  created() {
    const handleEscape = (e) => {
      if (e.key == "Esc" || e.key == "Escape") {
        this.isOpen = false;
      }
    };

    document.addEventListener("keydown", handleEscape);

    this.$once("hook:beforeDestroy", () => {
      document.removeEventListener("keydown", handleEscape);
    });
  },

  methods: {
    logout() {
      this.$router.push("/");
    },
    changePassword() {
      this.$router.push("/change-password");
    },
  },
};
</script>

<style></style>
