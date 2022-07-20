import { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { viewSection } from "../../../data/api/api"
import Video from "../../Atoms/Video/video"

const NineteenthSection = () => {
    const {ref, inView} = useInView({
        triggerOnce: true
    })


    useEffect(() => {
        if (inView) {
            viewSection("Ключ на старт")
        }
    }, [inView])




    return (
        <div ref={ref} className="w-full flex flex-col mt-[12.5rem] px-[14.5rem] relative z-0">
            <div className="flex items-center mb-[1.875rem] ">
                <h3 className="font-bold text-[3.375rem] text- mr-[1.25rem]">
                    Ключ на <span className="text-accent">старт</span>
                </h3>
            </div>
            <p className="text-white text-lg mb-[6.25rem]">
            Звездный экипаж готов. Один клик - и вы присоединитесь к онлайн 25-летию БФТ.  
            </p>
            <Video
                color="pink"
                poster="/placeholder2.png"
                src="https://static.videezy.com/system/resources/previews/000/013/658/original/Wind_Turbine_03.mp4"
            />
        </div>
    )
}



export default NineteenthSection