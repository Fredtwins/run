<template>
	<div class="hearder">
		<div class="left">
			<span class="iconfont">&#xe624;</span>
		</div>
		<div class="inputcontent"><span class="iconfont">&#xe632;</span>请输入城市、景点</div>
		<router-link to="/city">
			<div class="right">{{this.city}}<span class="iconfont arrow-icon"> &#xe64a;</span></div>
		</router-link>
	</div>
</template>

<script>
import { mapState } from 'vuex'
	export default {
		name: 'Hearder',
		data() {
			return {

			}
    },
    computed: {
      ...mapState(['city'])
    },
		methods: {

		},
		mounted() {
      // console.log(this.$store.state.city)
		}
	}
</script>

<style scoped lang="scss">
	@import '~style/varibles.scss';
	.hearder {
		display: flex;
		width: 100%;
		line-height: 0.86rem;
		background-color: $bgcolor;
		color: #fff;
		.left {
			width: 0.64rem;
			float: left;
			padding-left: 0.2rem;
		}
		.inputcontent {
			flex: 1;
			color: #ccc;
			border-radius: 0.1rem;
			margin-top: 0.12rem;
			margin-left: 0.2rem;
			height: 0.64rem;
			line-height: 0.64rem;
			padding-left: 0.2rem;
			background-color: #fff;
		}
		.right {
			min-width: 1.04rem;
      padding: 0 0.1rem;
			float: right;
			text-align: center;
			color: #fff;
			.arrow-icon {
				margin-left: -0.04rem;
				font-size: 0.24rem;
			}
		}
	}
</style>
