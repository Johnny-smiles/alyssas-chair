<template>
    <div>
        <ServicesSection />
        <FaqSection />
        <Footer
            name="Alyssa’s Chair"
            phone="612-555-1234"
            email="hello@alyssaschair.com"
        />
    </div>
</template>

<script setup>
import ServicesSection from '~/components/ServicesSection.vue'
import FaqSection from "~/components/FaqSection.vue";
import Footer from "~/components/Footer.vue";
</script>
