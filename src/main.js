import Vue from 'vue'
import Home from './vue/home.vue'
import VueRouter from "vue-router";
import VueResource from 'vue-resource'
import FirstComponent from './vue/first.vue'
import SecondComponent from './vue/second.vue'

//开启debug模式
Vue.config.debug = true;

Vue.use(VueRouter);
Vue.use(VueResource);

const router = new VueRouter({
	mode: 'history',
	base: __dirname,
	routes: [{
		path: '/',
		component: FirstComponent
	}, {
		path: '/first',
		component: FirstComponent
	}, {
		path: '/second',
		component: SecondComponent
	}]
});

const app = new Vue({
	el: '#app',
	router: router,
	render: h => h(Home)
})
