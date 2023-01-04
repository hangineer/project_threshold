import { createApp } from 'vue';
import App from './App.vue';
// import router from './router';
// import axios from 'axios';
// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap"
// import '@/scss/bootstrap-custom.scss'; 

//css-reset
import "reset-css";

//axios instance
// const instance = axios.create({
//     baseURL: "http://localhost:3000/",
//     headers: { 'Content-Type': 'application/json' },
//     // headers: { "X-Requested-With": "XMLHttpRequest" },
//   });

createApp(App).mount('#app');
