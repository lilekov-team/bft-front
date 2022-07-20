import { useState, useEffect, ChangeEventHandler } from "react"
import { register, ymAuth } from "../../../data/api/api"
import { useCustomToast } from "../../../hooks/toast"
import Button, { ButtonVariants } from "../../Atoms/Button/button"
import CustomModal from "../../Molecules/Modal/modal"

const RegistrationModal = () => {
    const [open, setOpen] = useState(false)
    const [registered, setRegistered] = useState(true)
    const [name, setName] = useState("")
    const [dep, setDep] = useState("")
    const [email, setEmail] = useState("")
    const [loading, setLoading] = useState(false)
    const toast = useCustomToast()


    useEffect(() => {
  
        setRegistered(localStorage.getItem("belster-registered") === "1" )
    }, [])

    useEffect(() => {
        if (!registered) {
            setOpen(false)
        } else {
            setOpen(false)
        }
    }, [registered])


    const handleNameChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        setName(e.target.value)
    }

    const handleEmailChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        setEmail(e.target.value)
    }

    const handleDepChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        setDep(e.target.value)
    }



    useEffect(() => {
        if (registered) {
            ymAuth()
        }
    }, [registered])


    const submit = () => {
        if (!name || !email || !dep) {
            toast("", "error", "Все поля обязательны") 
            return
        }


        if (loading) return

        setLoading(true)
        register(name, email, dep)
        .then(() => {
            setRegistered(true)
            setLoading(false)
        })
        .catch((err) => {
            toast("", "error", err.message)
        })

    }


    return (
        <CustomModal open={open} onClose={() => { }}>
            <div className="flex flex-col items-center">
                <div className="drop-shadow-accent text-white text-[4rem] uppercase font-bold leading-tight mb-[1.875rem]">
                    Регистрация
                </div>
                <input value={name} onChange={handleNameChange} className={`mb-[1.25rem] h-[5rem] w-[33.25rem] bg-transparent border-accent  border-2 resize-none py-[0.5rem] px-[1.5rem] text-white text-lg placeholder:text-[#ffffff88]`} placeholder="Введите ваше имя и фамилию">

                </input>
                <input value={dep} onChange={handleDepChange} className={`mb-[1.25rem] h-[5rem] w-[33.25rem] bg-transparent border-accent  border-2 resize-none py-[0.5rem] px-[1.5rem] text-white text-lg placeholder:text-[#ffffff88]`} placeholder="Введите ваш отдел или департамент">

                </input>
                <input value={email} type="email" onChange={handleEmailChange} className={`mb-[1.875rem] h-[5rem] w-[33.25rem] bg-transparent border-accent  border-2 resize-none py-[0.5rem] px-[1.5rem] text-white text-lg placeholder:text-[#ffffff88]`} placeholder="Введите вашу рабочую почту">

                </input>
                <Button
                loading={loading}
                variant={ButtonVariants.FILLED}
                onClick={submit}
                >
                    Отправить
                </Button>
            </div>
        </CustomModal>
    )
}



export default RegistrationModal