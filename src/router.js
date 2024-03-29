import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
	linkActiveClass: 'active',
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home,
		},
		{
			path: '/portfolio',
			// route level code-splitting
			// this generates a separate chunk (chunkName.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import(/* webpackChunkName: "portfolio" */ './views/Portfolio/Index.vue'),
			children: [
				{
					path: '',
					name: 'portfolio',
					component: () => import(/* webpackChunkName: "portfolio" */ './views/Portfolio/Default.vue'),
				},
				{
					path: ':project',
					name: 'project',
					component: () => import(/* webpackChunkName: "portfolio" */ './views/Portfolio/Project.vue'),
				},
			],
		},
	],
});
