<template>
  <div>
    <!-- Application Header -->
    <site-header></site-header>

    <b-container>
      <b-row>
        <b-col class="mt-5">
          <div class="tab-container">
            <b-tabs fill>
              <b-tab title="Employee Tab" active>
                <!-- Employee Tab -->
                <employee @setEmployeeSalary="setEmployeeSalary" :salaries="salaries"></employee>
              </b-tab>
              <b-tab title="Employer Tab">
                <!-- Employer Tab -->
                <employer @setEmployerSalary="setEmployerSalary" :salaries="salaries"></employer>
              </b-tab>
            </b-tabs>
          </div>
        </b-col>
      </b-row>
    </b-container>

    <!-- Modal -->
    <modal :success="success"></modal>
  </div>
</template>

<script>
import Modal from './components/Modal'
import Employee from './components/Employee'
import Employer from './components/Employer'
import SiteHeader from './components/SiteHeader'

export default {
  components: {
    Modal,
    Employer,
    Employee,
    SiteHeader
  },
  data () {
    return {
      success: false,
      modalTitle: '',
      salaries: {
        employeeSalary: null,
        employerSalary: null
      }
    }
  },
  methods: {
    setEmployeeSalary (salary) {
      this.salaries.employeeSalary = parseInt(salary)
      this.checkState()
    },
    setEmployerSalary (salary) {
      this.salaries.employerSalary = parseInt(salary)
      this.checkState()
    },
    checkState () {
      // If both entered their amount ----------------------------------------
      if (this.salaries.employeeSalary && this.salaries.employerSalary) {
        // if the amount is equal or less than Employer ----------------------
        if (this.salaries.employeeSalary <= this.salaries.employerSalary) {
          this.success = true
        } else {
          this.success = false
        }
        // Show Modal ----------------------
        this.$bvModal.show('status-modal')
      } // End if;
    }
  }
}
</script>

<style >
@import url("https://fonts.googleapis.com/css?family=Quicksand:300,400,500,600,700&display=swap");
body {
  font-family: "Quicksand", sans-serif !important;
  background-color: #f4f4f4 !important;
}
.tab-content {
  background: #fff;
  border: 1px solid #ccc;
  border-top: 0;
}
.tab-pane {
  max-width: 500px;
  padding: 40px 20px;
  margin: 0 auto;
}
.nav-tabs {
  border: none;
}
.nav-tabs .nav-link,
.nav-tabs .nav-link {
  border-color: #e9ecef #e9ecef transparent !important;
}
.nav-tabs .nav-link {
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
  font-weight: 600;
  border-bottom: none;
}
</style>
