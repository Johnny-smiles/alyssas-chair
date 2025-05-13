<template>
    <!-- Hero -->
    <section class="contact-hero">
        <NuxtImg
            src="/images/contact-hero.jpg"
            alt="Salon interior"
            class="contact-hero__img"
            fill
            sizes="100vw"
        />
        <div class="contact-hero__overlay">
            <h1 class="contact-hero__title">Let’s get started.</h1>
        </div>
    </section>

    <!-- Contact Us -->
    <section class="contact-us">
        <div class="contact-us__container">
            <!-- Left: info -->
            <div class="contact-us__info">
                <h2>Contact Us</h2>
                <p class="contact-us__phone">612-555-1234</p>
                <p class="contact-us__email">hello@alyssaschair.com</p>
                <p class="contact-us__text">
                    We so appreciate you reaching out and we do our best to provide answers
                    as quickly as possible. Please note if you submit an inquiry Friday
                    through Monday, we may be away from the salon serving bridal parties
                    and therefore away from our messages. We will respond as soon as we’re
                    back in the chair!
                </p>
            </div>

            <!-- Right: Netlify form -->
            <form
                name="contact"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                class="contact-us__form"
            >
                <!-- required hidden inputs -->
                <input type="hidden" name="form-name" value="contact" />
                <p class="hidden">
                    <label>
                        Don’t fill this out if you’re human:
                        <input name="bot-field" />
                    </label>
                </p>

                <div class="form-row">
                    <label>
                        First Name
                        <input type="text" name="firstName" required />
                    </label>
                    <label>
                        Last Name
                        <input type="text" name="lastName" required />
                    </label>
                </div>

                <label>
                    Email
                    <input type="email" name="email" required />
                </label>

                <label>
                    Subject
                    <input type="text" name="subject" />
                </label>

                <label>
                    Location
                    <input type="text" name="location" />
                </label>

                <label>
                    Message
                    <textarea name="message" rows="4"></textarea>
                </label>

                <label>
                    Event Type
                    <select name="eventType">
                        <option disabled selected>Select an option</option>
                        <option>Bridal Hair</option>
                        <option>Bridal Hair Trial</option>
                        <option>Bridesmaid Hair</option>
                        <option>Attendant Hair Trial</option>
                    </select>
                </label>

                <label>
                    Event Date
                    <input type="date" name="eventDate" required />
                </label>

                <button type="submit" class="btn">Contact</button>
            </form>
        </div>
    </section>

    <!-- Visit Us -->
    <section class="visit-us">
        <div class="visit-us__container">
            <NuxtImg
                src="/images/salon-front.jpg"
                alt="Alyssa’s Chair exterior"
                width="600"
                class="visit-us__img"
            />

            <div class="visit-us__info">
                <h2>Visit Us</h2>
                <address>
                    Alyssa’s Chair<br />
                    1234 Minneapolis Ave<br />
                    Minneapolis, MN 55414
                </address>
                <hr />
                <ul class="visit-us__hours">
                    <li>Tuesday: 12pm–8pm</li>
                    <li>Wednesday: 10am–8pm</li>
                    <li>Thursday: 10am–8pm</li>
                    <li>Friday: 10am–2pm</li>
                    <li>Saturday: 9am–3pm</li>
                    <li>Sunday & Monday: Closed</li>
                </ul>
            </div>
        </div>
    </section>
    <Footer
        name="Alyssa’s Chair"
        phone="612-555-1234"
        email="hello@alyssaschair.com"
    />
</template>

<script setup>
import { NuxtImg } from '#components'
import Footer from "~/components/Footer.vue";
</script>

<style scoped>
/* Hero */
.contact-hero {
    position: relative;
    width: 100%;
    height: 60vh;
    min-height: 300px;
}
.contact-hero__img {
    object-fit: cover;
    object-position: center;
}
.contact-hero__overlay {
    position: absolute;
    inset: 0;
    background: rgba(0,0,0,0.3);
    display: flex;
    align-items: center;
    justify-content: center;
}
.contact-hero__title {
    color: white;
    font-size: 2.5rem;
    text-align: center;
    padding: 0 1rem;
}

/* Contact Us */
.contact-us {
    background: #fff;
    padding: 4rem 2rem;
}
.contact-us__container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
}
@media (max-width: 768px) {
    .contact-us__container {
        grid-template-columns: 1fr;
    }
}
.contact-us__info h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
}
.contact-us__phone,
.contact-us__email {
    font-weight: bold;
    margin-bottom: 0.5rem;
}
.contact-us__email {
    color: #224870;
    text-decoration: none;
}
.contact-us__text {
    margin-top: 1rem;
    line-height: 1.6;
    color: #555;
}

/* Form */
.contact-us__form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
.form-row {
    display: flex;
    gap: 1rem;
}
.form-row label {
    flex: 1;
}
label {
    display: flex;
    flex-direction: column;
    font-weight: 500;
    color: #333;
}
input, textarea, select {
    margin-top: 0.25rem;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
}
.btn {
    align-self: flex-start;
    padding: 0.75rem 1.5rem;
    background: #224870;
    color: white;
    border: none;
    border-radius: 6px;
    font-weight: bold;
    cursor: pointer;
}

/* Visit Us */
.visit-us {
    background: #fff;
    padding: 4rem 2rem;
}
.visit-us__container {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 2rem;
    align-items: start;
}
@media (max-width: 768px) {
    .visit-us__container {
        grid-template-columns: 1fr;
    }
}
.visit-us__img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    object-fit: cover;
}
.visit-us__info h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
}
address {
    font-style: normal;
    line-height: 1.5;
    margin-bottom: 1rem;
}
.visit-us__hours {
    list-style: none;
    padding: 0;
    color: #555;
    line-height: 1.5;
}
</style>
