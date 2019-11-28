import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/listadoClientes',
      name: 'listadoClientes',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "listadoClientes" */ './views/ListadoClientes.vue')
    },
    {
      path: '/agregar',
      name: 'agregar',
      component: () => import (/* webpackChunkName: "about" */ './views/Agregar')
    },
    {
      path: '/addCreditos',
      name: 'addCreditos',
      component: () => import (/* webpackChunkName: "addCreditos" */ './views/AddCreditos.vue')
    },
    {
      path: '/listadoCreditos',
      name: 'listadoCreditos',
      component: () => import (/* webpackChunkName: "listadoCreditos" */ './views/ListadoCreditos')
    }

  ]
})
