import Vue from 'vue'
import App from './App'
import assembly from './assembly/index.js'
Vue.config.productionTip = false
Object.keys(assembly).forEach(item=>{//自定义组件
    Vue.component(item,assembly[item])
})
App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
