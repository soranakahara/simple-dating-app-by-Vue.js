import Vue from 'vue'
import VueRouter from 'vue-router'
import UserList from '../views/UserList.vue'
import UserDetail from '../views/UserDetail.vue'
import ChatView from '../views/ChatView.vue'
import MessageList from '../views/MessageList.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'user-list',
    component: UserList
  },
  {
    path: '/user/:userId',
    name: 'user-detail',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: UserDetail
  },
  {
    path: '/user/:userId/chat',
    name: 'chat-view',
    component: ChatView
  },
  {
    path: '/message-list',
    name: 'message-list',
    component: MessageList
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
