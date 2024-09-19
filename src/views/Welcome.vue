<template>
  <div class="welcome container">
    <div v-if="showLogIn">
      <Login @enterChatRoom="enterChatRoom"></Login>
      <p>Not a member yet? <span @click="showLogIn = !showLogIn">Create an account?</span></p>
    </div>
    <div v-else>
      <SignUp @enterChatRoom="enterChatRoom"></SignUp>
      <p>Already a member? <span @click="showLogIn = !showLogIn">LogIn</span></p>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import Login from '../components/Login'
import SignUp from '../components/SignUp'
import { useRouter } from 'vue-router';
export default {
  components: {
    Login, SignUp
  },
  setup() {
    let router = useRouter()
    let showLogIn = ref(true)

    let enterChatRoom = () => router.push({ name: 'chatroom' })

    return { showLogIn, enterChatRoom }
  }
}
</script>

<style>
.welcome {
  text-align: center;
  padding: 20px 0;
}

.welcome form {
  max-width: 420px;
  /* background: red; */
  padding: 20px;
  text-align: left;
  margin: 0px auto;
}

.welcome form label {
  display: inline-block;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bolder;
  font-size: 0.6rem;
  color: #aaa;
  margin: 15px 0 5px 0;
}

.welcome form input[type="checkbox"] {
  display: inline-block;
  width: 20px;
  position: relative;
  top: 2.5px;
  margin-right: 5px;
}

.welcome form input {
  display: block;
  border: none;
  padding: 10px 5px;
  width: 100%;
  border-bottom: 1px solid #aaa;
  box-sizing: border-box;
  margin: 10px 0;
  transition: border-bottom 0.5s;
}

.welcome form input:focus {
  outline: none;
  border-bottom: 1px solid #222;
}

.welcome form input::placeholder {
  color: #ddd;
}

.welcome form .align {
  text-align: center;
  margin-top: 25px;
}

.welcome span {
  font-weight: bold;
  text-decoration: underline;
  cursor: pointer;
}
</style>