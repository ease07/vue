<template>
	<div>
		<div>事件处理器</div>
		<div>--------------------</div>
		
		<div id="example-1">
			<button v-on:click="counter+=1">{{counter}}</button>
			<p>这个按钮被点击了{{counter}}次</p>
		</div>
		
		<div>-------------</div>
		<div id="example-2">
			<button @click="greet()">Greet</button>
		</div>
		
		<div>-----------</div>
		<div id="example-3">
			<button @click="say('hi')">say</button>
		</div>
	
		<!-- @click.stop阻止冒泡 --> 
		<div>---------------</div>
		<div @click="dothing2">
			<button @click.stop="dothing1">
				dothis
			</button>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				counter:0
			}
		},
		methods:{
			greet(){
				this.counter+=1;
				alert("greet");
			},
			say(h){
				alert(h);
			},
			dothing1(){
				alert('dothing1');
			},
			dothing2(){
				alert('dothing2');
			}
		},
		mounted(){
			alert(this.$route.params.userId);
			alert(this.$route.query.plan);
		}
	}
</script>

<style>
	
</style>