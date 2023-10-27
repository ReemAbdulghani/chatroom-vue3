<template>
  <div class="welcome container">
    <div v-if="showLogin">
      <h2>Login</h2>
      <LogIn @login="enterChat" />
      <p>Do not have an account yet? <span @click="showLogin = !showLogin">SignUp</span></p>
    </div>
    <div v-else>
      <h2>Sign up</h2>
      <SignUp @signup="enterChat" />
      <p>Already have an account? <span @click="showLogin = !showLogin">Login</span></p>
    </div>
  </div>
</template>

<script>
import {ref} from 'vue'
import SignUp from '../components/SignUp.vue';
import LogIn from '../components/LogIn.vue';
import { useRouter } from 'vue-router';
export default {
  components: {
    SignUp,
    LogIn
  },
  setup() {
    const showLogin = ref(true)
    const router = useRouter()
    const enterChat = () => {
      router.push({name: 'Chatroom'})
    }
    return { showLogin, enterChat }
  }
}
</script>

<style>
  .welcome {
    text-align: center;
    padding: 30px 0;
  }
  .welcome h2 {
    letter-spacing: 2.5px;
  }
  .welcome form {
    width: 300px;
    margin: 20px auto;
  }
  .welcome input {
    width: 100%;
    padding: 10px;
    border-radius: 20px;
    border: 1px solid #eee;
    outline: none;
    color: #5a5a5a;
    margin: 10px auto;
    font-size: 14px;
    padding: 10px 20px;
  }
  .welcome p {
    color: #525151
  }
  .welcome span {
     text-decoration: underline;
     font-weight: bold;
     cursor: pointer;
     color: #928bfd;
  }
  button[type="submit"] {
    margin-top: 10px;

  }
</style>
