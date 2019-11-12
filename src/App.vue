<template>
  <div>
    <!-- Application Header -->
    <site-header></site-header>

    <b-container>
      <b-row>
        <b-col>
          <b-tabs content-class="mt-3" fill>
            <b-tab title="First" active>
              <employee
                @setEmployeeSalary="setEmployeeSalary"
                :employeeSalary="salaries.employeeSalary"
              ></employee>
            </b-tab>
            <b-tab title="First">
              <employer
                @setEmployerSalary="setEmployerSalary"
                :employerSalary="salaries.employerSalary"
              ></employer>
            </b-tab>
          </b-tabs>
        </b-col>
      </b-row>
    </b-container>

    <modal :success="success"></modal>
  </div>
</template>

<script>
import Modal from "./components/Modal";
import Employee from "./components/Employee";
import Employer from "./components/Employer";
import SiteHeader from "./components/SiteHeader";

export default {
  components: {
    Modal,
    Employer,
    Employee,
    SiteHeader
  },
  data() {
    return {
      success: false,
      modalTitle: "",
      salaries: {
        employeeSalary: null,
        employerSalary: null
      }
    };
  },
  methods: {
    setEmployeeSalary(salary) {
      this.salaries.employeeSalary = parseInt(salary);
      this.checkState();
    },
    setEmployerSalary(salary) {
      this.salaries.employerSalary = parseInt(salary);
      this.checkState();
    },
    checkState() {
      //If both entered their amount ----------------------------------------
      if (this.salaries.employeeSalary && this.salaries.employerSalary) {
        //if the amount is equal or less than Employer ----------------------
        if (this.salaries.employeeSalary <= this.salaries.employerSalary) {
          this.success = true;
        } else {
          this.success = false;
        }
        //Show Modal ----------------------
        this.$bvModal.show("status-modal");
      } //End if;
    }
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Quicksand:300,400,500,600,700&display=swap");
body {
  font-family: "Quicksand", sans-serif !important;
}
</style>