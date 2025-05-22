import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BildDetailsView from '@/views/BildDetailsView.vue'
import TheaterExhausDomView from '@/views/TheaterExhausDomView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/bildergalerie',
    name: 'bildergalerie',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/BildergalerieView.vue')
  },
  {
    path: '/juxtapose',
    name: 'juxtapose',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/JuxtaposeView.vue')
  },
  {
    path: '/diskurs',
    name: 'diskurs',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/DiskursView.vue')
  },
  {
    path: '/textanalyse',
    name: 'textanalyse',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AuswertungPOIsView.vue')
  },
  {
    path: '/textanalyse/dom',
    name: 'dom',
    component: TheaterExhausDomView,
    props: { type: 'dom' }, // Typ an die Komponente übergeben
  },
  {
    path: '/textanalyse/exhaus',
    name: 'exhaus',
    component: TheaterExhausDomView,
    props: { type: 'exhaus' }, // Typ an die Komponente übergeben
  },
  {
    path: '/textanalyse/theater',
    name: 'theater',
    component: TheaterExhausDomView,
    props: { type: 'theater' }, // Typ an die Komponente übergeben
  },
  {
    path: '/sentiment',
    name: 'sentiment',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/SentimentView.vue')
  },
  {
    path: '/sentiment/emodist',
    name: 'emodist',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/EmoDistView.vue')
  },
  {
    path: '/sentiment/emodistpartei',
    name: 'emodistpartei',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/EmoDistPerPartyView.vue')
  },
  {
    path: '/sentiment/emodistprozent',
    name: 'emodistprozent',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/EmoDistPercentView.vue')
  },
  {
    path: '/sentiment/emowort',
    name: 'emowort',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/EmoWordsView.vue')
  },
  {
    path: '/topics',
    name: 'topics',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/RathausZeitungView.vue')
  },
  {
    path: '/topicsoverview',
    name: 'topicsoverview',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/TopicsView.vue')
  },
  {
    path: '/topicsdist',
    name: 'topicsdist',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/TopicsDistView.vue')
  },
  {
    path: '/karten',
    name: 'karten',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/KartenView.vue')
  },
  {
    path: '/routenkarte',
    name: 'routenkarte',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/RoutenKarteView.vue')
  },
  {
    path: '/poiskarte',
    name: 'poiskarte',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/POIKarteView.vue')
  },
  {
    path: '/poisrathauszeitungkarte',
    name: 'poisrathauszeitungkarte',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/POIKarteRathauszeitungView.vue')
  },
  {
    path: '/topicstime',
    name: 'topicstime',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/TopicsTimeView.vue')
  },
  {
    path: '/zukunft',
    name: 'zukunft',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/VorstellungenZukunftView.vue')
  },
  {
    path: '/ueber',
    name: 'ueber',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/UeberView.vue')
  },
  {
    path: '/methoden',
    name: 'methoden',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/MethodenView.vue')
  },
  {
    path: '/team',
    name: 'team',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/TeamView.vue')
  },
  {
    path: '/bildergalerie/:id',  // Dynamische Route für die Detailansicht
    name: 'bild-details',
    component: BildDetailsView,  // Die Detailseite
    props: true,  // Übergibt die Parameter als Props
  },
  {
    path: '/impressum',
    name: 'impressum',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ImpressumView.vue')
  },
  {
    path: '/downloads',
    name: 'downloads',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/DownloadsView.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return new Promise((resolve) => {
      setTimeout(() => {
        window.scrollTo({top: 0, behavior: "smooth"});
        resolve({left: 0, top: 0});
      }, 50);
    });
  }
})


export default router
