import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import VueAxios from 'vue-axios';
import axios from 'axios';

createApp(App).use(VueAxios, axios).use(store).use(router).mount('#app');
