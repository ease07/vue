<template>
	<div>
		<h2>vue-resource请求</h2>
		<div>-------------------</div>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				
			}
		},
		//mounted时数据dom都渲染了
		mounted(){
			this.$http.get('http://www.baidu.com').then(response=>{
				//get body data
				alert(123);
				alert(typeof response.body);
				//console.log(response.body);
			},response=>{
				//error callback
				alert(typeof response.body);
			});
			
			//第二种 传数据
			this.$http.post('http://www.baidu.com',{foo:'bar'}).then(response=>{
				alert(123),
				alert(typeof response.body);
			},response => {
				//error callback
				alert(typeof response.body);
			});
			
			//第三种 设置数据
			this.$http.get('http://www.baidu.com',{params:{foo:'bar'},headers:{'X-Custom':'...'}}).then(response=>{
				//success callback
				alert(response.body);
			},response=>{
				//error callback
				alert(response.body);
			});
		}
	}
</script>

<style>
</style>
