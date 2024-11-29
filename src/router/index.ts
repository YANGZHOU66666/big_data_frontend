import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: ()=>import ('../views/LoginView.vue'),
    },
    {
      path: '/register',
      name:'Register',
      component: ()=>import ('../views/RegisterView.vue'),
    },
    {
      path: '/',
      name: 'Home',
      component: ()=>import ('../views/HomeView.vue'),
      children: [
        {
          path: '/search',
          name:'Search',
          component: ()=>import ('../views/SearchView.vue'),
        },
        {
          path: '/paper',
          name: 'Paper',
          component: ()=>import ('../views/PaperView.vue'),
        },
        {
          path: '/citedPapers',
          name: 'CitedPapers',
          component: ()=>import ('../views/CitedPaperView.vue'),
        },
        {
          path: '/similarPapers',
          name: 'SimilarPapers',
          component: ()=>import ('../views/SimilarPaperView.vue'),
        },
        {
          path: '/homogeneousPapers',
          name: 'HomogeneousPapers',
          component: ()=>import ('../views/HomogeneousPaperView.vue'),
        }
      ]
    }
  ],
})

router.beforeEach((to, from, next) => {
  const token = sessionStorage.getItem('token')
  if (to.name === 'Login' || to.name === 'Register') {
    next()
  } else if (token) {
    if(to.name == 'SimilarPapers'||to.name == 'HomogeneousPapers'){
      if(sessionStorage.getItem('isVIP')=='true'){
        next()
      }else{
        next('/search')
      }
    }
    next()
  } else {
    next('/login')
  }
})

export default router
