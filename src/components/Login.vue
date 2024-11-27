<template>
  <section class="login mt-5">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 offset-lg-4 d-flex flex-column">
          <div class="image-container mb-4 text-center">
            <img src="../assets/images/logo.png" width="250" alt="" class="img-fluid">
          </div>
          <h2 class="fw-bold text-primary text-center mb-5">LogIn</h2>
          <form @submit.prevent="handleSubmit">
            <div class="mb-3">
              <label for="email" class="form-label fw-bold">Email <span class="text-danger">*</span></label>
              <input autocomplete="off" id="email" type="email" placeholder="name@chatty.com"
                class="form-control form-control-lg">
            </div>
            <div class="mb-3 position-relative">
              <label for="password" class="form-label fw-bold">Password <span class="text-danger">*</span></label>
              <input autocomplete="off" :type="isShow ? 'text' : 'password'" id="password" placeholder="chatty2024"
                class="form-control form-control-lg">
              <span @click="isShow = !isShow" class="material-symbols-outlined eye">
                {{ isShow ? 'visibility' : 'visibility_off' }}
              </span>
              <div class="d-flex justify-content-end mt-2">
                <span class="text-decoration-underline forgot">Forgot Password?</span>
              </div>
            </div>
            <div class="text-center">
              <button class="btn btn-primary rounded-5 px-5 btn-lg">LogIn</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';


let isShow = ref(false)
</script>

<style></style>