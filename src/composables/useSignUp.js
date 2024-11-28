import { auth } from "@/firebase/config"
import { ref } from "vue"

const error = ref(null)

const createAccount = async (username, email, password) => {
    try {
        const res = await auth.createUserWithEmailAndPassword(email, password)
        if (!res) throw new Error('Something went wrong!. Please try again.')
        res.user.updateProfile({
            displayName: username
        })
        console.log('User Created Successfully!', res.user)
        return res
    }
    catch (err) {
        error.value = err.message
    }
}

const useSignUp = () => {
    return { error, createAccount }
}

export default useSignUp