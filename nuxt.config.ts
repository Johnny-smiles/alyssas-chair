// nuxt.config.ts
export default defineNuxtConfig({
  // Enable SSR + static output
  ssr: true,
  nitro: {
    preset: 'static'
  },

  // <head> config for “Abeille Collective”
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      title: 'Abeille Collective — Hair & Beauty in Minneapolis–St Paul, MN',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'Abeille Collective is a studio of independent artists offering hair and beauty services—bridal styling, lived-in color, precision cuts, facials, brows, and more—in Minneapolis–St Paul, MN.'
        },
        { name: 'robots', content: 'index, follow' },

        /* Open Graph */
        { property: 'og:title',       content: 'Abeille Collective — Hair & Beauty in Minneapolis–St Paul, MN' },
        { property: 'og:description', content: 'Book with the stylist that fits your vibe. Hair & beauty services under one roof at Abeille Collective.' },
        { property: 'og:image',       content: 'https://abeillecollective.com/social-preview.png' },
        { property: 'og:url',         content: 'https://abeillecollective.com' },
        { property: 'og:type',        content: 'website' },

        /* Twitter */
        { name: 'twitter:card',        content: 'summary_large_image' },
        { name: 'twitter:title',       content: 'Abeille Collective — Hair & Beauty in Minneapolis–St Paul, MN' },
        { name: 'twitter:description', content: 'Independent artists for hair, makeup, facials, brows, and more. Book online at Abeille Collective.' },
        { name: 'twitter:image',       content: 'https://abeillecollective.com/social-preview.png' }
      ],
      link: [
        { rel: 'icon',                 type: 'image/png', href: '/favicon.png' },
        { rel: 'apple-touch-icon',                              href: '/apple-touch-icon.png' },
        { rel: 'apple-touch-icon-precomposed',                  href: '/apple-touch-icon-precomposed.png' },
        { rel: 'canonical',                                     href: 'https://abeillecollective.com' }
      ],
      script: [
        /* Plausible Analytics */
        {
          src: 'https://plausible.io/js/script.js',
          defer: true,
          'data-domain': 'abeillecollective.com'
        },
        /* Google Analytics (v4) */
        { src: 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX', async: true },
        {
          type: 'text/javascript',
          // You can also move GA to runtimeConfig.public.gaId if you prefer env-driven
          children: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `
        }
      ],
    }
  },

  css: ['~/assets/main.css'],

  modules: [
    '@nuxt/image',
    '@nuxtjs/sitemap',
    '@nuxtjs/tailwindcss'
  ],
  tailwindcss: {
    cssPath: '~/assets/main.css'
  },

  site: {
    url:  'https://abeillecollective.com',
    name: 'abeille-collective'
    // Add more options here as needed (e.g., exclude, routes, etc.)
  },

  // Compatibility date
  compatibilityDate: '2025-04-10'
})
