import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";
import OrderList from "../views/OrderList.vue";
import AddOrder from "../views/AddOrder.vue";
import Employee from "../views/Employee.vue";
import EmployeeInfo from "../views/EmployeeInfo.vue";
import EditEmployee from "../views/EditEmployee.vue";
import AddEmployee from "../views/AddEmployee.vue";
import MaterialList from "../views/MaterialList.vue";
import AddMaterialList from "../views/AddMaterialList.vue";
import Customer from "../views/Customer.vue";
import CustomerInfo from "../views/CustomerInfo.vue";
import EditCustomer from "../views/EditCustomer.vue";
import AddCustomer from "../views/AddCustomer.vue";
import Material from "../views/Material.vue";
import SelectCustomer from "../views/SelectCustomer.vue";
import OrderInfo from "../views/OrderInfo.vue";
import ChangePassword from "../views/ChangePassword.vue";
import Report from "../views/Report.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/order-list",
    name: "OrderList",
    component: OrderList,
  },
  {
    path: "/order-info/:id",
    name: "OrderInfo",
    component: OrderInfo,
  },
  {
    path: "/add-order/:id",
    name: "AddOrder",
    component: AddOrder,
  },
  {
    path: "/employee",
    name: "Employee",
    component: Employee,
  },
  {
    path: "/employee-info/:id",
    name: "EmployeeInfo",
    component: EmployeeInfo,
  },

  {
    path: "/add-employee",
    name: "AddEmployee",
    component: AddEmployee,
  },
  {
    path: "/edit-employee/:id",
    name: "EditEmployee",
    component: EditEmployee,
  },
  {
    path: "/material-list",
    name: "MaterialList",
    component: MaterialList,
  },
  {
    path: "/add-material-list",
    name: "AddMaterialList",
    component: AddMaterialList,
  },
  {
    path: "/customer",
    name: "Customer",
    component: Customer,
  },
  {
    path: "/customer-info/:id",
    name: "CustomerInfo",
    component: CustomerInfo,
  },
  {
    path: "/edit-customer/:id",
    name: "EditCustomer",
    component: EditCustomer,
  },
  {
    path: "/add-customer",
    name: "AddCustomer",
    component: AddCustomer,
  },
  {
    path: "/select-customer",
    name: "SelectCustomer",
    component: SelectCustomer,
  },
  {
    path: "/material",
    name: "Material",
    component: Material,
  },
  {
    path: "/change-password",
    name: "ChangePassword",
    component: ChangePassword,
  },
  {
    path: "/report",
    name: "Report",
    component: Report,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
