<template>
  <section class="chatroom my-5">
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

const router = useRouter()
const { user } = getUser()

watch(user, () => {
  if (!user.value) router.push('/')
})
</script>

<style></style>