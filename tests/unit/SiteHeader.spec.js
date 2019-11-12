import BootstrapVue from 'bootstrap-vue'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import SiteHeader from '../../src/components/SiteHeader.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCheckCircle, faFrownOpen } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
library.add(faLinkedin, faGithub)

const localVue = createLocalVue()

localVue.use(BootstrapVue)
localVue.component('faicon', FontAwesomeIcon)

describe('SiteHeader.vue', () => {
	it('Rendered Title Mohammad Eslami', () => {
		const wrapper = shallowMount(SiteHeader, { localVue })
		expect(wrapper.text()).toContain('Mohammad Eslami | Vue Test')
	})

	it('Github Icon is rendered', () => {
		const wrapper = shallowMount(SiteHeader, { localVue })
		expect(wrapper.find('svg[data-icon="github"]')).toBeDefined();
	});

	it('Linkedin Icon is rendered', () => {
		const wrapper = shallowMount(SiteHeader, { localVue })
		expect(wrapper.find('svg[data-icon="linkedin"]')).toBeDefined();
	});

	
})
