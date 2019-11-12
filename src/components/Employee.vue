<template>
  <div>
    <!-- Employee Form  -->
    <b-form @submit.stop.prevent="onSubmit">
      <b-form-group
        id="example-input-group-1"
        label="Expectation Salary"
        label-for="employee-expectation"
      >
        <b-form-input
          id="employee-expectation"
          name="employee-expectation"
          v-model.lazy="$v.form.employeeSalary.$model"
          :state="state()"
        ></b-form-input>
        <b-form-invalid-feedback>This is a required field and must be a Number.</b-form-invalid-feedback>
      </b-form-group>
      <b-button type="submit" variant="primary" :disabled="$v.form.$invalid">Submit</b-button>
    </b-form>
    <!-- Employee Form  -->
  </div>
</template>

<script>
import { required, minLength, numeric } from "vuelidate/lib/validators";

export default {
	props:["employeeSalary"],
  data() {
    return {
      state() {
        //If is dirty or touched then show error --------------
        if (this.$v.form.employeeSalary.$dirty) {
          return !this.$v.form.employeeSalary.$error;
        } else {
          return null;
        }
      },
      foods: ["apple", "orange"],
      form: {
        employeeSalary: this.employeeSalary,
        food: null
      }
    };
  },
  validations: {
    form: {
      employeeSalary: {
        required,
        numeric
      }
    }
	},
  methods: {
    onSubmit() {
      //Do not submit if there's any error ----------------------
      this.$v.form.$touch();
      if (this.$v.form.$anyError) {
				return;
			}
			//Set the Employer budget in App --------------------------
			this.$emit("setEmployeeSalary", this.form.employeeSalary);
    }
  }
};
</script>