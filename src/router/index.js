import Vue from 'vue'
import Router from 'vue-router'
import MainPage from '@/components/MainPage'
import GuideComment from '@/components/GuideComment'
import Login from '@/components/Login'
import Register from '@/components/Register'
import UpdateGuide from '@/components/UpdateGuide'
import UpdateHero from '@/components/UpdateHero'
import UpdateItem from '@/components/UpdateItem'
import UpdatePlayer from '@/components/UpdatePlayer'
import UpdateTeam from '@/components/UpdateTeam'
import HeroesList from '@/components/HeroesList'
import GuidesList from '@/components/GuidesList'
import Hero from '@/components/Hero'
import ItemsList from '@/components/ItemsList'
import Item from '@/components/Item'
import PlayersList from '@/components/PlayersList'
import Player from '@/components/Player'
import TeamsList from '@/components/TeamsList'
import Team from '@/components/Team'
import Guide from '@/components/Guides'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'MainPage',
      component: MainPage
    },
    {
      path: '/guidecomment',
      name: 'GuideComment',
      component: GuideComment
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/updateguide/:guideKey?',
      name: 'UpdateGuide',
      component: UpdateGuide,
      props: true
    },
    {
      path: '/updatehero/:heroKey?',
      name: 'UpdateHero',
      component: UpdateHero,
      props: true
    },
    {
      path: '/updateitem/:itemKey?',
      name: 'UpdateItem',
      component: UpdateItem,
      props: true
    },
    {
      path: '/updateplayer/:playerKey?',
      name: 'UpdatePlayer',
      component: UpdatePlayer,
      props: true
    },
    {
      path: '/updateteam/:teamKey?',
      name: 'UpdateTeam',
      component: UpdateTeam,
      props: true
    },
    {
      path: '/hero',
      name: 'HeroesList',
      component: HeroesList
    },
    {
      path: '/guide',
      name: 'GuidesList',
      component: GuidesList
    },
    {
      path: '/hero/:heroKey',
      name: 'Hero',
      component: Hero,
      props: true
    },
    {
      path: '/item',
      name: 'ItemsList',
      component: ItemsList
    },
    {
      path: '/item/:itemKey',
      name: 'Item',
      component: Item,
      props: true
    },
    {
      path: '/player',
      name: 'PlayersList',
      component: PlayersList
    },
    {
      path: '/player/:playerKey',
      name: 'Player',
      component: Player,
      props: true
    },
    {
      path: '/team',
      name: 'TeamsList',
      component: TeamsList
    },
    {
      path: '/team/:teamKey',
      name: 'Team',
      component: Team,
      props: true
    },
    {
      path: '/guide/:guideKey',
      name: 'Guide',
      component: Guide,
      props: true
    },
  ]
})
