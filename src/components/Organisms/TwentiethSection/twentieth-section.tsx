import Image from "next/image"
import { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { viewSection } from "../../../data/api/api"
import { useWindowDimensions } from "../../../hooks/dimension"
import { transformPx } from "../../../utils/utils"
import Button from "../../Atoms/Button/button"

const TwentiethSection = () => {

    const {width} = useWindowDimensions()
    const {ref, inView} = useInView({
        triggerOnce: true
    })


    useEffect(() => {
        if (inView) {
            viewSection("Аукцион невесомость")
        }
    }, [inView])


    return (
        <div ref={ref} id="auction" className="w-full flex flex-col mt-[12.5rem] px-[14.5rem] relative z-0">
            <div className="flex items-center mb-[1.875rem] ">
                <h3 className="font-bold text-[3.375rem] text- mr-[1.25rem]">
                    Аукцион <span className="text-accent">невесомость</span>
                </h3>
            </div>
            <p className="text-accent text-2xl font-bold">
                Космос - это безграничные возможности.

            </p>
            <p className="mb-2 text-white text-lg">
                Пришло время их использовать. Пора  тратить деньги.
            </p>
            <p className="mb-2 text-white text-lg">
                Но не простые, а БФТ-деньги. Запускаем Аукцион!
            </p>
            <p className="text-white text-lg mb-[3.125rem]">

                Однако прежде, чем всё начнётся, хотим рассказать об одном<br /> новшестве. Благодаря ему невероятный накал страстей<br /> Аукциона испытают не только  участники, но и зрители. Ведь<br /> сейчас они могут отгадывать лоты.<br />Кто первым отгадает 3 лота, получит приз.

            </p>
            <a target={"_blank"} className={`w-[13.75rem] duration-200 shadow-button px-[2.625rem] py-[0.875rem] flex justify-center items-center relative  font-normal text-lg leading-[1.3175rem] border-[1px] bg-accent  hover:bg-accent-dark text-white border-transparent cursor-pointer`}>

                Аукцион

            </a>
            <div className="absolute top-[-6rem] right-[12.5rem]">
                <Image
                src="/gavel.png"
                width={transformPx( 593, width)}
                height={transformPx( 526, width)}
                />
            </div>
        </div>
    )
}



export default TwentiethSection