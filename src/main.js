import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import Vuelidate from 'vuelidate'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

library.add(faLinkedin, faGithub)

Vue.component('faicon', FontAwesomeIcon)
Vue.use(Vuelidate)
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
