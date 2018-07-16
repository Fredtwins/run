<template>
	<div class="city">
		<Hearder></Hearder>
		<Search></Search>	
	</div>
</template>

<script>
import Hearder from './components/Hearder';
import Search from './components/Search';
	export default {
		components: {
			Hearder,
			Search
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