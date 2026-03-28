<template>
  <nav class="top-nav">
    <div class="brand-wrap">
      <img src="/me.jpeg" alt="Chase Roach">
      <h4 class="brand">Chase Roach</h4>
    </div>

    <a href="https://www.linkedin.com/in/chase-roach-022b1a257/" target="_blank" rel="noopener noreferrer">
      LinkedIn
      <img src="/InBug-White.png" alt="LinkedIn" />
    </a>

    <a href="https://github.com/roachcd" target="_blank" rel="noopener noreferrer">
      GitHub
      <img src="/GitHub_Invertocat_White_Clearspace.png" alt="GitHub" />
    </a>
  </nav>

  <mobile-nav>
    <h1 v-on:click="mobileNavOpened = true">☰</h1>
    <div class="brand-wrap">
      <h4 class="brand">Chase Roach</h4>
    </div>
  </mobile-nav>

  <mobile-nav-menu v-if="mobileNavOpened">
      <h1 v-on:click="mobileNavOpened = false" style="font-size: 25px;">✕</h1>
      <h4>Sections</h4>
      <router-link to="/" v-on:click="mobileNavOpened = false">Introduction</router-link>
      <router-link to="/skills" v-on:click="mobileNavOpened = false">Skills</router-link>
      <router-link to="/projects" v-on:click="mobileNavOpened = false">Projects</router-link>
      <router-link to="/experience" v-on:click="mobileNavOpened = false">Experience</router-link>
      <router-link to="/education" v-on:click="mobileNavOpened = false">Education</router-link>

      <span style="margin: 20px;"></span>
      <h4>Links</h4>
      <a href="https://www.linkedin.com/in/chase-roach-022b1a257/" target="_blank" rel="noopener noreferrer">
        LinkedIn
        <img src="/InBug-White.png" alt="LinkedIn" />
      </a>
      <a href="https://github.com/roachcd" target="_blank" rel="noopener noreferrer">
        GitHub
        <img src="/GitHub_Invertocat_White_Clearspace.png" alt="GitHub" />
      </a>
  </mobile-nav-menu>

  <layout>
    <spacer class="hidden"></spacer> <!--Spaces flex when side nav becomes fixed-->
    <nav-side>
      <h4>Sections</h4>
      <router-link to="/">Introduction</router-link>
      <router-link to="/skills">Skills</router-link>
      <router-link to="/projects">Projects</router-link>
      <router-link to="/experience">Experience</router-link>
      <router-link to="/education">Education</router-link>

      <!--<router-link to="/education" class="contact">Contact</router-link>-->
    </nav-side>

    <router-view v-slot="{ Component }">
      <transition name="page" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </layout>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import '@/assets/view-styles.css'

export default {
  
  name: 'App',
  data() {
    return{
      mobileNavOpened: false
    }
  } 
}

window.addEventListener('scroll', () => {
  const sidebar = document.querySelector('nav-side')
  const spacer = document.querySelector('spacer')

  const threshold = 100 // px (adjust this)

  if (window.scrollY > threshold) {
    sidebar.classList.add('fixed-sidebar')
    spacer.classList.remove('hidden')
  } else {
    sidebar.classList.remove('fixed-sidebar')
    spacer.classList.add('hidden')
  }
})
</script>

<style>
:root {
  --bg: #0a0a0a;
  --surface: #141414;
  --surface-hover: #1c1c1c;
  --text-primary: #f5f5f5;
  --text-secondary: #b3b3b3;

  --border-subtle: rgba(255, 255, 255, 0.05);
  --shadow-soft: 0 4px 14px rgba(0, 0, 0, 0.35);

  --radius-lg: 20px;
  --radius-sm: 8px;

  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-5: 1.5rem;
  --space-6: 2rem;

  --layout-gap: 3rem;
  --layout-padding: clamp(.5rem, 2vw, 2rem);

  --sidebar-width: clamp(180px, 15vw, 240px);
  --aside-width: clamp(180px, 20vw, 280px);
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

html,
body,
#app {
  min-height: 100%;
  margin: 0;
}

body {
  background-color: var(--bg);
  color: var(--text-primary);
  font-family: Arial, Helvetica, sans-serif;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h4 {
  margin: 0;
  color: var(--text-primary);
  text-align: left;
  font-size: 1.25rem;
  font-weight: 600;
}

mobile-nav,
.top-nav,
nav-side {
  background-color: var(--surface);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-soft);
}

.top-nav {
  display: flex;
  align-items: center;
  gap: var(--space-4);
  padding: var(--space-4) var(--space-5);
  margin: var(--layout-padding) var(--layout-padding) 0;
}

.brand {
  margin-right: auto;
}

.hidden{
  display: none;
}

.top-nav a {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  color: var(--text-secondary);
  text-decoration: none;
  padding: var(--space-2) var(--space-3);
  border-radius: var(--radius-sm);
  transition: background-color 0.2s ease, color 0.2s ease;
}

mobile-nav-menu a {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  color: var(--text-secondary);
  text-decoration: none;
  padding: var(--space-2) var(--space-3);
  border-radius: var(--radius-sm);
  transition: background-color 0.2s ease, color 0.2s ease;
}

.top-nav a:hover {
  color: var(--text-primary);
  background-color: var(--surface-hover);
}

.top-nav a img {
  width: 18px;
  height: 18px;
  object-fit: contain;
}

mobile-nav-menu a img {
  width: 18px;
  height: 18px;
  object-fit: contain;
}

layout {
  display: grid;
  grid-template-columns: var(--sidebar-width) minmax(0, 1fr) var(--aside-width);
  gap: var(--layout-gap);
  margin: var(--space-5) var(--layout-padding) var(--layout-padding);
  min-height: calc(100vh - 110px);
}

nav-side {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  padding: var(--space-5);
  height: 78vh;
}

nav-side a {
  display: block;
  color: var(--text-secondary);
  text-decoration: none;
  text-align: left;
  padding: var(--space-2) var(--space-3);
  border-radius: var(--radius-sm);
  transition: background-color 0.2s ease, color 0.2s ease;
}

nav-side a:hover,
nav-side a.router-link-exact-active {
  color: var(--text-primary);
  background-color: var(--surface-hover);
}

nav-side .contact{
  margin-top: auto;

  display: block;
  text-align: center;
  padding: var(--space-3);
  border-radius: var(--radius-sm);

  background: linear-gradient(90deg, #2d86d4, #3b82f6);
  color: white;
  text-decoration: none;
  font-weight: 500;

  transition: all 0.2s ease;
}

mobile-nav{
  display: none;
}

mobile-nav-menu{
  display: none;
}

.fixed-sidebar {
  position: fixed;
  top: var(--layout-padding);
  left: var(--layout-padding);
  width: var(--sidebar-width);
}

@media (max-width: 1000px) {
  layout {
    grid-template-columns: var(--sidebar-width) minmax(0, 1fr);
  }
}

@media (max-width: 700px) {
  .page-view {
    width: 100%;
    max-width: 100%;
    min-width: 0;
  }

  .top-nav {
    flex-wrap: wrap;
    margin: var(--space-4) var(--space-4) 0;
  }
  
  .top-nav{
    display: none;
  }

  nav-side{
    display: none;
  }

  mobile-nav{
    display: flex;
    align-items: center;
    gap: var(--space-4);
    padding: var(--space-4) var(--space-5);
    margin: var(--layout-padding) var(--layout-padding) 0;
  }

  mobile-nav-menu{
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: black;
    top: 0px;
    left: 0px;
    display: flex;
    flex-direction: column;
    padding: var(--space-4) var(--space-5);
    margin: var(--layout-padding) var(--layout-padding) 0;
    z-index: 100;
  }

  mobile-nav-menu a{
    display: block;
    color: var(--text-secondary);
    text-decoration: none;
    text-align: left;
    padding: var(--space-2) var(--space-3);
    border-radius: var(--radius-sm);
    transition: background-color 0.2s ease, color 0.2s ease;
  }

  .brand {
    width: 100%;
    margin-right: 0;
  }

  layout {
    grid-template-columns: 1fr;
    margin: var(--space-5);
    min-height: auto;
  }
}


.page-enter-active,
.page-leave-active {
  transition: all 0.3s ease;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  transform: translateY(8px);
}

.pill {
  display: inline-block;
  padding: 4px 10px;
  margin: 3px;
  border-radius: 999px;
  background: var(--surface-hover);
  color: var(--text-primary);
  font-size: 0.85rem;
}

.top-nav .brand-wrap {
  display: flex;
  align-items: center;
  gap: 0.6rem;
}

.brand-wrap img {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
}
</style>