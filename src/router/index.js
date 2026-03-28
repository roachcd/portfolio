import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SkillsView from '@/views/SkillsView.vue'
import ProjectsView from '@/views/ProjectsView.vue'
import ExperienceView from '@/views/ExperienceView.vue'
import EducationView from '@/views/EducationView.vue'
import ProjectDetailView from '@/views/ProjectDetailView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { title: 'Chase Roach' }
  },
  {
    path: '/skills',
    name: 'skills',
    component: SkillsView,
    meta: { title: 'Skills' }
  },
  {
    path: '/projects',
    name: 'projects',
    component: ProjectsView,
    meta: { title: 'Projects' }
  },
  {
    path: '/experience',
    name: 'experience',
    component: ExperienceView,
    meta: { title: 'Experience' }
  },
  {
    path: '/education',
    name: 'education',
    component: EducationView,
    meta: { title: 'Education' }
  },
  {
    path: '/project/:slug',
    name: 'project-detail',
    component: ProjectDetailView,
    props: true,
    meta: { title: 'Project' }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  // Set the document title to the route's meta title, or a default value
  document.title = to.meta.title || 'Default Site Title';
  next();
});

export default router
