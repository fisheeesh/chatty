import { auth } from "@/firebase/config"
import { ref } from "vue"

const error = ref(null)

const createAccount = async (username, email, password) => {
    try {
        let response = await auth.createUserWithEmailAndPassword(email, password)
        if (!response) throw new Error("Something went wrong!. Please try again.")
        response.user.updateProfile({
            displayName: username
        })
        console.log('User Created Successfully', response.user)

        return response
    }
    catch (err) {
        console.log('Error: ', err.code)
        switch (err.code) {
            case "auth/email-already-in-use":
                error.value = "Email already in use."
                break;
            case "auth/invalid-email":
                error.value = "Invalid email format."
                break;
            case "auth/weak-password":
                error.value = "Password should be at least 6 characters."
                break;
            case "auth/internal-error":
                error.value = "Something went wrong!. Please try again."
                break;
            default:
                error.value = "Something went wrong!. Please try again."
        }
        return null
    }
}

const useSignUp = () => {
    return { error, createAccount }
}

export default useSignUp