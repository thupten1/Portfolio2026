<template>
  <div class="wrapper">
    <div id="contact" class="container">
      <div class="container-left">
        <div class="footertext">
          <div class="title">
            <p href="">Based in Eindhoven, The Netherlands. <br>Ready and motivated to get to the next level. <br><span class="gradient-text-red-orange">Let’s connect.</span></p>
          </div>
        </div>
      </div>
      <div class="container-right">
        <div class="container-right-container">
          <div class="container-right_text-left">
            <p>Contact</p>
          </div>
          <div class="container-right_text-right">
            <p>
                thupten09@hotmail.com<br>
                06-52476111<br><br>

                Please contact me for my address.
            </p>
          </div>
        </div>
        <div class="container-right-container">
          <div class="container-right_text-left">
            <p>Resume</p>
          </div>
          <div class="container-right_text-right">
            <p>
              <a href="/Thupten's_CV_2025.pdf" target="_blank" class="download-link">Download</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.download-link {
  color: white;
  text-decoration: underline;
  cursor: pointer;
  transition: color 0.3s ease;
  
  &:hover {
    color: #3498db;
  }
}

.footertext {

}
.title {
  font-size: 25px;
  gap: 0.5rem;
  display: flex;
  padding-right: 2rem;
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
  justify-content: space-between;
  width: 100%;
  background-color: #1b1b1b;
  color: white;
  .container-left, .container-right {
    padding: 1rem;
  }
  .container-right-container {
    display: flex;
    flex-direction: row;
    .container-right_text-left {
      width: 28%;
    }
    .container-right_text-right {
      width: 100%;
    }
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    height: 40vh;
    .container{
      display: flex;
      justify-content: space-between;
    }
    .container-left {
      margin-left: 1rem;
      padding-right: 1rem;
      width:35%;
    }
    .container-right {
      margin-left: 1rem;
      margin-right: 1rem;
    }
    .container-right-container {
      flex-direction: row;
      .container-right_text-left {
        padding-left: 0;
        padding-top: 0;
      }
      .container-right_text-right {
        padding-left: 1rem;
        padding-right: 1rem;
      }
    }
  }
}
</style>
