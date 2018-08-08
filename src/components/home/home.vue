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
  import { mapState } from 'vuex'

	export default {
		name:'home',
		data() {
			return {
        lastcity: '',
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
    computed: {
      ...mapState(['city'])
    },
		methods: {
			getHomeInfo () {
				axios.get('../../../static/mock/index.json?city=' + this.city).then(this.getHomeinfosucc)
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
      this.lastcity = this.city
			this.getHomeInfo();
    },
    // 这个钩子函数可以配合keep-alive来完成页面的切换并请求不同的数据
    activated() {
      // 判断是否新的城市和旧的城市一致
      if (this.lastcity !== this.city) {
        // 当城市不一致的时候就要求等于一致
        this.lastcity = this.city
  			this.getHomeInfo();
      }
    },
	}
</script>

<style scoped lang="scss">

</style>
