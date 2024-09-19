<template>
    <h2>SignUp</h2>
    <form @submit.prevent="signUp">
        <label>Display Name</label>
        <input type="text" placeholder="user1" v-model="displayName">
        <label>Email</label>
        <input type="email" placeholder="name@gmail.com" v-model="email">
        <label>Password</label>
        <input type="password" placeholder="abc123" v-model="password">
        <div>
            <input type="checkbox" v-model="accept">
            <label>Accept terms and Conditions</label>
        </div>
        <div class="align">
            <button>SignUp</button>
        </div>
        <p v-if="error" class="error">{{ error }}</p>
    </form>
</template>

<script>
import useSignUp from '@/composables/useSignUp';
import { ref } from 'vue';

export default {
    setup(props, context) {
        let displayName = ref('')
        let email = ref('')
        let password = ref('')
        let accept = ref(false)

        let { error, createAccount } = useSignUp()
        
        let signUp = async () => {
            let response = await createAccount(email.value, password.value, displayName.value)
            if(response) context.emit('enterChatRoom')
        }

        return { displayName, email, password, signUp, accept, error }
    }
}
</script>

<style></style>