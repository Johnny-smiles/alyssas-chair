<template>
    <section class="homepage-services">

        <!-- 1) Intro block: image │ vertical “Bridal” label │ text+link -->
        <div class="services-intro">
            <div class="services-intro__image">
                <NuxtImg
                    src="/Abeille-02.jpg"
                    alt="About"
                    width="600"
                />
            </div>

<!--            <div class="services-intro__label">About</div>-->

            <div class="services-intro__content">
                <p class="intro-title">
                    We are an experienced team of bridal hair stylists dedicated to making your wedding day perfect.
                </p>
                <p class="intro-text">
                    From romantic updos to soft waves, we craft styles that reflect your vision and personality.
                    Our stylists have years of experience ensuring every detail is flawless.
                </p>
<!--                <NuxtLink to="/services" class="intro-link">-->
<!--                    View Our Bridal Hair Services-->
<!--                </NuxtLink>-->
            </div>
        </div>

<!--        <div class="services-preview">-->
<!--            <div class="services-preview__gallery">-->
<!--                <NuxtImg src="/images/hair1.jpg" alt="Example hairstyle #1" />-->
<!--                <NuxtImg src="/images/hair2.jpg" alt="Example hairstyle #2" />-->
<!--                <NuxtImg src="/images/hair3.jpg" alt="Example hairstyle #3" />-->
<!--            </div>-->
<!--            <div class="services-preview__label">Hair</div>-->
<!--        </div>-->

<!--        <div class="services-preview">-->
<!--            <div class="services-preview__label">Bridal</div>-->
<!--            <div class="services-preview__gallery">-->
<!--                <NuxtImg src="/images/bridal1.jpg" alt="Example bridal #1" />-->
<!--                <NuxtImg src="/images/bridal2.jpg" alt="Example bridal #2" />-->
<!--                <NuxtImg src="/images/bridal3.jpg" alt="Example bridal #3" />-->
<!--            </div>-->
<!--        </div>-->

        <!-- 3) Bottom CTA -->
        <div class="services-cta">
            <NuxtLink to="/services" class="cta-link">
                See our Services
            </NuxtLink>
            <a
                href="https://instagram.com/alyssaschair"
                class="cta-link"
                target="_blank"
                rel="noopener"
            >
                Visit us on Instagram
            </a>
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
.services-intro__image img,
.services-intro__image .nuxt-img {
    display: block;
    max-width: 100%;
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
    color: var(--autumn-cedar);
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
    color: var(--autumn-cedar);
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
.services-preview__gallery img,
.services-preview__gallery .nuxt-img {
    width: 100%;
    height: auto;
    border-radius: 8px;
}
.services-preview__label {
    writing-mode: vertical-rl;
    text-orientation: mixed;
    font-family: serif;
    font-style: italic;
    font-size: 2rem;
    font-weight: bold;
    letter-spacing: 0.1em;
    color: var(--autumn-cedar);
    margin: 0 1rem;
}

/* Bottom CTA */
.services-cta {
    margin-top: 2.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1.5rem;
}
.cta-link {
    font-size: 1.25rem;
    font-weight: bold;
    text-decoration: underline;
    color: var(--autumn-cedar);
}

/* Responsive styles */
@media (max-width: 900px) {
    .homepage-services {
        padding: 2.5rem 1rem;
    }
    .services-intro {
        gap: 1.2rem;
        margin-bottom: 2.5rem;
    }
    .services-preview {
        gap: 0.7rem;
        margin-bottom: 1.2rem;
    }
    .services-preview__gallery {
        gap: 0.7rem;
    }
    .services-intro__content .intro-title {
        font-size: 1.15rem;
    }
}

@media (max-width: 700px) {
    .homepage-services {
        padding: 1.5rem 0.5rem;
    }
    .services-intro {
        grid-template-columns: 1fr;
        gap: 1.2rem;
        margin-bottom: 2rem;
        text-align: center;
    }
    .services-intro__label {
        writing-mode: horizontal-tb;
        font-size: 1.1rem;
        margin: 0.5rem 0;
    }
    .services-intro__image {
        margin-bottom: 0.5rem;
    }
    .services-intro__content .intro-title {
        font-size: 1.05rem;
    }
    .services-intro__content .intro-text {
        font-size: 0.97rem;
    }
    .services-intro__content .intro-link {
        font-size: 1rem;
    }
    .services-preview {
        flex-direction: column;
        align-items: stretch;
        gap: 0.5rem;
        margin-bottom: 1.2rem;
    }
    .services-preview__gallery {
        flex-direction: row;
        gap: 0.5rem;
        justify-content: center;
    }
    .services-preview__gallery img,
    .services-preview__gallery .nuxt-img {
        max-width: 32vw;
        min-width: 0;
    }
    .services-preview__label {
        writing-mode: horizontal-tb;
        font-size: 1.1rem;
        margin: 0.5rem 0;
        text-align: center;
    }
    .services-cta {
        text-align: center;
        margin-top: 1.5rem;
    }
    .cta-link {
        font-size: 1.1rem;
    }
}

/* Stack gallery images vertically on small screens */
@media (max-width: 600px) {
    .services-preview__gallery {
        flex-direction: column;
        align-items: center;
    }
    .services-preview__gallery img,
    .services-preview__gallery .nuxt-img {
        max-width: 90vw;
    }
}

@media (max-width: 480px) {
    .homepage-services {
        padding: 1rem 0.2rem;
    }
    .services-intro__content .intro-title {
        font-size: 0.98rem;
    }
    .services-intro__content .intro-text {
        font-size: 0.93rem;
    }
}
</style>

