<template>
  <div v-if="isLogin">
    <Login />
    <div class="d-flex justify-content-center align-items-center text-center mt-3">
      Not a member yet? <span @click="isLogin = !isLogin" class="signUp ms-2 text-secondary">Create an account.</span>
    </div>
  </div>
  <div v-else>
    <SignUp />
    <div class="d-flex justify-content-center align-items-center text-center mt-3">
      Already have an account? <span @click="isLogin = !isLogin" class="signUp ms-2 text-secondary">LogIn.</span>
    </div>
  </div>
</template>

<script setup>
import Login from '@/components/Login.vue';
import SignUp from '@/components/SignUp.vue';
import { ref } from 'vue';

let isLogin = ref(true);
</script>

<style></style>