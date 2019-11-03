import Vue from 'vue'
import Router from 'vue-router'
import muban from '@/views/模版语法'
import cls from '@/views/classStyle'
import condition from '@/views/condition'
import recycle from '@/views/for'
import event from '@/views/event'
import form from '@/views/form'
import self from '@/views/self'
import data from '@/views/data'
import vueDom from '@/views/vueDom'
import transition from '@/views/transition'
import route from '@/views/router'
import vuex from '@/views/vuex'
import slot from '@/views/slot'
import vueSource from '@/views/vueSource'
import mintUi from '@/views/mint-ui'

Vue.use(Router)

export default new Router({
	mode:'history',
	base:'/',
	routes:[
		{
			path:'/cls',
			name:'cls',
			component:cls
		},
		{
			path:'/muban',
			name:'muban',
			component:muban
		},
		{
			path:'/condition',
			name:'condition',
			component:condition
		},
		{
			path:'/recycle',
			name:'recyle',
			component:recycle
		},
		{
			path:'/event/:userId',
			name:'event',
			component:event
		},
		{
			path:'/form',
			name:'form',
			component:form
		},
		{
			path:'/self',
			name:'self',
			component:self
		},
		{
			path:'/data/:userId',//router-link传过来的userId
			name:'data',
			component:data
		},
		{
			path:'/vueDom',
			name:'vueDom',
			component:vueDom
		},
		{
			path:'/transition',
			name:'transition',
			component:transition
		},
		{
				path:'/router',
				name:'router',
				component:route
		},
		{
			path:'/vuex',
			name:'vuex',
			component:vuex
		},
		{
			path:'/slot',
			name:'slot',
			component:slot
		},
		{
			path:'/vueSource',
			name:'vueSource',
			component:vueSource
		},
		{
			path:'/mintui',
			name:'mintUi',
			component:mintUi
		}
	]
})