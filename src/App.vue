<template>
  <div>
		<!-- Application Header -->
		<site-header></site-header>

    <b-container>
      <b-row>
        <b-col>
          <b-tabs content-class="mt-3" fill>
            <b-tab title="First" active>
              <employee @setEmployeeSalary="setEmployeeSalary" :employeeSalary="salaries.employeeSalary"></employee>
            </b-tab>
            <b-tab title="First">
              <employer @setEmployerSalary="setEmployerSalary" :employerSalary="salaries.employerSalary"></employer>
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
import Employee from "./components/Employee";
import Employer from "./components/Employer";
import SiteHeader from "./components/SiteHeader"

export default {
  components: {
    Employee,
		Employer,
		SiteHeader
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
	watch: {

	},
  updated() {
		console.log("updated",this.salaries);
    if (this.salaries.employeeSalary && this.salaries.employerSalary) {
			this.$bvModal.show("modal-1");
    }
  },

};
</script>