
<template>
	<div>
		<div>模版语法</div>
		<div>------------------------</div>
		<div>
			data:{{msg}}
		</div>
		<div>------------------------</div>
		<div>{{number+100}}</div>
		<div>-------------------------</div>
		<h2 v-html="rawHtml"></h2>
		<div v-bind:class="red"></div>
		<div @click="change">修改颜色</div>
		<div v-on:click="say()">v-on事件</div>
		<div>{{message | capitalize}}</div>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				msg:"hello world",
				number:10,
				rawHtml:'<span>123</span>',
				red:'green active',
				message:"被过滤"
			}
		},
		methods:{
			change(){
				this.red = 'blue';
			},
			say(){
				alert("hi yep");
			}
		},
		//过滤器
		filters:{
			capitalize(){
				return '123';
			}
		}
	}
</script>

<style>
</style>
