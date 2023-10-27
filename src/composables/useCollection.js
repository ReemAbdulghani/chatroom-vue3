// this composable is meant to perform operations on a collection such as add, update, ...
import { ref } from 'vue'
import { projectFirestore } from "../firebase/config"

const useCollection = (collection) => {
    const error = ref(null)

    const addDoc = async (doc) => {
        try {
          await projectFirestore.collection(collection).add(doc)
        } catch (err) {
            error.value = 'Your message was not sent, try again'
        }
    }

    return { error, addDoc }
}

export default useCollection
