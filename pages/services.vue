<template>
    <main class="services-main">
        <section class="services-section">
            <ServicesSection />
        </section>
        <section class="faq-section">
            <FaqSection />
        </section>
        <Footer
            name="Alyssa’s Chair"
            phone="612-555-1234"
            email="hello@alyssaschair.com"
        />
    </main>
</template>

<script setup>
import ServicesSection from '~/components/ServicesSection.vue'
import FaqSection from "~/components/FaqSection.vue";
import Footer from "~/components/Footer.vue";
</script>

<style scoped>
.services-main {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background: #f8fafc;
}

/* Add spacing between sections */
.services-section,
.faq-section {
    margin: 0 auto;
    width: 100%;
    max-width: 1200px;
    padding: 3rem 2rem;
    box-sizing: border-box;
}

/* Responsive adjustments */
@media (max-width: 900px) {
    .services-section,
    .faq-section {
        padding: 2rem 1rem;
        max-width: 98vw;
    }
}

@media (max-width: 600px) {
    .services-main {
        background: #fff;
    }
    .services-section,
    .faq-section {
        padding: 1rem 0.5rem;
        max-width: 100vw;
    }
}
</style>
