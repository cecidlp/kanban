import { createApp } from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';

import { createPinia } from 'pinia';
import VueCookies from 'vue-cookies';
import router from './router';
import App from './App.vue';
import style from './assets/style.css'

createApp(App)
  .use(router)
  .use(VueAxios, axios)
  .use(createPinia())
  .use(VueCookies)
  .mount('#app');
