<template>
    <main class="about-page">
        <!-- Hero -->
        <section class="about-hero">
            <div class="container mx-auto px-6 py-16 text-center">
                <h1 class="text-4xl md:text-5xl font-bold hero-title mb-3" style="color: var(--stone-rose)">
                    Abeille Collective
                </h1>
                <p class="text-lg opacity-90 max-w-2xl mx-auto" style="color: var(--stone-rose)">
                    A collective studio offering hair and beauty services under one roof—book with the stylist that fits your vibe.
                </p>
                <div class="mt-8 flex flex-wrap gap-4 justify-center">
                    <a
                        class="btn-primary"
                        href="https://www.vagaro.com/abeille"
                        target="_blank"
                        rel="noopener"
                    >
                        Book on Vagaro
                    </a>
                    <NuxtLink class="btn-secondary" to="/stylists">
                        Meet Our Stylists
                    </NuxtLink>
                </div>
            </div>
        </section>

        <!-- About body -->
        <section class="container mx-auto px-6 py-12 max-w-4xl">
            <div class="about-card">
                <p>
                    Abeille Collective is a shared studio space built for independent artists and their guests.
                    Our team brings a range of specialties—bridal styling, lived-in color, precision cuts,
                    facials, brows, waxing, and more—so you can book the right pro for your needs.
                </p>
                <p>
                    We believe in warm hospitality, honest consultations, and results that fit your lifestyle.
                    Explore our stylists, browse services, and schedule online in minutes.
                </p>

                <div class="about-quick mt-8">
                    <div class="quick-item">
                        <h3>Booking</h3>
                        <p>
                            Schedule directly with each stylist via Vagaro.
                            <br />
                            <a class="underline" href="https://www.vagaro.com/abeille" target="_blank" rel="noopener">Open booking →</a>
                        </p>
                    </div>
                    <div class="quick-item">
                        <h3>Team</h3>
                        <p>
                            Hair & beauty pros with diverse specialties.
                            <br />
                            <NuxtLink class="underline" to="/stylists">See all stylists →</NuxtLink>
                        </p>
                    </div>
                    <div class="quick-item">
                        <h3>Contact</h3>
                        <p>
                            <span v-if="site?.phone"><a class="underline" :href="`tel:${site.phone}`">{{ site.phone }}</a></span>
                            <br />
                            <span v-if="site?.email"><a class="underline" :href="`mailto:${site.email}`">{{ site.email }}</a></span>
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Optional studio photo -->
        <section class="container mx-auto px-6 pb-16 max-w-5xl">
            <NuxtImg
                v-if="studioImg"
                :src="studioImg"
                alt="Abeille Collective Studio"
                class="studio-img"
            />
        </section>

        <Footer
            :name="site?.siteName || 'Abeille Collective'"
            :phone="site?.phone || ''"
            :email="site?.email || ''"
        />
    </main>
</template>

<script setup lang="ts">
import Footer from '~/components/Footer.vue'
import { useHead } from '#imports'
import { siteConfig as site } from '~/site.config' // if you keep global site details here

// optional — replace with your own image or remove the section above
const studioImg = '/img/studio/abeille-hero.jpg'

// Structured data
const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": site?.siteName || "Abeille Collective",
    "url": site?.siteUrl || "",
    "telephone": site?.phone || "",
    "image": site?.logo || studioImg || "",
    "address": site?.location ? {
        "@type": "PostalAddress",
        "addressLocality": site.location.city,
        "addressRegion": site.location.state,
        "postalCode": site.location.zip,
        "addressCountry": site.location.country
    } : undefined,
    "description": site?.description || "A collective studio offering hair and beauty services.",
    "openingHours": site?.hours || "",
    "sameAs": [
        // add socials if you like
    ],
    "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Services",
        "itemListElement": [
            { "@type": "OfferCatalog", "name": "Hair" },
            { "@type": "OfferCatalog", "name": "Beauty" }
        ]
    }
}

useHead({
    script: [
        { type: 'application/ld+json', children: JSON.stringify(structuredData) }
    ],
    title: `About • ${site?.siteName || 'Abeille Collective'}`
})
</script>

<style scoped>
.about-page {
    background: #f8fafc;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}

/* Hero */
.about-hero {
    background-color: var(--autumn-cedar); /* brand/nav color */
}

/* Buttons */
.btn-primary {
    display: inline-block;
    padding: 0.75rem 1.25rem;
    border-radius: 999px;
    font-weight: 600;
    background: var(--stone-rose);
    color: var(--autumn-cedar);
}
.btn-secondary {
    display: inline-block;
    padding: 0.75rem 1.25rem;
    border-radius: 999px;
    font-weight: 600;
    border: 1px solid var(--stone-rose);
    color: var(--stone-rose);
}

/* Card */
.about-card {
    background: #fff;
    border-radius: 16px;
    box-shadow: 0 2px 16px rgba(0,0,0,0.06);
    padding: 2rem;
}
.about-card p {
    font-size: 1.06rem;
    line-height: 1.7;
    color: #444;
    margin-bottom: 1rem;
}

/* Quick grid */
.about-quick {
    display: grid;
    grid-template-columns: repeat(3, minmax(0,1fr));
    gap: 1rem;
}
.quick-item h3 {
    font-weight: 700;
    color: var(--autumn-cedar);
    margin-bottom: .25rem;
}

/* Studio image */
.studio-img {
    width: 100%;
    height: auto;
    border-radius: 16px;
    box-shadow: 0 2px 16px rgba(0,0,0,0.06);
}

/* Responsive */
@media (max-width: 900px) {
    .about-quick { grid-template-columns: 1fr; }
}
</style>
