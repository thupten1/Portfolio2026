<script setup>
</script>

<template>
  <div class="wrapper" id="aboutme">
    <div class="container">
      <div class="container-left">
        <div id="aboutme" class="aboutme">
          <div class="title">
            <p>About me</p>
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
        </div>
        <div class="my-image_container">
          <div class="my-image">
            <img class="t-img" src="../assets/thupten.png" />
          </div>
        </div>
      </div>
      <div class="container-right">
        <div class="container-right-container">
          <div class="container-right_text-left">
            <h3>Bio</h3>
          </div>
          <div class="container-right_text-right">
            <p>
              Hi, my name is Thupten Rekonkati, I am 27 years old and originally
              from Tibet. As a small child of 3 years old, I moved to India with
              my parents. I lived in India for 5 years and also went to an
              English-speaking school. When I was 9, my parents and I moved to
              the Netherlands. After years of studying in the field of ICT, I
              found my passion in UX Design/UI Design. Begin 2024, I obtained my
              diploma and am currently working at Corenio, I'm very motivated to work on awesome projects.
            </p>
          </div>
        </div>
        <div class="container-right-container">
          <div class="container-right_text-left">
            <h3>Knowledge</h3>
          </div>
          <div class="container-right_text-right">
            <p>
              Figma <br>
              Adobe XD <br> 
              Photoshop <br>
              InDesign <br> 
              Illustrator<br><br>

              HTML / CSS<br> 
              PHP<br> 
              Javascript<br> 
              Vue 3<br> <br>  

              Digital Design<br> 
              Web design<br> 
              UX/UI Design<br> 
              UX Research<br> 
              Design Systems<br> 
              App Design<br> 
              Digital product design <br>
              Wireframes<br> 
              User Flows<br> 
              User Profiles<br> 
              Prototyping<br> 
              MVP's<br> 
              Web Development<br> 
              Webflow <br>
              Webflow Development<br> 
              Webflow Integrations
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.aboutme {
  padding-top: 1rem;
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
.container {
  display: flex;
  flex-direction: column;

  .container-left {
    padding-left: 1rem;
    padding-right: 1rem;
    border-bottom: 1px solid rgb(200, 200, 200);
    padding-bottom: 1rem;
  }

  .container-right {
    margin: 1rem;
    margin-bottom: 5rem;

    .container-right-container {
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      .container-right_text-left {
        padding-left: 1rem;
        padding-top: 1rem;
      }

      .container-right_text-right {
        padding: 1rem;
      }
    }
  }
}

.t-img {
  width: 100%;
  margin-top: 5rem;
}

@media screen and (min-width: 768px) {
  .container {
    display: flex;
    flex-direction: row;

    .container-left {
      width: 40%;
      padding-bottom: 0.5rem;
      border-right: 1px solid rgb(200, 200, 200);
    }

    .container-right {
      width: 60%;
      margin: 1rem;
      margin-top: 5rem;
      margin-bottom: 5rem;
      
    }

    .container-right-container {
      flex-direction: row !important; 
      margin-top: 1rem;
      gap: 1rem;

      .container-right_text-left {
        width: 20%;
        margin-left: 20%;
        display: flex;
        justify-content: space-around;
      }

      .container-right_text-right {
        width: 40%;
        padding-top: 6rem;
        padding-left: 1rem;
        padding-right: 2rem;
      }
    }
  }
}
</style>