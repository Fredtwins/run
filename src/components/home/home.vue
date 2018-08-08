<template>
	<div>
		<hearder></hearder>
		<home-swiper :List="swiperList"></home-swiper>
		<home-icons :List="iconList"></home-icons>
		<home-recommend :recommendList="recommendList"></home-recommend>
		<home-weekend :wList="weekendList"></home-weekend>
	</div>
</template>

<script>
	import Hearder from './pages/hearder'
	import HomeSwiper from './pages/swiper'
	import HomeIcons from './pages/icons'
	import HomeRecommend from './pages/recommend'
	import HomeWeekend from './pages/weekend'
	import axios from 'axios'

	export default {
		name:'home',
		data() {
			return {
				swiperList: [],
				iconList: [],
				recommendList: [],
				weekendList: []
			}
		},
		components: {
			Hearder,
			HomeSwiper,
			HomeIcons,
			HomeRecommend,
			HomeWeekend
		},
		methods: {
			getHomeInfo () {
				axios.get('../../../static/mock/index.json').then(this.getHomeinfosucc)
			},
			getHomeinfosucc (res) {
				// console.log(res);
				this.swiperList = res.data.data.swiperList
				this.iconList = res.data.data.iconList
				this.recommendList = res.data.data.recommendList
				this.weekendList = res.data.data.weekendList
			}
		},
		mounted () {
			this.getHomeInfo();
		}
	}
</script>

<style scoped lang="scss">

</style>
