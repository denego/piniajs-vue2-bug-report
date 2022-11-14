import Vue from 'vue';
import VueRouter from 'vue-router';

import TestView1 from '../views/TestView1.vue';
import TestView2 from '../views/TestView2.vue';

Vue.use(VueRouter);

const routes = [
  { path: '*', component: TestView1 },
  { path: '/test1', name: 'test1', component: TestView1 },
  { path: '/test2', name: 'test2', component: TestView2 },
];

const router = new VueRouter({ mode: 'history', routes });
export default router;
