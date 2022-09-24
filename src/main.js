import { createApp } from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';

import { library } from '@fortawesome/fontawesome-svg-core';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

/* import specific icons */
import { faUser } from '@fortawesome/free-solid-svg-icons';
import router from './router';
import App from './App.vue';

/* add icons to the library */
library.add(faUser);

createApp(App)
  .use(router)
  .use(VueAxios, axios)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app');
