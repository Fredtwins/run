<template>
	<div class="wrapper">
		<swiper :options="swiperOption" v-if="List.length">
			<!-- slides -->
			<swiper-slide v-for="item in List" :key="item.id">
				<img class="swiper-img" :src="item.imgUrl" />
			</swiper-slide>
			<!--<div class="swiper-pagination" slot="pagination"></div>-->
			<!--<div class="swiper-button-prev" slot="button-prev"></div>
			<div class="swiper-button-next" slot="button-next"></div>-->
			<!--<div class="swiper-scrollbar" slot="scrollbar"></div>-->
		</swiper>
	</div>
</template>

<script>
export default {
	name: 'HomeSwiper',
	props: {
		List: Array
	},
	data() {
		return {
			swiperOption: {
				pagination: '.swiper-pagination',
				loop: true,
			},
			//				swiperList: [{
			//					id: '0001',
			//					imgUrl: 'http://img1.qunarzz.com/piao/fusion/1805/68/30167ce000808f02.jpg_640x200_9d5df966.jpg'
			//				}, {
			//					id: '0002',
			//					imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/a8/31be8a58c2556302.jpg_640x200_f8123543.jpg'
			//				}]
		}
	},
	computed: {
		//			swiper() {
		//				var mySwiper = new Swiper('.swiper-container', {
		//					autoplay: true,
		//				});
		//				//								return this.$refs.mySwiper.swiper
		//			}
	},
	methods: {

	},
	mounted() {
		//			console.log('this is current swiper instance object', this.swiper)
		//			this.swiper.slideTo(3, 1000, false)
	}
}
</script>

<style scoped lang="scss">
@import '~style/varibles.scss';
.wrapper>>>.swiper-pagination-bullet-active {
	background: red !important;
}

.wrapper {
	width: 100%;
	height: 0;
	overflow: hidden;
	padding-bottom: 31.25%;
	background: #eee;
	.swiper-img {
		width: 100%;
	}
}
</style>