import { ChangeEventHandler, useEffect, useState } from "react"
import { getUser, sendWords } from "../../../data/api/api"
import { useCustomToast } from "../../../hooks/toast"
import Button, { ButtonVariants } from "../../Atoms/Button/button"

const prefixes = [
    "а", "о", "з", "за", "на", "над", "надо","о", "от", "ото", "до", "по", "под", "подо", "про", "обо", "об", "во", "со", "вокруг", "около", "из", "близ", "через", "чрез", "без", "из-за", "из-под", "сквозь", "с", "в","во", "у", "перед", "пред", "вдоль", "вблизи", "кругом"
]


const WordsForm = () => {
    const [disable, setDisable] = useState(false)
    const [text, setText] = useState("")
    const [count, setCount] = useState(0)
    const toast = useCustomToast()
    const [loading, setLoading] = useState(false)
    const [user, setUser] = useState<any>()


    useEffect(() => {
        setUser(getUser())
    }, [])


   

    const handleChange: ChangeEventHandler<HTMLTextAreaElement> = (e) => {

        const words = e.target.value.split(" ").filter((word) => !prefixes.includes(word) && word != "")

        if (words.length < 26) {
            setText(e.target.value)
            setCount(words.length)
        }

    }

    const send = () => {
        if (text && count === 25) {
            setLoading(true)
            sendWords(text)
            .then(() => {
                toast("", "success", "Успешно отправлено")
                setText("")
                setCount(0)
            })
            .catch((err) => {
                toast("", "error", err.message)
            })
            .finally(() => {
                setLoading(false)
            })
        }
    }



    return (
        <div className="flex flex-col w-[52.5rem]">

            <textarea value={text} onChange={disable ? undefined : handleChange} className={`h-[5rem] bg-transparent w-full ${disable ? 'border-disabled' : 'border-accent'}  border-2 resize-none py-4 px-[4rem] text-white text-lg placeholder:text-[#ffffff88]`} placeholder="Введите 25 слов (предлоги не в счёт)">

            </textarea>
            <div className="mt-[2rem] flex justify-between">
                <span className="text-2xl text-accent font-bold">
                    Введено {count} слов / Осталось {25 - count}
                </span>
                <Button
                    onClick={send}
                    variant={ButtonVariants.FILLED}
                    loading={loading}
                    disabled={count < 25 || (user && user.collection && user.collection.length > 0)}
                >
                    Отправить
                </Button>
            </div>
        </div>
    )
}




export default WordsForm