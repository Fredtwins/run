<template>
	<div class="city">
		<Hearder></Hearder>
		<Search></Search>
		<City-list></City-list>		
	</div>
</template>

<script>
import Hearder from './components/Hearder';
import Search from './components/Search';
import CityList from './components/city-list';
	export default {
		components: {
			Hearder,
			Search,
			CityList
		},
		name: 'City',
		data() {
			return {
				
			}
		},
		methods: {
			
		},
		mounted() {
			
		}
	}
</script>

<style lang="scss" scoped>
.city {

}
</style>