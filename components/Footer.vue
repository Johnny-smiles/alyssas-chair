<!-- components/Footer.vue -->
<template>
    <footer class="site-footer">
        <!-- top nav -->
        <nav class="site-footer__nav">
            <ul class="site-footer__links site-footer__links--left">
                <li><NuxtLink to="/services">Services</NuxtLink></li>
                <li><NuxtLink to="/about">Meet Alyssa</NuxtLink></li>
            </ul>

            <NuxtLink to="/" class="site-footer__logo">
                {{ name }}
            </NuxtLink>

            <ul class="site-footer__links site-footer__links--right">
                <li><NuxtLink to="/contact">Contact</NuxtLink></li>
            </ul>
        </nav>

        <!-- copyright centered under nav container -->
        <p class="site-footer__copyright">
            &copy; {{ new Date().getFullYear() }} {{ name }}. All rights reserved.
        </p>
    </footer>
</template>

<script setup>
import { NuxtLink } from '#components'

defineProps({
    name: { type: String, required: true }
})
</script>

<style scoped>
.site-footer {
    background: #fff;
    padding: 3rem 1rem;
}

/* nav row */
.site-footer__nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1200px;
    margin: 0 auto;
}

/* link lists */
.site-footer__links {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
.site-footer__links--left {
    align-items: flex-start;
}
.site-footer__links--right {
    align-items: flex-end;
}

/* link styling */
.site-footer__links a {
    position: relative;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    font-size: 0.9rem;
    color: #333;
    text-decoration: none;
    padding-bottom: 2px;
}
.site-footer__links a::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 1px;
    background: #333;
    transition: width 0.3s;
}
.site-footer__links a:hover::after {
    width: 100%;
}

/* logo */
.site-footer__logo {
    font-size: 1.5rem;
    font-weight: bold;
    margin-right: 80px;
    color: #333;
    text-decoration: none;
}

/* center copyright beneath the same max-width as nav */
.site-footer__copyright {
    max-width: 1200px;
    margin: 2rem auto 0;
    text-align: center;
    color: #777;
    font-size: 0.8rem;
}
</style>
