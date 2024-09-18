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
    </form>
</template>

<script>
import { ref } from 'vue';

export default {
    setup() {
        let displayName = ref('')
        let email = ref('')
        let password = ref('')
        let accept = ref(false)

        let signUp = () =>{
            console.log(displayName.value, email.value, password.value)
        }


        return { displayName, email, password, signUp , accept }
    }
}
</script>

<style></style>