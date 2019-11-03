import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueResource from 'vue-resource'
import mintUi from 'mint-ui'
import 'mint-ui/lib/style.css'

//使用
Vue.use(VueResource);
Vue.use(mintUi);

Vue.config.productionTip = false

new Vue({
	el:'#app',
	router,
	store,
	components:{App},
	render: h => h(App)
}).$mount('#app')
