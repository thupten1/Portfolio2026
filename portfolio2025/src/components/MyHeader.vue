<template>
  <div class="wrapper">
      <div class="welcome">
        <h1 class="welcome-text">
          Hi, I’m Thupten, a UX Designer who likes designing meaningful experiences that feel intuitive, clear, and memorable.
        </h1>
          <!-- <h1 class="welcome-text">
            The <span id="gradient1" class="gradient-text-red-orange">Design Works</span> & <span id="gradient2" class="gradient-text-blue-purple">Projects</span> of Thupten Rekonkati
          </h1> -->
    </div>
  </div>
</template>

<script>
import SplitType from 'split-type'
import gsap from 'gsap'

export default {
  mounted() {
    new SplitType('.welcome-text')
    const chars = document.querySelectorAll('.char')
    const words = document.querySelectorAll('.word')

    // Apply initial transform
    chars.forEach(char => {
      char.style.transform = 'translateY(130px)'
      char.style.transition = 'transform 0.5s'
    })
    words.forEach(word => {
      word.style.clipPath = 'polygon(0 100%, 100% 100%, 100% 0, 0 0)'
    })

    // Apply gradient classes to specific words
    words.forEach((word, index) => {
      const wordText = word.textContent.trim()
      if (wordText === 'Design' || wordText === 'Works') {
        word.classList.add('gradient-red-orange')
        // Apply gradient to each character in the word
        const wordChars = word.querySelectorAll('.char')
        wordChars.forEach(char => {
          char.classList.add('gradient-red-orange')
        })
      } else if (wordText === 'Projects') {
        word.classList.add('gradient-blue-purple')
        // Apply gradient to each character in the word
        const wordChars = word.querySelectorAll('.char')
        wordChars.forEach(char => {
          char.classList.add('gradient-blue-purple')
        })
      }
    })

    gsap.to(chars, {
      y: 0,
      delay: 0.1,
      stagger: 0.02,
      duration: 0.5,
      ease: 'power3.out'
    })
  },
}
</script>

<style lang="scss" scoped>
.welcome {
  padding: 1rem;
  padding-top: 3rem;
  padding-bottom: 3rem;
  font-size: 36px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
.word{
  line-height: 8rem;
}

// Gradient classes for specific words
.gradient-red-orange {
  background: linear-gradient(90deg, rgb(255, 111, 0), rgb(255, 0, 0));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.gradient-blue-purple {
  background: linear-gradient(90deg, rgb(0, 0, 255), rgb(128, 0, 128));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

@media (max-width: 768px) {
  .welcome-text {
    font-size: 40px;
  }
  .word{
    line-height: 2rem !important;
  }
}
</style>