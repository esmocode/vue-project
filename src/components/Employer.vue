<template>
  <div>
    <b-form @submit.stop.prevent="onSubmit">
      <b-form-group label="Your Hiring Budget" label-for="employer-budget">
        <b-form-input
          id="employer-budget"
          name="employer-budget"
          v-model.lazy="$v.form.employerSalary.$model"
          :state="state()"
        ></b-form-input>

        <b-form-invalid-feedback>This is a required field and must be a Number.</b-form-invalid-feedback>
      </b-form-group>

      <b-button type="submit" variant="primary" :disabled="$v.form.$invalid">Submit</b-button>
    </b-form>
  </div>
</template>

<script>
import { required, minLength, numeric } from "vuelidate/lib/validators";

export default {
  data() {
    return {
      state() {
        if (this.$v.form.employerSalary.$dirty) {
          return !this.$v.form.employerSalary.$error;
        } else {
          return null;
        }
      },
      foods: ["apple", "orange"],
      form: {
        employerSalary: null
      }
    };
  },
  validations: {
    form: {
      employerSalary: {
        required,
        numeric
      }
    }
  },
  methods: {
    onSubmit() {
      this.$v.form.$touch();
      this.$emit("setEmployerSalary", this.form.employerSalary);
      if (this.$v.form.$anyError) {
        return;
      }

      // Form submit logic
    }
  }
};
</script>