<template>
  <section class="login mt-5">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 offset-lg-4 d-flex flex-column">
          <div class="image-container text-center mb-4">
            <img src="../assets//images/logo.png" width="250" alt="" class="img-fluid">
          </div>
          <h2 class="text-center fw-bold text-primary mb-5">SignUp</h2>
          <form @submit.prevent="handleSubmit">
            <div class="mb-3">
              <label for="name" class="form-label fw-bold">Username <span class="text-danger">*</span></label>
              <input autocomplete="off" id="name" type="text" placeholder="chatty" class="form-control form-control-lg">
            </div>
            <div class="mb-3">
              <label for="email" class="form-label fw-bold">Email <span class="text-danger">*</span></label>
              <input autocomplete="off" id="email" type="email" placeholder="name@chatty.com"
                class="form-control form-control-lg">
            </div>
            <div class="mb-3 position-relative">
              <label for="password" class="form-label fw-bold">Password <span class="text-danger">*</span></label>
              <input autocomplete="off" :type="isShow ? 'text' : 'password'" id="password" placeholder="chatty2024"
                class="form-control form-control-lg">
              <span @click="isShow = !isShow" class="material-symbols-outlined eye-signup">
                {{ isShow ? 'visibility' : 'visibility_off' }}
              </span>
            </div>
            <div class="mb-4 position-relative">
              <label for="confirm" class="form-label fw-bold">Confirm Password <span
                  class="text-danger">*</span></label>
              <input autocomplete="off" id="confirm" :type="isOpen ? 'text' : 'password'" placeholder="chatty2024"
                class="form-control form-control-lg">
              <span @click="isOpen = !isOpen" class="material-symbols-outlined eye-signup">
                {{ isOpen ? 'visibility' : 'visibility_off' }}
              </span>
            </div>
            <div class="text-center">
              <button class="btn btn-primary rounded-5 px-5 btn-lg">SignUp</button>
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
let isOpen = ref(false)
</script>

<style></style>