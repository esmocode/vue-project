<template>
  <div>
    <b-container class="bv-example-row">
      <b-row>
        <b-col>
          <b-tabs content-class="mt-3" fill>
            <b-tab title="First" active>
              <employee @setEmployeeSalary="setEmployeeSalary"></employee>
            </b-tab>
            <b-tab title="First">
              <p>I'm the first tab</p>
            </b-tab>
          </b-tabs>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { required, minLength } from "vuelidate/lib/validators";
import Employee from "./components/Employee";

export default {
  components: {
    Employee
  },
  data() {
    return {
      employeeSalary: null,
      employerSalary: null
    };
  },
  methods: {
    setEmployeeSalary(salary) {
      this.employeeSalary = salary;
    },
    setEmployerSalary(salary) {
      this.employerSalary = salary;
    }
  }
};
</script>