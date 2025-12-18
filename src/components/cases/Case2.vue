<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const imgPosition = ref({ left: '0px', top: '0px' });
const showImage = ref(false);

const gotoproject = (event) => {
  const projectId = event.currentTarget.id;
  router.push(`/${projectId}page`);
};

// Show image and update position on hover
const handleMouseEnter = (event) => {
  showImage.value = true;
  requestAnimationFrame(() => {
    const img = document.querySelector('.projectimg');
    if (img) {
      img.style.opacity = '0';
      img.style.display = 'block';
      setTimeout(() => {
        img.style.opacity = '1';
      }, 50);
    }
  }, 3000);
  updateImagePosition(event);
};

// Update image position while moving
const handleMouseMove = (event) => {
  updateImagePosition(event);
};

// Hide image when mouse leaves
const handleMouseLeave = () => {
  showImage.value = false;
};

// Function to update image position dynamically
const updateImagePosition = (event) => {
  requestAnimationFrame(() => {
    imgPosition.value = {
      left: `${event.clientX + 20}px`, // Slight offset to the right
      top: `${event.clientY + 20}px`,  // Slight offset downwards
    };
  });
};
</script>

<template>
  <section class="big-screen">
    <div class="case" id="Blueriq" 
         @mouseenter="handleMouseEnter" 
         @mousemove="handleMouseMove"
         @mouseleave="handleMouseLeave"
         @click="gotoproject">
    <div class="case-boxes">
      <div class="case-boxes_row">
        <div class="case-box1"> 
          <p class="case-box1__text">1.</p>
        </div>
        <div class="case-box2 projectname">
          <p>Blueriq</p>
        </div>
        <div class="case-box3">
          <p>2023</p>
        </div>
      </div>
      <div class="case-boxes_row">
        <div class="case-box1">
          <p class="case-box1__text"></p>
        </div>
        <div class="case-box2">
          <p class="case-box2__text">UX Research<br/>UI/UX Design</p>
        </div>
        <div class="case-box3">
          <p></p>
        </div>
      </div>
    </div>
    <div class="case-text">
      <p>
        Blueriq, a company improving customer experience through technology, is rebuilding its
        platform to run on modern browsers. The new product, Blueriq Encore, includes a document
        editor that needed usability improvements to boost adoption.
      </p>
    </div>
    <div v-if="showImage" class="projectimg" :style="{ left: imgPosition.left, top: imgPosition.top}">
      <img src="../../assets/images/blueriq/MacBookAir(2022).png" alt="Project Preview">
    </div>
  </div>
</section>
  
<section class="mobile">
  <div class="case" id="Blueriq" @click= gotoproject>
    <div class="case-boxes">
      <div class="case-boxes_row">
        <div class="case-box1"> 
          <p class="case-box1__text">1.</p>
        </div>
        <div class="case-box2 projectname">
          <p>Blueriq</p>
        </div>
        <div class="m-case-box3">
          <p>2023</p>
        </div>
      </div>
      <div class="case-boxes_row">
        <div class="m-case-box1">
        <p class="m-case-box1__text">UX Research<br/>UI/UX Design</p>
        </div>
        <div class="m-case-box2">
        <p>
          Blueriq, a company improving customer experience through technology, is rebuilding its
          platform to run on modern browsers. The new product, Blueriq Encore, includes a document
          editor that needed usability improvements to boost adoption.
        </p>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<style lang="scss" scoped>
.projectimg{
  transition: 0.5s ease-out;
  display: none;
  position: fixed;
  left: 100px;
  top: 200px;
  width: 200px;
  height: 300px;
  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
.case-boxes{
  padding-left: 1rem !important;
}
.case:hover{
  background: linear-gradient(113.93deg,#0077e5,#7837d7 49.99%,#783b95);
  color: white;
  transition:  1s ease;
  .projectimg {
    display: block !important;
  }
}
.cases {
  padding: 1rem;
  .case {
    width: 100%;
    display: flex;
    flex-direction: column; // Change to column layout on mobile
    border-bottom-style: solid;
    border-color: rgb(200, 200, 200);

    .case-boxes {
      width: 100%;
      display: flex;
      flex-direction: column; // Full width for case boxes on mobile
      .case-boxes_row {
        display: flex;
        justify-content: space-between;
      }
    }
    .case-text{
      margin-right: 2rem;
    }
    .case-box1 {
      width: 100%; // Full width for case box 1 on mobile
      font-size: 24px; // Adjust font size for mobile
      &__text,
      .case-box1__text {
        margin-top: 0.5rem; // Adjust margin for mobile
      }
    }
    .case-box2{
      width: 100%;
      font-size: 14px;
    }
    .case-box3 {
      width: 100%; // Full width for case box 2 and 3 on mobile
      font-size: 18px; // Adjust font size for mobile
    }
    .m-case-box1{
        font-size: 12px;
        width: 50%;
        margin-top: 0.5rem;

      }
    .m-case-box3{
        font-size: 14px;
        width:100%;
        text-align: end;
        margin-right: 1rem;
        padding-right: 1rem;
      }
    .m-case-box2{
        width: 100%;
        word-wrap: break-word;
        font-size: 14px;
        margin-left: 0.5rem;
        margin-right: 1rem;
        overflow: hidden;
      }
  }
}
@media screen and (max-width: 767px) {
  .big-screen{
    display:none;
  }
}


@media screen and (min-width: 768px) {
  // Apply styles only for screens wider than 768px
  .mobile{
    display: none !important;
  }
  .projectname{
    font-size: 18px !important;
  }
  .cases {
    .case {
      display: flex;
      flex-direction: row;
      padding-top: 1rem;
      padding-bottom: 1rem;
      .case-boxes {
        width: 48vw;
        .case-boxes_row {
          width: 48vw;
        }
      }
      .case-box1 {
        width: 20%;
        font-size: 50px;
        font-weight: 400;
        height: auto;
        &__text,
        .case-box1__text {
          margin-top: 1rem;
        }
      }
      .case-box2,
      .case-box3 {
        width: 40%;
        height: auto;
        font-size: 16px;
      }
    }
  }
}
</style>
