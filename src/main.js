import { createApp } from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import App from './App.vue';
import style from './assets/style.css'

import router from './router';

createApp(App).use(router).use(VueAxios, axios).mount('#app');
