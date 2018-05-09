<template>
	<div class="weekend">
		<div class="weekend-title">周末去哪儿</div>
		<ul>
			<li class="item" v-for="(item,index) in wList" :key="index">
				<img class="item-img" :src="item.imgUrl" />
				<div class="item-content">
					<p class="item-title">{{item.title}}</p>
					<p class="item-desc ellipsisd">{{item.desc}}</p>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: "HomeWeekend",
		props: {
			wList:Array
		},
		data() {
			return {
//				weekendList: [{
//					imgUrl: 'http://img1.qunarzz.com/sight/source/1508/f8/cadd4e229d3402.jpg_r_640x214_c38fb221.jpg',
//					title: '佛山必游TOP10',
//					desc: '走进佛山河网密布，生态优美的岭南水乡'
//				},
//				{
//					imgUrl: 'http://img1.qunarzz.com/sight/source/1602/88/bf120edeaea383.jpg_r_640x214_f8591f7b.jpg',
//					title: '欢乐长隆',
//					desc: '世界欢乐汇聚长隆'
//				},
//				{
//					imgUrl: 'http://img1.qunarzz.com/sight/source/1505/4a/ac007012d54bd4.jpg_r_640x214_eefa6ade.jpg',
//					title: '惠州必游TOP10',
//					desc: '毓秀山水，继续着四季轮回的交替'
//				}
//				]
			}
		},
		methods: {

		},
		mounted() {

		}
	}
</script>

<style lang="scss" scoped>
@import '~style/mixin.scss';
	.weekend {
		.weekend-title {
			line-height: 0.8rem;
			background-color: #EEEEEE;
			text-indent: 0.2rem;
		}
		.item {
			overflow: hidden;
			border-bottom: 1px solid #eee;
			.item-img {
				
			}
			.item-content {
				/*flex: 1;*/
				padding:0.1rem;
				min-width: 0;
				.item-title {
					margin-top: 0.1rem;
					font-size: 0.32rem;
					line-height: 0.44rem;
					height: 0.44rem;
					overflow: hidden;
					white-space: nowrap;
					text-overflow: ellipsis;
				}
				.item-desc {
					color: #616161;
					font-size: 0.24rem;
					line-height: 0.34rem;
					vertical-align: text-bottom;
					/*overflow: hidden;
					white-space: nowrap;
					text-overflow: ellipsis;*/
				}
			}
		}
	}
</style>