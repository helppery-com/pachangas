import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './quasar'
import { project } from "./config";

Vue.config.productionTip = false

Vue.prototype.$project = project;

new Vue({
  router,
  store,
  beforeCreate() {
    this.$store.dispatch('initialiseStore')
  },
  render: h => h(App)
}).$mount('#app')
