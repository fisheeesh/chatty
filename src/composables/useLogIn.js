import { auth } from "@/firebase/config"
import { ref } from "vue"

let error = ref(null)

let signIn = async (email, password) => {
    try {
        let res = await auth.signInWithEmailAndPassword(email, password)
        if (!res) throw new Error('Could not log in account.')

        return res
    }
    catch (err) {
        error.value = err.message
        console.log(error.value)
    }
}

let useLogIn = () => {
    return { error, signIn }
}

export default useLogIn