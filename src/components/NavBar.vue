<template>
    <nav v-if="user">
        <div>
            <p>Hi there! {{ user.displayName }}</p>
            <p class="email">Logged in as {{ user.email }}</p>
        </div>
        <button @click="signOut">LogOut</button>
    </nav>
</template>

<script>
import getUser from '@/composables/getUser';
import useSignOut from '@/composables/useSignOut';
import { auth } from '@/firebase/config';
import { ref } from 'vue';
export default {
    setup() {
        let { user } = getUser()
        let { logOut } = useSignOut()
        let signOut = async () => {
            await logOut()
        }
        return { signOut, user }
    }
}
</script>

<style>
nav {
    padding: 20px;
    border-bottom: 1px solid #eee;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

nav p {
    margin: 2px auto;
    font-size: 16px;
    color: #444;
}

nav p.email {
    font-weight: 600;
    color: #999;
    font-size: 14px;
}
</style>