<template>
    <section class="faq-section">
        <!-- Header: title, subtitle, image -->
        <div class="faq-header">
            <div class="faq-header__text">
                <h2 class="faq-title">Questions you may have.</h2>
                <p class="faq-subtitle">
                    Let’s make sure we begin on the same page! Check out below for a list of
                    frequently asked questions in terms of hair color, balayage, babylights and more.
                </p>
            </div>
            <div class="faq-header__image">
                <NuxtImg
                    src="/images/faq-hair.jpg"
                    alt="Bridal hair styling example"
                    width="400"
                />
            </div>
        </div>

        <hr class="faq-separator" />

        <!-- FAQ items -->
        <div class="faq-items">
            <div class="faq-item">
                <h3>What is your booking policy?</h3>
                <p>
                    To schedule any color or lightening service, we require a $75 deposit paid
                    at the time of booking. We charge your card the full $75, and this amount
                    comes off the total due on the day of your service. This fee will be forfeited
                    if you cancel or reschedule your appointment without providing 48 business
                    hours’ notice. If for any reason you cannot reach us by phone to cancel your
                    appointment, please email us at info@alyssaschair.com.
                </p>
            </div>

            <div class="faq-item">
                <h3>What is included with my color service?</h3>
                <p>
                    Haircuts and blowdries are not included in base color and lightening services
                    but can be added on if desired.
                </p>
            </div>

            <div class="faq-item">
                <h3>Is it all one set price?</h3>
                <p>
                    Individual client pricing may vary depending on hair thickness, length, total
                    appointment time and/or product required.
                </p>
            </div>

            <div class="faq-item">
                <h3>How blonde can I be?</h3>
                <p>
                    It’s all relative! Coming in with hair inspo photos is a great idea, but keep
                    in mind that photos work as our jumping-off point, and we have to take lots of
                    factors into consideration — such as your hair history, your starting level,
                    and more. Our stylists will consult you before any product ever comes near
                    your head, to make sure that you understand what is possible in one session
                    and over multiple sessions. The most important thing to us is maintaining the
                    integrity of your hair while we attempt your goal. We’ll do our best to get
                    you where you want to be and we’ll be real with you every step of the way!
                </p>
            </div>

            <div class="faq-item">
                <h3>How much will it cost to lighten my hair?</h3>
                <p>
                    We never quote prices without seeing you and your goals in person, and getting
                    a comprehensive hair history. Everyone’s needs to achieve their goals are
                    different. You might need a root smudge, an extra bowl of product, a treatment,
                    or something different in addition to the lightener. Until we meet you and
                    know what you’re looking for, we can’t give you an exact price. Your stylist
                    can give you a good idea before she begins your application how much your
                    service will cost, and if you have a particular budget that you’d like to
                    stick to then we can offer suggestions of what is possible within your price
                    range. We are always here if you’d like to schedule a free consultation before
                    you come in for your appointment!
                </p>
            </div>
        </div>
    </section>
</template>

<script setup>
// nothing to import—static content (just NuxtImg)
</script>

<style scoped>
.faq-section {
    background-color: #eef2f7;
    padding: 4rem 2rem;
}

.faq-header {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 2rem;
    align-items: center;
}
.faq-header__text {}
.faq-title {
    font-family: serif;
    font-size: 2.5rem;
    line-height: 1.2;
    margin: 0;
}
.faq-subtitle {
    margin-top: 1rem;
    color: #555;
    line-height: 1.6;
}
.faq-header__image img,
.faq-header__image .nuxt-img {
    border-radius: 8px;
    object-fit: cover;
    width: 100%;
    max-width: 400px;
    height: auto;
    display: block;
    margin: 0 auto;
}

/* Separator */
.faq-separator {
    border: none;
    border-top: 1px solid #ccc;
    margin: 2.5rem 0;
}

/* FAQ items */
.faq-items {
    display: grid;
    gap: 2rem;
}
.faq-item h3 {
    position: relative;
    margin: 0 0 0.5rem;
    padding-left: 1.5rem;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 0.05em;
    font-size: 1.15rem;
}
.faq-item h3::before {
    content: "+";
    position: absolute;
    left: 0;
    color: var(--autumn-cedar);
    font-weight: bold;
}
.faq-item p {
    margin: 0;
    color: #333;
    line-height: 1.6;
    font-size: 1rem;
}

/* Tablet and below */
@media (max-width: 900px) {
    .faq-section {
        padding: 3rem 1rem;
    }
    .faq-title {
        font-size: 2rem;
    }
    .faq-header {
        gap: 1.25rem;
    }
    .faq-items {
        gap: 1.25rem;
    }
}

/* Mobile stack */
@media (max-width: 768px) {
    .faq-section {
        padding: 2rem 0.5rem;
    }
    .faq-header {
        grid-template-columns: 1fr;
        gap: 1.5rem;
    }
    .faq-header__image {
        margin-top: 1.5rem;
        width: 100%;
        max-width: 350px;
        margin-left: auto;
        margin-right: auto;
    }
    .faq-title {
        font-size: 1.5rem;
        text-align: center;
    }
    .faq-subtitle {
        font-size: 1rem;
        text-align: center;
    }
    .faq-items {
        gap: 1rem;
    }
    .faq-item h3 {
        font-size: 1rem;
        padding-left: 1.1rem;
    }
    .faq-item p {
        font-size: 0.97rem;
    }
}

/* Extra small screens */
@media (max-width: 480px) {
    .faq-section {
        padding: 1.2rem 0.2rem;
    }
    .faq-title {
        font-size: 1.15rem;
    }
    .faq-header__image {
        max-width: 95vw;
    }
}
</style>
