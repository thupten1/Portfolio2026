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
      <p>Ikea project</p>
    </div>
    <div class="project-description">
      <div class="project-description_text">
       <p>Greenhouse Group commissioned us to design a physical cross-media installation using innovative technology to give IKEA customers an unforgettable experience. The result is the IKEA Escape Room: a playful, mobile installation where visitors solve puzzles and challenges to make rooms more sustainable.</p>
        <p>Built inside a container that can travel between IKEA stores, the escape room combines fun, awareness, and innovation. Using IKEA’s own products and smart home technology, participants discover how small changes can make everyday life greener. Progress is visualized in real time, and cross-media elements—like optional hints on social media—extend the experience beyond the store.</p>
        <p>The concept reflects IKEA’s commitment to sustainability and accessibility, while also showcasing its smart home products in an engaging way. With a communication tone that is playful, proud, and honest, the escape room strengthens the customer experience and demonstrates how IKEA contributes to creating a better daily life for both customers and employees.</p>
      </div>
    </div>
    <div class="project-service">
      <p>Service</p>
      <div class="services">
        <p>Concepting<br/>UI/UX Design<br/>UX Research<br/> Development</p>
      </div>
      <a target="_blank" href="@/assets/documents/pdf/Concept_escaperoom.pdf">View document</a>
    </div>
  </section>

  <section class="mobile">
    <div class="project-name">
      <p>Ikea project</p>
    </div>
    <div class="project-description">
      <div class="project-description_text">
        <p>Greenhouse Group commissioned us to design a physical cross-media installation using innovative technology to give IKEA customers an unforgettable experience. The result is the IKEA Escape Room: a playful, mobile installation where visitors solve puzzles and challenges to make rooms more sustainable.</p>
        <p>Built inside a container that can travel between IKEA stores, the escape room combines fun, awareness, and innovation. Using IKEA’s own products and smart home technology, participants discover how small changes can make everyday life greener. Progress is visualized in real time, and cross-media elements—like optional hints on social media—extend the experience beyond the store.</p>
        <p>The concept reflects IKEA’s commitment to sustainability and accessibility, while also showcasing its smart home products in an engaging way. With a communication tone that is playful, proud, and honest, the escape room strengthens the customer experience and demonstrates how IKEA contributes to creating a better daily life for both customers and employees.</p>
      </div>
    </div>
    <div class="project-service">
      <p>Service</p>
      <div class="services">
        <p>Concepting<br/>UI/UX Design<br/>UX Research<br/> Development</p>
      </div>
      <a target="_blank" href="@/assets/documents/pdf/Concept_escaperoom.pdf">View document</a>
    </div>
  </section>

  <section>
    <div class="project-results">
      <div class="image-container_big-left">
        <img 
          src="../assets/images/Ikea/Interieur design 1 slaapkamer.png"
          style="background-color: #ececec;" 
          class="project-image b-l clickable-image" 
          @click="openImageModal($event.target.src)"
        />
      </div>
      <div class="image-container_big-right">
        <img 
          src="../assets/images/Ikea/Interieur design 1 keuken.png"
          style="background-color: #ececec;" 
          class="project-image b-r clickable-image" 
          @click="openImageModal($event.target.src)"
        />
      </div>
    </div>
    <div class="project-results">
      <div class="image-container_big-right">
        <img 
          src="../assets/images/Ikea/iPad Pro 2020.png"
          style="background-color: #ececec;" 
          class="project-image b-r clickable-image" 
          @click="openImageModal($event.target.src)"
        />
      </div>
      <div class="image-container_big-left">
        <img 
          src="../assets/images/Ikea/iPad Air 2020.png"
          style="background-color: #ececec;" 
          class="project-image b-l clickable-image" 
          @click="openImageModal($event.target.src)"
        />
      </div>
    </div>
    <div class="project-banner">
      <div class="image-container-big">
        <img 
           src="../assets/images/Ikea/iPad Pro.png"
          style="background-color: #ececec;" 
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
  border: none !important; 
}
.cover-img {
  height: 65vh;
  color: white;
  padding-top: 0.5rem;
  background-image: url(../assets/images/Ikea/Bode.png);
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

.services {
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
