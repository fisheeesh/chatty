<template>
    <div class="chat-window">
        <div class="messages">
            <div class="single" v-for="message in messages" :key="message.id">
                <span class="created-at">{{ message.sent_at }}</span>
                <span class="name">{{ message.userName }}</span>
                <span class="message">{{ message.message }}</span>
            </div>
        </div>
    </div>
</template>

<script>
import { db } from '@/firebase/config';
import { ref } from 'vue';

export default {
    setup(){
        let messages = ref([])
        db.collection('messages').orderBy('sent_at').onSnapshot(snap => {
            let results = []
            snap.docs.forEach(doc =>{
                let document = {...doc.data(), id : doc.id}
                // console.log(document)
                results.push(document)
            })
            // console.log(results)
            messages.value = results
        })

        return { messages }
    }
}
</script>

<style>
.chat-window {
    background: #f9fafe;
    padding: 30px 20px;
}
.messages {
    max-height: 400px;
    overflow: auto;
    /* background: red; */
}
.single {
    margin: 18px 0;
    /* background: green; */
}
.created-at {
    display: block;
    color: #999;
    font-size: 12px;
    margin-bottom: 4px;
}
.name {
    font-weight: bold;
    margin-right: 6px;
}

</style>