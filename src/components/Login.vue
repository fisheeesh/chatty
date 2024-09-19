<template>
    <h2>LogIn</h2>
    <form @submit.prevent="logIn">
        <label>Email</label>
        <input type="email" placeholder="name@gmail.com" v-model="email">
        <label>Email</label>
        <input type="password" placeholder="abc123" v-model="password">
        <div class="align">
            <button>LogIn</button>
        </div>
        <p v-if="error" class="error">{{ error }}</p>
    </form>
</template>

<script>
import useLogIn from '@/composables/useLogIn';
import { ref } from 'vue';

export default {
    setup() {
        let email = ref('')
        let password = ref('')

        let { error, signIn } = useLogIn()

        let logIn = async () => {
            let response = await signIn(email.value, password.value)
            if(response) console.log(response.user)
        }


        return { email, password, logIn, error }
    }
}
</script>

<style></style>