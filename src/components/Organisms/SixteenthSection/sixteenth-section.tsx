import Image from "next/image"
import { Fragment, useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"
import { getGameWinners, viewSection, Winner } from "../../../data/api/api"
import { useWindowDimensions } from "../../../hooks/dimension"
import { transformPx } from "../../../utils/utils"

const SixteenthSection = () => {
    const { width } = useWindowDimensions()
    const [winners, setWinners] = useState<Winner[]>([])
    const {ref, inView} = useInView({
        triggerOnce: true
    })


    useEffect(() => {
        if (inView) {
            viewSection("Итоги интерактива")
        }
    }, [inView])


    useEffect(() => {
        getGameWinners()
        .then((result) => {
            setWinners(result)
        })
        .catch ((err) => {
            console.log(err)
        })
    },[])

    return (
        <div ref={ref} className="w-full flex flex-col mt-[12.5rem] px-[7.5rem] relative z-0">
            <div className="flex items-center mb-[1.875rem] ">
                <h3 className="font-bold text-[3.375rem] text- mr-[1.25rem]">
                    Итоги <span className="text-accent">интерактива</span>
                </h3>
                <Image
                    width={transformPx(193, width)}
                    height={transformPx(36, width)}
                    src="/flying.png"
                />
            </div>
            <p className="text-white text-lg mb-[6.25rem]">
                Мы рады приветствовать победителей. На их счету прибавилось БФТ-денег.<br />Это особенно приятно, поскольку наш Аукцион стремительно приближается.<br />И можно будет совершить долгожданное приобретение.
            </p>
            <div className="self-end flex flex-col w-[33.25rem] pt-[2rem]">
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
                                        <span className="text-white text-lg font-normal mt-[0.625rem]">
                                            {winner.amount + ' баллов'}
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
            <div className="absolute top-[18.5rem] left-[7.5rem]">
                <Image 
                src={"/satelite.png"}
                width={transformPx( 1109, width)}
                height={transformPx( 629, width)}
                priority
                />
            </div>
        </div>
    )
}




export default SixteenthSection