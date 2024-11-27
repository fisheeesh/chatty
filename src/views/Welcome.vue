<template>
  <div v-if="isLogin">
    <Login />
    <div class="d-flex justify-content-center align-items-center text-center my-3">
      Not a member yet? <span @click="isLogin = !isLogin" class="signUp ms-2 text-secondary">Create an account.</span>
    </div>
    <div class="d-flex justify-content-center align-items-center">
      <div class="line"></div>
      <span class="or mx-3">or</span>
      <div class="line"></div>
    </div>
    <div class="mt-3 d-inline-block d-flex justify-content-center align-items-center">
      <div class="card shadow-sm border-0 google">
        <div class="card-body px-3">
          <img src="../assets//images/google.png" width="30" alt="" class="img-fluid">
          <span class="ms-3">Continue with Google</span>
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <SignUp />
    <div class="d-flex justify-content-center align-items-center text-center my-3">
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

<style>

</style>