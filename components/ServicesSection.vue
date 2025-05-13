<template>
    <section class="services" aria-labelledby="services-heading">

        <!-- 1) Hair Goals Intro -->
        <div class="services-overview">
            <div class="services-overview__image">
                <NuxtImg
                    src="/images/hair-goals.jpg"
                    alt="Hair Goals"
                    width="400"
                />
            </div>

            <div class="services-overview__label">Hair Goals</div>

            <div class="services-overview__content">
                <h2 class="services-overview__title">
                    Your hair says so much about you.
                </h2>
                <p class="services-overview__text">
                    From your cut to your color to how you style it. Our experienced
                    stylists can help guide you to a new style, maintain a classic look,
                    or get you all dolled up on a special day. We would love to sit down
                    with you and help your hair say all the right things!
                </p>

                <NuxtLink to="/contact" class="services-overview__cta">
                    CONTACT US TO INQUIRE ABOUT AVAILABILITY!
                </NuxtLink>
                <NuxtLink to="/consult" class="services-overview__cta">
                    CLICK HERE FOR OUR NEW CLIENT CONSULT FORM!
                </NuxtLink>

                <p class="services-overview__policy">
                    Cancellation Policy: We require 72 hours notice for any and all
                    appointment cancellations. If you cancel your appointment without
                    giving 72 hours notice OR no show to your appointment, your
                    authorized card on file will be charged our cancellation fee of
                    $100. If you are unable to reach us by phone or it is outside salon
                    business hours, please email us info@alysschair.com.
                </p>
            </div>
        </div>

        <!-- 2) Main Services Grid -->
        <h2 id="services-heading" class="services__title">Our Services</h2>
        <div class="services__grid">
            <!-- Bridal Hair -->
            <article
                class="services__card"
                itemscope
                itemtype="https://schema.org/Service"
            >
                <NuxtImg
                    class="services__img"
                    src="/services/bridal-hair.jpg"
                    alt="Bridal Hair"
                    width="400"
                />
                <h3 class="services__name" itemprop="name">Bridal Hair</h3>
                <p class="services__desc" itemprop="description">
                    Elegant bridal hairstyles to make your wedding day unforgettable.
                    Starting at $250.
                </p>
            </article>

            <!-- Bridal Hair Trial -->
            <article
                class="services__card"
                itemscope
                itemtype="https://schema.org/Service"
            >
                <NuxtImg
                    class="services__img"
                    src="/services/bridal-trial.jpg"
                    alt="Bridal Hair Trial"
                    width="400"
                />
                <h3 class="services__name" itemprop="name">
                    Bridal Hair Trial
                </h3>
                <p class="services__desc" itemprop="description">
                    Personalized trial session to perfect your wedding day look.
                    $125 per person.
                </p>
            </article>

            <!-- Bridesmaid Hair -->
            <article
                class="services__card"
                itemscope
                itemtype="https://schema.org/Service"
            >
                <NuxtImg
                    class="services__img"
                    src="/services/bridesmaid-hair.jpg"
                    alt="Bridesmaid Hair"
                    width="400"
                />
                <h3 class="services__name" itemprop="name">Bridesmaid Hair</h3>
                <p class="services__desc" itemprop="description">
                    Expert styling for your bridal party. $150 per stylist.
                </p>
            </article>

            <!-- Attendant Hair Trial -->
            <article
                class="services__card"
                itemscope
                itemtype="https://schema.org/Service"
            >
                <NuxtImg
                    class="services__img"
                    src="/services/attendant-trial.jpg"
                    alt="Attendant Hair Trial"
                    width="400"
                />
                <h3 class="services__name" itemprop="name">
                    Attendant Hair Trial
                </h3>
                <p class="services__desc" itemprop="description">
                    Trial sessions for bridesmaids to ensure cohesive party looks.
                    $125 per person.
                </p>
            </article>
        </div>
    </section>
</template>

<script setup>
// nothing to import here besides NuxtImg/NuxtLink
</script>

<style scoped>
.services {
    padding: 4rem 2rem;
    background-color: #f3f4f6;
}

/* ---- Hair Goals Intro ---- */
.services-overview {
    display: grid;
    grid-template-columns: minmax(200px, 1fr) auto 2.5fr;
    gap: 2rem;
    align-items: center;
    margin-bottom: 4rem;
}

.services-overview__image img {
    width: 100%;
    height: auto;
    border-radius: 8px;
}

.services-overview__label {
    writing-mode: vertical-rl;
    text-orientation: mixed;
    font-family: serif;
    font-style: italic;
    font-size: 2rem;
    font-weight: bold;
    letter-spacing: 0.1em;
    color: #224870;
}

.services-overview__content {
    display: flex;
    flex-direction: column;
}

.services-overview__title {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 1rem;
    color: #333;
}

.services-overview__text {
    font-size: 1rem;
    line-height: 1.6;
    color: #555;
    margin-bottom: 1.5rem;
}

.services-overview__cta {
    text-decoration: underline;
    font-weight: bold;
    color: #224870;
    margin-bottom: 0.75rem;
}

.services-overview__policy {
    font-style: italic;
    color: #555;
    margin-top: 1.5rem;
}

/* ---- Main Services Grid ---- */
.services__title {
    text-align: center;
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 2rem;
}

.services__grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
}

.services__card {
    background-color: white;
    border-radius: 12px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    display: flex;
    flex-direction: column;
}

.services__img {
    width: 100%;
    height: auto;
    object-fit: cover;
}

.services__name {
    margin: 1rem;
    font-size: 1.25rem;
    font-weight: 600;
}

.services__desc {
    margin: 0 1rem 1.5rem;
    color: #555;
    line-height: 1.5;
}
</style>
