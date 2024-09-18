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

    </form>
</template>

<script>
import { ref } from 'vue';

export default {
    setup() {
        let email = ref('')
        let password = ref('')

        let logIn = () => {
            console.log(displayName.value, email.value, password.value)
        }


        return { email, password, logIn }
    }
}
</script>

<style></style>