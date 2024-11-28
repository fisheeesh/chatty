<template>
  <section class="login mt-5">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 offset-lg-4 d-flex flex-column">
          <div class="image-container mb-4 text-center">
            <img src="../assets/images/chatty.png" width="250" alt="" class="img-fluid">
          </div>
          <h2 class="fw-bold text-primary text-center mb-3">Log<span class="text-secondary">In</span></h2>
          <form @submit.prevent="handleLogIn" novalidate>
            <div class="mb-3">
              <label for="email" class="form-label fw-bold">Email <span class="text-danger">*</span></label>
              <input v-model="form.email" autocomplete="off" id="email" type="email" placeholder="name@chatty.com"
                :class="{ 'is-invalid': showError('email') }" class="form-control form-control-lg">
              <div class="invalid-feedback">Email is required</div>
            </div>
            <div class="mb-3 position-relative">
              <label for="password" class="form-label fw-bold">Password <span class="text-danger">*</span></label>
              <input v-model="form.password" autocomplete="off" :type="isShow ? 'text' : 'password'" id="password"
                :class="{ 'is-invalid': showError('password') }" placeholder="chatty2024"
                class="form-control form-control-lg">
              <span :class="{ move: showError('password') }" @click="isShow = !isShow"
                class="material-symbols-outlined eye">
                {{ isShow ? 'visibility' : 'visibility_off' }}
              </span>
              <div class="invalid-feedback">Password is required</div>
              <div class="d-flex justify-content-end mt-2">
                <span class="text-decoration-underline forgot">Forgot Password?</span>
              </div>
            </div>
            <div class="text-center">
              <p v-if="isError" class="text-danger text-center fw-bold fs-6 mt-3">{{ error }}</p>
              <button type="submit" class="btn btn-primary rounded-5 px-5 btn-lg">
                <span v-if="isLoading" class="spinner-border text-white spinner-border-sm me-3" role="status"
                  aria-hidden="true"></span>
                LogIn
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import useLogIn from '@/composables/useLogIn';
import { reactive, ref } from 'vue';

const { error, logIn } = useLogIn()

let isShow = ref(false)
const isError = ref(false)
const isLoading = ref(false)

const form = reactive({
  email: null,
  password: null
})
const touchedFields = ref({})

/**
 * ? I want to show error if the input field are empty.
 * ? If I only check isEmpty (which is the input fields are empty or not), 
 * ? it will be always true cus at the inital stage inputs are null.
 * ? To overcome this, I only want to show error after user intreacted with the input fields.
 * ? Even user intreacted with the input fields and still null, only in that case error should be shown.
 * @param field 
 */
const showError = (field) => {
  const isTouched = touchedFields.value[field]
  const isEmpty = !form[field]

  return isTouched && isEmpty
}

const handleLogIn = async () => {
  /**
   * ? As soon as user clicked the login button, set as the input fields are touched 
   * ? even if they are being touched or not (for UX and to make the showError function work)
   */
  touchedFields.value = {
    email: true,
    password: true
  }

  if (form.email && form.password) {
    isLoading.value = true
    let res = await logIn(form.email, form.password)
    if (res) {
      isError.value = false
      isLoading.value = false
    }
    else {
      isError.value = true
      isLoading.value = false
    }
  }
}

</script>

<style></style>