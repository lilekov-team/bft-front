import Image from "next/image"
import { useWindowDimensions } from "../../../hooks/dimension"
import Video from "../../Atoms/Video/video"

const MainSection = () => {
    const {width} = useWindowDimensions()



    return (
        <div id="bft" className="mt-[12.5rem] w-full px-[14.5rem] flex flex-col relative" >
            <div className="flex flex-col  z-10">
                <h3 className="flex items-start drop-shadow-accent font-bold text-[4rem] leading-[4.875rem] mb-[0.313rem]">
                    БФТ=5<span className="text-[2.5rem] leading-[2.5rem] mt-[0.5rem]">2</span>
                </h3>
                <p className="font-bold text-[1.5rem] leading-[1.813]">
                    Энергия команды, меняющая будущее
                </p>
                <div className="flex mt-[3.75rem] mb-[6.25rem]">
                    <div className="w-[0.125rem] h-[12.125rem] mb-1 bg-accent mr-[1.25rem]">

                    </div>
                    <div className="text-lg leading-[1.368rem]">
                        <p className="mb-6">
                            <strong>
                            Звездный экипаж БФТ за 25 лет выполнил огромное количество IT-миссий в пределах<br/> земной орбиты.
                            </strong>{" "}
                            Юбилей – отличное время, чтобы провести анализ своего опыта,<br/> талантов командного состава и достижений. Ведь впереди - бесконечность новых<br/> возможностей, важных миссий и невероятных открытий.

                        </p>
                        <p>
                            <strong>
                                Наш общий опыт - колоссален, а перспективы блестящи!
                            </strong>{" "}
                            Мы - самая сплоченная<br/> профессиональная Команда на просторах IT-вселенной. Участвуйте в юбилейном<br/> онлайн-марафоне для того, чтобы понять: у Команды БФТ есть всё, чтобы продолжить<br/> движение в открытом пространстве новых возможностей! 
                        </p>
                    </div>
                </div>
                <Video
                    src="https://7gpr1r2xrs.a.trbcdn.net/cdn/yanokive81/bft/bft25_pr03a_index2.mp4"
                    color="blue"
                    poster="/first-bg.png"
                />
            </div>
            <div className="absolute top-[4rem] right-[3.5rem] z-0">
                <Image
                    className=""
                    width={985 / 16 * 1.11 * width / 100 }
                    height={985 / 16 * 1.11 * width / 100}
                    src={"/main-bg.png"}
                    alt="bg"
                    priority
                />

            </div>
        </div>
    )
}




export default MainSection