<template>
  <div class="page-view">
    <h1>My <span class="accent">Skills</span></h1>
    <p class="skills-intro">
      I enjoy building polished, user-focused applications across the full stack,
      with experience in front-end development, back-end systems, and technical support.
    </p>

    <br>

    <div class="skills-grid">
      
      <div class="skill-card">
        <h3>Languages</h3>
        <p>
          <span class="pill">JavaScript</span>
          <span class="pill">Python</span>
          <span class="pill">Java</span>
          <span class="pill">Swift</span>
          <span class="pill">SQL</span>
          <span class="pill">PHP</span>
          <span class="pill">C/C++</span>
          <span class="pill">HTML5</span>
          <span class="pill">CSS</span>
          <span class="pill">JSON</span>
        </p>      
      </div>

      <div class="skill-card">
        <h3>Frameworks & Libraries</h3>
        <p>
          <span class="pill">Vue.js</span>
          <span class="pill">React</span>
          <span class="pill">Express.js</span>
          <span class="pill">FastAPI</span>
          <span class="pill">Axios</span>
          <span class="pill">Vite</span>
        </p>  
      </div>

      <div class="skill-card">
        <h3>Tools</h3>
        <p>
          <span class="pill">Git</span>
          <span class="pill">Node.js</span>
          <span class="pill">REST APIs</span>
        </p>  
      </div>
    </div>
  </div>
</template>

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
.skills {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}


.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
}

.skill-card {
  background: var(--surface);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-lg);
  padding: var(--space-5);
  box-shadow: var(--shadow-soft);
  transition: all 0.2s ease;
}

.skill-card:hover {
  transform: translateY(-3px);
  background: var(--surface-hover);
}

.skill-card h3 {
  margin: 0 0 0.5rem 0;
  color: var(--text-primary);
}

.skill-card p {
  margin: 0;
  color: var(--text-secondary);
  line-height: 1.5;
}
</style>