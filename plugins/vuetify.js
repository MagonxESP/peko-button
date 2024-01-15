import '@mdi/font/css/materialdesignicons.css'

import '@/styles/main.scss'
import {createVuetify} from 'vuetify'

export default defineNuxtPlugin((app) => {
	const vuetify = createVuetify({
		// ... your configuration
	})
	app.vueApp.use(vuetify)
})
