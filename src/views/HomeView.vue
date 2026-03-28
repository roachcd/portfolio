<template>
  <div class="page-view">
    <h1>Hello, I'm <span class="accent">Chase Roach</span> 👋</h1>
    <h2>
      I'm a full-stack developer focused on building polished web and mobile applications. 
      I work with Vue, React, and Express, and develop iOS apps in Swift, 
      with a strong emphasis on backend architecture and API design.
    </h2>  
    <br>
    <a href="https://chaseroach.site/ChaseRoachResume.pdf" target="_blank">Resume</a>
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