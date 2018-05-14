// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
//import App from "./App.vue"
import router from './router'

import Mainpage from "./components/Mainpage.vue"
import EventBus from "./event-bus.js"

Vue.component("mainpage", Mainpage);


Vue.config.productionTip = false

Vue.prototype.$log = console.log.bind(console)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  data () {
    return {
      currentView: 'mainpage'
    }
  },
  http: {
    root: "lugposter.wsu.party/" 
  },
  ready: function () {
  
  },
  methods: {
    changeView: function(newView) {
      this.currentView = newView;
    }
  }
})
