<template>
  <div class="page-view education">
    <h1>My <span class="accent">Education</span></h1>

    <div class="timeline">
      <div
        class="timeline-item"
        v-for="school in education"
        :key="school.school"
      >
        <div class="timeline-marker"></div>

        <div class="timeline-content">
          <p class="timeline-date">{{ school.date }}</p>
          <h3>{{ school.degree }}</h3>
          <h4>{{ school.school }}</h4>

          <p class="education-extra">
            {{ school.details }}
          </p>

          <div class="pill-group">
            <span
              v-for="item in school.focus"
              :key="item"
              class="pill"
            >
              {{ item }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const education = [
  {
    school: 'University of Wisconsin – Eau Claire',
    degree: 'B.S. in Computer Science',
    date: 'Expected May 2026',
    details: 'Minor in Psychology',
    focus: ['Software Development', 'Data Structures', 'Backend Systems']
  }
]
</script>

<style>
.education {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.education-extra {
  margin: 0.5rem 0 1rem;
  color: var(--text-secondary);
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