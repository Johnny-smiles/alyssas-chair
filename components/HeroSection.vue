<template>
    <section class="hero">
        <!-- background image -->
        <NuxtImg
            src="/hero-hair.jpg"
            alt="Bridal hair styling"
            class="hero-image"
            fill
            sizes="100vw"
        />

        <!-- dark overlay + centered content -->
        <div class="hero-overlay">
            <div class="hero-content">
                <span class="hero-subtitle">— {{ siteConfig.siteName }}</span>
                <h1 class="hero-title">Bridal Hair Styling Boutique</h1>
                <NuxtLink to="/contact" class="hero-cta">Book Your Trial</NuxtLink>
            </div>
        </div>
    </section>
</template>

<script setup>
import { siteConfig } from '~/site.config'
</script>

<style scoped>
.hero {
    position: relative;
    width: 100%;
    height: 75vh;
    min-height: 400px;
    overflow: hidden;
}

.hero-image {
    object-fit: cover;
    object-position: center;
}

.hero-overlay {
    position: absolute;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 1rem;
}

.hero-content {
    text-align: center;
    color: white;
    max-width: 800px;
}

.hero-subtitle {
    display: block;
    font-family: serif;
    font-style: italic;
    margin-bottom: 0.5rem;
    letter-spacing: 0.1em;
}

.hero-title {
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 1.5rem;
}

.hero-cta {
    display: inline-block;
    background-color: #224870;
    color: white;
    padding: 0.75rem 1.5rem;
    border-radius: 6px;
    text-decoration: none;
    font-weight: bold;
}
</style>
