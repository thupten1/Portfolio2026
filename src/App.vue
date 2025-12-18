<script setup>
import { RouterView } from 'vue-router'
import Footer from "@/components/Footer.vue"
</script>

<template>
  <section class="main-wrapper">
    <RouterView/> 
    <Footer></Footer>
  </section>
</template>

<style lang="scss">
@import url('../src/assets/textcolor.scss');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Cousine:ital,wght@0,400;0,700;1,400;1,700&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Cousine:ital,wght@0,400;0,700;1,400;1,700&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Quicksand:wght@300..700&display=swap');

body{
  margin: 0 !important;
  background-color: #F8F8F8;
  font-family: "Quicksand", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
}
.main-wrapper{
  padding-left: 1rem;
  padding-right: 1rem;
}
.wrapper{
  border-left-style: solid;
  border-right-style: solid;
  border-bottom-style: solid;
  border-color: rgb(200, 200, 200);
}

</style>