<template>
  <div class="home">
    <img class="profileImg" src="../assets/profilePicture.png">
    <img id="scrollDown" class="scrollDown" src="@/assets/down.png" />
    <div class="aboutMe">
      <h1>Hello, I'm <b class="animated-text">Chase Roach!</b> I have always had a passion for 
      <p id="typed" class="typewriter">{{ passions[currentPassion] }}</p>
      <p class="nottypewriter">Computer Science</p></h1>
    </div>
    <div id="projects" class="projects">
      <h1>Projects</h1>
      <p>Here are some projects that I have worked on!</p>
      <div class="projectGrid">
        <ProjectSelector v-for="project in projects" :project="project"></ProjectSelector>
      </div>
    </div>
    <div class="links" id="links">
      <h1>Links</h1>
      <p>Here are some links to learn more about me!</p>
      <div class="linkGrid">
        <img class="linkImg" style="padding-top: 10px;" src="@/assets/LI-In-Bug.png">
        <img class="linkImg" src="@/assets/github-mark.png">
        <img class="linkImg" src="@/assets/Handshake_app_icon_default.png">
      </div>
    </div>
    <div class="footer"></div>
  </div>
</template>

<script>
// @ is an alias to /src
import ProjectSelector from '@/components/ProjectSelector.vue';

export default {
  name: 'HomeView',
  components: {
    ProjectSelector
  },
  data(){
    return{
      passions: [
        "computer science.",
        "software development.",
        "front-end development.",
        "artificial intelligence."
      ],
      currentPassion: 0,
      projects: []
    }
  },
  created(){
    var projectData = require("@/assets/projects.json");
    this.projects = JSON.parse(JSON.stringify(projectData));
  },
  mounted: function () {
    this.timer = setInterval(() => {
      var el = document.getElementById('typed');
      el.style.animation = "none";
      el.offsetHeight; /* trigger reflow */
      el.style.animation = null; 
      this.currentPassion = this.currentPassion + 1;
      if(this.currentPassion == 4){
        this.currentPassion = 0;
      }

    }, 3000)
  },
}
</script>

<style>

.profileImg{
  border: 5px solid black;
  border-radius: 50%;
  width: 350px;
  margin-top: calc(50vh - 175px);
}


.aboutMe{
  margin-top: calc(50vh - 175px);
  color: black;
  margin-left: 20%;
  margin-right: 20%;
  text-align: center;
}

.projects{
  margin-top: calc(50vh - 175px);
  color: white;
  text-align: left;
  background-color: rgb(57, 57, 57);
  padding-top: 5vh;
  padding-bottom: 20px;
  padding-left: 5%;
  padding-right: 5%;
}

.links{
  margin-top: calc(5vh);
  color: black;
  text-align: left;
  padding: 5px;
  padding-bottom: 20px;
  padding-left: 5%;
  padding-right: 5%;
  padding-bottom: 20px;
}

.animated-text {
  --bg-size: 400%;
  --color-one: hsl(212, 90%, 55%);
  --color-two: hsl(191, 95%, 55%);
  background: linear-gradient(
                90deg,
                var(--color-one),
                var(--color-two),
                var(--color-one)
              ) 0 0 / var(--bg-size) 100%;
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  animation: move-bg 8s infinite linear;
}

@media (prefers-reduced-motion: no-preference) {
  .animated-text {
    animation: move-bg 8s linear infinite;
  }
  @keyframes move-bg {
    to {
      background-position: var(--bg-size) 0;
    }
  }
}

.typewriter{
  overflow: hidden;
  white-space: nowrap;
  margin: 0 auto;
  display: flow;
  animation: 
    typing 3.5s steps(40, end),
    blink-caret .75s step-end infinite;
}
.nottypewriter{
  display: contents;
  margin: 0 auto;
}

@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}

@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: hsl(212, 90%, 55%); }
}

.title{
  text-align: left;
  font-weight: bold;
}

.subtitle{
  text-align: left;
  font-weight: normal;
  font-size: large; 
}

.projectGrid{
  width: 100%;
  display: grid;
  grid-template-columns: 30% 30% 30%;
  grid-gap: 3.33%;
  grid-row: 150px;
}

.linkGrid{
  width: 100%;
  display: grid;
  grid-template-columns: 10% 10% 10%;
  grid-gap: 4%;
  grid-row: 150px;
  margin-top: 50px;
}

@media all and (min-width: 1200px){
  .linkGrid{
    grid-template-columns: 7% 7% 7%;
    grid-gap: 2%;
  }
}

@media all and (max-width: 631px){
  .linkGrid{
    grid-template-columns: 13% 13% 13%;
    grid-gap: 5%;
  }
  .projectGrid{
    grid-template-columns: 100%;
  }
  .profileImg{
    width: 55%;
  }
  .aboutMe{
    margin-left: 10%;
    margin-right: 10%;
  }
}

@media all and (max-width: 1000px){
  .typewriter{
    display: none;
  }
}

@media  all and (min-width: 1001px) {
  .nottypewriter{
    display: none;
  }
}

.linkImg{
  transition: .4s;
  width: 100%;
}
.linkImg:hover{
  -webkit-transform: scale(1.05);
  -moz-transform: scale(1.05);
  -ms-transform: scale(1.05);
  -o-transform: scale(1.05);
  transform: scale(1.05);   
  cursor: pointer;
  transition: .4s;
}
.footer{
  min-height: 10vh;
}
.scrollDown{
  position: fixed;
  bottom: 10px;
  width: 4%;
  right: calc(50% - 2%);
  animation: down 3s ease infinite;
  animation-delay: 5s;
  opacity: 0;
}
@keyframes down {
  0% {opacity: 0;}
  50% {opacity: 1;}
  100% {opacity: 0;}
}
</style>