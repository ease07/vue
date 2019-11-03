<template>
	<!-- 填入自定义组件传过来的值 -->
	<p v-bind:style="{'color':color,'backgroundColor':bgColor,'fontSize':fontSize+'px'}">{{time}}</p>
</template>

<script>
	
	export default{
		data(){
			return {
				time:10
			}
		},
		//其他页面传过来的属性值
		props:{
			color:{
				type:String,
				default:'#333'
			},
			bgColor:{
				default:'gold'
			},
			fontSize:{
				default:'30'
			}
		},
		mounted(){
			var vm = this;
			var t = setInterval(function(){
				vm.time--;
				if(vm.time == 0){
					//计时为0时触发事件，来自调用的组件页面
					vm.$emit("end"); 
					clearInterval(t);
				}
			},1000);
		}
	}
	
	
</script>

<style>
	
</style>