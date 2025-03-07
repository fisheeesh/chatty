import { auth } from "@/firebase/config"
import { ref } from "vue"

const user = ref(auth.currentUser)

auth.onAuthStateChanged(_user => {
    user.value = _user
    console.log('Current User: ', _user)
})

const getUser = () => {
    return { user }
}

export default getUser