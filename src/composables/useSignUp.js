import { auth } from "@/firebase/config";
import { ref } from "vue";

let error = ref(null);

let createAccount = async (email, password, displayName) => {
    try {
        let response = await auth.createUserWithEmailAndPassword(email, password);
        if (!response) throw new Error("Could not create an account");

        response.user.updateProfile({
            displayName,
        });
        return response;
    } catch (err) {
        error.value = err.message;
    }
};

let useSignUp = () => {
    return { error, createAccount };
};

export default useSignUp;
