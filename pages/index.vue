<template>
    <main class="home-main">
        <HeroSection />
        <br>
        <section class="home-section home-section--boxed mt-12 mb-12">
            <HomepageServices />
        </section>
        <!-- New: Meet Our Stylists preview (full-bleed nav bar background) -->
        <section class="stylist-section fullbleed">
          <div class="stylist-inner">
            <header class="mb-6">
              <h2 class="text-3xl font-bold">Meet Our Stylists</h2>
              <p class="opacity-80 mt-2">Browse profiles, services, and book directly on Vagaro.</p>
            </header>
            <div class="stylist-grid">
              <StylistCard
                v-for="s in stylists.slice(0,3)"
                :key="s.slug"
                :stylist="s"
              />
            </div>

              <div class="mt-6">
                  <NuxtLink to="/stylists" class="btn-outlined">
                      View all stylists →
                  </NuxtLink>
              </div>
          </div>
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
import Footer from '~/components/Footer.vue'
import { siteConfig } from '~/site.config'
import StylistCard from '~/components/StylistCard.vue'
import { stylists } from '~/data/stylists'

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

/* New: simple responsive grid for stylist preview */
.stylist-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1.5rem;
}
@media (max-width: 1024px) {
    .stylist-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}
@media (max-width: 640px) {
    .stylist-grid { grid-template-columns: 1fr; }
}

/* Use nav bar background for stylist section (full-bleed) */
.stylist-section {
    background-color: var(--autumn-cedar); /* match your nav background */
    color: var(--stone-rose);
    /* full-bleed container */
}
.fullbleed {
    width: 100vw;
    margin-left: calc(50% - 50vw); /* pull to edges */
    margin-right: calc(50% - 50vw);
    padding: 3rem 0; /* vertical spacing; horizontal handled by inner */
}
.stylist-inner {
    margin: 0 auto;
    width: 100%;
    max-width: 1200px;   /* matches .home-section */
    padding: 0 2rem;     /* matches .home-section */
    box-sizing: border-box;
}

.stylist-section h2,
.stylist-section p,
.stylist-section a {
    color: var(--stone-rose);
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
