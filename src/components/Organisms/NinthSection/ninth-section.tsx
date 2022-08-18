import Image from "next/image"
import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"
import { uploadVideo, viewSection } from "../../../data/api/api"
import { useWindowDimensions } from "../../../hooks/dimension"
import { useCustomToast } from "../../../hooks/toast"
import { transformPx } from "../../../utils/utils"
import FileUpload from "../../Atoms/FileUpload/file-upload"

const NinthSection = () => {
    const { width } = useWindowDimensions()
    const [file, setFile] = useState<File | undefined>()
    const [loading, setLoading] = useState(false)
    const toast = useCustomToast()
    const { ref, inView } = useInView({
        triggerOnce: true
    })


    useEffect(() => {
        if (inView) {
            viewSection("Подготовка экипажа")
        }
    }, [inView])




    const send = () => {
        if (!file) return


        setLoading(true)


        uploadVideo(file)
            .then(() => {
                toast("", "success", "Успешно отправлено")
                setFile(undefined)
            })
            .catch((err) => {
                toast("", "error", err.message)
            })
            .finally(() => {
                setLoading(false)
            })
    }

    const upload = (file: File) => {
        setFile(file)
    }

    return (
        <div ref={ref} id="prepare" className="w-full flex flex-col mt-[12.5rem] px-[14.5rem] relative z-0 ">
            <div className="flex flex-col  mb-[1.875rem] ">
                <h3 className="font-bold text-[3.375rem] text-accent ">
                    Подготовка
                </h3>
                <div className="flex items-center">
                    <span className="text-white text-[3.375rem] leading-none font-bold relative bottom-1 mr-[1.25rem]">экипажа</span>
                    <Image
                        width={transformPx(193, width)}
                        height={transformPx(36, width)}
                        src="/flying.png"

                    />
                </div>
            </div>
            <div className="flex flex-col max-w-[43.75rem] mb-[2.5rem]">
                <p className="mb-[1.25rem] font-bold text-accent text-lg">
                    Каждый из Команды БФТ - супергерой. Мы все ежедневно<br />
                    совершаем подвиги и делаем подчас невозможное. Ведь наши<br />
                    нынешние проекты 25 лет назад назвали бы фантастикой.<br />
                    Иногда, чтобы осознать важность своей работы, необходимо<br />
                    посмотреть на себя со стороны.
                </p>
                <p className="text-lg text-white mb-[2rem]">
                    На этой неделе мы увидим себя глазами наших БФТусиков. Мы отлично знаем, как они учатся, в чем достигают успеха, какие предметы любят.<br />
                    А знают ли наши юные спутники, как проходят рабочие дни<br />
                    родителей? Предлагаем спросить их об этом.
                </p>
                <p className="text-lg text-white ">
                    Скачайте инструкцию, которая поможет задать правильные
                </p>
                <div className="flex items-center mb-[2rem] text-lg text-white">
                    вопросы и выбрать нужный ракурс.
                    <a target={"_blank"} rel="noopener noreferrer" className="inline-block cursor-pointer ml-[2.5rem]" href={"https://25.bftcom.com/video_instruction_bft.pdf"}>
                        <img src="/i-blue.png" alt="info"
                            style={{
                                width: '2rem',
                                height: '2rem',
                            }}
                        />
                    </a>
                </div>

                <p className="text-lg text-white">
                    Присылайте видео, и в пятницу вы увидите, какой шедевр<br />из этого получится.

                </p>
                <i className="text-sm text-white">
                    <br />На портале действует небольшое ограничение: можно за один раз загрузить файл объёмом не более 1,5 ГБ.
                    <br />Поэтому если хочется поделиться несколькими видео, то сначала прикрепляем один файл на сайте и нажимаем кнопку
                    ОТПРАВИТЬ. Затем то же самое проделываем со следующим
                    файлом

                </i>
            </div>
            <FileUpload
                accept="*"
                file={file}
                onSend={send}
                onUpload={upload}
                title="Отправить"
                loading={loading}
                id={"video"}

            />
            <img
                className="absolute right-16 top-0 -z-10 w-[51.688rem] h-[49.813rem]"
                src="/view.png"
            />
        </div>
    )
}




export default NinthSection