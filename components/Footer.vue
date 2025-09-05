<!-- components/Footer.vue -->
<template>
    <footer class="site-footer">
        <!-- top nav -->
        <nav class="site-footer__nav">
            <ul class="site-footer__links site-footer__links--left">
                <li><NuxtLink to="/services">Services</NuxtLink></li>
                <li><NuxtLink to="/about">The Collective</NuxtLink></li>
            </ul>

            <NuxtLink to="/" class="nav__logo">
                <NuxtImg
                    class="nav__logo-img"
                    src="/Logo_Abeille_Sedona_Hor.png"
                    alt="Alyssa Logo"
                    width="400"
                />
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
    background: var(--stone-rose, #f7e4df);
    padding: 3rem 1rem;
}

/* nav row */
.site-footer__nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1200px;
    margin: 0 auto;
    flex-wrap: wrap;
    gap: 0.5rem;
}

/* link lists */
.site-footer__links {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
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
    color: var(--autumn-cedar, #7c4a33);
    text-decoration: none;
    padding-bottom: 2px;
    transition: color 0.2s;
}
.site-footer__links a::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 1px;
    background: var(--autumn-cedar, #7c4a33);
    transition: width 0.3s;
}
.site-footer__links a:hover {
    color: var(--fire-moss, #b97a56);
}
.site-footer__links a:hover::after {
    width: 100%;
    background: var(--fire-moss, #b97a56);
}

/* logo */
.site-footer__logo {
    font-size: 1.5rem;
    font-weight: bold;
    margin-right: 80px;
    color: var(--autumn-cedar, #7c4a33);
    text-decoration: none;
}

/* center copyright beneath the same max-width as nav */
.site-footer__copyright {
    max-width: 1200px;
    margin: 1rem auto 0;
    text-align: center;
    color: var(--autumn-cedar, #7c4a33);
    font-size: 0.8rem;
    opacity: 0.7;
}

/* Responsive styles */
@media (max-width: 768px) {
    .site-footer {
        padding: 2rem 0.5rem;
    }
    .site-footer__nav {
        flex-direction: column;
        align-items: center;
        gap: 1.5rem;
    }
    .site-footer__links {
        flex-direction: row;
        gap: 1.5rem;
        justify-content: center;
        align-items: center;
        width: 100%;
    }
    .site-footer__links--left,
    .site-footer__links--right {
        align-items: center;
        justify-content: center;
    }
    .site-footer__logo {
        margin: 0;
        font-size: 1.25rem;
        order: -1;
        padding-bottom: 0.5rem;
    }
    .site-footer__copyright {
        font-size: 0.85rem;
        margin-top: 1.5rem;
    }
}

@media (max-width: 480px) {
    .site-footer {
        padding: 1.2rem 0.2rem;
    }
    .site-footer__nav {
        gap: 1rem;
    }
    .site-footer__links {
        gap: 1rem;
        font-size: 0.95rem;
    }
    .site-footer__logo {
        font-size: 1.1rem;
        padding-bottom: 0.3rem;
    }
    .site-footer__copyright {
        font-size: 0.75rem;
    }
}
</style>
