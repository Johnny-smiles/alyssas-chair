<template>
    <section class="grid md:grid-cols-3 gap-8">
        <div class="md:col-span-1">
            <div class="rounded-2xl overflow-hidden shadow-md bg-white">
                <img :src="photo" :alt="name" class="w-full h-auto object-cover" />
            </div>
        </div>
        <div class="md:col-span-2">
            <h1 class="text-3xl md:text-4xl font-bold hero-title mb-2">{{ name }}</h1>
            <p class="opacity-80 mb-6">{{ title }}</p>
            <p class="leading-relaxed text-[1.05rem]">{{ about }}</p>

            <div class="mt-6 flex flex-wrap gap-3">
                <a :href="bookingUrl" target="_blank" rel="noopener"
                   class="inline-flex items-center px-5 py-2 rounded-full font-semibold shadow"
                   style="background: var(--autumn-cedar); color: var(--stone-rose)">
                    Book with {{ firstName }}
                </a>
                <a v-if="instagram" :href="instagram" target="_blank" rel="noopener"
                   class="inline-flex items-center px-4 py-2 rounded-full underline"
                   style="color: var(--autumn-cedar)">
                    Instagram
                </a>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
const props = defineProps<{
    name: string
    title?: string
    about: string
    photo: string
    instagram?: string
    bookingUrl: string
}>()

const firstName = computed(() => props.name.split(' ')[0])
</script>
