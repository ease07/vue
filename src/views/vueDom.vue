<template>
	<div>
		<div>VueDOM事件</div>
		<div>---------------------</div>
		<div ref="head" id="head"></div>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				
			}
		},
		//挂载，只有在这里才可以操作dom
		mounted(){
			//DOM已经生成
			//引入jquery操作
			//$(".head").html("123")
			//document.getElementById("head");
			this.$refs.head.innerHTML = "mounted中操作DOM";
		}
	}
</script>

<style>
</style>
