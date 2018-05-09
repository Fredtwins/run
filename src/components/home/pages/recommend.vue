<template>
	<div class="recommend">
		<div class="recommend-title">热销推荐</div>
		<ul>
			<li class="item" v-for="(item,index) in recommendList" :key="item.id">
				<img class="item-img" :src="item.imgUrl" />
				<div class="item-content">
					<p class="item-title">{{item.title}}</p>
					<p class="item-desc ellipsisd">{{item.desc}}</p>
					<button class="item-button">查看详情</button>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'HomeRecommend',
		props: {
			recommendList:Array
		},
		data() {
			return {
//				recommendList: [{
//					id: '0001',
//					imgUrl: 'http://img1.qunarzz.com/sight/p0/1708/73/73cedba65c6e4e40a3.water.jpg_200x200_0f67bb83.jpg',
//					title: '李小龙乐园',
//					desc: '以其雄伟、大气、独特，被授予上海大世界吉尼斯世界纪录——世界最高的凤凰雕塑。',
//				}, {
//					id: '0002',
//					imgUrl: 'http://img1.qunarzz.com/sight/p0/1612/8e/8e975801deb55d2fa3.water.jpg_200x200_ec0d5cd1.jpg',
//					title: '长鹿休闲度假农庄',
//					desc: '一首歌代表一段过往，一句词代表一段回忆，五一长鹿怀旧音乐市集，带您从60年代漫步至今。',
//				}, {
//					id: '0003',
//					imgUrl: 'http://img1.qunarzz.com/sight/p0/1603/a9/a9c236b3c1c7835890.img.jpg_200x200_bc63fda6.jpg',
//					title: '三水芦苞温泉度假村',
//					desc: '清迈池有着泰国清迈的优美天然环境，散发着迷人的古典气质，让你不出国门，感受泰国风情。',
//				}, {
//					id: '0004',
//					imgUrl: 'http://img1.qunarzz.com/sight/p0/1706/ee/eeae6f60b67e85dea3.water.jpg_200x200_33846265.jpg',
//					title: '顺德史努比主题乐园',
//					desc: '这个和主人布朗及范家三姐弟整天闹在一起的小狗，这个上过美国时代周刊的小狗...',
//				}]
			}
		}
	}
</script>

<style scoped lang="scss">
@import '~style/mixin.scss';
	.recommend {
		.recommend-title {
			line-height: 0.8rem;
			margin-top: 0.2rem;
			background-color: #EEEEEE;
			text-indent: 0.2rem;
		}
		.item {
			overflow: hidden;
			display: flex;
			height: 1.9rem;
			border-bottom: 1px solid #eee;
			.item-img {
				width: 1.7rem;
				height: 1.7rem;
				padding: 0.1rem;
			}
			.item-content {
				flex: 1;
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
				.item-button {
					border-radius: 0.6rem;
					padding: 0 0.2rem;
					background-color: #ff9300;
					color: #FFF2DB;
					margin-top: 0.1rem;
					float: right;
					margin-right: 0.2rem;
				}
			}
		}
	}
</style>