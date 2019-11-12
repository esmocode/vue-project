<template>
  <div>
    <!-- Employer Form  -->
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
    <!-- Employer Form  -->
  </div>
</template>

<script>
import { required, minLength, numeric } from "vuelidate/lib/validators";

export default {
  props: ["employerSalary"],
  data() {
    return {
      state() {
        //If is dirty or touched then show error --------------
        if (this.$v.form.employerSalary.$dirty) {
          return !this.$v.form.employerSalary.$error;
        } else {
          return null;
        }
      },
      form: {
        employerSalary: this.employerSalary
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
      //Do not submit if there's any error ----------------------
      this.$v.form.$touch();
      if (this.$v.form.$anyError) {
        return;
      }
      //Set the Employer budget in App --------------------------
      this.$emit("setEmployerSalary", this.form.employerSalary);
    }
  }
};
</script>