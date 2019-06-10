import Vue from 'vue'
import Router from 'vue-router'
import Table from './components/Table.vue'
import New from './components/New.vue'
import Edit from './components/Edit.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'table',
      component: Table
    },
    {
      path: '/new',
      name: 'new',
      component: New
    },
    {
      path: '/edit',
      name: 'edit',
      component: Edit
    },
    // {
    //   path: '/todo',
    //   name: 'todo',
    //   component: Todo
    // }
  ]
})
