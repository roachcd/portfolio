<template>
  <div v-if="project" class="page-view project-detail">
    <h1 class="accent">{{ project.title }}</h1>
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
      <a
        v-if="project.github"
        :href="project.github"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </a>

      <a
        v-if="project.demo"
        :href="project.demo"
        target="_blank"
        rel="noopener noreferrer"
      >
        Live Demo
      </a>

      <span v-if="project.isComingSoon" class="coming-soon">
        Coming Soon
      </span>
    </div>

    <br>

    <section v-if="project.images && project.images.length" class="project-images">
      <h2>Images</h2>

      <div class="image-grid">
        <img
          v-for="image in project.images"
          :key="image"
          :src="image"
          :alt="`${project.title} screenshot`"
        >
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import projects from '@/assets/projects.json'

const props = defineProps({
  slug: String
})

const project = computed(() =>
  projects.find(item => item.slug === props.slug)
)
</script>

<style scoped>
.project-images {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.image-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1rem;
}

.image-grid img {
  width: 100%;
  display: block;
  border-radius: var(--radius-lg);
  border: 1px solid var(--border-subtle);
  box-shadow: var(--shadow-soft);
  object-fit: cover;
}
</style>