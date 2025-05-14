<template>
    <div class="page-about">
        <section class="about">
            <h1>About Alyssa’s Chair</h1>
            <p>
                Alyssa’s Chair is a boutique bridal hair studio located in the heart of Minneapolis.
                Founded by Alyssa, a seasoned stylist with over a decade of experience in wedding-day updos
                and elegant bridal looks, we specialize in crafting timeless styles that reflect each bride’s
                unique personality.
            </p>
            <p>
                At Alyssa’s Chair, we believe that beautiful hair begins with a personal connection.
                From your initial consultation to the final veil placement, Alyssa and her team are committed
                to warm hospitality, meticulous attention to detail, and work done right.
                Let us help you look—and feel—like the best version of yourself on your special day.
            </p>
        </section>

        <Footer
            name="Alyssa’s Chair"
            phone="612-555-1234"
            email="hello@alyssaschair.com"
        />
    </div>
</template>

<script setup lang="ts">
import Footer from '~/components/Footer.vue'
</script>

<style scoped>
.page-about {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    height: auto;
    overflow: hidden;
}

.about {
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    padding: 4rem 2rem;
    box-sizing: border-box;
    max-width: 700px;
    margin: 0 auto;
    text-align: center;
    background: #fff;
    border-radius: 12px;
    box-shadow: 0 2px 12px rgba(0,0,0,0.04);
}

.about h1 {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
    font-weight: bold;
    color: #224870;
    letter-spacing: 0.01em;
}

.about p {
    font-size: 1.08rem;
    line-height: 1.7;
    color: #555;
    margin-bottom: 1.25rem;
}

/* Tablet breakpoint */
@media (max-width: 900px) {
    .about {
        padding: 2.5rem 1rem;
        max-width: 95vw;
    }
    .about h1 {
        font-size: 2rem;
    }
}

/* Mobile breakpoint */
@media (max-width: 600px) {
    .page-about {
        min-height: 100vh;
        height: auto;
    }
    .about {
        padding: 1.2rem 0.5rem;
        max-width: 99vw;
        border-radius: 0;
        box-shadow: none;
    }
    .about h1 {
        font-size: 1.25rem;
        margin-bottom: 0.8rem;
    }
    .about p {
        font-size: 0.97rem;
        margin-bottom: 0.9rem;
    }
}
</style>
