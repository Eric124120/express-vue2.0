/**
 * Created by huangchengwen on 16/11/30.
 */
import Vue from 'vue'
import VueRouter from "vue-router"
import VueResource from 'vue-resource'
import demoList from './vue/demoList.vue'
import demoOne from './vue/demoOne.vue'
import demoTow from './vue/demoTow.vue'
import demoThree from './vue/demoThree.vue'
import demoFor from './vue/demoFor.vue'
import demoOn from './vue/demoOn.vue'
import demoModel from './vue/demoModel.vue'
import slot1 from './vue/slot1.vue'
import slot2 from './vue/slot2.vue'
import demoResource from './vue/demoResource.vue'
//开启debug模式
Vue.config.debug = true;

Vue.use(VueRouter);
Vue.use(VueResource);

const router = new VueRouter({
	routes: [{
		path: '/',
		redirect: {name: 'list'}
	}, {
		path: '/list',
		name: 'list',
		component: demoList
	}, {
		path: '/one',
		name: 'one',
		component: demoOne
	}, {
		path: '/tow',
		name: 'tow',
		component: demoTow
	}, {
		path: '/three',
		name: 'three',
		component: demoThree
	}, {
		path: '/v-for',
		name: 'v-for',
		component: demoFor
	}, {
		path: '/v-on',
		name: 'v-on',
		component: demoOn
	}, {
		path: '/v-model',
		name: 'v-model',
		component: demoModel
	}, {
		path: '/slot1',
		name: 'slot1',
		component: slot1
	}, {
		path: '/slot2',
		name: 'slot2',
		component: slot2
	}, {
		path: '/ajax',
		name: 'ajax',
		component: demoResource
	}]
});

const app = new Vue({
	router
}).$mount('#app');
