<template>
	<div>
		<div>{{ok}}</div>
		<div>条件渲染</div>
		<div>----------------------------</div>
		<h1 v-if="ok">Yes</h1>
		<div>--------------</div>
		<div v-if="type==='A'">A</div>
		<div v-else-if="type==='B'">B</div>
		<div v-else-if="type==='C'">C</div>
		<div v-else>Not A/B/C</div>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				ok:true,
				type:'S'
			}
		}
	}
</script>

<style>
</style>
