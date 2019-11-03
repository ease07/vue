<template>
	<div>
		<div>vue-router</div>
		<div>-------------------</div>
		<router-link to="/self">self</router-link>
		<!-- 跳转时传递参数 name是component中的名字-->
		<div>--------------</div>
		<!-- 去路由文件配置path参数 -->
		<router-link v-bind:to="{name:'data', params:{userId:123}}">data</router-link>
		<div>---------------------</div>
		<!-- ?形式 -->
		<router-link :to="{name:'cls',params:{userId:567},query:{plan:'private'}}">cls</router-link>
		<div>----------------------</div>
		<button @click="toURL">跳转页面</button>
		
	</div>
</template>

<script>
	export default{
		data(){
			return {
				
			}
		},
		methods:{
			toURL(){
				//this.$router.push({path:'/form'})
				//this.$router.push({name:'event',params:{userId:678}})
				this.$router.push({name:'event',params:{userId:999},query:{plan:'public'}})
			}
		}
	}
</script>

<style>
</style>
