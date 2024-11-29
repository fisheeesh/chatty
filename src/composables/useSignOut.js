import { auth } from "@/firebase/config"
import { ref } from "vue"

const error = ref(null)

const logOut = async () => {
    try{
        let res = await auth.signOut()
        console.log('User Logged Out Successfully', res)
    }
    catch(err){
        error.value = err.message
    }
}

const useSignOUt = () => {
    return { error, logOut }
}

export default useSignOUt