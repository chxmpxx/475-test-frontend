<template>
  <div class="bg-yellow-50 min-h-screen font-prompt">
    <div>
      <Navbar />
      <div>
        <div class="py-16 text-center text-yellow-800">
          <h2 class="font-bold text-6xl">
            วัตถุดิบ
          </h2>
        </div>
      </div>
      <MaterialTable />
      </div>
    
    </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import MaterialTable from "@/components/MaterialTable.vue";
export default {
  components: {
    Navbar,
    MaterialTable,
  },
  methods: {
    add() {
      this.$router.push("/add-material");
    },
  },

};
</script>

<style scoped lang="scss"></style>
