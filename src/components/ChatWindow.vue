<template>
    <div class="chat-window"> 
        <div class="error">{{ error }}</div>
        <div v-if="documents" class="messages scroll" ref="messages">
            <div v-for="doc in formattedDocuments" :key="doc.id" class="msg">
                <div class="msg-header">
                    <span class="name">{{ doc.name }}</span>
                    <span class="created-at"> {{ doc.createdAt }}</span>
                </div>
                <span class="content">{{ doc.message }}</span>
            </div>
        </div>
    </div> 
</template>

<script>
import { ref, computed, onUpdated, onUnmounted } from 'vue'
import getCollection from '../composables/getCollection'
import { formatDistanceToNow } from 'date-fns'

export default {
    setup() {
        const { error, documents } = getCollection('messages')
        const formattedDocuments = computed(() => {
            return documents.value.map(doc => {
                return { ...doc, createdAt: formatDistanceToNow(doc.createdAt.toDate()) + ' ago'}
            })
        })

        const messages = ref(null)
        onUpdated(() => {
            messages.value.scrollTop = messages.value.scrollHeight
        })

        return { error, documents, formattedDocuments, messages }
    }
}
</script>

<style>
.chat-window {
    background-color: #f5f3f3;
    padding: 10px 20px;
}
.messages {
    /* to set the height */
    max-height: 350px;
    /* to scroll */
    overflow: auto;
}
.msg {
    margin: 20px 0;
}
.msg-header {
    margin: 3px 0;
}
.name {
    font-weight: bold;
    margin-right: 10px;
    font-size: 14px;
}
.created-at {
    font-size:12px;
    color: grey;
    margin-bottom: 5px;
}
.content {
    margin: 0 5px;
}
</style>
