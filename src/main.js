import ElementUI from "element-ui"
import Vue from "vue"
import Router from "vue-router"

import App from "./App.vue"
import BookView from "./BookView.vue"
import Home from "./Home.vue"

import "../res/img/tre-logo.png"
import "../res/css/element/index.css"

Vue.use(Router)
Vue.use(ElementUI)

const routes = [
  { path: "/", component: Home },
  {
    path: "/book/:name/:university/:course/:professor",
    component: BookView,
    props: true
  }
]

const router = new Router({ routes })

const app = new Vue({
  el: "#app",
  router,
  render: h => h(App)
})
