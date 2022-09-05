import Image from "next/image"
import { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { sendAnalyticsData, viewSection } from "../../../data/api/api"
import { useWindowDimensions } from "../../../hooks/dimension"
import { transformPx } from "../../../utils/utils"

const FifteenthSection = () => {
    const { width } = useWindowDimensions()
    const { ref, inView } = useInView({
        triggerOnce: true
    })


    useEffect(() => {
        if (inView) {
            viewSection("Пусконаладочные работы")
        }
    }, [inView])


    return (
        <div ref={ref} id="works" className="w-full flex flex-col mt-[12.5rem] px-[14.5rem] relative z-0">
            <div className="flex items-center mb-[1.875rem] ">
                <h3 className="font-bold text-[3.375rem] text- mr-[1.25rem]">
                    Пусконаладочные <span className="text-accent">работы</span>
                </h3>
                <Image
                    width={transformPx(193, width)}
                    height={transformPx(36, width)}
                    src="/flying.png"
                />
            </div>
            <div className="w-ful flex justify-between mb-[2.25rem]">
                <div className="flex flex-col">
                    <p className="mb-[1rem] text-white text-lg">
                        Точный расчет в космических путешествиях жизненно необходим. Как и в IT-<br />проектах. Напомним формулу успеха БФТ. Чтобы выйти на новый уровень энергии,<br /> нужна масса опыта команды, скорость движения к цели и профессионализм,<br />
                        возведённый в квадрат.
                    </p>
                    <p className="mb-[1rem] text-white text-lg">
                        Желающих проверить свои интеллектуальные способности<br />приглашаем участвовать в онлайн-игре “Неизвестная переменная”.
                    </p>
                    <div className="mb-[1rem] text-white text-lg flex items-center">
                        <p>
                            Собирайте команду и читайте инструкцию.
                        </p>
                        <a target={"_blank"} rel="noopener noreferrer" className="cursor-pointer ml-[2.5rem]" href={"https://drive.google.com/file/d/18WpanMVnH0Yv4WDW6u8tJCEZ1bR-APOo/view"}>
                            <img src="/i-blue.png" alt="info"
                                style={{
                                    width: '2rem',
                                    height: '2rem',
                                }}
                            />
                        </a>
                    </div>
                    <p className="text-white text-lg">
                        А теперь пора присоединяться к игре.<br />Сделать это можно, нажав кнопку или через qr-код.
                    </p>
                </div>
                <img src="https://25.bftcom.com/Insruction.gif" alt="qr" className="w-[16.563rem] h-[16.563rem]" />
            </div>
        </div>
    )
}


export default FifteenthSection