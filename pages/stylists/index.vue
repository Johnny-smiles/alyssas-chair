<template>
  <main class="stylists-page">
    <!-- Hero banner -->
    <section class="stylists-hero">
      <div class="container mx-auto px-6 py-16 text-center max-w-7xl">
        <h1
          class="text-4xl md:text-5xl font-bold hero-title mb-4"
          style="color: var(--stone-rose)"
        >
          Our Stylists
        </h1>
        <p class="text-lg opacity-90 max-w-2xl mx-auto" style="color: var(--stone-rose)">
          Meet the team—choose a stylist to read more, browse services, and book on Vagaro.
        </p>
      </div>
    </section>

    <!-- Stylist cards -->
    <section class="container mx-auto px-6 py-12 max-w-7xl">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
        <StylistCard v-for="s in stylists" :key="s.slug" :stylist="s" />
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { stylists } from '~/data/stylists'
import StylistCard from '~/components/StylistCard.vue'
</script>

<style scoped>
.stylists-page {
    background-color: #f8fafc; /* neutral background */
    min-height: 100vh;
}

.stylists-hero {
    background-color: var(--autumn-cedar); /* match your nav color */
}
</style>
