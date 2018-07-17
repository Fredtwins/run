<template>
	<div class="city">
		<Hearder></Hearder>
		<Search></Search>
		<City-list :cities="cities" :hotcities="hotCities"></City-list>	
		<Cityalphabet :cities="cities"></Cityalphabet>	
	</div>
</template>

<script>
import axios from 'axios';
import Hearder from './components/Hearder';
import Search from './components/Search';
import CityList from './components/city-list';
import Cityalphabet from './components/Alphabet';
	export default {
		components: {
			Hearder,
			Search,
			CityList,
			Cityalphabet
		},
		name: 'City',
		data() {
			return {
				cities: {},
				hotCities: []
			}
		},
		methods: {
			getcityinfo() {
				axios.get('api/city.json').then((res) => {
					console.log(res);
					res = res.data;
					if(res.ret && res.data) {
						let data = res.data;
						this.cities = data.cities;
						this.hotCities = data.hotCities;
					}
				})
			}
		},
		mounted() {
			this.getcityinfo();
		}
	}
</script>

<style lang="scss" scoped>
.city {

}
</style>