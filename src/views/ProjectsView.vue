<template>
  <div class="page-view projects">
    <h1>My <span class="accent">Projects</span></h1>

    <div class="filter-bar">
      <button
        v-for="skill in skills"
        :key="skill"
        class="filter-pill"
        :class="{ active: selectedSkill === skill }"
        @click="selectedSkill = skill"
      >
        {{ skill }}
      </button>
    </div>

    <div class="projects-grid">
      <div
        v-for="project in filteredProjects"
        :key="project.title"
        class="project-card"
      >
        <h3>{{ project.title }}</h3>
        <p>{{ project.description }}</p>

        <div class="pill-group">
          <span
            v-for="item in project.tech"
            :key="item"
            class="pill"
          >
            {{ item }}
          </span>
        </div>

        <div class="project-links">
          <a v-if="project.isComingSoon">Coming Soon</a>

          <template v-else>
            <a v-if="project.github" :href="project.github" target="_blank">
              GitHub
            </a>
            <a v-if="project.demo" :href="project.demo" target="_blank">
              Live
            </a>
            <router-link v-if="project.slug"
              :to="{ name: 'project-detail', params: { slug: project.slug } }"
              class="project-more"
            >
              More Info
            </router-link>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import projects from '@/assets/projects.json'

const selectedSkill = ref('All')

const skills = computed(() => {
  const allSkills = projects.flatMap(project => project.tech)
  return ['All', ...new Set(allSkills)]
})

const filteredProjects = computed(() => {
  if (selectedSkill.value === 'All') return projects

  return projects.filter(project =>
    project.tech.includes(selectedSkill.value)
  )
})
</script>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import '@/assets/view-styles.css'

export default {
  
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>

<style scoped>
.projects {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 1.5rem;
}

@media (max-width: 700px) {
  .projects-grid{
    display: flex;
    flex-direction: column;
  }
  .project-links a {
    margin-left: 0px !important;
  }
}

.project-card {
  background: var(--surface);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-lg);
  padding: var(--space-5);
  box-shadow: var(--shadow-soft);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  transition: all 0.2s ease;
}

.project-card:hover {
  transform: translateY(-4px);
  background: var(--surface-hover);
}

.project-card h3 {
  margin: 0;
  color: var(--text-primary);
}

.project-card p {
  margin: 0;
  color: var(--text-secondary);
  line-height: 1.5;
}

.project-links {
  margin-top: auto;
}

.project-links a {
  font-size: 0.9rem;
  text-decoration: none;
  margin-left: 10px;
}

.project-links a[href] {
  color: white;
}

.project-links a[href]:hover {
  text-decoration: underline;
}

.project-links a:not([href]) {
  color: var(--text-secondary);
  cursor: default;
  background: var(--surface-hover);
  padding: 4px 10px;
  border-radius: 999px;
}

.project-card {
  cursor: pointer;
}

.filter-bar {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.filter-pill {
  padding: 0.5rem 0.9rem;
  border: 1px solid var(--border-subtle);
  border-radius: 999px;
  background: var(--surface);
  color: var(--text-secondary);
  cursor: pointer;
  transition: all 0.2s ease;
}

.filter-pill:hover {
  color: var(--text-primary);
  background: var(--surface-hover);
}

.filter-pill.active {
  background: linear-gradient(90deg, #2d86d4, #3b82f6);
  color: white;
  border-color: transparent;
}
</style>