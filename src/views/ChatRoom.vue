<template>
  <section class="chatroom my-5">
    <div class="container">
      <div class="row">
        <div class="col-md-10 offset-md-1 d-flex flex-column shadow-sm rounded-5 p-0">
          <!-- Navbar -->
          <NavBar />
          <!-- ChatWindow -->
          <div class="p-4 chat-window">
          </div>
          <!-- ChatForm -->
          <div class="position-relative">
            <textarea placeholder="Type a message and hit 'Enter' to send" class="form-control rounded-bottom-5 bg-white border-0 pt-3 pb-3 px-4"></textarea>
            <i class="far fa-paper-plane position-absolute send"></i>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import NavBar from '@/components/NavBar.vue';
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