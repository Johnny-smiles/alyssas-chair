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
    height: 100vh;       /* fill exactly the viewport */
    overflow: hidden;     /* prevent page-level scrolling */
}

.about {
    flex: 1;              /* take all leftover space above the footer */
    min-height: 0;        /* allow it to shrink below its content if needed */
    overflow-y: auto;     /* scroll internally if content overflows */
    padding: 4rem 2rem;
    box-sizing: border-box;
    max-width: 700px;
    margin: 0 auto;
    text-align: center;
}

.about h1 {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
}

.about p {
    font-size: 1rem;
    line-height: 1.6;
    color: #555;
    margin-bottom: 1.25rem;
}
</style>
