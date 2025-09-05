<template>
    <section class="mt-10">
        <h2 class="text-2xl font-semibold mb-4">Services</h2>
        <ul class="grid sm:grid-cols-2 gap-4">
            <li v-for="(s, i) in services" :key="i"
                class="bg-white rounded-xl p-4 shadow flex items-start justify-between">
                <div>
                    <div class="font-medium">{{ s.name }}</div>
                    <div class="text-sm opacity-70">
                        <span v-if="s.duration">{{ s.duration }}</span>
                        <span v-if="s.duration && s.price"> • </span>
                        <span v-if="s.price">{{ s.price }}</span>
                    </div>
                    <p v-if="s.note" class="text-xs opacity-70 mt-2">{{ s.note }}</p>
                </div>
                <a :href="bookingUrl" target="_blank" rel="noopener"
                   class="text-sm font-semibold underline self-center"
                   style="color: var(--fire-moss)">Book</a>
            </li>
        </ul>
    </section>
</template>

<script setup lang="ts">
defineProps<{
    services: Array<{ name: string; duration?: string; price?: string; note?: string }>
    bookingUrl: string
}>()
</script>
