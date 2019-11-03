<template>
	<div>
		<div>状态管理 全局数据共享</div>
		<div>----------------</div>
		<div>msg: {{msg}}</div>
		<button @click="change">change</button>
		<div>integer: {{integer}}</div>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				msg:123,
				integer:23
			}
		},
		methods:{
			change(){
				//vuex取数据
				this.msg = this.$store.state.count;
				//修改公共数据 调用store.js中action的函数
				this.$store.dispatch('inc',1000);
				this.integer = this.$store.state.num;
			}
		}
	}
</script>

<style>
</style>
