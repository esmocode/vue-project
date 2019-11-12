import BootstrapVue from 'bootstrap-vue'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Modal from '../../src/components/Modal.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCheckCircle, faFrownOpen } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
library.add(faCheckCircle, faFrownOpen)
const localVue = createLocalVue()
localVue.use(BootstrapVue)
localVue.component('faicon', FontAwesomeIcon)

describe('Modal.vue', () => {

	it('It shoule Print Success', () => {
		const wrapper = shallowMount(Modal, {
			localVue,
			propsData: {
				success: true
			}
		})
		expect(wrapper.text()).toContain('Success!')
		expect(wrapper.find('svg[data-icon="check-circle"]')).toBeDefined()
	})

	it('Is success icon Rendered', () => {
		const wrapper = shallowMount(Modal, {
			localVue,
			propsData: {
				success: true
			}
		})
		expect(wrapper.find('svg[data-icon="check-circle"]')).toBeDefined()
	})

	it('It shoule Print Failed', () => {
		const wrapper = shallowMount(Modal, {
			localVue,
			propsData: {
				success: false
			}
		})
		expect(wrapper.text()).toContain('Failed!')
	})

	it('Is the failed icon rendered', () => {
		const wrapper = shallowMount(Modal, {
			localVue,
			propsData: {
				success: false
			}
		})
		expect(wrapper.find('svg[data-icon="frown-open"]')).toBeDefined()
	})

})
