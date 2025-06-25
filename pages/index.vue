<template>
    <main class="home-main">
        <HeroSection />
        <br>
        <section class="home-section home-section--boxed mt-12 mb-12">
            <HomepageServices />
        </section>
        <br>
        <Footer
            name="Alyssa’s Chair"
            phone="612-555-1234"
            email="hello@alyssaschair.com"
        />
    </main>
</template>

<script setup>
import HeroSection from '~/components/HeroSection.vue'
import HomepageServices from '~/components/HomepageServices.vue'
import FaqSection from '~/components/FaqSection.vue'
import Footer from '~/components/Footer.vue'
import { siteConfig } from '~/site.config'

const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": siteConfig.siteName,
    "url": siteConfig.siteUrl,
    "telephone": siteConfig.phone,
    "address": {
        "@type": "PostalAddress",
        "addressLocality": siteConfig.location.city,
        "addressRegion": siteConfig.location.state,
        "postalCode": siteConfig.location.zip,
        "addressCountry": siteConfig.location.country
    },
    "description": siteConfig.description,
    "openingHours": siteConfig.hours,
    "geo": {
        "@type": "GeoCoordinates",
        "latitude": siteConfig.location.latitude,
        "longitude": siteConfig.location.longitude
    }
}

useHead({
    script: [
        {
            type: 'application/ld+json',
            children: JSON.stringify(structuredData)
        }
    ]
})
</script>

<style scoped>
.home-main {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background: #f8fafc;
}

/* Add spacing between sections */
.home-section {
    margin: 0 auto;
    width: 100%;
    max-width: 1200px;
    padding: 3rem 2rem;
    box-sizing: border-box;
}

/* Boxed style to match services-section */
.home-section--boxed {
    background: #fff;
    border-radius: 16px;
    box-shadow: 0 2px 16px rgba(0,0,0,0.06);
    background-color: #f3f4f6;

}

/* Responsive adjustments */
@media (max-width: 900px) {
    .home-section {
        padding: 2rem 1rem;
        max-width: 98vw;
    }
}

@media (max-width: 600px) {
    .home-main {
        background: #fff;
    }

    .home-section {
        padding: 1rem 0.5rem;
        max-width: 100vw;
    }
}
</style>
