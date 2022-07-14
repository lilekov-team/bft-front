import { Fragment, useEffect, useState } from "react"
import { getPlotWinners, Winner } from "../../../data/api/api"
import Video from "../../Atoms/Video/video"

const FourteenthSection = () => {
    const [winners, setWinners] = useState<Winner[]>([])


    useEffect(() => {
        getPlotWinners()
        .then((result) => {
            setWinners(result)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])

    return (
        <div className="w-full flex flex-col mt-[12.5rem] px-[7.5rem] relative z-0">
            <div className="flex justify-between mb-[6.25rem]">
                <div className="flex flex-col">
                    <div className="flex items-center mb-[1.875rem] ">
                        <h3 className="font-bold text-[3.375rem] text- mr-[1.25rem]">
                            Итоги <span className="text-accent">Конкурса</span>
                        </h3>
                    </div>
                    <p className="mb-[1rem] text-white text-lg">
                        Было крайне непросто выбрать лучший сценарий.<br />Но после долгих дискуссий мы определили лидеров.<br />Наши поздравления!
                    </p>
                    <p className=" text-white text-lg">
                        А теперь - внимание!<br />Как и обещали, по сценарию победителя конкурса<br />сделан профессиональный дубляж.<br />Приятного просмотра.
                    </p>
                </div>
                <div className="flex flex-col w-[25rem] pt-[2rem]">
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
            <Video
                color="pink"
                poster="/placeholder2.png"
                src="https://static.videezy.com/system/resources/previews/000/013/658/original/Wind_Turbine_03.mp4"
            />
        </div>
    )
}



export default FourteenthSection