import { createApp } from 'vue'
import App from './App.vue'
import 'lib-flexible'
import Vant from 'vant';
import 'vant/lib/index.css';
import store from "./store"
import router from "./router";


createApp(App)
    .use(Vant)
    .use(store)
    .use(router)
    .mount('#app')
