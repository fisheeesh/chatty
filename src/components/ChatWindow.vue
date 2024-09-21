<template>
    <div class="chat-window">
        <div class="messages" ref="msgBox">
            <div class="single" v-for="message in formattedMessages" :key="message.id">
                <span class="created-at">{{ message.sent_at }} ago</span>
                <span class="name">{{ message.userName }}</span>
                <span class="message">{{ message.message }}</span>
            </div>
        </div>
    </div>
</template>

<script>
import { db } from '@/firebase/config';
import { formatDistanceToNow } from 'date-fns';
import { computed, onUpdated, ref } from 'vue';

export default {
    setup() {
        let messages = ref([]) 
        let msgBox = ref(null)

        // auto scorll bar feature
        onUpdated(() =>{
            /**
             * the one which is called by ref are html elements
             * !they are not only html also they are catched by js elements so they can be used as js object
             * scrollTop is default and 0 so the scoll bar always stays at the top of the element 
             * scorllHeight is the height of the element
             * ? If we want to get auto scroll bar feature as soon as the data is updated then we can changed the default value of scorll in the updated hook
             * ? so we set scollTop value to the height of the element which is scroll height then we can get the auto scroll bar
             */
            msgBox.value.scrollTop = msgBox.value.scrollHeight
        })
        
        /**
         * When it comes to create a new data based on the original data, we use computed property
         */
        let formattedMessages = computed(() => {
            return messages.value.map(msg => {
                let formattedTime = formatDistanceToNow(msg.sent_at.toDate())
                /**
                 *  we can literally retun the msg obj, but we want to fix its sent_at field which we want to change its format
                 * so we're gonna spread the incoming msg obj and override the sent_at field
                 */
                return { ...msg, sent_at: formattedTime } // {name, message, sent_at}
            })// [{},{},{}]
        })
        /**
         * onSnapshot() runs whenever there is any changes in the firestore database
         * That's why it is real time database
         */
        db.collection('messages').orderBy('sent_at').onSnapshot(snap => {
            let results = []
            snap.docs.forEach(doc => {
                let document = { ...doc.data(), id: doc.id }
                // console.log(document)
                /**
                 *! If we dun catch with if condi, it will be null in the sent_at fiield cus we used timestamp()
                 *? timestamp takes a bit time to fetch data from firebase and our onSnapshot() fun before it gets the data
                 *todo that's why sent_at field be null
                 ** So to overcome this, we will only add data when sent_at has data (which means we will wait for timestmap to complete)
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

        return { messages, formattedMessages, msgBox }
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