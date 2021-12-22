<template>
  <div class="bg-yellow-50 min-h-screen font-prompt">
    <div>
      <Navbar />
      <div>
        <div class="py-16 text-center text-yellow-800">
          <h2 class="font-bold text-6xl">
            รายชื่อพนักงาน
            <button
              @click="add()"
              class="p-3 text-2xl absolute right-24 cursor-pointer bg-yellow-700 text-yellow-50 hover:bg-yellow-900 hover:text-white transition duration-250 "
            >
              <font-awesome-icon :icon="['fas', 'plus']" /> เพิ่มพนักงาน
            </button>
          </h2>
        </div>
      </div>
    </div>
    <Table />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Table from "@/components/Table.vue";
export default {
  components: {
    Navbar,
    Table,
  },
  methods: {
    add() {
      this.$router.push("/add-employee");
    },
  },
};
</script>

<style scoped lang="scss"></style>
