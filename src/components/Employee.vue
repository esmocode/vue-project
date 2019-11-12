<template>
  <div>
    <!-- Employee Form  -->
    <b-form @submit.stop.prevent="onSubmit">
      <b-form-group label="Expectation Salary" label-for="employee-expectation">
        <b-form-input
          id="employee-expectation"
          name="employee-expectation" :disabled="loadingCheck()"
          v-model.lazy="$v.form.employeeSalary.$model"
          :state="state()"
        ></b-form-input>
        <b-form-invalid-feedback>This is a required field and must be a Number.</b-form-invalid-feedback>
      </b-form-group>
      <b-button type="submit" variant="primary" :disabled="$v.form.$invalid||loadingCheck()">
        <b-spinner v-if="loadingCheck()" small type="grow"></b-spinner>
        {{btnText}}
      </b-button>
    </b-form>
    <!-- Employee Form  -->
  </div>
</template>

<script>
import { required, numeric } from 'vuelidate/lib/validators'

export default {
  props: ['salaries'],
  data () {
    return {
      state () {
        // If is dirty or touched then show error --------------
        if (this.$v.form.employeeSalary.$dirty) {
          return !this.$v.form.employeeSalary.$error
        } else {
          return null
        }
      },
      form: {
        employeeSalary: this.salaries.employeeSalary
      }
    }
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
    onSubmit () {
      // Do not submit if there's any error ----------------------
      this.$v.form.$touch()
      if (this.$v.form.$anyError) {
        return
      }
      // Set the Employer budget in App --------------------------
      this.$emit('setEmployeeSalary', this.form.employeeSalary)
    },
    loadingCheck () {
      if (this.salaries.employeeSalary && !this.salaries.employerSalary) {
        return true
      } else {
        return false
      }
    }
  },
  computed: {
    btnText: {
      get () {
        if (this.loadingCheck()) {
          return 'Waiting For Employer ...'
        } else {
          return 'Submit'
        }
      },
      set () {}
    }
  }
}
</script>
