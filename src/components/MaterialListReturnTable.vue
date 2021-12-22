<template>
  <section class="py-1">
    <div class="w-full xl:w-3/4 mb-12 xl:mb-0 px-4 mx-auto">
      <div
        class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 rounded "
      >
        <div class="block w-full overflow-x-auto">
          <table
            class="items-center bg-transparent w-full border-collapse cursor"
          >
            <thead>
              <tr class="bg-yellow-700">
                <th
                  class="px-6 text-yellow-50 align-middle border border-solid border-yellow-100 py-3 text-lg uppercase whitespace-nowrap font-medium text-center"
                >
                  หมายเลข
                </th>
                <th
                  class="px-6 text-yellow-50 align-middle border border-solid border-yellow-100 py-3 text-lg uppercase whitespace-nowrap font-medium text-center"
                >
                  คำสั่งซื้อ
                </th>
                <th
                  class="px-6 text-yellow-50 align-middle border border-solid border-blueGray-100 py-3 text-lg uppercase whitespace-nowrap font-medium text-center"
                >
                  พนักงาน
                </th>
                <th
                  class="px-6 text-yellow-50 align-middle border border-solid border-blueGray-100 py-3 text-lg uppercase whitespace-nowrap font-medium text-center"
                >
                  วัตถุดิบ
                </th>
                <th
                  class="px-6 text-yellow-50 align-middle border border-solid border-blueGray-100 py-3 text-lg uppercase whitespace-nowrap font-medium text-center"
                >
                  ปริมาณที่ได้รับ
                </th>
                <th
                  class="px-6 text-yellow-50 align-middle border border-solid border-blueGray-100 py-3 text-lg uppercase whitespace-nowrap font-medium text-center"
                >
                  วันที่ได้รับ
                </th>
                <th
                  class="px-6 text-yellow-50 align-middle border border-solid border-blueGray-100 py-3 text-lg uppercase whitespace-nowrap font-medium text-center"
                >
                  ปริมาณที่คืน
                </th>
                <th
                  class="px-6 text-yellow-50 align-middle border border-solid border-blueGray-100 py-3 text-lg uppercase whitespace-nowrap font-medium text-center"
                >
                  วันที่ส่งคืน
                </th>
              </tr>
            </thead>

            <tbody>
              <tr
                class="text-center body-table"
                v-for="(reform, index) in reform"
                v-bind:key="index"
                @click="returnMat(reform.m_id, reform.taken_no)"
                :class="
                  reform.return_date != null
                    ? 'cursor-default text-black'
                    : 'cursor-pointer hover:bg-yellow-300'
                "
              >
                <td
                  class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-base whitespace-nowrap p-4 "
                >
                  {{ reform.taken_no }}
                </td>
                <td
                  class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-base whitespace-nowrap p-4 "
                >
                  {{ reform.o_id }}
                </td>
                <td
                  class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-base whitespace-nowrap p-4 "
                >
                  {{ reform.e_name }}
                </td>
                <td
                  class="border-t-0 px-6 align-center border-l-0 border-r-0 text-base whitespace-nowrap p-4"
                >
                  {{ reform.m_name }}
                </td>
                <td
                  class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-base whitespace-nowrap p-4"
                >
                  {{ reform.before_amount }}
                </td>
                <td
                  class="border-t-0 px-6 align-center border-l-0 border-r-0 text-base whitespace-nowrap p-4"
                >
                  {{ reform.taken_date }}
                </td>
                <td
                  class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-base whitespace-nowrap p-4"
                >
                  {{ reform.after_amount }}
                </td>
                <td
                  class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-base whitespace-nowrap p-4"
                >
                  {{ reform.return_date }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Swal from "sweetalert2";
import axios from "axios";
export default {
  data() {
    return {
      after: "",
      MaterialList: {},
      EmployeeList: {},
      Material: {},
      before: "",
      date: "",
      formReturn: {
        total_amount: "",
      },
      reform: [],
      form: [],
      amount: "",
      subform: {
        amount: "",
        m_id: "",
        taken_no: "",
        o_id: "",
        e_name: "",
        m_name: "",
        before_amount: "",
        after_amount: "",
        return_date: "",
        taken_date: "",
      },
      listForm: {
        return_date: "",
        after_amount: "",
      },
    };
  },
  methods: {
    async getId() {},
    async loadUsers() {
      try {
        let response = await axios.get(
          "http://127.0.0.1:8000/api/material-list"
        );
        this.MaterialList = response.data;
        let response2 = await axios.get(
          "http://127.0.0.1:8000/api/employee-manager"
        );
        this.EmployeeList = response2.data;
        let response3 = await axios.get("http://127.0.0.1:8000/api/material");
        this.Material = response3.data;
        await this.assignForm();
        await this.select();
        console.log(this.reform);
        console.log(this.form);
      } catch (e) {
        console.error(e);
      }
    },

    async assignForm() {
      for (let i = 0; i < this.MaterialList.length; i++) {
        this.subform.taken_no = this.MaterialList[i].taken_no;
        this.subform.o_id = this.MaterialList[i].o_id;
        this.subform.after_amount = this.MaterialList[i].after_amount;
        for (let j = 0; j < this.EmployeeList.length; j++) {
          if (this.MaterialList[i].e_id == this.EmployeeList[j].id) {
            this.subform.e_name = this.EmployeeList[j].name;
            break;
          }
        }
        for (let j = 0; j < this.Material.length; j++) {
          if (
            this.MaterialList[i].m_id == this.Material[j].m_id &&
            this.Material[j].m_type != "เงิน"
          ) {
            this.subform.m_name =
              this.Material[j].m_type +
              " " +
              this.Material[j].m_weight +
              " " +
              this.Material[j].color;
            this.subform.m_id = this.MaterialList[i].m_id;
            break;
          } else if (
            this.MaterialList[i].m_id == this.Material[j].m_id &&
            this.Material[j].m_type == "เงิน"
          ) {
            this.subform.m_name = this.Material[j].m_type;
            this.subform.m_id = this.MaterialList[i].m_id;
            break;
          }
        }
        this.subform.before_amount = this.MaterialList[i].before_amount;
        this.subform.return_date = this.MaterialList[i].return_date;
        this.subform.taken_date = this.MaterialList[i].taken_date;

        this.form.push({
          m_id: this.subform.m_id,
          taken_no: this.subform.taken_no,
          o_id: this.subform.o_id,
          e_name: this.subform.e_name,
          m_name: this.subform.m_name,
          before_amount: this.subform.before_amount,
          return_date: this.subform.return_date,
          after_amount: this.subform.after_amount,
          taken_date: this.subform.taken_date,
        });
      }
    },

    async select() {
      for (let i = 0; i < this.form.length; i++) {
        if (this.form[i].after_amount != null) {
          this.reform.push({
            m_id: this.form[i].m_id,
            taken_no: this.form[i].taken_no,
            o_id: this.form[i].o_id,
            e_name: this.form[i].e_name,
            m_name: this.form[i].m_name,
            before_amount: this.form[i].before_amount,
            return_date: this.form[i].return_date,
            after_amount: this.form[i].after_amount,
            taken_date: this.form[i].taken_date,
          });
        }
      }
    },

    async getList(tid) {
      for (let i = 0; i < this.MaterialList.length; i++) {
        if (tid == this.MaterialList[i].taken_no) {
          this.listForm.return_date = this.MaterialList[i].return_date;
          this.before = this.MaterialList[i].before_amount;
          break;
        }
      }
    },

    async returnMat(mid, tid) {
      this.getList(tid);
      for (let i = 0; i < this.Material.length; i++) {
        if (mid == this.Material[i].m_id) {
          this.formReturn.total_amount = this.Material[i].total_amount;
          break;
        }
      }
      for (let i = 0; i < this.MaterialList.length; i++) {
        if (tid == this.MaterialList[i].taken_no) {
          console.log(this.MaterialList[i].after_amount);
          this.after = this.MaterialList[i].after_amount;
          break;
        }
      }
      if (this.after == null) {
        Swal.fire({
          title: "คืนวัตถุดิบ",
          text: "กรุณากรอกปริมาณวัตถุดิบคงเหลือ",
          input: "number",
          icon: "info",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "ยืนยัน",
          cancelButtonText: "ยกเลิก",
        }).then((result) => {
          if (result.isConfirmed) {
            if (result.value >= 0 && result.value <= this.before) {
              this.formReturn.total_amount += parseInt(result.value);
              let response = axios.put(
                `http://127.0.0.1:8000/api/material/${mid}`,
                this.formReturn,
                mid
              );
              // this.getDate();
              this.date = new Date().toISOString().slice(0, 10);
              console.log(this.date);
              this.listForm.return_date = this.date;
              this.listForm.after_amount = result.value;
              console.log(this.listForm);
              console.log(tid);
              let response2 = axios.put(
                `http://127.0.0.1:8000/api/material-list/${tid}`,
                this.listForm,
                tid
              );
              Swal.fire({
                title: "คืนวัตถุดิบสำเร็จ!",
                icon: "success",
                confirmButtonColor: "#3085d6",
                confirmButtonText: "ยืนยัน",
              }).then((result) => {
                if (result.isConfirmed) {
                  this.$router.go();
                }
              });
            } else {
              Swal.fire({
                title: "เกิดข้อผิดพลาด",
                text: "ตัวเลขไม่ถูกต้อง",
                icon: "error",
                confirmButtonColor: "#d33",
                confirmButtonText: "กลับ",
              });
            }
          }
        });
      }
    },
    // async getDate() {
    //   let i = [];
    //   this.date = new Date().toLocaleDateString();
    //   i = this.date.split("/");
    //   this.date = i[2] + "-" + i[0] + "-" + i[1];
    //   console.log(this.date);
    // },
  },

  async created() {
    await this.loadUsers();
  },
};
</script>

<style scoped lang="scss">
.body-table {
  background-color: #ebcbb3;
}

tr:nth-child(even) {
  background-color: #dcb9a4;
}
</style>
