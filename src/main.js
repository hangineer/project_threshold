import { createApp } from 'vue';
import App from './App.vue';
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

//element-plus
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'
// import { ElButton } from 'element-plus'
// const  app = createApp(App)
// app.use("ElementPlus")
// app.use("ElButton")
// app.use("reset-css")
// app.use("bootstrap")
createApp(App).mount('#app');
