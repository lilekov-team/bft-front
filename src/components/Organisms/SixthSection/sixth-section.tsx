import Image from "next/image"
import { Fragment, useEffect, useState } from "react"
import { getWinners, Winner } from "../../../data/api/api"
import { useWindowDimensions } from "../../../hooks/dimension"
import { transformPx } from "../../../utils/utils"
import { AnimatePresence, motion } from 'framer-motion'





const SixthSection = () => {

    const { width } = useWindowDimensions()
    const [overlayText, setOverlayText] = useState<{
        index: number,
        winner: Winner
    } | undefined>()
    const [winners, setWinners] = useState<Winner[]>([])


    useEffect(() => {
        getWinners()
            .then((result) => {
                setWinners(result)
            })
            .catch((err) => {

            })
    }, [])

    return (
        <div className="w-full flex flex-col mt-[12.5rem] px-[7.5rem] relative z-0">
            <div className="flex items-center mb-[1.875rem] z-10">
                <h3 className="font-bold text-[3.375rem] text- mr-[1.25rem]">
                    Итоги <span className="text-accent">конкурса</span>
                </h3>
                <Image
                    width={transformPx(193, width)}
                    height={transformPx(36, width)}
                    src="/flying.png"
                />
            </div>
            <p className=" text-lg mb-[5rem] z-10">
                Багажный модуль нашего межзвездного корабля заполнен потрясающими историями<br />о профессиональных победах. Выбрать лучших было очень сложно, но у нас есть три<br /> победителя. А у всех остальных еще будет возможность заработать БФТ-деньги<br />на следующих этапах нашей космической одиссеи. Оставайтесь на связи!
            </p>
            <div className="flex items-center relative z-0">
                <div className="w-[40.313rem] h-[43.75rem] relative z-0">
                    <img src="/sputnik.png" alt="sputnik"
                        className={`w-full h-full ${overlayText ? 'opacity-30' : ''} duration-300`}
                    />
                    <AnimatePresence>

                        {
                            !overlayText ?
                                <div className="absolute -top-1/3 -left-1/3 w-[170%] h-[170%] "
                                    style={{
                                        background: `linear-gradient(180deg, rgba(63, 18, 77, 0.3) 0%, rgba(18, 7, 60, 0.3) 100%)`,
                                        filter: 'blur(300px)',
                                    }}
                                >
                                </div>
                                :
                                <motion.div
                                    initial={{
                                        opacity: 0,
                                    }}
                                    animate={{
                                        opacity: 1,
                                    }}
                                    exit={{
                                        opacity: 0,
                                    }}

                                    transition={{
                                        duration: 0.3
                                    }}

                                    className="w-full h-full flex justify-center items-center absolute top-0 left-0">
                                    <div className="max-w-[19rem] font-normal text-lg text-center" dangerouslySetInnerHTML={{
                                        __html: overlayText.winner.text
                                    }}>

                                    </div>
                                </motion.div>
                        }
                    </AnimatePresence>

                </div>
                <div className="ml-[5.5rem] flex-1 flex flex-col z-10">
                    {
                        winners.map((winner, index) => {
                            return (
                                <Fragment key={index}>
                                    <div className="h-[2px] w-full bg-accent shadow-pink">

                                    </div>
                                    <div className="min-h-[6.25rem] flex flex-col justify-center w-full">
                                        <span className="text-white text-2xl font-bold">{`${index + 1}. ${winner.name}`}</span>
                                        <div className="w-full flex justify-between items-center">
                                            <span className="text-white text-lg font-normal mt-[0.625rem] ml-[2.25rem]">
                                                {winner.job}
                                            </span>
                                            <span className="cursor-pointer text-pale-blue underline font-bold text-lg" onClick={() => {
                                                if (overlayText?.index === index) {
                                                    setOverlayText(undefined)
                                                } else {
                                                    setOverlayText({
                                                        index,
                                                        winner
                                                    })
                                                }
                                            }}>
                                                {
                                                    overlayText?.index === index ?
                                                        "Скрыть текст"
                                                        : "Читать текст"
                                                }
                                            </span>
                                        </div>
                                    </div>
                                    {
                                        index === 2 &&
                                        <div className="h-[2px] w-full bg-accent shadow-pink">

                                        </div>
                                    }
                                </Fragment>
                            )
                        })
                    }
                </div>
            </div>


        </div>
    )
}



export default SixthSection