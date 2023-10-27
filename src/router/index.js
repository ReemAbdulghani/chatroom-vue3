import { createRouter, createWebHistory } from 'vue-router'
import Welcome from '../views/Welcome.vue'
import Chatroom from '../views/Chatroom.vue'
import { projectAuth } from '../firebase/config'

// Route gaurd (for user auth) 
const requireAuth = (to, from, next) => {
  if (!projectAuth.currentUser) {
    next({name: 'Welcome'})
  } else {
    next()
  }
}


const requireNoAuth = (to, from, next) => {
  if (projectAuth.currentUser) {
    next({name: 'Chatroom'})
  } else {
    next()
  }
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome,
      beforeEnter: requireNoAuth
    },
    {
      path: '/chatroom',
      name: 'Chatroom',
      component: Chatroom,
      beforeEnter: requireAuth
    }
  ]
})

export default router
