<template>
    <form @submit.prevent="handleSubmit">
      <div class="error">{{ error }}</div>
      <input type="email" placeholder="Enter your Email" required v-model="email">
      <input type="password" placeholder="Enter your Password" required v-model="password">
      <button type="submit">Log In</button>
    </form>
</template>

<script> 
import { ref } from 'vue'
import useLogin from '../composables/useLogin'

export default {
    setup(props, context) {
        const email = ref('')
        const password = ref('')

        const { error, login } = useLogin()

        const handleSubmit = async () => {
            await login(email.value, password.value)
            if (!error.value) {
                context.emit('login')
            }
        }

        return { email, password, error, handleSubmit }
    }
}
</script>
