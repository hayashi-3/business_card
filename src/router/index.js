import Vue from 'vue';
import Router from 'vue-router';
import About from '../components/About.vue';
import Works from '../components/Works.vue';
import WorkShop from '../components/WorkShop.vue';
import ContactUs from '../components/ContactUs.vue';
import IconLinks from '../components/IconLinks.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'about',
      component: About
    },
    {
      path: '/works',
      name: 'works',
      component: Works
    },
    {
      path: '/work_shop',
      name: 'work_shop',
      component: WorkShop
    },
    {
      path: '/contact_us',
      name: 'contact_us',
      component: ContactUs
    },
    {
      path: '/link',
      name: 'link',
      component: IconLinks
    },
  ]
});