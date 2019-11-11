<template>
  <div>
    <b-form @submit.stop.prevent="onSubmit">
      <b-form-group id="example-input-group-1" label="Expectation Salary" label-for="employee-expectation">
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
  </div>
</template>

<script>
import { required, minLength } from "vuelidate/lib/validators";

export default {
  data() {
    return {
      state() {
        if (this.$v.form.employeeSalary.$dirty) {
          return !this.$v.form.employeeSalary.$error;
        } else {
          return null;
        }
      },
      foods: ["apple", "orange"],
      form: {
        employeeSalary: null,
        food: null
      }
    };
  },
  validations: {
    form: {
      employeeSalary: {
        required,
        minLength: minLength(3)
      }
    }
  },
  methods: {
    onSubmit() {
			this.$emit("setEmployeeSalary",this.form.employeeSalary);
      this.$v.form.$touch();
      if (this.$v.form.$anyError) {
        return;
      }

      // Form submit logic
    }
  }
};
</script>