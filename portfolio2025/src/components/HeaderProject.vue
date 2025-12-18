<script setup>
import { useRouter, useRoute } from "vue-router";
const router = useRouter();
const route = useRoute();

const projectRoutes = [
  '/ikeapage',
  '/natuursteenshoppage', 
  '/blueriqpage',
  '/Opdampage',
  '/bistroopage',
  '/coreniopage'
];

function backtomain() {
  router.push('/');
}

function nextproject() {
  const currentPath = route.path;
  const currentIndex = projectRoutes.indexOf(currentPath);
  const nextIndex = (currentIndex + 1) % projectRoutes.length;
  const nextRoute = projectRoutes[nextIndex];
  
  router.push(nextRoute);
}
</script>
<template>
    <div class="">
      <nav class="project-navbar">
        <a class="navbar-item" @click="backtomain">Back to main</a>
        <a class="navbar-item" @click="nextproject">Next project</a>
      </nav>
    </div>
  </template>
<style scoped>
  .project-navbar {
    padding: 1rem 1rem 1rem 0rem;
    display: flex;
    justify-content: space-between;
  }
</style>

