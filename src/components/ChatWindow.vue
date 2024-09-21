<template>
    <div class="chat-window">
        <div class="messages">
            <div class="single" v-for="message in messages" :key="message.id">
                <span class="created-at">{{ message.sent_at.toDate() }}</span>
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
        /**
         * onSnapshot() runs whenever there is any changes in the firestore database
         * That's why it is real time database
         */
        db.collection('messages').orderBy('sent_at').onSnapshot(snap => {
            let results = []
            snap.docs.forEach(doc =>{
                let document = {...doc.data(), id : doc.id}
                // console.log(document)
                /**
                 * If we dun catch with if condi, it will be null in the sent_at fiield cus we used timestamp()
                 * timestamp takes a bit time to fetch data from firebase and our onSnapshot() fun before it gets the data
                 * that's why sent_at field be null
                 * So to overcome this, we will only add data when sent_at has data (which means we will wait for timestmap to complete)
                 * and onSnapshot() will run again so in the output we will not face any problem
                 */
                // if(doc.data().sent_at) results.push(document)
                /**
                 * when we face with handling condi wth one statement, we can use AND operator
                 * this is a trick of above code
                 */
                doc.data().sent_at && results.push(document)
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