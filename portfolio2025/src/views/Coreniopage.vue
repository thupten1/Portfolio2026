<script setup>
import HeaderProject from "@/components/HeaderProject.vue";
import { onMounted, ref } from "vue";
import Navbar from "@/components/Navbar.vue";

const showImageModal = ref(false);
const selectedImage = ref('');

const openImageModal = (imageSrc) => {
  selectedImage.value = imageSrc;
  showImageModal.value = true;
};

const closeImageModal = () => {
  showImageModal.value = false;
  selectedImage.value = '';
};

onMounted(() => {
  window.scrollTo(0, 0);
});
</script>

<template>
  <Navbar :noBorders="true"/>
  <HeaderProject></HeaderProject>
  <section class="cover-img"></section>
  <section class="project-info big-screen">
    <div class="project-name">
      <p>Corenio</p>
    </div>
    <div class="project-description">
      <div class="project-description_text">
        <p>
          For Corenio, I transformed an outdated website into a modern and user-friendly platform. I researched competitors, designed new layouts in Figma, and validated the designs through customer feedback to create the final concept.
          I then fully developed the website using HTML, CSS, JavaScript, Query, and Smarty. The result is a fresh, professional website that strengthens Corenio's brand and better connects with its target audience.         </p>
      </div>
    </div>
    <div class="project-service ">
      <p>Service</p>
      <div class="services">
        <p>UI/UX Design<br/>Front-end Development<br/>Project Management</p>
      </div>
      <a target="_blank" href="https://www.corenio.com/">View page</a> 
    </div>
  </section>
  
  <section class="mobile">
    <div class="project-name">
      <p>Corenio</p>
    </div>
    <div class="project-description">
      <div class="project-description_text">
        <p>
          For Corenio, I transformed an outdated website into a modern and user-friendly platform. I researched competitors, designed new layouts in Figma, and validated the designs through customer feedback to create the final concept.
          I then fully developed the website using HTML, CSS, JavaScript, Query, and Smarty. The result is a fresh, professional website that strengthens Corenio's brand and better connects with its target audience.
        </p>
      </div>
    </div>
    <div class="project-service">
      <p>Service</p>
      <div class="services">
        <p>UI/UX Design<br/>Front-end Development<br/>Project Management</p>
      </div>
      <a target="_blank" href="https://www.corenio.com/">View page</a> 
    </div>
  </section>

  <section>
    <div class="project-results">
      <div class="image-container_big-left">
        <img 
          src="../assets/images/corenio/MacBookAir-1.png"
          style="background-color: #ececec;" 
          class="project-image b-l clickable-image" 
          @click="openImageModal($event.target.src)"
        />
      </div>
      <div class="image-container_big-right">
        <img 
          src="../assets/images/corenio/MacBookAir-2.png"
          style="background-color: #ececec;" 
          class="project-image b-r clickable-image" 
          @click="openImageModal($event.target.src)"
        />
      </div>
    </div>
    <div class="project-results">
      <div class="image-container_big-right">
        <img 
          src="../assets/images/corenio/MacBookAir-3.png"
          style="background-color: #ececec;" 
          class="project-image b-r clickable-image" 
          @click="openImageModal($event.target.src)"
        />
      </div>
      <div class="image-container_big-left">
        <img 
          src="../assets/images/corenio/MacBookAir-4.png"
          class="project-image b-l clickable-image" 
          @click="openImageModal($event.target.src)"
        />
      </div>
    </div>
    <div class="project-results">
      <div class="image-container_big-left">
        <img 
          src="../assets/images/corenio/iPhone 16 Pro.png"
          style="background-color: #ececec;" 
          class="project-image b-l clickable-image" 
          @click="openImageModal($event.target.src)"
        />
      </div>
      <div class="image-container_big-right">
        <img 
          src="../assets/images/corenio/iPhone15Pro-1.png"           
          style="background-color: #ececec;" 
          class="project-image b-r clickable-image" 
          @click="openImageModal($event.target.src)"
        />
      </div>
    </div>
    <div class="project-results">
      <div class="image-container_big-right">
        <img 
          src="../assets/images/corenio/iPhone15Pro-2.png"           
          style="background-color: #ececec;" 
          class="project-image b-r clickable-image" 
          @click="openImageModal($event.target.src)"
        />
      </div>
      <div class="image-container_big-left">
        <img 
          src="../assets/images/corenio/iPhone15Pro-4.png"           
          class="project-image b-l clickable-image" 
          @click="openImageModal($event.target.src)"
        />
      </div>
    </div>
    <div class="project-banner">
      <div class="image-container-big">
        <img 
          src="../assets/images/corenio/MacBookAir-5.png"
          class="project-big-image clickable-image" 
          @click="openImageModal($event.target.src)"
        />
      </div>
    </div>
  </section>

  <!-- Image Modal -->
  <div v-if="showImageModal" class="image-modal" @click="closeImageModal">
    <div class="modal-content" @click.stop>
      <span class="close-button" @click="closeImageModal">&times;</span>
      <img :src="selectedImage" alt="Preview" class="modal-image" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper{
  border: none;
}
.cover-img {
  height: 65vh;
  color: white;
  padding-top: 0.5rem;
  background-image: url(../assets/images/corenio/MacBookAir-6.png);
  background-size: cover;
  background-position: center;
}

.project-info {
  height: auto;
  color: white;
  display: flex;
  flex-direction: row;
  gap: 1rem;

  .project-name {
    width: 20%;
    height: auto;
    color: black;
  }

  .project-description {
    width: 40%;
    height: auto;

    .project-description_text {
      width: 75%;
      color: black;
    }
  }

  .project-service {
    width: 40%;
    color: black;
    height: auto;
    display: flex;
    justify-content: space-between;
    padding-left: 1rem;
  }
}

a {
  padding-top: 1rem;
}

.service {
  text-align: right;
}

.project-results {
  width: 100%;
  height: 50vw;
  display: flex;
  flex-direction: row;
  gap: 1rem;

  .image-container_big-left {
    width: 60%;
  }

  .image-container_big-right {
    width: 40%;
  }

  .project-image {
    width: 100%;
    overflow: hidden;
  }

  .b-l {
    height: 36vw;
    object-fit: cover;
  }

  .b-r {
    height: 23vw;
    object-fit: cover;
  }
} 
  .mobile{
    display: none;
  }
  .big-screen{
    display: flex;
  }

.clickable-image {
  cursor: pointer;
  transition: transform 0.2s ease-in-out, opacity 0.2s ease-in-out;
}

.clickable-image:hover {
  transform: scale(1.02);
  opacity: 0.9;
}

.image-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  cursor: pointer;
}

.modal-content {
  position: relative;
  max-width: 90%;
  max-height: 90%;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  cursor: default;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-image {
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
  display: block;
  object-fit: contain;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 20px;
  font-size: 30px;
  color: #333;
  cursor: pointer;
  z-index: 1001;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s;
}

.close-button:hover {
  background: rgba(255, 255, 255, 1);
}
.project-banner {
  width: 100%;
  height: 20%;

  .image-container-big {
    width: 100%;
    height: 50vw;
    object-fit: contain;
    overflow: hidden;
    display: flex;
    align-items: center; /* vertical */
    justify-content: center; /* horizontal */
  }

  .project-big-image {
    width: 100%;
  }
}
@media screen and (max-width: 768px) {
  .cover-img{
    height: 25vh;
  }
  .project-results {
    flex-direction: column; // Flex direction column on mobile
    height: 100% !important; // Reset height for mobile responsiveness
    width: 100%;
    gap: 0;
  }

  .image-container_big-left,
  .image-container_big-right {
    width: 100% !important;
    height: 50%; // Adjust width for full width on mobile
  }

  .b-l,
  .b-r {
    height: 50vw !important;
    width: 100%; // Reset height for mobile responsiveness
  }
  .project-banner {
    margin-top: 3rem;
  }

  .project-name{
    font-weight: 1000;
    font-size: large;
    margin-top: 2rem;
  }
  .project-service{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 1rem;
    margin-bottom: 1.5rem;
  }
  .mobile{
    display: contents;
  }
  .big-screen{
    display: none;
  }
}
@media screen and (max-width: 767px) {
  .project-info {
    font-size: 12px;
    margin-top: 2rem;
    height: auto;
  }
  .cover-img{
    height: 35vh;
  }
}
</style>

