<template>
  <div class="bg-yellow-50 min-h-screen font-prompt">
    <div>
      <Navbar />
      <div>
        <div class="py-16 text-center text-yellow-800">
          <h2 class="font-bold text-6xl">
            รายงาน
          </h2>
        </div>
      </div>
    </div>
    <div>
      <div class="py-3 -mt-10 text-left text-black ml-64">
        <h2 class="font-semibold text-xl">
          การใช้วัตถุดิบทั้งหมด
        </h2>
      </div>
      <ReportTable />
    </div>
    <div class="mt-5">
      <div class="py-3 -mt-10 text-left text-black ml-64">
        <h2 class="font-semibold text-xl">
          คำสั่งซื้อที่เสร็จแล้ว
        </h2>
      </div>
      <ReportOrder />
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import ReportTable from "@/components/ReportTable.vue";
import ReportOrder from "@/components/ReportOrder.vue";
export default {
  components: {
    Navbar,
    ReportTable,
    ReportOrder,
  },
};
</script>

<style scoped lang="scss"></style>
