<template>
	<div id="comp">
		<div>--------------</div>
		<div>计算属性</div>
		<div>{{reversedMsg}}</div>
	</div>
</template>


<script>
	export default{
		name:'comp',
		components:{
			
		},
		data(){
			return {
				msg:"hello world" 
			}
		},
		computed:{
			reversedMsg(){
				return this.msg.split('').reverse().join('');
			}
		}
	}
</script>