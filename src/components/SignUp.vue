<template>
    <h2>SignUp</h2>
    <form @submit.prevent="signUp">
        <label>Display Name</label>
        <input type="text" placeholder="user1" v-model="displayName">
        <label>Email</label>
        <input type="email" placeholder="name@gmail.com" v-model="email">
        <p v-if="error" class="error">{{ error }}</p>
        <label>Password</label>
        <input type="password" placeholder="abc123" v-model="password">
        <div>
            <input type="checkbox" v-model="accept">
            <label>Accept terms and Conditions</label>
        </div>
        <div class="align">
            <button>SignUp</button>
        </div>
    </form>
</template>

<script>
import { auth } from '@/firebase/config';
import { ref } from 'vue';

export default {
    setup() {
        let displayName = ref('')
        let email = ref('')
        let password = ref('')
        let accept = ref(false)
        let error = ref('')
        let signUp = async () => {
            try {
                let response = await auth.createUserWithEmailAndPassword(email.value, password.value)
                if (!response) throw new Error('Could not create an account')
                
            response.user.updateProfile({
                displayName: displayName.value
            })
            console.log(response.user)
            }
            catch (err) {
                // console.log(err.message)
                error.value = err.message
            }
        }


        return { displayName, email, password, signUp, accept, error }
    }
}
</script>

<style></style>