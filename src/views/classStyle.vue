<template>
	<div id="cls">
		<div>Class与style绑定</div>
		<div>-----------------------</div>
		<div v-bind:class = "classObject"></div>
		<div :class="[activeClass, errorClass]">style1</div>
		<div v-bind:style = "{'color':activeColor,'fontSize':fontSize+'px'}">Style2</div>
		<div v-bind:style="styleObject">style3</div>
		<div v-bind:style = "[baseStyles,overridingStyles]">style数组形式</div>
	</div>
	
</template>

<script>
	export default{
		data(){
			return{
				isActive:true,
				hasError:false,
				classObject:{
					'active':true,
					'text-danger':true
				},
				activeClass:'active',
				errorClass:'text-danger',
				activeColor:'green',
				fontSize:30,
				styleObject:{
					'color':'red',
					'fontSize':'43px'
				},
				
				//数组绑定方式
				baseStyles:{
					color:'red'
				},
				overridingStyles:{
					fontSize:'53px'
				}
			}
		},
		mounted(){
			alert(this.$route.query.plan);
		}
	
	}
	
</script>

<style>
</style>
