<template>
    <NuxtLink :to="`/stylists/${stylist.slug}`" class="block group">
        <div class="rounded-2xl overflow-hidden shadow-md bg-white">
            <div class="aspect-[4/3] w-full overflow-hidden">
                <img :src="stylist.photo" :alt="stylist.name" class="w-full h-full object-cover group-hover:scale-[1.03] transition" />
            </div>
            <div class="p-5">
                <h3 class="text-xl font-semibold" style="color: var(--autumn-cedar)">{{ stylist.name }}</h3>
                <p class="text-sm opacity-80 mt-1">{{ stylist.title }}</p>
                <p class="text-sm mt-3">{{ stylist.shortBio }}</p>
                <div class="mt-4">
          <span class="inline-block text-sm underline"
                style="color: var(--fire-moss)">View profile →</span>
                </div>
            </div>
        </div>
    </NuxtLink>
</template>

<script setup lang="ts">
import type { Stylist } from '~/data/stylists'
defineProps<{ stylist: Stylist }>()
</script>
