<template>
	<div>
		<div>选项数据</div>
		<div>------------------</div>
		<div>{{msg}}</div>
		<div>--------------------</div>
		<div>computed:{{aDouble}}</div>
		<div>-------------------------</div>
		<div @click="say('我太难了')">click me</div>
		<div>------------------------------------</div>
		<!-- 测试自定义组件颜色 -->
		<countdown color="green"></countdown>
	</div>
</template>

<script>
	import countdown from '@/components/countdown.vue'
	
	export default{
		data(){
			return {
				msg:"welcome to vue.js app",
				num:10
			}
		},
		components:{
			countdown
		},
		computed:{
			aDouble(){
					return this.num * 2;
			}
		},
		//methods给事件使用
		methods:{
			say(h){
				alert(h);
			}
		},
		
		mounted(){
			//取router-link传过来的参数
			alert(this.$route.params.userId);
		}
	}
</script>

<style>
	h1{
		border:1px solid #f00;
	}
</style>