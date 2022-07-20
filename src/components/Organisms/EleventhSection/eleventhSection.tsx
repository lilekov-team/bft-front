import Image from "next/image"
import { useWindowDimensions } from "../../../hooks/dimension"
import { transformPx } from "../../../utils/utils"
import { motion } from 'framer-motion'
import { useInView } from "react-intersection-observer"
import { useEffect } from "react"
import { viewSection } from "../../../data/api/api"


const EleventhSection = () => {
    const { width } = useWindowDimensions()
    const {ref, inView} = useInView({
        triggerOnce: true
    })


    useEffect(() => {
        if (inView) {
            viewSection("Строим маршрут")
        }
    }, [inView])

    return (
        <div ref={ref} id="route" className="w-full flex flex-col mt-[12.5rem]  relative z-0">
            <div className="flex items-center mb-[1.875rem] z-20 px-[7.5rem]">
                <h3 className="font-bold text-[3.375rem] text- mr-[1.25rem]">
                    Строим <span className="text-accent">маршрут</span>
                </h3>
                <Image
                    width={transformPx(193, width)}
                    height={transformPx(36, width)}
                    src="/flying.png"
                />
            </div>
            <div className="flex flex-col z-20 px-[7.5rem]">
                <p className="text-accent text-2xl font-bold mb-[1rem]">
                    Четыре планеты, которые неразрывно связаны друг<br />с другом - это наши Сверхновые ценности.

                </p>
                <p className="text-white text-lg">
                    Они заряжают и вдохновляют Команду БФТ на будущие подвиги.<br />А юбилей Компании - прекрасный повод вспомнить<br />о ценностях. Ведь знание Сверхновых пригодится каждому<br />в дальнейших испытаниях.

                </p>
            </div>
            <div className="relative bottom-[13rem] w-full z-10">
                <Image
                    width={width}
                    height={0.68*width}
                    alt="planets"
                    src="/planets.png"
                    priority
                />
                <motion.div
                    layout
                    layoutDependency={width}
                    whileHover={{
                        height: transformPx(360, width)
                    }}
                    transition={{
                        easings: 'easeIn'
                    }}
                    style={{
                        width: transformPx(300, width),
                        height: transformPx(55, width),
                    }}

                    className="bg-blue cursor-pointer absolute top-[51.800rem] left-[15.5rem]  shadow-blue-large  rounded-3xl rounded-tl-none p-[1rem] overflow-hidden">
                    <h6 className="text-[#0B033B] font-bold text-2xl leading-none mb-[1.5rem]">
                        Профессионализм
                    </h6>
                    <ul className="list-disc ml-[1.5rem] text-[#0B033B] text-xl">
                        <li className="mb-[1rem] leading-tight">
                            Стремимся быть лучшими в профессии
                        </li>
                        <li className="mb-[1rem] leading-tight">
                            Предъявляем высокие требования к качеству работы и ценим это в окружающих
                        </li>
                        <li className="leading-tight">
                            Развиваем экспертизу и делимся накопленными знаниями
                        </li>
                    </ul>
                </motion.div>

                <motion.div
                    layout
                    layoutDependency={width}
                    whileHover={{
                        height: transformPx(250, width),
                        width: transformPx(320, width),
                    }}
                    style={{
                        width: transformPx(160, width),
                        height: transformPx(55, width),
                    }}
                    transition={{
                        easings: 'easeIn'
                    }}

                    className="bg-blue cursor-pointer absolute top-[48.58rem] left-[37.75rem]  shadow-blue-large   rounded-3xl rounded-tl-none p-[1rem] overflow-hidden">
                    <h6 className="text-[#0B033B] font-bold text-2xl leading-none mb-[1.5rem]">
                        Команда
                    </h6>
                    <ul className="list-disc ml-[1.5rem] text-[#0B033B] text-xl w-[16.5rem]">


                        <li className="mb-[1rem] leading-tight">
                            Вместе добиваемся целей
                        </li>
                        <li className="mb-[1rem] leading-tight">
                            Уважаем взгляды других
                        </li>
                        <li className="leading-tight">
                            Помогаем и доверяем друг другу
                        </li>
                    </ul>
                </motion.div>
                <motion.div
                    layout
                    layoutDependency={width}
                    whileHover={{
                        height: transformPx(250, width),
                        width: transformPx(310, width),
                    }}
                    style={{
                        width: transformPx(180, width),
                        height: transformPx(55, width),
                    }}
                    transition={{
                        easings: 'easeIn'
                    }}

                    className="bg-blue cursor-pointer absolute top-[41.1rem] left-[58.813rem]  shadow-blue-large   rounded-3xl rounded-tl-none p-[1rem] overflow-hidden">
                    <h6 className="text-[#0B033B] font-bold text-2xl leading-none mb-[1.5rem]">
                        Результат
                    </h6>
                    <ul className="list-disc ml-[1.5rem] text-[#0B033B] text-xl w-[16.5rem]">

                        <li className="mb-[1rem] leading-tight">
                            Нацелены на высокий результат и эффективность
                        </li>
                        <li className="mb-[1rem] leading-tight">
                            Делаем лучшее, на что мы способны
                        </li>
                    </ul>
                </motion.div>
                <motion.div
                    layout
                    whileHover={{
                        height: transformPx(200, width),
                        width: transformPx(325, width),
                        left: transformPx(1050, width),

                    }}
                    layoutDependency={width}
                    style={{
                        width: transformPx(160, width),
                        height: transformPx(55, width),
                        left: transformPx(1215, width),

                    }}
                    transition={{
                        easings: 'easeIn'
                    }}

                    className="bg-blue cursor-pointer absolute top-[28.55rem]   shadow-blue-large   rounded-3xl rounded-tl-none hover:rounded-tl-3xl p-[1rem] overflow-hidden">
                    <h6 className="text-[#0B033B] font-bold text-2xl leading-none mb-[1.5rem]">
                        Энергия
                    </h6>
                    <ul className="list-disc ml-[1.5rem] text-[#0B033B] text-xl w-[16.5rem]">

                        <li className="mb-[1rem] leading-tight">
                            Работа – в удовольствие
                        </li>
                        <li className="mb-[1rem] leading-tight">
                            Жажда открытий и новых горизонтов
                        </li>
                    </ul>
                </motion.div>
            </div>
        </div>
    )
}



export default EleventhSection