import { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { viewSection } from "../../../data/api/api"
import Video from "../../Atoms/Video/video"

const TwentyfirstSection = () => {
    const {ref, inView} = useInView({
        triggerOnce: true
    })


    useEffect(() => {
        if (inView) {
            viewSection("Как это было")
        }
    }, [inView])

    return (
        <div ref={ref} className="w-full flex flex-col mt-[12.5rem] px-[7.5rem] relative z-0 ">
            <div className="flex items-center mb-[1.875rem] ">
                <h3 className="font-bold text-[3.375rem] text- mr-[1.25rem]">
                    Как это <span className="text-accent">было</span>
                </h3>
            </div>
            <p className="text-white text-lg mb-[6.25rem]">
            Поздравляем! 8 недель подготовки к новым космическим миссиям завершены. Топливо<br/> бесценного опыта получено и впереди нас ждет безграничный простор для новых<br/> возможностей. Мы в очередной раз убедились, что БФТ - невероятно сплоченная<br/> Команда профессионалов, которая способна открывать новые галактики и выполнять<br/> любые, даже самые сложные задачи. Мы делаем это прямо сейчас и будем совершать<br/> космические подвиги еще многие-многие годы, все вместе!
            </p>
            <Video
                color="pink"
                poster="/placeholder2.png"
                src="https://static.videezy.com/system/resources/previews/000/013/658/original/Wind_Turbine_03.mp4"
            />
        </div>
    )
}




export default TwentyfirstSection