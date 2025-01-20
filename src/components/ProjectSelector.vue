<template>
    <a id="project" @mouseenter="mouseOver" @mouseleave="mouseLeave" class="projectDiv noHover" :href="project.link">
        <img :src="'projectImages/' + project.image" class="projectImage"/>
        <h1 class="projectTitle">{{ project.name }}</h1>
        <br>
        <div class="description">
            <p>{{ project.description }}</p>
        </div>
    </a>
</template>

<script>
export default {
  name: 'ProjectSelector',
  props: ["project"],
  data(){
    return{
        hover: false,
        text: ""
    }
  },
  created(){
    this.text = this.project.name;
  },
  methods: {
    mouseOver(){
        this.text = this.project.description;
    },
    mouseLeave(){
        this.text = this.project.name;
    }
  }
}
</script>

<style>
.description{
    position: relative;
    top: -180px;
    width: 100%;
    height: 100%;
    padding-top: 50px;
    background-color: rgb(57, 57, 57);
    opacity: 0;
    transition: .4s;
}
.description:hover{
    opacity: 1;
    transition: .4s;
}
.projectDiv{
    text-align: center;
    border: 3px white solid;
    color: white;
    display: inline-block;
    max-height: 150px;
    margin: 10px;
    transition-duration: .4s;
    border-radius: 10px;
    padding: 10px;
    font-size: medium;
    overflow: hidden;
    text-decoration: none;
}
.projectDiv:hover{
    -webkit-transform: scale(1.05);
    -moz-transform: scale(1.05);
    -ms-transform: scale(1.05);
    -o-transform: scale(1.05);
    transform: scale(1.05);   
    cursor: pointer;
}
.projectImage{
    width: 15%;
    border-radius: 10%;
    transition: 10s;
}
.projectTitle{
    padding: 0px;
    margin: 10px;
}
</style>