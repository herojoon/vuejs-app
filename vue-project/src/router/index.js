import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import BookList from '@/components/BookList'
import WriterList from '@/components/WriterList'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/web/book/list',
      name: 'BookList',
      component: BookList
    },
    {
      path: '/web/writer/list',
      name: 'WriterList',
      component: WriterList
    }
  ]
})
