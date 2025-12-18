<template>
  <div class="navbar-wrapper">
    <nav class="navbar" :class="{ 'no-borders': noBorders }">
      <div class="navbar-brand">
        <a class="navbar-item" href="#">THUPTEN REKONKATI</a>
      </div>
      <button class="hamburger" @click="toggleMenu" aria-label="Toggle menu">
          <span :class="{'open': isOpen}"></span>
          <span :class="{'open': isOpen}"></span>
          <span :class="{'open': isOpen}"></span>
        </button>
      <div class="navbar-menu" :class="{'is-active': isOpen}">
        <div class="navbar-end">
          <a class="navbar-item" @click="goToCases(); closeMenu()">Cases</a>
          <a class="navbar-item" @click="goToAboutme(); closeMenu()">About me</a>
          <a class="navbar-item" href="#" @click="closeMenu()">Resume</a>
          <a class="navbar-item" @click="goToContact(); closeMenu()">Contact</a>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';

export default {
  props: {
    noBorders: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isOpen: false
    };
  },
  setup() {
    const router = useRouter();
    
    const goToCases = async () => {
      await router.push('/');
      // Wait for DOM to update, then scroll
      setTimeout(() => {
        const casesSection = document.getElementById('cases');
        if (casesSection) {
          casesSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    };
    const goToAboutme = async () => {
      await router.push('/');
      // Wait for DOM to update, then scroll
      setTimeout(() => {
        const aboutmeSection = document.getElementById('aboutme');
        if (aboutmeSection) {
          aboutmeSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    };
    const goToContact = async () => {
      // Wait for DOM to update, then scroll
      setTimeout(() => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    };
    
    return { goToCases, goToAboutme, goToContact };
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
      if (this.isOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    },
    closeMenu() {
      this.isOpen = false;
      document.body.style.overflow = '';
    }
  }
}
</script>

<style lang="scss">
.navbar-wrapper {
  position: sticky;
  top: 0;
  z-index: 1000;
}

  .navbar {
    position: sticky;
    top: 0;
    z-index: 1000;
    background: rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(10px) saturate(180%);
    -webkit-backdrop-filter: blur(10px) saturate(180%);
    border-bottom: 2px solid rgb(200, 200, 200);
    border-left: 2px solid rgb(200, 200, 200);
    border-right: 2px solid rgb(200, 200, 200);
    padding: 1rem 0rem 1rem 0rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    &.no-borders {
      border-bottom: none;
      border-left: none;
      border-right: none;
    }

  .navbar-brand {
    display: flex;
    align-items: center;
    .navbar-item {
      padding-left: 1rem;
      color: #1b1b1b;
      font-weight: bold;
      text-decoration: none;
    }
  }

  .hamburger {
    display: none;
    flex-direction: column;
    justify-content: center;
    width: 40px;
    height: 35px;
    background: none;
    border: none;
    cursor: pointer;
    margin-left: 1rem;
    z-index: 1100;
    span {
      display: block;
      height: 4px;
      width: 100%;
      background: #222;
      margin: 2px 0;
      border-radius: 2px;
      transition: 0.3s;
    }
    span.open:nth-child(1) {
      transform: translateY(8px) rotate(45deg);
    }
    span.open:nth-child(2) {
      opacity: 0;
    }
    span.open:nth-child(3) {
      transform: translateY(-8px) rotate(-45deg);
    }
  }

  .navbar-menu {
    display: flex;
    .navbar-item {
      color: #1b1b1b;
      padding: 0.5rem 1rem;
      text-decoration: none;
      border-radius: 5px;
      transition: all 0.3s ease;
      &:hover {
        color: white;
        background: #1b1b1b;
      }
    }
    .navbar-end {
      padding-right: 1rem;
    }
  }

  @media (max-width: 900px) {
    padding-top: 1rem;
    padding-bottom: 1rem;

    .hamburger {
      display: flex;
      margin-right: 1rem;
      position: relative;
      z-index: 2000;
      
      span {
        background: #222;
      }
      
      &:has(span.open) span {
        background: white;
      }
    }
    
    .navbar-menu {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      background: linear-gradient(135deg, #000000 0%, #1b1b1b 100%);
      flex-direction: column;
      align-items: center;
      justify-content: center;
      opacity: 0;
      visibility: hidden;
      transition: opacity 0.4s ease, visibility 0.4s ease;
      z-index: 1500;
    }
    
    .navbar-menu.is-active {
      opacity: 1;
      visibility: visible;
    }
    
    .navbar-end {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 2rem;
      width: 100%;
      padding: 0;
      
      a {
        color: white !important;
        font-size: 2.5rem;
        font-weight: 600;
        text-align: center;
        opacity: 0;
        transform: translateY(20px);
        transition: all 0.3s ease;
        
        &:hover {
          color: transparent !important;
          background: linear-gradient(to right, #3498db, #2c3e50);
          -webkit-background-clip: text;
          background-clip: text;
          transform: scale(1.1);
        }
      }
    }
    
    .navbar-menu.is-active .navbar-end a {
      opacity: 1;
      transform: translateY(0);
      
      &:nth-child(1) { transition-delay: 0.1s; }
      &:nth-child(2) { transition-delay: 0.2s; }
      &:nth-child(3) { transition-delay: 0.3s; }
      &:nth-child(4) { transition-delay: 0.4s; }
    }
    
    .navbar-item {
      width: auto;
      padding: 0.5rem 1rem;
    }
  }
}
</style>
