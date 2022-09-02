import Image from "next/image"
import { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { viewSection } from "../../../data/api/api"
import { useWindowDimensions } from "../../../hooks/dimension"
import { transformPx } from "../../../utils/utils"
import Video from "../../Atoms/Video/video"

const TenthSection = () => {
    const { width } = useWindowDimensions()
    const {ref, inView} = useInView({
        triggerOnce: true
    })


    useEffect(() => {
        if (inView) {
            viewSection("Итоги интерактива видеоролик спутник")
        }
    }, [inView])

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
            <p className="mb-[1rem] text-white text-lg">
                Видеоролик Спутники готов.<br />
            </p>
            <p className="mb-[5.625rem] text-white text-lg">
                Он точно зарядит каждого позитивной
                энергией на долгое время.

            </p>
            <Video
            color="pink"
            poster="/placeholder2.png"
            src="https://7gpr1r2xrs.a.trbcdn.net/cdn/yanokive81/bft/bft_children_long_final_new.mp4"
            />
        </div>
    )
}



export default TenthSection