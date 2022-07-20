import { ChangeEventHandler, useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"
import { uploadPlot, viewSection } from "../../../data/api/api"
import { useWindowDimensions } from "../../../hooks/dimension"
import { useCustomToast } from "../../../hooks/toast"
import FileUpload from "../../Atoms/FileUpload/file-upload"
import Video from "../../Atoms/Video/video"

const ThirteenthSection = () => {


    const { width } = useWindowDimensions()
    const [disable, setDisable] = useState(false)
    const [text, setText] = useState("")
    const [file, setFile] = useState<File | undefined>()
    const toast = useCustomToast()
    const [loading, setLoading] = useState(false)
    const {ref, inView} = useInView({
        triggerOnce: true
    })


    useEffect(() => {
        if (inView) {
            viewSection("Камера, мотор")
        }
    }, [inView])


    const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {

        setText(e.target.value)

    }


    const upload = (file: File) => {
        setFile(file)
    }

    const send = () => {
        if (loading) return
        if (text !== "" || file) {
            setLoading(true)
            uploadPlot(file, text)
            .then(() => {
                toast("", "success", "Успешно отправлено")
                setText("")
                setFile(undefined)
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
        <div ref={ref} className="w-full flex flex-col mt-[12.5rem] px-[14.5rem] relative z-0">
            <div className="flex items-center mb-[1.875rem] ">
                <h3 className="font-bold text-[3.375rem] text- mr-[1.25rem]">
                    Камера, мотор, <span className="text-accent">&quot;Поехали!&quot;</span>
                </h3>
            </div>
            <p className="mb-[1rem] text-white text-lg">
                Про космос снято немало кинолент. Но ни одна из них не посвящена Сверхновым ценностям<br /> БФТ. Настало время это исправить. Мы запускаем конкурс на лучший сценарий. Что нужно<br /> сделать для участия в нём?
            </p>
            <p className="mb-[5.625rem] text-white text-lg">
                Под текстом размещён эпизод из кино. В нём озвучено только начало. Необходимо написать<br /> продолжение.
            </p>
            <Video
                color="pink"
                poster="/placeholder2.png"
                src="https://static.videezy.com/system/resources/previews/000/013/658/original/Wind_Turbine_03.mp4"
            />
            <div className="mt-[5.625rem] mb-[2rem]">
                <p className="mb-[1rem] text-white text-lg">
                    <strong>Тема</strong>: Сверхновые ценности БФТ.

                </p>
                <p className="mb-[1rem] text-white text-lg">
                    <strong>Главный критерий успеха</strong>: диалоги в сценарии должны максимально ярко раскрывать<br /> главную тему.

                </p>
                <p className=" text-white text-lg">
                    <strong>Механика</strong>:  впишите вариант продолжения кино в форму ниже, либо загрузите свою версию<br /> сценария отдельным файлом. Лучшая работа будет озвучена голосами профессиональных<br /> актёров. И, конечно, по всем правилам киноиндустрии, лучший сценарист получит<br /> вознаграждение - БФТ-деньги.
                </p>
            </div>
            <div className="flex items-center">
                <input value={text} onChange={disable ? undefined : handleChange} className={`mr-[2.5rem] h-[3.125remrem] w-[28.125rem] bg-transparent ${disable ? 'border-disabled' : 'border-accent'}  border-2 resize-none py-[0.5rem] px-[1.5rem] text-white text-lg placeholder:text-[#ffffff88]`} placeholder="Введите текст">

                </input>
                <FileUpload
                accept="*"
                file={file}
                id="plot"
                onSend={send}
                onUpload={upload}
                title="Отправить"
                disable={disable}
                loading={loading}
                />
            </div>
        </div>
    )



}




export default ThirteenthSection