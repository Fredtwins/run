import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'

//首页
import home from '../components/home/home.vue';

//城市
import city from '../components/city/city.vue';

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: "*",
			redirect: "/home"
		},
		{
			path: '/home',
			name: 'home',
			component: home,
		},
		{
			path:'/city',
			name:'city',
			component:city
		}
	]
})