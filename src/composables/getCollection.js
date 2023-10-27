import { ref, watchEffect } from 'vue'
import { projectFirestore } from '../firebase/config'

const getCollection = (collection) => {
    const error = ref(null)
    const documents = ref([])

    let collectionRef = projectFirestore.collection('messages')
        .orderBy('createdAt')
 
    const unSubscribe = collectionRef.onSnapshot((snap) => {
        console.log('snapshot')
        let results = []
        snap.docs.forEach(doc => {
            // the statment before && is to wait for the actual snapshot with the timestamp calculated 
            doc.data().createdAt && results.push({ ...doc.data(), id: doc.id })
        })
        documents.value = results
        error.value = null
    }, (err) => {
        console.log(err.message)
        error.value = 'Something went wrong while fetching data'
        documents.value = null
    })

    // unsub from prev collection when watcher is stopped (component unmounts)
    watchEffect((onInvalidate) => {
        onInvalidate(() => unSubscribe() )
    })

    return { error, documents }
}

export default getCollection
