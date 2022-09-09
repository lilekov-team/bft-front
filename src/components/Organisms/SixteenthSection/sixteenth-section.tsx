import Image from "next/image"
import { Fragment, useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"
import { getGameWinners, viewSection, Winner } from "../../../data/api/api"
import { useWindowDimensions } from "../../../hooks/dimension"
import { transformPx } from "../../../utils/utils"

const SixteenthSection = () => {
    const [overlayText, setOverlayText] = useState<{
        index: number,
        winner: Winner
    } | undefined>()
    const { width } = useWindowDimensions()
    const [winners, setWinners] = useState<Winner[]>([])
    const {ref, inView} = useInView({
        triggerOnce: true
    })
    const [page, setPage] = useState(0)



    const changePage = (p: number) => {
        setPage(p)
    }


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
        <div ref={ref} className="w-full flex flex-col mt-[12.5rem] px-[14.5rem] relative z-0">
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
            <div className="self-end flex flex-col w-[25.25rem] z-[5000] pt-[-12rem]">
                {
                    // winners.map((winner, index) => {
                    //     return (
                    //         <Fragment key={index}>
                    //             <div className="h-[2px] w-full bg-accent shadow-pink">
                    //
                    //             </div>
                    //             <div className="min-h-[6.25rem] flex flex-col justify-center w-full">
                    //                 <span className="text-white text-2xl font-bold">{`${index + 1}. ${winner.name}`}</span>
                    //                 <div className="w-full flex justify-between items-center">
                    //                     <span className="text-white text-lg font-normal mt-[0.625rem] ml-[2.25rem]">
                    //                         {winner.job}
                    //                     </span>
                    //                     <span className="text-white text-lg font-normal mt-[0.625rem]">
                    //                         {winner.amount + ' баллов'}
                    //                     </span>
                    //                 </div>
                    //             </div>
                    //             {
                    //                 index === 2 &&
                    //                 <div className="h-[2px] w-full bg-accent shadow-pink">
                    //
                    //                 </div>
                    //             }
                    //         </Fragment>
                    //     )
                    // })
                    winners.slice(page * 5, (page + 1) * 5).map((winner, i) => {

                        const index = i + page * 5
                        return (
                            <Fragment key={index}>
                                <div className="h-[2px] w-full bg-accent shadow-pink">

                                </div>
                                <div className="min-h-[6.25rem] flex flex-col justify-center w-full">
                                    <span className="text-white text-2xl font-bold">&#8226;{` ${winner.name}`}</span>
                                    <div className="w-full flex justify-between items-center">
                                            <span className="text-white text-lg font-normal mt-[0.625rem] ml-[2.25rem]">
                                                {winner.job}
                                            </span>
                                        <span className="cursor-pointer text-pale-blue underline font-bold text-lg"
                                              onClick={() => {
                                                  if (overlayText?.index === index) {
                                                      setOverlayText(undefined)
                                                  } else {
                                                      setOverlayText({
                                                          index,
                                                          winner
                                                      })
                                                  }
                                              }}>
                                                {/*{*/}
                                                {/*    overlayText?.index === index ?*/}
                                                {/*        "Скрыть текст"*/}
                                                {/*        : "Читать текст"*/}
                                                {/*}*/}
                                            </span>
                                    </div>
                                </div>
                                {
                                    i === 2 || i === 4 &&
                                    <div className="h-[2px] w-full bg-accent shadow-pink">

                                    </div>
                                }
                            </Fragment>
                        )
                    })
                }
                {
                    winners.length > 5 &&
                    <div className="w-full flex justify-end items-center mt-[1.75rem]">
                            <span className="text-white text-lg">
                                Место:
                            </span>
                        <div className="flex items-center">
                            {
                                Array(Math.ceil(winners.length / 5)).fill(1).map((_, i) => {
                                    console.log(i)
                                    return <span key={i} onClick={() => setPage(i)} className={`cursor-pointer text-[1.5rem] ${page === i ? 'underline text-pale-blue' : 'text-white'} ml-[1.25rem]`}>
                                            {i + 1}
                                        </span>
                                })
                            }
                        </div>
                    </div>
                }
            </div>
            <div className="absolute top-[23.5rem] left-[12.5rem]">
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
