import { auth } from "@/firebase/config"
import { ref } from "vue"

let error = ref(null)

let logOut = async () => {
    try {
        await auth.signOut()
        console.log('logged out')
    }
    catch (err) {
        error.value = err.message
    }
}
let useSignOut = () => {
    return { error, logOut }
}

export default useSignOut