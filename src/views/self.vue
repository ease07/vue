<template>
	<div>
		<div>自定义组件</div>
		<div>--------------------</div>
		<!-- <countdown></countdown> -->
		<count-down color="#fff" bgColor="green" @end=ending></count-down>
		<cls></cls>
	</div>
</template>

<script>
	import countdown from '@/components/countdown'
	import cls from '@/views/classStyle'
	
	export default{
		data(){
			return {}
		},
		//注册组件
		components:{ 
			//可给组件取名 
			'count-down':countdown, 
			cls
		},
		methods:{
			ending(){
				alert("计时结束");
			}
		}
	}
	
	
</script>

<style>
	
</style>