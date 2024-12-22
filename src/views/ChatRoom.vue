<template>
  <section class="chatroom mt-5">
    <div class="container">
      <div class="row">
        <div class="col-md-10 offset-md-1 d-flex flex-column shadow-sm rounded-5 p-0">
          <!-- Navbar -->
          <NavBar />
          <!-- ChatWindow -->
          <ChatWindow />
          <!-- ChatForm -->
          <NewChatForm />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import ChatWindow from '@/components/ChatWindow.vue';
import NavBar from '@/components/NavBar.vue';
import NewChatForm from '@/components/NewChatForm.vue';
import getUser from '@/composables/getUser';
import { watch } from 'vue';
import { useRouter } from 'vue-router';

let router = useRouter()
let { user } = getUser()
/**
 * ? As soon as user logout, we want to redirect to welcome as for the user experienec
 * ? not let user to stay or show the chatroom page all the time, so we handled it by watcing user states
 */
watch(user, () => {
  !user.value && router.push({ name: 'welcome' })
})
</script>

<style></style>