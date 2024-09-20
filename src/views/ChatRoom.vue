<template>
  <div class="container">
    <NavBar></NavBar>
    <NewChatForm></NewChatForm>
  </div>
</template>

<script>
import NewChatForm from '../components/NewChatForm'
import { watch } from 'vue';
import NavBar from '../components/NavBar'
import { useRouter } from 'vue-router';
import getUser from '@/composables/getUser';
export default {
  components: {
    NewChatForm, NavBar },
  setup() {
    let router = useRouter()
    let { user } = getUser()
    watch(user, () => {
      if (!user.value) router.push('/')
    })

    return {}
  }
}
</script>

<style></style>