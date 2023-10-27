import { ref } from "vue"
import { projectAuth } from "../firebase/config"

const error = ref(null)

const signup = async (displayName, email, password) => {
    error.value = null
    try {
        const res = await projectAuth.createUserWithEmailAndPassword(email, password)

        if (!res) {
            throw new Error('Something went wrong while signing up, please try again')
        }
        
        await res.user.updateProfile({ displayName })
        return res
    } catch (err) {
        error.value = err.message
    }
}

const useSignup = () => {
  return { error, signup }
}

export default useSignup
