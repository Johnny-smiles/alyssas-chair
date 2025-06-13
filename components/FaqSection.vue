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
            <div
                v-for="(faq, idx) in faqs"
                :key="idx"
                class="faq-item"
            >
                <h3
                    :class="{ open: openIndex === idx }"
                    @click="toggleFaq(idx)"
                    tabindex="0"
                    @keydown.enter="toggleFaq(idx)"
                    style="cursor:pointer;"
                >
                    {{ faq.question }}
                    <span class="faq-toggle-icon">
                        {{ openIndex === idx ? '−' : '+' }}
                    </span>
                </h3>
                <transition name="faq-fade">
                    <p v-if="openIndex === idx">{{ faq.answer }}</p>
                </transition>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue'

const faqs = [
    {
        question: "What is your booking policy?",
        answer: `To schedule any color or lightening service, we require a $75 deposit paid
at the time of booking. We charge your card the full $75, and this amount
comes off the total due on the day of your service. This fee will be forfeited
if you cancel or reschedule your appointment without providing 48 business
hours’ notice. If for any reason you cannot reach us by phone to cancel your
appointment, please email us at info@alyssaschair.com.`
    },
    {
        question: "What is included with my color service?",
        answer: `Haircuts and blowdries are not included in base color and lightening services
but can be added on if desired.`
    },
    {
        question: "Is it all one set price?",
        answer: `Individual client pricing may vary depending on hair thickness, length, total
appointment time and/or product required.`
    },
    {
        question: "How blonde can I be?",
        answer: `It’s all relative! Coming in with hair inspo photos is a great idea, but keep
in mind that photos work as our jumping-off point, and we have to take lots of
factors into consideration — such as your hair history, your starting level,
and more. Our stylists will consult you before any product ever comes near
your head, to make sure that you understand what is possible in one session
and over multiple sessions. The most important thing to us is maintaining the
integrity of your hair while we attempt your goal. We’ll do our best to get
you where you want to be and we’ll be real with you every step of the way!`
    },
    {
        question: "How much will it cost to lighten my hair?",
        answer: `We never quote prices without seeing you and your goals in person, and getting
a comprehensive hair history. Everyone’s needs to achieve their goals are
different. You might need a root smudge, an extra bowl of product, a treatment,
or something different in addition to the lightener. Until we meet you and
know what you’re looking for, we can’t give you an exact price. Your stylist
can give you a good idea before she begins your application how much your
service will cost, and if you have a particular budget that you’d like to
stick to then we can offer suggestions of what is possible within your price
range. We are always here if you’d like to schedule a free consultation before
you come in for your appointment!`
    }
]

const openIndex = ref(null)
const toggleFaq = idx => {
    openIndex.value = openIndex.value === idx ? null : idx
}
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
    padding-left: 0;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 0.05em;
    font-size: 1.15rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    user-select: none;
    outline: none;
}
.faq-item h3.open {
    color: var(--autumn-cedar);
}
.faq-toggle-icon {
    margin-left: 0.5em;
    font-size: 1.3em;
    color: var(--autumn-cedar);
    font-weight: bold;
    line-height: 1;
}
.faq-item p {
    margin: 0;
    color: #333;
    line-height: 1.6;
    font-size: 1rem;
}
.faq-fade-enter-active, .faq-fade-leave-active {
    transition: opacity 0.25s;
}
.faq-fade-enter-from, .faq-fade-leave-to {
    opacity: 0;
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