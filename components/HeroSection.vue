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
    margin: 0 auto;
}

.hero-subtitle {
    display: block;
    font-family: serif;
    font-style: italic;
    margin-bottom: 0.5rem;
    letter-spacing: 0.1em;
    font-size: 1.2rem;
}

.hero-title {
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 1.5rem;
    line-height: 1.15;
}

.hero-cta {
    display: inline-block;
    background-color: #224870;
    color: white;
    padding: 0.75rem 1.5rem;
    border-radius: 6px;
    text-decoration: none;
    font-weight: bold;
    font-size: 1.1rem;
    transition: background 0.2s;
}
.hero-cta:hover,
.hero-cta:focus {
    background-color: #183356;
}

/* Tablet and below */
@media (max-width: 900px) {
    .hero {
        height: 55vh;
        min-height: 300px;
    }
    .hero-title {
        font-size: 2.1rem;
    }
    .hero-subtitle {
        font-size: 1rem;
    }
}

/* Mobile styles */
@media (max-width: 600px) {
    .hero {
        height: 38vh;
        min-height: 180px;
    }
    .hero-overlay {
        padding: 0 0.5rem;
    }
    .hero-content {
        max-width: 98vw;
    }
    .hero-title {
        font-size: 1.25rem;
        margin-bottom: 1rem;
    }
    .hero-subtitle {
        font-size: 0.95rem;
        margin-bottom: 0.35rem;
    }
    .hero-cta {
        padding: 0.6rem 1.1rem;
        font-size: 1rem;
    }
}
</style>
