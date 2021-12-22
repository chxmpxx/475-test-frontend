<template>
  <section class="py-1">
    <div class="w-full xl:w-3/5 mb-12 xl:mb-0 px-4 mx-auto">
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
              >
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
  props: {
    o_info: {},
  },
  data() {
    return {
      after: "",
      MaterialList1: [],
      MaterialList2: [],
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
        this.MaterialList1 = response.data;

        for (var i = 0; i < this.MaterialList1.length; i++) {
          if (this.MaterialList1[i].o_id == this.o_info.o_id) {
            this.MaterialList2.push(this.MaterialList1[i]);
          }
        }

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
      for (let i = 0; i < this.MaterialList2.length; i++) {
        this.subform.taken_no = this.MaterialList2[i].taken_no;
        this.subform.o_id = this.MaterialList2[i].o_id;
        this.subform.after_amount = this.MaterialList2[i].after_amount;
        for (let j = 0; j < this.EmployeeList.length; j++) {
          if (this.MaterialList2[i].e_id == this.EmployeeList[j].id) {
            this.subform.e_name = this.EmployeeList[j].name;
            break;
          }
        }
        for (let j = 0; j < this.Material.length; j++) {
          if (
            this.MaterialList2[i].m_id == this.Material[j].m_id &&
            this.Material[j].m_type != "เงิน"
          ) {
            this.subform.m_name =
              this.Material[j].m_type +
              " " +
              this.Material[j].m_weight +
              " " +
              this.Material[j].color;
            this.subform.m_id = this.MaterialList2[i].m_id;
            break;
          } else if (
            this.MaterialList2[i].m_id == this.Material[j].m_id &&
            this.Material[j].m_type == "เงิน"
          ) {
            this.subform.m_name = this.Material[j].m_type;
            this.subform.m_id = this.MaterialList2[i].m_id;
            break;
          }
        }
        this.subform.before_amount = this.MaterialList2[i].before_amount;
        this.subform.return_date = this.MaterialList2[i].return_date;
        this.subform.taken_date = this.MaterialList2[i].taken_date;

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
      for (let i = 0; i < this.MaterialList2.length; i++) {
        if (tid == this.MaterialList2[i].taken_no) {
          this.listForm.return_date = this.MaterialList2[i].return_date;
          this.before = this.MaterialList2[i].before_amount;
          break;
        }
      }
    },
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
