<template>
    <form
        name="contact"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        @submit.prevent="onSubmit"
        class="flex flex-col gap-5 max-w-md mx-auto p-8 bg-stone-rose rounded-xl shadow-lg"
    >
        <!-- Netlify hidden inputs -->
        <input type="hidden" name="form-name" value="contact" />
        <p class="hidden">
            <label>
                Don’t fill this out if you’re human:
                <input name="bot-field" />
            </label>
        </p>

        <div class="flex flex-col gap-2">
            <label for="name" class="text-autumn-cedar font-medium">Name</label>
            <input
                id="name"
                type="text"
                name="name"
                v-model="form.name"
                required
                class="text-autumn-cedar bg-white border border-honey-lace rounded-md px-4 py-3 focus:outline-none focus:border-fire-moss transition-colors"
            />
        </div>

        <div class="flex flex-col gap-2">
            <label for="email" class="text-autumn-cedar font-medium">Email</label>
            <input
                id="email"
                type="email"
                name="email"
                v-model="form.email"
                required
                class="text-autumn-cedar bg-white border border-honey-lace rounded-md px-4 py-3 focus:outline-none focus:border-fire-moss transition-colors"
            />
        </div>

        <div class="flex flex-col gap-2">
            <label for="message" class="text-autumn-cedar font-medium">Message</label>
            <textarea
                id="message"
                name="message"
                v-model="form.message"
                required
                class="text-autumn-cedar bg-white border border-honey-lace rounded-md px-4 py-3 min-h-[120px] resize-vertical focus:outline-none focus:border-fire-moss transition-colors"
            ></textarea>
        </div>

        <button
            type="submit"
            class="w-full py-3 text-lg font-semibold rounded-md bg-autumn-cedar text-white hover:bg-fire-moss transition-colors mt-2"
        >Send</button>
    </form>
</template>

<script setup>
import { reactive } from 'vue'

const emit = defineEmits(['submit'])

const form = reactive({
    name: '',
    email: '',
    message: ''
})

function onSubmit() {
    emit('submit', { ...form })
}
</script>

<style scoped>
.contact-form {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    max-width: 420px;
    margin: 0 auto;
    padding: 2rem 1.5rem;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 2px 12px rgba(0,0,0,0.07);
}

.form-group {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

label {
    font-size: 1rem;
    font-weight: 500;
}

input,
textarea {
    font-size: 1rem;
    padding: 0.75rem 1rem;
    border: 1px solid #ccc;
    border-radius: 6px;
    width: 100%;
    box-sizing: border-box;
    transition: border-color 0.2s;
}

input:focus,
textarea:focus {
    border-color: #888;
    outline: none;
}

textarea {
    min-height: 120px;
    resize: vertical;
}

.hidden {
    display: none;
}

button[type="submit"] {
    width: 100%;
    padding: 0.85rem 0;
    font-size: 1.1rem;
    background: #222;
    color: #fff;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: background 0.2s;
    margin-top: 0.5rem;
}

button[type="submit"]:hover {
    background: #444;
}

/* Mobile optimization */
@media (max-width: 600px) {
    .contact-form {
        padding: 1.25rem 0.5rem;
        max-width: 100%;
        box-shadow: none;
        border-radius: 0;
    }
    input,
    textarea {
        font-size: 1rem;
        padding: 0.65rem 0.75rem;
    }
    button[type="submit"] {
        font-size: 1rem;
        padding: 0.75rem 0;
    }
}
</style>
