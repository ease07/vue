<template>
	<div>
		<h2>移动组件库Mint-UI</h2>
		<div>---------------------------</div>
		<div>
			<mt-tabbar v-model="selected">
				<mt-tab-item id="tab1">
					<img slot="icon" src="../assets/waimai.png">
					外卖
				</mt-tab-item>
				<mt-tab-item id="tab2">
					<img slot="icon" src="../assets/waimai.png">
					订单
				</mt-tab-item>
				<mt-tab-item id="tab3">
					<img slot="icon" src="../assets/waimai.png">
					发现
				</mt-tab-item>
				<mt-tab-item id="tab4">
					<img slot="icon" src="../assets/waimai.png">
					我的
				</mt-tab-item>
			</mt-tabbar>
		</div>
	</div>
</template>

<script>
	//使用组件
	import Vue from 'vue'
	//import { Toast } from 'mint-ui'
	import {MessageBox} from 'mint-ui'
	import { Tabbar, TabItem } from 'mint-ui'
	
	//注册组件
	Vue.component(Tabbar.name, Tabbar);
	Vue.component(TabItem.name, TabItem);
	
	
	
	export default{
		data(){
			return {
				selected:true
			}
		},
		mounted(){
			//调用组件库
			//此时没有样式 需要在main.js中导入
			//Toast('提示信息');
			//Toast('Upload Complete');
			MessageBox('提示', '操作成功');
			// MessageBox({
			// 	title: 'Notice',
			// 	message: 'Are you sure?',
			// 	showCancelButton: true
			// });
			
		}
	}
</script>

<style>
</style>
