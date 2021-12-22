<template>
  <div class="bg-yellow-50 min-h-screen font-prompt">
    <div>
      <Navbar />
      <div>
        <div class="py-16 text-center text-yellow-800" v-if="!isReturn">
          <h2 class="font-bold text-6xl">
            รายการเบิกวัตถุดิบ
            <button
              @click="returnMat()"
              class="p-3 text-2xl absolute right-72 cursor-pointer bg-yellow-500 text-yellow-50 hover:bg-yellow-900 hover:text-white transition duration-250 "
            >
              รายการคืน
            </button>
            <button
              @click="add()"
              class="p-3 text-2xl absolute right-24 cursor-pointer bg-yellow-700 text-yellow-50 hover:bg-yellow-900 hover:text-white transition duration-250 "
            >
              <font-awesome-icon :icon="['fas', 'plus']" /> เพิ่มรายการ
            </button>
          </h2>
        </div>
        <div class="py-16 text-center text-yellow-800" v-if="isReturn">
          <h2 class="font-bold text-6xl">
            รายการคืนวัตถุดิบ
            <button
              @click="returnMat()"
              class="p-3 text-2xl absolute right-72 cursor-pointer bg-yellow-500 text-yellow-50 hover:bg-yellow-900 hover:text-white transition duration-250 "
            >
              รายการเบิก
            </button>
            <button
              @click="add()"
              class="p-3 text-2xl absolute right-24 cursor-pointer bg-yellow-700 text-yellow-50 hover:bg-yellow-900 hover:text-white transition duration-250 "
            >
              <font-awesome-icon :icon="['fas', 'plus']" /> เพิ่มรายการ
            </button>
          </h2>
        </div>
      </div>
    </div>
    <div v-if="!isReturn">
      <MaterialListTable />
    </div>
    <div v-if="isReturn">
      <MaterialListReturnTable />
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import MaterialListTable from "@/components/MaterialListTable.vue";
import MaterialListReturnTable from "@/components/MaterialListReturnTable.vue";
export default {
  data() {
    return {
      isReturn: false,
    };
  },
  components: {
    Navbar,
    MaterialListTable,
    MaterialListReturnTable,
  },
  methods: {
    add() {
      this.$router.push("/add-material-list");
    },
    returnMat() {
      this.isReturn = !this.isReturn;
    },
  },
};
</script>

<style scoped lang="scss"></style>
