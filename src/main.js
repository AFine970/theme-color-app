import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './styles/reset.css'
import { changeColor, getStorageColor } from './util/colorUtil'

const themeColor = getStorageColor('--theme-color')
const themeFontColor = getStorageColor('--theme-font-color')
if (themeColor) {
    changeColor('--theme-color', themeColor)
}
if (themeFontColor) {
    changeColor('--theme-font-color', themeFontColor)
}

const app = createApp(App)
app.use(ElementPlus)
app.mount('#app')
