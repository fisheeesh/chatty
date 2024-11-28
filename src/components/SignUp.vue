<template>
  <section class="login mt-5">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 offset-lg-4 d-flex flex-column">
          <div class="image-container text-center mb-4">
            <img src="../assets//images/chatty.png" width="250" alt="" class="img-fluid">
          </div>
          <h2 class="text-center fw-bold text-primary mb-3">Sign<span class="text-secondary">Up</span></h2>
          <form @submit.prevent="handleSignUp">
            <div class="mb-3">
              <label for="name" class="form-label fw-bold">Username <span class="text-danger">*</span></label>
              <input v-model="form.username" autocomplete="off" id="name" type="text" placeholder="chatty"
                :class="{ 'is-invalid': showError('username') }" class="form-control form-control-lg">
              <div class="invalid-feedback">Username is required</div>
            </div>
            <div class="mb-3">
              <label for="email" class="form-label fw-bold">Email <span class="text-danger">*</span></label>
              <input v-model="form.email" autocomplete="off" id="email" type="email" placeholder="name@chatty.com"
                :class="{ 'is-invalid': showError('email') }" class="form-control form-control-lg">
              <div class="invalid-feedback">Email is required</div>
            </div>
            <div class="mb-3 position-relative">
              <label for="password" class="form-label fw-bold">Password <span class="text-danger">*</span></label>
              <input v-model="form.password" autocomplete="off" :type="isShow ? 'text' : 'password'" id="password"
                placeholder="chatty2024" :class="{ 'is-invalid': showError('password') }"
                class="form-control form-control-lg">
              <span :class="{ 'move-signup': showError('password') }" @click="isShow = !isShow"
                class="material-symbols-outlined eye-signup">
                {{ isShow ? 'visibility' : 'visibility_off' }}
              </span>
              <div class="invalid-feedback">Password is required</div>
            </div>
            <div class="text-center">
              <p class="fs-6 text-danger">{{ error }}</p>
              <button class="btn btn-primary rounded-5 px-5 btn-lg">SignUp</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import useSignUp from '@/composables/useSignUp';
import { reactive, ref } from 'vue';

const { error, createAccount } = useSignUp()
let isShow = ref(false)
const form = reactive({
  username: null,
  email: null,
  password: null
})

const touchedFields = ref({})

const showError = (field) => {
  const isTouched = touchedFields.value[field]
  const isEmpty = !form[field]

  return isTouched && isEmpty
}


const handleSignUp = async () => {
  touchedFields.value = {
    username: true,
    email: true,
    password: true
  }

  if (form.username && form.email && form.password) {
    let res = await createAccount(form.username, form.email, form.password)
  }
}

</script>

<style></style>