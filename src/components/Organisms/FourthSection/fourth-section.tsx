import { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { viewSection } from "../../../data/api/api"
import Video from "../../Atoms/Video/video"

const FourthSection = () => {
    const {ref, inView} = useInView({
        triggerOnce: true
    })


    useEffect(() => {
        if (inView) {
            viewSection("Проверка связи")
        }
    }, [inView])



    return (
        <div id="connection" ref={ref} className="w-full flex flex-col mt-[12.5rem] px-[14.5rem]">
            <div className="flex items-center mb-[1.875rem] ">
                <h3 className="font-bold text-[3.375rem] text- mr-[1.25rem]">
                    Проверка <span className="text-accent">связи</span>
                </h3>

            </div>
            <p className=" text-lg mb-[6.25rem]">
                Отправляться в космическую экспедицию без подробного инструктажа - опасно. Отсутствие<br /> нужной информации может стать причиной ошибок. Но это нам не грозит. Ведь у нас есть<br /> инструктаж одного из капитанов Команды БФТ.
            </p>

            <Video
            src="https://7gpr1r2xrs.a.trbcdn.net/cdn/yanokive81/bft/proverka%20svyazy.mp4"
            color="pink"
            poster="/placeholder2.png"
            />

        </div>
    )
}



export default FourthSection