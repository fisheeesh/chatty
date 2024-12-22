<template>
    <div class="position-relative">
        <textarea v-model="message" @keydown.enter.prevent="sendMessage"
            placeholder="Type a message and hit 'Enter' to send"
            class="form-control rounded-bottom-5 bg-white border-0 pt-3 pb-3 ps-4"
            style="padding-right: 75px"></textarea>
        <span @click="sendMessage">
            <i class="far fa-paper-plane position-absolute send"></i>
        </span>
    </div>
</template>

<script setup>
import getUser from '@/composables/getUser';
import useCollection from '@/composables/useCollection';
import { timeStamp } from '@/firebase/config';
import { ref } from 'vue';

const message = ref('')
const { user } = getUser()
const { error, addDoc } = useCollection('messages')

const sendMessage = async () => {
    if (!message.value) return

    let newMessage = {
        sender: user.value.displayName,
        message: message.value,
        photoURL: user.value.photoURL || require('@/assets/images/default.png'),
        created_at: timeStamp()
    }
    message.value = ''
    await addDoc(newMessage)
}

</script>

<style></style>