<template>
    <div class="p-4 chat-window overflow-scroll" ref="msgBox">
        <div v-if="formattedMessages.length > 0">
            <div v-for="message in formattedMessages" :key="message.id">
                <!-- Check if the message sender is the current user -->
                <div
                    :class="{ 'd-flex justify-content-end': message.sender === user?.displayName, 'd-flex gap-3 mb-3': message.sender !== user?.displayName }">
                    <!-- If not current user, show photo and name -->
                    <template v-if="message.sender !== user?.displayName">
                        <div class="image-container d-flex justify-content-center align-items-center">
                            <img :src="message.photoURL || require('@/assets/images/default.png')" width="45" alt=""
                                class="img-fluid rounded-circle">
                        </div>
                        <div class="d-flex flex-column">
                            <span class="fw-bold ms-1">{{ message.sender }}</span>
                            <span :class="{ 'small-screen': message.message.length > 20 }"
                                class="bg-primary rounded-5 py-2 px-3 message text-white">{{ message.message }}</span>
                            <span style="font-size: 11px;" class="text-muted ms-1 mt-1">{{ message.created_at }}
                                ago</span>
                        </div>
                    </template>
                    <!-- If current user, align message to the right -->
                    <template v-else>
                        <div class="d-flex flex-column align-items-end">
                            <span class="bg-secondary rounded-5 py-2 px-3 mb-2 message text-white">{{ message.message }}</span>
                        </div>
                    </template>
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
import { computed, onUpdated, ref, watchEffect } from 'vue';

const { user } = getUser()

const isShow = ref(false)

const toggle = () => {
    isShow.value = !isShow.value
}

const toggleShow = computed(() => {
    return 
})

let messages = ref([]);
const msgBox = ref(null)

const placeholders = [1, 2, 3, 4, 5, 6, 7, 8]

onUpdated(() => {
    msgBox.value.scrollTop = msgBox.value.scrollHeight
})

const unsub = db.collection('messages').orderBy('created_at').onSnapshot(snap => {
    console.log('snap')
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

watchEffect((onInvalidate) => {
    onInvalidate(() => unsub())
})

const formattedMessages = computed(() => {
    return messages.value.map(msg => {
        let formattedTime = formatDistanceToNow(msg.created_at.toDate())
        return { ...msg, created_at: formattedTime }
    })
})

</script>

<style scoped>
</style>