<script setup>
import { ref } from 'vue';
import Case1 from "@/components/cases/Case1.vue";
import Case2 from "@/components/cases/Case2.vue";
import Case3 from "@/components/cases/Case3.vue";
import Case4 from "@/components/cases/Case4.vue";
import Case5 from "@/components/cases/Case5.vue";
import LastCase from "@/components/cases/LastCase.vue";
</script>

<template>
  <div class="wrapper">
    <div id="cases" class="cases">
      <div class="title">
        <p>Cases</p>
        <svg
          class="icon"
          width="40"
          height="16"
          viewBox="0 0 40 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M39.7071 8.70711C40.0976 8.31658 40.0976 7.68342 39.7071 7.29289L33.3431 0.928932C32.9526 0.538408 32.3195 0.538408 31.9289 0.928932C31.5384 1.31946 31.5384 1.95262 31.9289 2.34315L37.5858 8L31.9289 13.6569C31.5384 14.0474 31.5384 14.6805 31.9289 15.0711C32.3195 15.4616 32.9526 15.4616 33.3431 15.0711L39.7071 8.70711ZM0 9H39V7H0V9Z"
            fill="#919191"
          />
        </svg>
      </div>
      <!-- <Case1/> -->
      <Case2/>
      <Case5/>
      <Case3/>
      <Case4/>
      <LastCase/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.title p{
  padding-left: 1rem;
}
.cases.hovered {
  color: white; /* Ensure text remains white when hovered */
}

.title {
  gap: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  .icon {
    width: 30px;
    height: 30px;
    fill: currentColor;
  }
}
</style>