import Vue from 'vue'
import App from './App.vue'
import Vuelidate from 'vuelidate'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCheckCircle, faFrownOpen } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import './plugins/bootstrap-vue'
library.add(faLinkedin, faGithub, faCheckCircle, faFrownOpen)

Vue.component('faicon', FontAwesomeIcon)
Vue.use(Vuelidate)
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
