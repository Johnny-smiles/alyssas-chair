// nuxt.config.ts
export default defineNuxtConfig({
  // Enable SSR + static output
  ssr: true,
  nitro: {
    preset: 'static'
  },

  // <head> config for BrightStart Pediatrics
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      title: "Alyssa's Chair — Bridal Hair Salon in Minneapolis, MN",
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: "Alyssa's Chair is a premier bridal hair salon in Minneapolis, MN, specializing in elegant bridal hairstyles for your special day."
        },
        { name: 'robots', content: 'index, follow' },
        { property: 'og:title', content: "Alyssa's Chair — Bridal Hair Salon in Minneapolis, MN" },
        { property: 'og:description', content: "Alyssa's Chair is a premier bridal hair salon in Minneapolis, MN, specializing in elegant bridal hairstyles for your special day." },
        { property: 'og:image', content: 'https://alyssaschair.com/social-preview.png' },
        { property: 'og:url', content: 'https://alyssaschair.com' },
        { property: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: "Alyssa's Chair — Bridal Hair Salon in Minneapolis, MN" },
        { name: 'twitter:description', content: "Alyssa's Chair is a premier bridal hair salon in Minneapolis, MN, specializing in elegant bridal hairstyles for your special day." },
        { name: 'twitter:image', content: 'https://alyssaschair.com/social-preview.png' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
        { rel: 'canonical', href: 'https://alyssaschair.com' }
      ],
      script: [
        {
          src: 'https://plausible.io/js/script.js',
          defer: true,
          'data-domain': 'alyssaschairr.netlify.app'
        },
        { src: 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX', async: true },
        {
          type: 'text/javascript',
          innerHTML: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `
        }
      ],
    }
  },

  // Global CSS
  css: ['@/assets/main.css'],

  // Only keep the image module
  modules: [
    '@nuxt/image',
    '@nuxtjs/sitemap',
  ],

  site: {
    url: 'https://alyssaschair.com',
    name: 'alyssas-chair'
    // Add more options here as needed (e.g., exclude, routes, etc.)
  },

  // Compatibility date
  compatibilityDate: '2025-04-10'
})