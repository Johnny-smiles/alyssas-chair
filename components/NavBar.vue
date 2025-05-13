<template>
    <nav class="nav">
        <!-- left links -->
        <div class="nav__links nav__links--left">
            <NuxtLink to="/services" class="nav__link">Services</NuxtLink>
            <NuxtLink to="/about"   class="nav__link">Meet Alyssa</NuxtLink>
        </div>

        <!-- centered logo -->
        <NuxtLink to="/" class="nav__logo">
            {{ siteConfig.siteName }}
        </NuxtLink>

        <!-- right links -->
        <div class="nav__links nav__links--right">
            <NuxtLink to="/contact" class="nav__link">Contact</NuxtLink>
        </div>
    </nav>
</template>

<script setup>
import { siteConfig } from '~/site.config'
</script>

<style scoped>
.nav {
    display: flex;
    align-items: center;
    padding: 1.5rem 2rem;
    background-color: #fbfbfb;
}

/* both link-containers flex equally so the logo sits perfectly centered */
.nav__links {
    display: flex;
    flex: 1;
    gap: 2rem;
    /* vertical centering is inherited from .nav */
}

/* push group to left or right */
.nav__links--left  { justify-content: flex-start; }
.nav__links--right { justify-content: flex-end;   }

/* logo never grows/shrinks */
.nav__logo {
    flex: 0;
    font-size: 1.4rem;
    font-weight: bold;
    color: #000000;
    text-decoration: none;
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
</style>
