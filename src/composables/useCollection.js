import { db } from "@/firebase/config"
import { ref } from "vue"

const useCollection = (collection) => {

    const error = ref(null)

    const addDoc = async (doc) =>{
        try{
            let res = await db.collection(collection).add(doc)
            if(!res) throw new Error ('Something went wrong!. Please try again.')
            console.log('Document Added Successfully', res)
        }
        catch(err){
            error.value = err.message
            console.log(error.value)
        }
    }

    return { error, addDoc }
}

export default useCollection