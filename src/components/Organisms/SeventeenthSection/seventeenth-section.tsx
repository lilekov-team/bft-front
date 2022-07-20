import Image from "next/image"
import { useEffect, useState } from "react"
import { FaCheck } from "react-icons/fa"
import { useInView } from "react-intersection-observer"
import { sendPodcastVote, viewSection } from "../../../data/api/api"
import { useWindowDimensions } from "../../../hooks/dimension"
import { useCustomToast } from "../../../hooks/toast"
import { transformPx } from "../../../utils/utils"
import Button, { ButtonVariants } from "../../Atoms/Button/button"




const options = [
    "Первый космодром",
    "Солнечные батареи",
    "25 слов",
    "Звуки вселенной",
    "Источник энергии",
    "Ценности окрыляют",
    "Посыл во вселенную",
    "Земля в иллюминаторе",
]


const SeventeenthSection = () => {
    const { width } = useWindowDimensions()
    const [selected, setSelected] = useState<string | undefined>()
    const [loading, setLoading] = useState(false)
    const toast = useCustomToast()
    const [disable, setDisable] = useState(false)
    const {ref, inView} = useInView({
        triggerOnce: true
    })


    useEffect(() => {
        if (inView) {
            viewSection("Выход за пределы орбиты")
        }
    }, [inView])

    const handleSelect = (option: string) => {
        if (option === selected) {
            setSelected(undefined)
        } else {
            setSelected(option)
        }
    }


    const send = () => {
        if (loading || !selected) {
            return
        }

        setLoading(true)

        sendPodcastVote(selected)
        .then(() => {
            toast('', 'success', 'Успешно отправлено')
            setSelected(undefined)
        })
        .catch((err) => {
            toast('', 'error', err.message)
        })
        .finally(() => {
            setLoading(false)
        })
    }

    return (

        <div ref={ref} id="exit" className="w-full flex flex-col mt-[32.5rem] px-[7.5rem] relative z-0">
            <div className="flex items-center mb-[1.875rem] ">
                <h3 className="font-bold text-[3.375rem] text- mr-[1.25rem]">
                    Выход <span className="text-accent">за пределы</span>{" "}орбиты
                </h3>
                <Image
                    width={transformPx(193, width)}
                    height={transformPx(36, width)}
                    src="/flying.png"
                />
            </div>
            <p className="text-white text-lg mb-[6.25rem]">

                Финальная трансляция совсем скоро. А пока вы можете прослушать последний<br /> подкаст и окончательно заполнить свои баки топливом опыта. 8 недель наши<br /> коллеги и руководители делились полезной информацией, которая вдохновляла,<br /> развивала и заряжала энергией. Предлагаем каждому слушателю проголосовать и<br /> выбрать лучший подкаст. Его участники получат БФТ-деньги!
            </p>
            <div className="flex flex-col items-center">
                <div className="flex mb-[3rem]">
                    <div className="flex flex-col w-[22.75rem] mr-[2.75rem]">
                        {
                            options.slice(0, 4).map((option) => {
                                return (
                                    <div key={option} className="flex items-center mb-[1.875rem] cursor-pointer" onClick={() => {
                                        handleSelect(option)
                                    }}>
                                        <div className="cursot-pointer flex justify-center items-center border-accent border-2 w-[2.625rem] h-[2.625rem] " >
                                            {
                                                option === selected &&
                                                <FaCheck
                                                    style={{
                                                        width: transformPx(20, width),
                                                        height: transformPx(20, width),
                                                        fill: "var(--accent)"
                                                    }}
                                                />
                                            }
                                        </div>
                                        <span className={`ml-[1.25rem] ${option === selected ? 'text-accent' : 'text-white'} text-lg`}>
                                            {option}
                                        </span>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="flex flex-col ">
                        {
                            options.slice(4).map((option) => {
                                return (
                                    <div key={option} className="flex items-center mb-[1.875rem] cursor-pointer" onClick={() => {
                                        setSelected(option)
                                    }}>
                                        <div className="cursor-pointer flex justify-center items-center border-accent border-2 w-[2.625rem] h-[2.625rem] " >
                                            {
                                                option === selected &&
                                                <FaCheck
                                                    style={{
                                                        width: transformPx(20, width),
                                                        height: transformPx(20, width),
                                                        fill: "var(--accent)"
                                                    }}
                                                />
                                            }
                                        </div>
                                        <span className={`ml-[1.25rem] ${option === selected ? 'text-accent' : 'text-white'} text-lg`}>
                                            {option}
                                        </span>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <Button
                    onClick={send}
                    loading={loading}
                    disabled={disable}
                    variant={ButtonVariants.FILLED}
                    width={"w-[21.875rem]"}
                >
                    Подтвердить
                </Button>
            </div>
        </div>
    )
}




export default SeventeenthSection