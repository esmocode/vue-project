<template>
  <div>
    <div v-if="salaries.employeeSalary&&salaries.employerSalary">woohooo we have both</div>
    <b-container class="bv-example-row">
      <b-row>
        <b-col>
          <b-tabs content-class="mt-3" fill>
            <b-tab title="First" active>
              <employee @setEmployeeSalary="setEmployeeSalary"></employee>
            </b-tab>
            <b-tab title="First">
              <employer @setEmployerSalary="setEmployerSalary"></employer>
            </b-tab>
          </b-tabs>
        </b-col>
      </b-row>
    </b-container>
    
		<div>
      <b-modal id="modal-1" :title="modalTitle">
        <p class="my-4">Hello from modal!</p>
      </b-modal>
    </div>

  </div>
</template>

<script>
import { required, minLength } from "vuelidate/lib/validators";
import Employee from "./components/Employee";
import Employer from "./components/Employer";

export default {
  components: {
    Employee,
    Employer
  },
  data() {
    return {
			modalTitle:"",
      salaries: {
        employeeSalary: null,
        employerSalary: null
      }
    };
  },
  methods: {
    setEmployeeSalary(salary) {
      this.salaries.employeeSalary = salary;
      console.log(this.salaries);
    },
    setEmployerSalary(salary) {
      this.salaries.employerSalary = salary;
      console.log(this.salaries);
    }
  },
  updated() {
    if (this.salaries.employeeSalary && this.salaries.employerSalary) {
			this.$bvModal.show("modal-1");
    }
  },

};
</script>