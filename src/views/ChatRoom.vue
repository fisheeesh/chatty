<template>
  <section class="chatroom my-6 text-center">
    <button @click="signOut" class="btn btn-primary btn-lg">LogOut</button>
  </section>
</template>

<script setup>
import getUser from '@/composables/getUser';
import useSignOUt from '@/composables/useSignOut';
import { watch } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()
const { user } = getUser()
const { error, logOut } = useSignOUt()

const signOut = async () => {
  await logOut()
}

watch(user, () => {
  if (!user.value) router.push('/')
})
</script>

<style></style>