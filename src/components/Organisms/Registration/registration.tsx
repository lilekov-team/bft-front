import { toast } from "@chakra-ui/react"
import { useState, useEffect, ChangeEventHandler } from "react"
import { auth, getJwt, getUser, register, ymAuth } from "../../../data/api/api"
import { useCustomToast } from "../../../hooks/toast"


const RegistrationModal = () => {

    const [registered, setRegistered] = useState(false)
    const toast = useCustomToast()

    useEffect(() => {

        const user = getUser()
        const jwt = getJwt()


        if (user && jwt) {
            auth(jwt)
            .catch((err) => {
                console.log(err)
            })
            return
        }


        let query = window.location.search


        if (query.includes("jwt")) {
            query = query.replace("?", "")
            const parts = query.split("=")
            if (parts.length > 1) {
                const jwt = parts[1]
                
                auth(jwt)
                .then(() => {
                    localStorage.setItem("belster-jwt", jwt)
                })
                .catch((err ) => {
                    toast("", "error", err.message)
                })
            }
        }


    }, [])



    useEffect(() => {
        if (registered) {
            ymAuth()
        }
    }, [registered])




    return (
        <>
        </>
    )
}



export default RegistrationModal