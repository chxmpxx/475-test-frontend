<template>
  <div class="bg-yellow-50 min-h-screen font-prompt">
    <div>
      <Navbar />
      <div>
        <div class="py-16 text-center text-yellow-800">
          <h2 class="font-bold text-6xl">
            คำสั่งซื้อ
            <button
              @click="add()"
              class="p-3 text-2xl absolute right-24 cursor-pointer bg-yellow-700 text-yellow-50 hover:bg-yellow-900 hover:text-white transition duration-250 "
            >
              <font-awesome-icon :icon="['fas', 'plus']" /> เพิ่มคำสั่งซื้อ
            </button>
          </h2>
        </div>
      </div>
      <OrderTable />
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import OrderTable from "@/components/OrderTable.vue";
export default {
  components: {
    Navbar,
    OrderTable,
  },
  methods: {
    add() {
      this.$router.push("/select-customer");
    },
  },
};
</script>

<style scoped lang="scss"></style>