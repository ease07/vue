import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex) //全局使用vuex

export default new Vuex.Store({
	state:{
		count:0,
		num:1
	},
	mutations:{
		increment(state, num){
			state.count++;
			state.num = num;
		}
	},
	actions:{
		//调用mutations的函数
		inc({commit}, obj){
			commit('increment', obj)
		}
	}
})