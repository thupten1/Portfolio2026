import { createRouter, createWebHistory } from 'vue-router'
import ProjectPage from '../views/Projectpage.vue'
import Homepage from '@/views/Homepage.vue'
import Ikeapage from '@/views/Ikeapage.vue'
import Opdampage from '@/views/Opdampage.vue'
import Bistroopage from '@/views/Bistroopage.vue'
import Blueriqpage from '@/views/Blueriqpage.vue'
import Natuursteenshoppage from '@/views/Natuursteenshoppage.vue'
import Coreniopage from '@/views/Coreniopage.vue'


const routes = [
  { 
    path: '/', 
    name: 'Homepage',
    component: Homepage 
  },
  { 
    path: '/projectpage', 
    name: 'Projectpage',
    component: ProjectPage 
  },
  { 
    path: '/ikeapage', 
    name: 'Ikeapage',
    component: Ikeapage 
  },
  { 
    path: '/natuursteenshoppage', 
    name: 'Natuursteenshoppage',
    component: Natuursteenshoppage,
  },
  {
    path: '/blueriqpage',
    name: 'Blueriqpage',
    component: Blueriqpage,
  },
  { 
    path: '/Opdampage', 
    name: 'Opdampage',
    component: Opdampage 
  },
  { 
    path: '/bistroopage', 
    name: 'Bistroopage',
    component: Bistroopage 
  },
  {
    path: '/coreniopage',
    name: 'Coreniopage',
    component: Coreniopage
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;