<template>
    <nav class="nav">
        <!-- Hamburger menu for mobile -->
        <button class="nav__toggle" @click="isOpen = !isOpen" aria-label="Toggle navigation">
            <span :class="{ open: isOpen }"></span>
            <span :class="{ open: isOpen }"></span>
            <span :class="{ open: isOpen }"></span>
        </button>

        <!-- Left links -->
        <div class="nav__links nav__links--left" :class="{ 'nav__links--open': isOpen }">
            <NuxtLink
                to="/about"
                class="nav__link nav__link--outlined"
                @click="isOpen = false"
            >
                The Collective
            </NuxtLink>
        </div>

        <!-- Centered logo -->
        <NuxtLink to="/" class="nav__logo">
            <NuxtImg
                class="nav__logo-img"
                src="/Logo_Abeille_Sedona_Hor.png"
                alt="Alyssa Logo"
                width="400"
            />
        </NuxtLink>

        <!-- Right links -->
        <div class="nav__links nav__links--right" :class="{ 'nav__links--open': isOpen }">
            <div class="nav__dropdown">
                <NuxtLink to="/services" class="nav__link" @click="isOpen = false">Services</NuxtLink>
                <div class="nav__dropdown-menu">
                    <NuxtLink to="/services#bridal-hair" class="nav__sublink" @click="isOpen = false">Bridal Hair</NuxtLink>
                    <NuxtLink to="/services#bridal-hair-trial" class="nav__sublink" @click="isOpen = false">Bridal Hair Trial</NuxtLink>
                    <NuxtLink to="/services#bridesmaid-hair" class="nav__sublink" @click="isOpen = false">Bridesmaid Hair</NuxtLink>
                    <NuxtLink to="/services#attendant-hair-trial" class="nav__sublink" @click="isOpen = false">Attendant Hair Trial</NuxtLink>
                </div>
            </div>
            <NuxtLink to="/about" class="nav__link nav__link--mobile" @click="isOpen = false">The Collective</NuxtLink>
            <NuxtLink to="/contact" class="nav__link" @click="isOpen = false">Contact</NuxtLink>
        </div>
    </nav>
</template>



<script setup>
import { ref } from 'vue'
import { siteConfig } from '~/site.config'

const isOpen = ref(false)
</script>

<style scoped>
.nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.5rem 2rem;
    background-color: var(--stone-rose, #f7e4df);
    color: var(--autumn-cedar, #7c4a33);
    font-family: var(--font-body, 'Inter', sans-serif);
    box-shadow: 0 2px 8px rgba(124, 74, 51, 0.06);
    position: relative;
}

.nav__link--outlined {
    border: 2px solid var(--autumn-cedar, #7c4a33);
    border-radius: 999px;
    padding: 0.35em 1.2em;
    font-weight: 600;
    background: transparent;
    transition: background 0.18s, color 0.18s, border-color 0.18s;
    margin-right: 0.5rem;
}
.nav__link--outlined:hover,
.nav__link--outlined:focus {
    background: var(--autumn-cedar, #7c4a33);
    color: #fff;
    border-color: var(--autumn-cedar, #7c4a33);
    text-decoration: none !important;
}

.nav__logo {
    font-size: 2rem;
    font-family: var(--font-heading, 'Playfair Display', serif);
    font-weight: bold;
    color: var(--autumn-cedar, #7c4a33);
    text-decoration: none;
    letter-spacing: 0.04em;
    z-index: 2000;
    order: 2;
}
.nav__logo-img {
    display: block;
    max-width: 160px;
    height: auto;
}

.nav__links {
    display: flex;
    flex: 1;
    gap: 2rem;
    transition: all 0.3s;
    order: 1;
}

.nav__link {
    color: var(--autumn-cedar, #7c4a33);
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    font-size: 1rem;
    transition: color 0.2s;
}
.nav__link:hover {
    color: var(--fire-moss, #b97a56);
    text-decoration: underline;
}

/* Dropdown container */
.nav__dropdown {
    position: relative;
    display: flex;
    flex-direction: column;
}

/* Dropdown menu (desktop) */
.nav__dropdown-menu {
    display: none;
    position: absolute;
    left: 0;
    top: 100%;
    min-width: 180px;
    background: var(--stone-rose, #f7e4df);
    box-shadow: 0 2px 8px rgba(124, 74, 51, 0.08);
    border-radius: 0 0 8px 8px;
    z-index: 3000;
    padding: 0.5rem 0;
}
.nav__dropdown:hover .nav__dropdown-menu,
.nav__dropdown:focus-within .nav__dropdown-menu {
    display: block;
}

.nav__sublink {
    display: block;
    padding: 0.5rem 1.25rem;
    color: var(--autumn-cedar, #7c4a33);
    text-decoration: none;
    font-size: 0.98rem;
    white-space: nowrap;
    transition: background 0.15s, color 0.15s;
}
.nav__sublink:hover {
    background: var(--honey, #F6D3C5);
    color: var(--fire-moss, #b97a56);
}

/* Hamburger menu */
.nav__toggle {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
    width: 36px;
    height: 36px;
    background: none;
    border: none;
    cursor: pointer;
    z-index: 1002;
    order: 0;
}
.nav__toggle span {
    display: block;
    height: 3px;
    width: 100%;
    background: var(--autumn-cedar, #7c4a33);
    border-radius: 2px;
    transition: all 0.3s;
}
.nav__toggle span.open:nth-child(1) {
    transform: translateY(8px) rotate(45deg);
}
.nav__toggle span.open:nth-child(2) {
    opacity: 0;
}
.nav__toggle span.open:nth-child(3) {
    transform: translateY(-8px) rotate(-45deg);
}

/* Mobile styles (≤1024px) */
@media (max-width: 1024px) {
    .nav {
        flex-wrap: wrap;
        padding: 1rem;
        justify-content: flex-start;
    }

    .nav__logo {
        position: static;
        margin-left: auto;
    }

    .nav__links {
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        flex-direction: column;
        background: var(--stone-rose, #f7e4df);
        gap: 1.5rem;
        padding: 1.5rem 2rem;
        z-index: 1000;
        opacity: 0;
        pointer-events: none;
        transform: translateY(-10px);
        transition: opacity 0.3s, transform 0.3s;
    }

    .nav__links--open {
        opacity: 1;
        pointer-events: auto;
        transform: translateY(0);
    }

    .nav__dropdown-menu {
        display: block;
        position: static;
        background: transparent;
        box-shadow: none;
        padding: 0;
        margin-left: 1rem;
        margin-top: 0.25rem;
    }

    .nav__sublink {
        padding: 0.25rem 0 0.25rem 1.5rem;
        font-size: 0.95rem;
        text-transform: none;
    }
}

/* Desktop styles (≥1025px) */
@media (min-width: 1025px) {
    .nav {
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
    }
    .nav__toggle {
        display: none;
    }
    .nav__links--left {
        flex: 1;
        justify-content: flex-start;
        display: flex;
        align-items: center;
    }
    .nav__links--right {
        flex: 1;
        justify-content: flex-end;
        display: flex;
        align-items: center;
    }
    .nav__logo {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        order: 2;
    }
    .nav__logo-img {
        max-width: 220px;
    }
}
/* Utility classes for responsive links */
@media (max-width: 1024px) {
  .nav__link--desktop {
    display: none !important;
  }
}
@media (min-width: 1025px) {
  :deep(.nav__link--mobile) {
    display: none !important;
  }
}
</style>



