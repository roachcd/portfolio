<template>
  <navBack id="navBack"></navBack>
  <nav>
    <a onclick="window.scrollTo({top: 0, behavior: 'smooth'})" class="iconLink">CR</a>
    <a @click="scroll('projects')">Projects</a>
    <a @click="scroll('links')" to="/about">Links</a>
  </nav>
  <router-view/>
</template>

<script>
export default {
  name: 'app',
  methods: {
    scroll(id){
      const el = document.getElementById(id);
      const yOffset = 120;
      const y = el.getBoundingClientRect().top + window.scrollY - yOffset;
      window.scrollTo({top: y, behavior: 'smooth'});
    }
  }
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  const down = document.getElementById("scrollDown");
  down.style.visibility = "hidden";
  const el = document.getElementById("projects");
  const y = el.getBoundingClientRect().top + window.scrollY - 121;
  console.log(screen.width);
  if(window.innerWidth > 631){
    if (document.documentElement.scrollTop > y) {
      document.getElementById("navBack").style.opacity = 1;
    } else {
      document.getElementById("navBack").style.opacity = 0;
    }
  }
  else{
    document.getElementById("navBack").style.opacity = 1;
  }
}
</script>

<style>
#app {
  font-family: Helvetica;
  font-size: x-large;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: rgb(247, 245, 245);
  margin: -8px;
}

navBack{
  position: fixed;
  background: transparent;
  width: 100%;
  height: 90px;
  left: 0px;
  top: 0px;
  backdrop-filter: blur(50px);
  border-bottom: 1px rgb(0, 0, 0) solid;
  z-index: 98;
  opacity: 0;
}

nav {
  padding: 30px;
  position: fixed;
  z-index: 99;
}

nav a {
  font-weight: bold;
  color: black;
  margin-right: 15px;
  text-decoration: none;
}

.iconLink{
  border: 3px solid black;
  padding: 5px;
}
</style>
