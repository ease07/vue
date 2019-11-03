<template>
	<div>
		<div>表单控件绑定</div>
		<div>---------------------</div>
		<input v-model="message">
		<p>Message is: {{message}}</p>
		
		<div>---------------------</div>
		<input type="checkbox" value="Jack" v-model="checkedNames">
		<label for="jack">Jack</label>
		<input type="checkbox" value="Rose" v-model="checkedNames">
		<label for="Rose">Rose</label>
		<br/>
		<span>Checked names: {{checkedNames}}</span>
		
		<div>--------------</div>
		<!-- 下拉选框 -->
		<div>
			<select v-model="selected">
				<option disabled>请选择</option>
				<option>A</option>
				<option>B</option>
				<option>C</option>
			</select>
			<!-- v-model进行数据绑定 -->
			<span>Selected: {{selected}}</span>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				message:"",
				checkedNames:[],
				selected:""
			}
		}
	}
</script>

<style>
</style>
