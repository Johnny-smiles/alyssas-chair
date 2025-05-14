<template>
    <nav class="nav">
        <!-- Hamburger menu for mobile -->
        <button class="nav__toggle" @click="isOpen = !isOpen" aria-label="Toggle navigation">
            <span :class="{ 'open': isOpen }"></span>
            <span :class="{ 'open': isOpen }"></span>
            <span :class="{ 'open': isOpen }"></span>
        </button>

        <!-- left links -->
        <div class="nav__links nav__links--left" :class="{ 'nav__links--open': isOpen }">
            <NuxtLink to="/services" class="nav__link" @click="isOpen = false">Services</NuxtLink>
            <NuxtLink to="/about"   class="nav__link" @click="isOpen = false">Meet Alyssa</NuxtLink>
        </div>

        <!-- centered logo -->
        <NuxtLink to="/" class="nav__logo">
            {{ siteConfig.siteName }}
        </NuxtLink>

        <!-- right links -->
        <div class="nav__links nav__links--right" :class="{ 'nav__links--open': isOpen }">
            <NuxtLink to="/contact" class="nav__link" @click="isOpen = false">Contact</NuxtLink>
        </div>
    </nav>
</template>

<script setup>
import { ref } from 'vue'
import { siteConfig } from '~/site.config'

const isOpen = ref(false)
</script>

<style scoped>
.nav {
    display: flex;
    align-items: center;
    padding: 1.5rem 2rem;
    background-color: #fbfbfb;
    position: relative;
}

/* Hamburger menu button */
.nav__toggle {
    display: none;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
    width: 36px;
    height: 36px;
    background: none;
    border: none;
    cursor: pointer;
    margin-right: 1rem;
    z-index: 1002;
}
.nav__toggle span {
    display: block;
    height: 3px;
    width: 100%;
    background: #000;
    border-radius: 2px;
    transition: all 0.3s;
}
.nav__toggle span.open:nth-child(1) {
    transform: translateY(8px) rotate(45deg);
}
.nav__toggle span.open:nth-child(2) {
    opacity: 0;
}
.nav__toggle span.open:nth-child(3) {
    transform: translateY(-8px) rotate(-45deg);
}

/* both link-containers flex equally so the logo sits perfectly centered */
.nav__links {
    display: flex;
    flex: 1;
    gap: 2rem;
    transition: all 0.3s;
}
.nav__links--left  { justify-content: flex-start; }
.nav__links--right { justify-content: flex-end;   }

/* logo never grows/shrinks */
.nav__logo {
    flex: 0;
    font-size: 1.4rem;
    font-weight: bold;
    color: #000000;
    text-decoration: none;
    z-index: 1001;
}

/* link styling */
.nav__link {
    color: #000000;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    font-size: 0.95rem;
}

.nav__link:hover {
    text-decoration: underline;
}

/* Responsive styles */
@media (max-width: 768px) {
    .nav {
        flex-wrap: wrap;
        padding: 1rem;
    }
    .nav__toggle {
        display: flex;
    }
    .nav__logo {
        margin: 0 auto;
        order: 1;
    }
    .nav__links {
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        flex-direction: column;
        background: #fbfbfb;
        gap: 1.5rem;
        padding: 1.5rem 2rem;
        z-index: 1000;
        opacity: 0;
        pointer-events: none;
        transform: translateY(-10px);
        transition: opacity 0.3s, transform 0.3s;
    }
    .nav__links--open {
        opacity: 1;
        pointer-events: auto;
        transform: translateY(0);
    }
    .nav__links--left,
    .nav__links--right {
        justify-content: flex-start;
        width: 100%;
    }
}
</style>
