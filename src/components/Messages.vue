<template>
    <div class="p-4 chat-window overflow-scroll" ref="msgBox">
        <div v-if="formattedMessages.length > 0">
            <div v-for="message in formattedMessages" :key="message.id" class="d-flex gap-3 mb-3">
                <div class="image-container d-flex justify-content-center align-items-center">
                    <img :src="user?.photoURL || require('@/assets/images/default.png')" alt=""
                        class="img-fluid rounded-circle" width="50" v-if="user">
                </div>
                <div class="d-flex flex-column">
                    <span class="fw-bold ms-1">{{ message.sender }}</span>
                    <span class="bg-primary rounded-5 py-2 px-3 message text-white">{{ message.message }}</span>
                    <span style="font-size: 11px;" class="text-muted ms-1 mt-1">{{ message.created_at }} ago</span>
                </div>
            </div>
        </div>
        <div v-else>
            <div v-for="(placeholder, index) in placeholders" :key="index" class="d-flex gap-3 mb-3">
                <div class="circle rounded-circle placeholder-wave"></div>
                <div class="d-flex flex-column">
                    <span style="width: 50px; height: 5px; background-color: #aaa;"
                        class="rounded-5 placeholder-wave mt-1 mb-2"></span>
                    <span style="width: 130px; height: 15px; background-color: #aaa;"
                        class="rounded-5 placeholder-wave mb-2"></span>
                    <span style="width: 30px; height: 5px; background-color: #aaa;"
                        class="rounded-5 placeholder-wave"></span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import getUser from '@/composables/getUser';
import { db } from '@/firebase/config';
import { formatDistanceToNow } from 'date-fns';
import { computed, onUpdated, ref } from 'vue';

const { user } = getUser()

let messages = ref([]);
const msgBox = ref(null)

const placeholders = [1, 2, 3, 4, 5, 6, 7, 8]

onUpdated(() => {
    msgBox.value.scrollTop = msgBox.value.scrollHeight
})

db.collection('messages').orderBy('created_at').onSnapshot(snap => {
    let result = [];
    // console.log(snap)
    // console.log(snap.docs)
    snap.docs.forEach(doc => {
        // console.log(doc)
        // console.log(doc.data())
        let document = { ...doc.data(), id: doc.id }
        doc.data().created_at && result.push(document)
    })
    messages.value = result
})

const formattedMessages = computed(() => {
    return messages.value.map(msg => {
        let formattedTime = formatDistanceToNow(msg.created_at.toDate())
        return { ...msg, created_at: formattedTime }
    })
})

</script>

<style></style>