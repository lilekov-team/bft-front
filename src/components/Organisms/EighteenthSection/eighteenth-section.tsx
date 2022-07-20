import { ChangeEventHandler, useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"
import { sendWord, viewSection } from "../../../data/api/api"
import { useWindowDimensions } from "../../../hooks/dimension"
import { useCustomToast } from "../../../hooks/toast"
import Button, { ButtonVariants } from "../../Atoms/Button/button"

const EighteenthSection = () => {
    const {width} = useWindowDimensions()
    const [text, setText] = useState("")
    const [disable, setDisable] = useState(false)
    const [loading, setLoading] = useState(false)
    const toast = useCustomToast()
    const {ref, inView} = useInView({
        triggerOnce: true
    })


    useEffect(() => {
        if (inView) {
            viewSection("Подкасты квиз")
        }
    }, [inView])

    const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        let v = e.target.value

        if (v.includes(" ")) {
            v = v.split(" ")[0]
        }

        setText(v)
    }

    const send = () => {
        if (loading || !text) {
            return
        }

        setLoading(true)

        sendWord(text)
        .then(() => {
            toast('', 'success', 'Успешно отправлено')
            setText("")
        })
        .catch((err) => {
            toast('', 'error', err.message)
        })
        .finally(() => {
            setLoading(false)
        })
    }


    return (
        <div ref={ref} className="w-full px-[14.5rem] flex flex-col mt-[12.5rem]">
            <p className="text-accent text-2xl font-bold mb-[1rem]">
                А теперь выясним, кто внимательнее всех слушал подкасты.
            </p>
            <p className="text-lg text-white leading-loose">

                Ответьте на вопрос:<br />
                “Какое слово прозвучало 25 раз во всех подкастах?”
            </p>
            <div className="w-[53.375rem] flex justify-end mt-[3.75rem]">
                <input value={text} onChange={disable ? undefined : handleChange} className={`mr-[2.5rem] h-[3.125rem] w-[25rem] bg-transparent ${disable ? 'border-disabled' : 'border-accent'}  border-2 resize-none py-[0.5rem] px-[1.5rem] text-white text-lg placeholder:text-[#ffffff88]`} placeholder="Введите ответ">

                </input>
                <Button
                onClick={send}
                variant={ButtonVariants.FILLED}
                loading={loading}
                disabled={disable}
                >
                    Отправить
                </Button>
            </div>
        </div>

    )
}



export default EighteenthSection