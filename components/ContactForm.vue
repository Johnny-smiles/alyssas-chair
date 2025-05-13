<template>
    <form
        name="contact"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        @submit.prevent="onSubmit"
        class="contact-form"
    >
        <!-- Netlify hidden inputs -->
        <input type="hidden" name="form-name" value="contact" />
        <p class="hidden">
            <label>
                Don’t fill this out if you’re human:
                <input name="bot-field" />
            </label>
        </p>

        <div class="form-group">
            <label for="name">Name</label>
            <input
                id="name"
                type="text"
                name="name"
                v-model="form.name"
                required
            />
        </div>

        <div class="form-group">
            <label for="email">Email</label>
            <input
                id="email"
                type="email"
                name="email"
                v-model="form.email"
                required
            />
        </div>

        <div class="form-group">
            <label for="message">Message</label>
            <textarea
                id="message"
                name="message"
                v-model="form.message"
                required
            ></textarea>
        </div>

        <button type="submit">Send</button>
    </form>
</template>

<script setup>
import {reactive} from 'vue'

const emit = defineEmits(['submit'])

// local reactive form state
const form = reactive({
    name: '',
    email: '',
    message: ''
})

function onSubmit() {
    emit('submit', {...form})
}
</script>

<style scoped>
.contact-form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.form-group {
    display: flex;
    flex-direction: column;
}

.hidden {
    display: none;
}

button[type="submit"] {
    align-self: flex-start;
    padding: 0.5rem 1rem;
}
</style>
