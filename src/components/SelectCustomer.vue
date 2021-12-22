<template>
  <div class="bg-yellow-50 min-h-screen font-prompt">
    <div>
      <Navbar />
      <div>
        <div class="py-16 text-center text-yellow-800">
          <h2 class="font-bold text-6xl">
            เลือกลูกค้าที่จะเพิ่มคำสั่งซื้อ
          </h2>
        </div>
      </div>
    </div>
    <AddOrderTable />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import AddOrderTable from "@/components/AddOrderTable.vue";
export default {
  components: {
    Navbar,
    AddOrderTable,
  },
};
</script>

<style scoped lang="scss"></style>
