<template>
    <form>
        <textarea 
          v-model="message" 
          placeholder="Enter your New Message"
          @keypress.enter.prevent="handleSubmit"
        >
        </textarea>
        <div class="error">{{ error }}</div>
    </form>
</template>

<script>
import {ref} from 'vue'
import getUser from '../composables/getUser'
import useCollection from '../composables/useCollection' 
import { timestamp } from '../firebase/config'

export default {
    setup() {
        const message = ref('')
        const { user } = getUser()
        const { error, addDoc } = useCollection('messages')
        const isSent = ref(false)

        const handleSubmit = async () => {
                const chat = {
                    message: message.value,
                    name: user.value.displayName,
                    // the timestamp is not created until it reaches the server (not on the browser)
                    createdAt: timestamp()
                }
                await addDoc(chat)
                if (!error.value) {
                    message.value = ''
                }
            }

        return { message, error, handleSubmit }
    }
}
</script>

<style scoped>
form {
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
}
textarea {
    width: 100%;
    max-width: 100%;
    padding: 10px 20px;
    box-sizing: border-box;
    border: none;
    border-radius: 10px;
    outline: none;
    font-family: inherit;
    
    border-top: 1px solid #eee;
}
</style>
