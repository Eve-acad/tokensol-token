import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/lara-dark-purple/theme.css'
const app = createApp(App)
app.use(PrimeVue);
app.use(router)

app.mount('#app')
