<!-- components/HomepageServices.vue -->
<template>
    <section class="homepage-services">

        <!-- 1) Intro block: image │ vertical “Bridal” label │ text+link -->
        <div class="services-intro">
            <div class="services-intro__image">
                <NuxtImg
                    src="/images/service-intro.jpg"
                    alt="About"
                    width="600"
                />
            </div>

            <div class="services-intro__label">About</div>

            <div class="services-intro__content">
                <p class="intro-title">
                    We are an experienced team of bridal hair stylists dedicated to making your wedding day perfect.
                </p>
                <p class="intro-text">
                    From romantic updos to soft waves, we craft styles that reflect your vision and personality.
                    Our stylists have years of experience ensuring every detail is flawless.
                </p>
                <NuxtLink to="/services" class="intro-link">
                    View Our Bridal Hair Services
                </NuxtLink>
            </div>
        </div>

        <!-- 2) Gallery preview: 3 images in a row │ vertical “Bridal” label -->
        <div class="services-preview">
            <div class="services-preview__gallery">
                <NuxtImg src="/images/hair1.jpg" alt="Example hairstyle #1" />
                <NuxtImg src="/images/hair2.jpg" alt="Example hairstyle #2" />
                <NuxtImg src="/images/hair3.jpg" alt="Example hairstyle #3" />
            </div>
            <div class="services-preview__label">Hair</div>
        </div>

        <div class="services-preview">
            <div class="services-preview__label">Bridal</div>

            <div class="services-preview__gallery">
                <NuxtImg src="/images/bridal1.jpg" alt="Example bridal #1" />
                <NuxtImg src="/images/bridal2.jpg" alt="Example bridal #2" />
                <NuxtImg src="/images/bridal3.jpg" alt="Example bridal #3" />
            </div>
        </div>

        <!-- 3) Bottom CTA -->
        <div class="services-cta">
            <NuxtLink to="/services" class="cta-link">
                Take a Look
            </NuxtLink>
        </div>

    </section>
</template>

<script setup>
import { siteConfig } from '~/site.config'
</script>

<style scoped>
.homepage-services {
    max-width: 1200px;
    margin: 0 auto;
    padding: 4rem 2rem;
}

/* Intro block grid */
.services-intro {
    display: grid;
    grid-template-columns: minmax(200px,1fr) auto 2fr;
    gap: 2rem;
    align-items: center;
    margin-bottom: 4rem;
}
.services-intro__image img {
    width: 100%;
    height: auto;
    border-radius: 8px;
}
.services-intro__label {
    writing-mode: vertical-rl;
    text-orientation: mixed;
    font-family: serif;
    font-style: italic;
    letter-spacing: 0.1em;
    color: #224870;
}
.services-intro__content .intro-title {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
    color: #333;
}
.services-intro__content .intro-text {
    font-size: 1rem;
    margin-bottom: 1.5rem;
    color: #555;
}
.services-intro__content .intro-link {
    text-decoration: underline;
    font-weight: bold;
    color: #224870;
}

/* Gallery preview: flex row */
.services-preview {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    margin-bottom: 2rem;
}
.services-preview__gallery {
    display: flex;
    gap: 1rem;
    flex: 1;
}
.services-preview__gallery img {
    width: 100%;
    height: auto;
    border-radius: 8px;
}
.services-preview__label {
    writing-mode: vertical-rl;
    text-orientation: mixed;
    font-family: serif;
    font-style: italic;
    /* ↑ bumped these two values for a larger, more dramatic look: */
    font-size: 2rem;
    font-weight: bold;
    letter-spacing: 0.1em;
    color: #224870;
    margin: 0 1rem; /* keeps some breathing room from the images */
}


/* Bottom CTA */
.services-cta {
    text-align: left;
}
.cta-link {
    font-size: 1.25rem;
    font-weight: bold;
    text-decoration: underline;
    color: #224870;
}
</style>
