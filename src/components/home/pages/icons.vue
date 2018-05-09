<template>
	<div class="icons">
		<swiper :options="swiperOption" v-if="pages.length">
			<swiper-slide v-for="(page,index) in pages" :key="index">
				<div class="icon" v-for="(item,index) in page" :key="item.id">
					<div class="icon-img">
						<img class="icon-imgcontent" :src="item.imgUrl" />
					</div>
					<p class="icon-desc ellipsisd">{{item.desctext}}</p>
				</div>
			</swiper-slide>
		</swiper>

	</div>
</template>

<script>
	export default {
		name: 'HomeIcons',
		props: {
			List:Array
		},
		data() {
			return {
				swiperOption: {
					pagination: '.swiper-pagination',
					loop: true,
				},
//				iconList: [{
//					id: '0001',
//					imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
//					desctext: '景点门票景点门票景点门票景点门票景点门票景点门票景点门票'
//				}, {
//					id: '0002',
//					imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png',
//					desctext: '游乐场'
//				}, {
//					id: '0003',
//					imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/8c/47630407f70e8302.png',
//					desctext: '影视基地'
//				}, {
//					id: '0004',
//					imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/ab/6f7d6e44963c9302.png',
//					desctext: '温泉'
//				}, {
//					id: '0005',
//					imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/3e/86314b2af03b7502.png',
//					desctext: '水上乐园'
//				}, {
//					id: '0006',
//					imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/47/c2b659e048b11602.png',
//					desctext: '亲子游'
//				}, {
//					id: '0007',
//					imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
//					desctext: '一日游'
//				}, {
//					id: '0008',
//					imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/bd/9f7b9b2b60c1502.png',
//					desctext: '踏青赏花'
//				}, {
//					id: '0009',
//					imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/96/c70f1e85ae4a4f02.png',
//					desctext: '自然风光'
//				}, {
//					id: '0010',
//					imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/80/416c6ab3368d1f02.png',
//					desctext: '全部玩乐'
//				}, ]
			}
		},
		computed: {
			pages() {
				const pages = [];
				//循环当前要展示的数组
				console.log(this.List)
				this.List.forEach((item, index) => {
					//定义图标展示的页码，比如前8个就在第一页显示，超过8个之后就会在第二页显示
					const page = Math.floor(index / 8);
					//判断
					if(!pages[page]) {
						pages[page] = []
					}
					//将里面的东西扔进去item里面
					pages[page].push(item);
				})
				return pages
			}
		},
		methods: {

		},
		mounted() {

		}
	}
</script>

<style scoped lang="scss">
	@import '~style/varibles.scss';
	@import '~style/mixin.scss';
	.icons {
		margin-top:0.2rem;
		width: 100%;
		height: 0;
		padding-bottom: 50%;
		overflow: hidden;
		.icon {
			position: relative;
			overflow: hidden;
			width: 25%;
			height: 0;
			float: left;
			padding-bottom: 25%;
			.icon-img {
				position: absolute;
				top: 0;
				left: 0;
				right: 0;
				bottom: 0.44rem;
				box-sizing: border-box;
				padding: 0.1rem;
				.icon-imgcontent {
					display: block;
					margin: 0 auto;
					height: 100%;
				}
			}
			.icon-desc {
				position: absolute;
				left: 0;
				right: 0;
				bottom: 0.18rem;
				height: 0.44rem;
				line-height: 0.44rem;
				color: $fontcolor;
				text-align: center;
				/*ellipsis(){};*/
				/*overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;*/
			}
		}
	}
</style>