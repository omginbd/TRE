import "element-ui/lib/theme-chalk/index.css"

import ElementUI from "element-ui"
import Vue from "vue"
import Router from "vue-router"

import App from "./App.vue"
import Book from "./Book.vue"
import BookView from "./BookView.vue"
import Course from "./Course.vue"
import Home from "./Home.vue"
import "../res/book-stack.jpg"

Vue.use(Router)
Vue.use(ElementUI)

const routes = [
  { path: "/", component: Home },
  { path: "/course/:schoolID", component: Course, props: true },
  { path: "/book/:courseID/:schoolID", component: Book, props: true },
  { path: "/bookview/:bookID", component: BookView, props: true }
]

const router = new Router({ routes })

const app = new Vue({
  el: "#app",
  router,
  render: h => h(App)
})
