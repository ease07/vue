<template>
	<div>
		<div>slot插槽</div>
		<div>-------------------</div>
		<!-- 会将下面嵌入的标签插入到 引入的组件slotTest的slot标签中 -->
		<slotTest>
			<div>123</div>
			<p>1234</p>
			<!-- 选择插槽插入 -->
			<p slot="bottom">选择bottom插槽插入</p> 
			
		</slotTest>
	</div>
</template>

<script>
	import slotTest from '@/components/slotCpo.vue'
	
	export default{
		data(){
			return {
				
			}
		},
		components:{
			slotTest
		}
		
	}
</script>