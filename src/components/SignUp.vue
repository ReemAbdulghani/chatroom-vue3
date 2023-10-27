<template>
  <form @submit.prevent="handleSubmit">
    <div class="error">{{ error }}</div>
    <input type="text" placeholder="Enter your Name" required v-model="displayName">
    <input type="email" placeholder="Enter your Email" required v-model="email">
    <input type="password" placeholder="Enter your Password" required v-model="password">
    <button type="submit">Sign Up</button>
  </form>
</template>

<script>
import { ref } from 'vue'
import useSignup from '../composables/useSignup'

export default {
    setup(props, context) {
        const displayName = ref('')
        const email = ref('')
        const password = ref('')

        const { error, signup } = useSignup()

        const handleSubmit = async () => {
            await signup(displayName.value, email.value, password.value)
            if (!error.value) {
              context.emit('signup')
            }
        }

        return { displayName, email, password, error, handleSubmit }
    }
}
</script>