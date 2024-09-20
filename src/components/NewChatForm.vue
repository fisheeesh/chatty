<template>
  <form>
    <textarea
      placeholder="Type a message and hit 'Enter' to send"
      v-model="message"
      @keydown.enter.prevent="handleSubmit"
    ></textarea>
  </form>
</template>

<script>
import getUser from "@/composables/getUser";
import useCollection from "@/composables/useCollection";
import { timeStamp } from "@/firebase/config";
import { ref } from "vue";

export default {
  setup() {
    let message = ref("");
    let { user } = getUser()
    let { error, addDoc } = useCollection('messages')

    let handleSubmit = () =>{
        let chat = {
            message : message.value,
            userName : user.value.displayName,
            sent_at : timeStamp()
        }
        // console.log(chat)
        addDoc(chat)
        message.value = ''
    }

    return { message, handleSubmit };
  },
};
</script>

<style>
form{
    margin: 10px;
}
form textarea{
    width: 100%;
    max-width: 100%;
    margin-bottom: 6px;
    padding: 10px;
    box-sizing: border-box;
    border: 0;
    border-radius: 20px;
    font-family: inherit;
    outline: none;
    /* resize: none; */
}
</style>
