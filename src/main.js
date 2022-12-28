import { createApp } from 'vue'
import App from './App.vue'

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap"
// import '@/scss/bootstrap-custom.scss'; 

//css-reset
import "reset-css";

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
