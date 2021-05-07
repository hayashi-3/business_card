import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router';

Vue.config.productionTip = false

// サイト名の表示
const globalMixIn = {
  created() {
      let { title, headerTitle } = this.$options
      if (title) {
        document.title = title;
      }
      if (headerTitle) {
        this.$store.dispatch('changeHeaderTitle', headerTitle);
      }
  }
}
 
 
Vue.mixin(globalMixIn);

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
