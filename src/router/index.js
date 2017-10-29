import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '@/components/MainPage'
// import UpdateHero from '@/components/UpdateHero'
// import UpdateItem from '@/components/UpdateItem'
import UpdatePlayer from '@/components/UpdatePlayer'
// import UpdateTeam from '@/components/UpdateTeam'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainPage',
      component: MainPage
    },
    // {
    //   path: '/updatehero',
    //   name: 'UpdateHero',
    //   component: UpdateHero
    // },
    // {
    //   path: '/updateitem',
    //   name: 'UpdateItem',
    //   component: UpdateItem
    // },
    {
      path: '/updateplayer',
      name: 'UpdatePlayer',
      component: UpdatePlayer
    // },
    // {
    //   path: '/updateteam',
    //   name: 'UpdateTeam',
    //   component: UpdateTeam
    }
  ]
})
