<template>
  <div class="page-view experience">
    <h1>Work <span class="accent">Experience</span></h1>
    <p class="experience-intro">
      Here’s a quick look at the roles where I’ve built technical, support, and development experience.
    </p>

    <div class="timeline">
      <div class="timeline-item" v-for="job in experience" :key="job.title + job.company">
        <div class="timeline-marker"></div>

        <div class="timeline-content">
          <p class="timeline-date">{{ job.date }}</p>
          <h3>{{ job.title }}</h3>
          <h4>{{ job.company }}</h4>

          <ul>
            <li v-for="point in job.highlights" :key="point">
              {{ point }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const experience = [
  {
    title: 'ResCom IT Technician',
    company: 'UW Eau Claire',
    date: 'September 2024 - Present',
    highlights: [
      'Provided technical support for 1000+ residence hall users across hardware, networking, and software issues.',
      'Diagnosed system and connectivity problems on Windows, Linux, and macOS devices.',
      'Maintained ticket resolution through university IT service systems.'
    ]
  },
  {
    title: 'Web Developer',
    company: 'Survivor Rally',
    date: 'May 2023 - August 2024',
    highlights: [
      'Developed and maintained a full-stack website using Vue.js, JavaScript, and Express.',
      'Implemented API endpoints and handled backend data processing.',
      'Delivered feature updates and bug fixes based on client feedback.'
    ]
  }
]
</script>

<style scoped>
.experience {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.experience-intro {
  margin: 0;
  max-width: 700px;
  color: var(--text-secondary);
  line-height: 1.6;
}

.timeline {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 1rem;
  padding-left: 2rem;
}

.timeline::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0.55rem;
  width: 2px;
  height: 100%;
  background: var(--border-subtle);
}

.timeline::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 80px;

  background: linear-gradient(
    to bottom,
    rgba(10, 10, 10, 0) 0%,
    var(--bg) 100%
  );

  pointer-events: none;
}

.timeline-item {
  position: relative;
}

.timeline-marker {
  position: absolute;
  left: -1.8rem;
  top: 0.35rem;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: linear-gradient(90deg, #2d86d4, #3b82f6);
  box-shadow: 0 0 0 4px var(--surface);
}

.timeline-content {
  background: var(--surface);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-soft);
  padding: var(--space-5);
}

.timeline-date {
  margin: 0 0 0.5rem;
  color: var(--text-secondary);
  font-size: 0.9rem;
}

.timeline-content h3 {
  margin: 0;
  color: var(--text-primary);
}

.timeline-content h4 {
  margin: 0.35rem 0 1rem;
  color: var(--text-secondary);
  font-weight: 500;
}

.timeline-content ul {
  margin: 0;
  padding-left: 1.2rem;
  color: var(--text-secondary);
  line-height: 1.6;
}

.timeline-content li + li {
  margin-top: 0.5rem;
}

@media (max-width: 700px) {
  .timeline {
    padding-left: 1.5rem;
  }

  .timeline-marker {
    left: -1.5rem;
  }

  .timeline-content {
    padding: var(--space-4);
  }
}
</style>