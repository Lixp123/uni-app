<template>
	<view class="my-heade">
		<view class="my-absolute">{{title || '登录'}}</view>
	</view>
</template>

<script>
	export default {
		props:['title'],
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style scoped>
	.my-heade{
		width: 100%;
		height: 50px;
		line-height: 50px;
		position: relative;
	}
	.my-absolute{
		width: 100%;
		height: 50px;
		position: fixed;
		background: #EAEAEA;
		left: 0;
		top: 0;
		padding: 0px 25px;
		font-size: 13px;
		color:#000;
	}
</style>
