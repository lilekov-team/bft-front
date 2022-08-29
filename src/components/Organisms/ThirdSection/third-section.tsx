import Image from "next/image"
import { useWindowDimensions } from "../../../hooks/dimension"
import { transformPx } from "../../../utils/utils"
import { motion } from 'framer-motion'
import moment from "moment"
import { useEffect, useState } from "react"
import PlayButton from "../../Atoms/PlayButton/playButton"
import { AudioTrack } from "../SeventhSection/seventh-section"
import { audios } from "../../Molecules/Audio/audio"
import { useInView } from "react-intersection-observer"
import { viewSection } from "../../../data/api/api"

interface Podcast {
    type: "audio" | "video",
    icon: string,
    width: number,
    height: number,
    ship: string,
    link?: string,
    day: string,
    date: string,
    episode: string,
    title: string
}


const dates = ["30.07.2022", "06.08.2022", "09.08.2022", "16.08.2022", "23.08.2022", "30.08.2022", "06.09.2022", "13.09.2022", "15.09.2022", "16.09.2023"]

const podcasts: Podcast[] = [
    {
        date: "29 июля",
        day: "ПТ",
        episode: "1 серия",
        height: 120,
        link: "https://25.bftcom.com/1h.wav",
        icon: "/pod1.png",
        ship: "/rocket1.png",
        title: "«Первый космодром»",
        type: "audio",
        width: 113,
    },
    {
        date: "5 августа",
        day: "ПТ",
        episode: "2 серия",
        height: 120,
        link: 'https://25.bftcom.com/2h.wav',
        icon: "/pod2.png",
        ship: "/rocket2.png",
        title: "«Солнечные батареи»",
        type: "audio",
        width: 119,
    },
    {
        date: "8 августа",
        day: "ПН",
        episode: "3 серия",
        height: 120,
        icon: "/pod3.png",
        ship: "/rocket3.png",
        title: "«25 слов» ",
        type: "audio",
        link: 'https://25.bftcom.com/3h.wav',
        width: 202,
    },
    {
        date: "15 августа",
        day: "ПН",
        episode: "4 серия",
        height: 120,
        icon: "/pod4.png",
        ship: "/rocket4.png",
        title: "«Звуки вселенной»",
        type: "audio",
        link: 'https://25.bftcom.com/4h.wav',
        width: 120,
    },
    {
        date: "22 августа",
        day: "ПН",
        episode: "5 серия",
        height: 120,
        icon: "/pod5.png",
        ship: "/rocket5.png",
        title: "«Источник энергии»",
        type: "audio",
        width: 132,
    },
    {
        date: "29 августа",
        day: "ПН",
        episode: "6 серия",
        height: 120,
        icon: "/pod7.png",
        ship: "/rocket6.png",
        title: "«Ценности окрыляют»",
        type: "audio",
        width: 160,
        link: 'https://25.bftcom.com/6h.wav'
    },
    {
        date: "5 сентября",
        day: "ПН",
        episode: "7 серия",
        height: 120,
        icon: "/pod9.png",
        ship: "/rocket7.png",
        title: "«Посыл во вселенную»",
        type: "audio",
        width: 120,
    },
    {
        date: "12 сентября",
        day: "ПН",
        episode: "8 серия",
        height: 120,
        icon: "/pod8.png",
        ship: "/rocket8.png",
        title: "«Земля в иллюминаторе»",
        type: "audio",
        width: 120,
    },
    // {
    //     date: "5 сентября",
    //     day: "ПН",
    //     episode: "9 серия",
    //     height: 120,
    //     icon: "/pod9.png",
    //     ship: "/rocket9.png",
    //     title: "«Посыл во вселенную»",
    //     type: "audio",
    //     width: 120,
    // },
    // {
    //     date: "12 сентября",
    //     day: "ПН",
    //     episode: "10 серия",
    //     height: 120,
    //     icon: "/pod10.png",
    //     ship: "/rocket10.png",

    //     title: "«Прощай, Земля!»",
    //     type: "audio",
    //     width: 116,
    // },
]


const ThirdSection = ({
    playAudio,
    playVideo,
    audio,
    play,
    togglePlay
}: {
    playAudio: (src?: AudioTrack) => void,
    playVideo: (src: string) => void,
    audio: AudioTrack | undefined,
    play: boolean,
    togglePlay: (play: boolean) => void,
}) => {
    const { width } = useWindowDimensions()
    const [slide, setSlide] = useState(1)
    const [offsetSlide, setOffsetSlide] = useState(1)
    const slideWidth = 220
    const margin = 57
    const {ref, inView} = useInView({
        triggerOnce: true
    })


    useEffect(() => {
        if (inView) {
            viewSection("Топливо опыта")
        }
    }, [inView])



    useEffect(() => {
        const today = moment()

        for (let i = 0; i < dates.length; i++) {
            const d = moment(dates[i], "DD.MM.yyyy")

            if (today.isBefore(d)) {
         
                setOffsetSlide(i + 1)
                setSlide(i + 1)
                break
            }
        }
    }, [])


    const handlePlay = (podcast: Podcast) => {
        if (podcast.type === "audio") {
            if (play && podcast.link === audio?.url ) {
                togglePlay(!play)
            }else {
                playAudio(audios[podcast.link!!])
            }


        } else {
            playVideo(podcast.link!!)
        }
    }


    console.log(offsetSlide)

    return (
        <div ref={ref} id="fuel" className="w-full flex flex-col mt-[12.5rem]">
            <div className="flex items-center mb-[1.875rem] ml-[14.5rem]">
                <h3 className="font-bold text-[3.375rem] text- mr-[1.25rem]">
                    Топливо <span className="text-accent">опыта</span>
                </h3>
                <Image
                    width={transformPx(193, width)}
                    height={transformPx(36, width)}
                    src="/flying.png"
                />
            </div>
            <p className="ml-[14.5rem] text-lg mb-[4rem] leading-tight">
                Где взять топливо опыта, которое так необходимо для новых космических свершений?<br />Можно получить его от выдающихся астронавтов. Раз в неделю космонавты БФТ будут<br /> делиться с нами своим опытом.<br />Внимательно слушая подкасты, вы узнаете вдохновляющие истории из жизни БФТ:<br />как мы развивались, через что прошли и к чему стремимся.
            </p>
            <div className="w-full overflow-hidden relative">
                <motion.div
                    initial={{
                        x: transformPx(232, width)
                    }}
                    animate={{
                        x: transformPx(232 - ((Math.min(offsetSlide - 1, 4)) * slideWidth + (Math.min(offsetSlide - 1, 4)) * margin), width)
                    }}
                    transition={{
                        easings: 'easeInOut'
                    }}
                    className="flex flex-row w-[157rem]">
                    {
                        podcasts.map((podcast, index) => {
                            return (
                                <div key={index} className="flex flex-col cursor-pointer"
                                    style={{
                                        minWidth: transformPx(slideWidth, width),
                                        marginRight: index < podcasts.length - 1 ? transformPx(margin, width) : 0
                                    }}
                                    onClick={() => {
                                        setSlide(index + 1)
                                        setOffsetSlide(index+1)
                                    }}
                                >
                                    <Icon
                                    onClick={() => {
                                        
                                        handlePlay(podcast)
                                    }}
                                    podcast={podcast}
                                    audio={audio}
                                    play={play}
                                    />
                                    <div className="flex flex-col mt-[4.5rem] relative">
                                        <span className="text-pale-blue font-bold text-2xl leading-tight">
                                            {
                                                podcast.day
                                            }
                                        </span>
                                        <span className="text-pale-blue font-bold text-2xl leading-tight mb-4">
                                            {
                                                podcast.date
                                            }
                                        </span>
                                        <span className="text-lg text-white">
                                            {
                                                podcast.episode
                                            }
                                        </span>
                                        <span className="text-lg text-white mb-[0rem] h-[2.5rem]">
                                            {
                                                podcast.title
                                            }
                                        </span>
                                        <span className="text-lg text-white relative right-[1.25rem]">
                                            <Image
                                                src={podcast.ship}
                                                width={transformPx(148, width)}
                                                height={transformPx(91, width)}
                                                priority
                                            />
                                        </span>
                                    </div>
                                </div>
                            )
                        })
                    }
                </motion.div>
                <div className="w-full overflow-hidden absolute top-[8rem]">
                    <motion.div
                        initial={{
                            x: transformPx(232, width)
                        }}
                        animate={{
                            x: - transformPx(((Math.min(offsetSlide - 1, 4)) * slideWidth + (Math.min(offsetSlide - 1, 4)) * margin), width)
                        }}
                        transition={{
                            easings: 'easeInOut'
                        }}
                        className='mt-[1rem] h-[1.5rem] flex items-center relative '
                        style={{
                            width: transformPx(slideWidth * (podcasts.length ) + margin * (podcasts.length -0.8), width)
                        }}
                        >
                        <svg id="line" width={transformPx(slideWidth * (podcasts.length  ) + margin * (podcasts.length  -0.8), width)} height={3}>
                            <line x1="0" y1="1" x2={transformPx(slideWidth * (podcasts.length ) + margin * (podcasts.length -0.8), width)} y2="1" stroke="white" fill='white'
                                strokeDasharray="7" strokeWidth={2} />
                        </svg>
                        <motion.div
                            initial={{
                                width: "0rem",
                            }}
                            animate={{
                                width: transformPx(240  +  ((slide - 1) * slideWidth + (slide - 1) * margin), width)
                            }}
                            transition={{
                                easings: 'easeInOut'
                            }}
                            className=' left-0 absolute bg-pale-blue h-[0.625rem] shadow-blue'>

                        </motion.div>
                        {
                            podcasts.map((v, i) => {
                                return <div
                                    key={i}
                                    style={{
                                        left: transformPx(232 + (i) * slideWidth + (i) * margin, width),
                                        transform: `translateX(-0.25rem)`
                                    }}
                                    className={i + 1 <= slide ? `absolute  w-[1.25rem] rounded-full h-[1.25rem] border-[0.3125rem] border-pale-blue bg-white` : `absolute  w-[1.25rem] rounded-full h-[1.25rem] border-[0.1925rem] border-white bg-[#253572]`}>
                                </div>
                            })
                        }
                    </motion.div>
                </div>
            </div>

        </div>
    )
}

const Icon = ({
    onClick,
    podcast,
    audio,
    play
}: {
    podcast: Podcast,
    onClick: () => void,
    audio: AudioTrack | undefined,
    play: boolean
}) => {
    const { width } = useWindowDimensions()
    const [show, setShow] = useState(false)




    return (
        <div className={`relative h-[7.5rem] flex items-center ${podcast.link ? 'cursor-pointer' : 'cursor-default'}`}
            onMouseEnter={() => {
                if (podcast.link) {
                    setShow(true)
                }
            }}
            onMouseLeave={() => {
                setShow(false)
            }}
        >
            {
                show ?
                    <PlayButton
                        onClick={onClick}
                        radius={55}
                        pause={audio?.url === podcast.link && play}
                    />
                    :
                    podcast.icon ?
                        <img src={podcast.icon} alt="slide" className=" "
                            style={{
                                width: transformPx(podcast.width*0.9, width),
                                height: transformPx(podcast.height*0.9, width),
                            }}
                        />
                        :
                        <div className="h-[7rem]" />
            }

        </div>
    )
}


export default ThirdSection