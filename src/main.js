import { createApp } from "vue"
import App from "./App.vue"
import "./index.css"
import "element-plus/lib/theme-chalk/index.css"
import { ElButton, ElSelect } from "element-plus"
import router from "./router"
import store from "./store"

createApp(App).use(router).use(store).use(ElButton).use(ElSelect).mount("#app")
