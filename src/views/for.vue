<template>
	<div>
		<div>列表渲染</div>
		<div>-------------------------</div>
		<!-- 遍历1 -->
		<!-- <ul id="example-1">
			<li v-for="item in items" :key="item">
				{{item.message}}
			</li>
		</ul> -->
		
		<div>----------------------</div>
		<!-- 遍历数组：设置index -->
		<ul id="example-2">
			<li v-for="(item,index) in items" :key= "index">
				{{index}} - {{item.message}}
			</li>
		</ul>
		
		<div>------------------------</div>
		<!-- 遍历对象 -->
		<ul id="example-3">
			<li v-for="(value,key) in object" :key="key">
				{{key}}:{{value}}
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				items:[
					{message: 'Foo'},
					{message: 'Bar'}
				],
				object:{
					name:"小明",
					age:20,
					hobby:"看书,打球"
				}
			}
		}
	}
</script>

<style>
</style>
