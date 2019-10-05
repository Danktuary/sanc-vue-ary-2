import Vue from 'vue';
import VueRouter from 'vue-router';
import aos from 'aos';
import axios from 'axios';
import { loadProgressBar } from 'axios-progress-bar';
import router from './router.js';
import App from './App.vue';

aos.init({ once: true });
loadProgressBar();

// eslint-disable-next-line no-undef
axios.defaults.baseURL = process.env.VUE_APP_API_BASE;

Vue.use(VueRouter);
Vue.config.productionTip = false;

new Vue({
	router,
	render: h => h(App),
}).$mount('#app');
