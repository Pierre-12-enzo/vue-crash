import './assets/main.css'

import 'primeicons/primeicons.css';

import router from './router';


import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';

import { createApp } from 'vue'
import App from './App.vue'

const app =  createApp(App);

app.use(router);
app.use(Toast);



app.mount('#app');


// src/main.js
//import { createApp } from 'vue';
//import App from './App.vue';
//import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
//import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Import Bootstrap JavaScript

//createApp(App).mount('#app');
