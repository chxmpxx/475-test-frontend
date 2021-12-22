<template>
  <div class="bg-yellow-50 min-h-screen font-prompt">
    <div>
      <Navbar />
      <div>
        <div class="py-16 text-center text-yellow-800">
          <h2 class="font-bold text-6xl">
            รายชื่อลูกค้า
            <button
              @click="add()"
              class="p-3 text-2xl absolute right-24 cursor-pointer bg-yellow-700 text-yellow-50 hover:bg-yellow-900 hover:text-white transition duration-250 "
            >
              <font-awesome-icon :icon="['fas', 'plus']" /> ลงทะเบียนลูกค้า
            </button>
          </h2>
        </div>
      </div>
    </div>
    <CustomerTable />
    </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import CustomerTable from "@/components/CustomerTable.vue";
export default {
  components: {
    Navbar,
    CustomerTable,
  },
  methods: {
    add() {
      this.$router.push("/add-customer");
    },
  },

};
</script>

<style scoped lang="scss"></style>
