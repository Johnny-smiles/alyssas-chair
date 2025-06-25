<template>
    <!-- Hero -->
    <section class="contact-hero">
        <NuxtImg
            src="/Abeille-90.jpg"
            alt="Salon interior"
            class="contact-hero__img"
            width="400"
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
                class="contact-us__form bg-stone-rose rounded-xl shadow-lg p-8"
            >
                <!-- required hidden inputs -->
                <input type="hidden" name="form-name" value="contact" />
                <p class="hidden">
                    <label>
                        Don’t fill this out if you’re human:
                        <input name="bot-field" />
                    </label>
                </p>

                <div class="form-row gap-4">
                    <label class="flex flex-col font-medium text-autumn-cedar">
                        First Name
                        <input
                            type="text"
                            name="firstName"
                            required
                            class="mt-1 px-4 py-2 rounded-md border border-honey-lace bg-white text-autumn-cedar focus:border-fire-moss focus:outline-none transition-colors"
                        />
                    </label>
                    <label class="flex flex-col font-medium text-autumn-cedar">
                        Last Name
                        <input
                            type="text"
                            name="lastName"
                            required
                            class="mt-1 px-4 py-2 rounded-md border border-honey-lace bg-white text-autumn-cedar focus:border-fire-moss focus:outline-none transition-colors"
                        />
                    </label>
                </div>

                <label class="flex flex-col font-medium text-autumn-cedar">
                    Email
                    <input
                        type="email"
                        name="email"
                        required
                        class="mt-1 px-4 py-2 rounded-md border border-honey-lace bg-white text-autumn-cedar focus:border-fire-moss focus:outline-none transition-colors"
                    />
                </label>

                <label class="flex flex-col font-medium text-autumn-cedar">
                    Subject
                    <input
                        type="text"
                        name="subject"
                        class="mt-1 px-4 py-2 rounded-md border border-honey-lace bg-white text-autumn-cedar focus:border-fire-moss focus:outline-none transition-colors"
                    />
                </label>

                <label class="flex flex-col font-medium text-autumn-cedar">
                    Location
                    <input
                        type="text"
                        name="location"
                        class="mt-1 px-4 py-2 rounded-md border border-honey-lace bg-white text-autumn-cedar focus:border-fire-moss focus:outline-none transition-colors"
                    />
                </label>

                <label class="flex flex-col font-medium text-autumn-cedar">
                    Message
                    <textarea
                        name="message"
                        rows="4"
                        class="mt-1 px-4 py-2 rounded-md border border-honey-lace bg-white text-autumn-cedar focus:border-fire-moss focus:outline-none transition-colors resize-vertical"
                    ></textarea>
                </label>

                <label class="flex flex-col font-medium text-autumn-cedar">
                    Event Type
                    <select
                        name="eventType"
                        class="mt-1 px-4 py-2 rounded-md border border-honey-lace bg-white text-autumn-cedar focus:border-fire-moss focus:outline-none transition-colors"
                    >
                        <option disabled selected>Select an option</option>
                        <option>Bridal Hair</option>
                        <option>Bridal Hair Trial</option>
                        <option>Bridesmaid Hair</option>
                        <option>Attendant Hair Trial</option>
                    </select>
                </label>

                <label class="flex flex-col font-medium text-autumn-cedar">
                    Event Date
                    <input
                        type="date"
                        name="eventDate"
                        required
                        class="mt-1 px-4 py-2 rounded-md border border-honey-lace bg-white text-autumn-cedar focus:border-fire-moss focus:outline-none transition-colors"
                    />
                </label>

                <button
                    type="submit"
                    class="btn w-full mt-2 py-3 text-lg font-semibold rounded-md bg-autumn-cedar text-white hover:bg-fire-moss transition-colors"
                >Contact</button>
            </form>
        </div>
    </section>

    <!-- Visit Us -->
    <section class="visit-us">
        <div class="visit-us__container">
            <NuxtImg
                src="/Abeille-01.jpg"
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
import { reactive, ref, nextTick } from 'vue'

/* form state */
const formState = reactive({ name: '', email: '', message: '' })
const botField  = ref('')
const showModal = ref(false)
const sending   = ref(false)

/* url-encode helper */
const encode = (data) =>
  Object.keys(data)
    .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(data[k]))
    .join('&')

/* new submit handler */
async function onSubmit () {
  if (botField.value) return            // honeypot
  sending.value = true
  try {
    await fetch('/', {
      method : 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body   : encode({ 'form-name': 'contact', ...formState })
    })
    sending.value = false
    showModal.value = true
    Object.assign(formState, { name: '', email: '', message: '' })
    await nextTick()
    document.querySelector('.modal')?.focus()
  } catch (err) {
    console.error(err)
    sending.value = false
    alert('Sorry—something went wrong. Please try again later.')
  }
}

function closeModal () {
  showModal.value = false
}
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
    width: 100%;
    height: 100%;
    display: block;
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
    color: var(--autumn-cedar);
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
.hidden {
    display: none;
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

/* Tablet breakpoint */
@media (max-width: 900px) {
    .contact-hero__title {
        font-size: 2rem;
    }
    .contact-us {
        padding: 2.5rem 1rem;
    }
    .visit-us {
        padding: 2.5rem 1rem;
    }
    .contact-us__container,
    .visit-us__container {
        gap: 1.5rem;
    }
    .contact-us__info h2,
    .visit-us__info h2 {
        font-size: 1.5rem;
    }
}

/* Mobile breakpoint */
@media (max-width: 600px) {
    .contact-hero {
        height: 32vh;
        min-height: 120px;
    }
    .contact-hero__title {
        font-size: 1.15rem;
        padding: 0 0.5rem;
    }
    .contact-us {
        padding: 1.5rem 0.5rem;
    }
    .contact-us__container {
        grid-template-columns: 1fr;
        gap: 2rem;
    }
    .contact-us__info h2 {
        font-size: 1.1rem;
        margin-bottom: 0.7rem;
    }
    .contact-us__phone,
    .contact-us__email {
        font-size: 1rem;
    }
    .contact-us__text {
        font-size: 0.97rem;
        margin-top: 0.7rem;
    }
    .contact-us__form {
        gap: 0.7rem;
    }
    .form-row {
        flex-direction: column;
        gap: 0.7rem;
    }
    input, textarea, select {
        font-size: 0.98rem;
        padding: 0.55rem 0.7rem;
    }
    .btn {
        width: 100%;
        align-self: stretch;
        font-size: 1rem;
        padding: 0.85rem 0;
        margin-top: 0.5rem;
    }
    .visit-us {
        padding: 1.5rem 0.5rem;
    }
    .visit-us__container {
        grid-template-columns: 1fr;
        gap: 1.2rem;
    }
    .visit-us__img {
        max-width: 98vw;
        margin-bottom: 1rem;
    }
    .visit-us__info h2 {
        font-size: 1.1rem;
        margin-bottom: 0.7rem;
    }
    address,
    .visit-us__hours {
        font-size: 0.97rem;
    }
}
</style>
