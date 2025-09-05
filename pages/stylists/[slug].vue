<template>
  <main class="stylist-page">
    <div class="container mx-auto px-6 py-12">
      <div v-if="stylist">
        <StylistBio
          :name="stylist.name"
          :title="stylist.title"
          :about="stylist.about"
          :photo="stylist.photo"
          :instagram="stylist.instagram"
          :bookingUrl="stylist.bookingUrl"
        />

        <div class="mt-10 grid md:grid-cols-3 gap-10">
          <div class="md:col-span-2">
            <ServiceList :services="stylist.services" :bookingUrl="stylist.bookingUrl" />
          </div>

          <aside class="md:col-span-1">
            <div class="bg-white rounded-2xl shadow p-5">
              <h3 class="text-xl font-semibold mb-3">Contact</h3>
              <ul class="space-y-2 text-sm">
                <li v-if="stylist.phone"><strong>Phone:</strong> <a :href="`tel:${stylist.phone}`" class="underline">{{ stylist.phone }}</a></li>
                <li v-if="stylist.email"><strong>Email:</strong> <a :href="`mailto:${stylist.email}`" class="underline">{{ stylist.email }}</a></li>
                <li><strong>Booking:</strong> <a :href="stylist.bookingUrl" target="_blank" class="underline">Book on Vagaro</a></li>
              </ul>
            </div>
          </aside>
        </div>
      </div>

      <div v-else class="py-20 text-center">
        <p>
          We couldn't find that stylist.
          <NuxtLink to="/stylists" class="underline">Back to Stylists</NuxtLink>
        </p>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { stylists } from '~/data/stylists'
import StylistBio from '~/components/StylistBio.vue'
import ServiceList from '~/components/ServiceList.vue'

const route = useRoute()
const slug = route.params.slug as string
const stylist = stylists.find(s => s.slug === slug)
</script>

<style scoped>
.stylist-page {
  background-color: #f8fafc; /* neutral light background */
  min-height: 100vh;
}
</style>
