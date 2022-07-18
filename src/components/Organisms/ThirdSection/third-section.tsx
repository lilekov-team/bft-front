import Image from "next/image"
import { useWindowDimensions } from "../../../hooks/dimension"
import { transformPx } from "../../../utils/utils"
import { motion } from 'framer-motion'
import moment from "moment"
import { useEffect, useState } from "react"
import PlayButton from "../../Atoms/PlayButton/playButton"
import { AudioTrack } from "../SeventhSection/seventh-section"
import { audios } from "../../Molecules/Audio/audio"

interface Podcast {
    type: "audio" | "video",
    icon: string,
    width: number,
    height: number,
    ship: string,
    link: string,
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
        icon: "/pod1.png",
        ship: "/rocket1.png",
        link: "https://www2.cs.uic.edu/~i101/SoundFiles/StarWars60.wav",
        title: "«Первый космодром»",
        type: "audio",
        width: 113,
    },
    {
        date: "5 августа",
        day: "ПТ",
        episode: "2 серия",
        height: 120,
        icon: "/pod2.png",
        ship: "/rocket2.png",
        link: "https://static.videezy.com/system/resources/previews/000/013/658/original/Wind_Turbine_03.mp4",
        title: "«Солнечные батареи»",
        type: "video",
        width: 119,
    },
    {
        date: "8 августа",
        day: "ПН",
        episode: "3 серия",
        height: 120,
        icon: "/pod3.png",
        ship: "/rocket3.png",
        link: "https://www2.cs.uic.edu/~i101/SoundFiles/StarWars60.wav",
        title: "«25 лет за 25 слов» ",
        type: "audio",
        width: 202,
    },
    {
        date: "15 августа",
        day: "ПН",
        episode: "4 серия",
        height: 120,
        icon: "/pod4.png",
        ship: "/rocket4.png",
        link: "https://www2.cs.uic.edu/~i101/SoundFiles/StarWars60.wav",
        title: "«Звуки вселенной»",
        type: "audio",
        width: 120,
    },
    {
        date: "22 августа",
        day: "ПН",
        episode: "5 серия",
        height: 120,
        icon: "/pod5.png",
        ship: "/rocket5.png",
        link: "https://www2.cs.uic.edu/~i101/SoundFiles/StarWars60.wav",
        title: "«Источник энергии»",
        type: "audio",
        width: 132,
    },
    {
        date: "29 августа",
        day: "ПН",
        episode: "6 серия",
        height: 120,
        icon: "",
        ship: "/rocket6.png",
        link: "https://www2.cs.uic.edu/~i101/SoundFiles/StarWars60.wav",
        title: "«Ценности окрыляют»",
        type: "audio",
        width: 120,
    },
    {
        date: "5 сентября",
        day: "ПН",
        episode: "7 серия",
        height: 120,
        icon: "/pod7.png",
        ship: "/rocket7.png",
        link: "https://www2.cs.uic.edu/~i101/SoundFiles/StarWars60.wav",
        title: "«Посыл во вселенную»",
        type: "audio",
        width: 160,
    },
    {
        date: "12 сентября",
        day: "ПН",
        episode: "8 серия",
        height: 120,
        icon: "/pod8.png",
        ship: "/rocket8.png",
        link: "https://www2.cs.uic.edu/~i101/SoundFiles/StarWars60.wav",
        title: "«Землю в иллюминаторе»",
        type: "audio",
        width: 120,
    },
    {
        date: "5 сентября",
        day: "ПН",
        episode: "9 серия",
        height: 120,
        icon: "/pod9.png",
        ship: "/rocket9.png",
        link: "https://www2.cs.uic.edu/~i101/SoundFiles/StarWars60.wav",
        title: "«Посыл во вселенную»",
        type: "audio",
        width: 120,
    },
    {
        date: "12 сентября",
        day: "ПН",
        episode: "10 серия",
        height: 120,
        icon: "/pod10.png",
        ship: "/rocket10.png",
        link: "https://www2.cs.uic.edu/~i101/SoundFiles/StarWars60.wav",
        title: "«Прощай, Земля!»",
        type: "audio",
        width: 116,
    },
]


const ThirdSection = ({
    playAudio,
    playVideo,
    audio,
    play
}: {
    playAudio: (src?: AudioTrack) => void,
    playVideo: (src: string) => void,
    audio: AudioTrack | undefined,
    play: boolean
}) => {
    const { width } = useWindowDimensions()
    const [slide, setSlide] = useState(1)
    const [offsetSlide, setOffsetSlide] = useState(1)
    const slideWidth = 220
    const margin = 57

    useEffect(() => {
        const today = moment()

        for (let i = 0; i < dates.length; i++) {
            const d = moment(dates[i], "DD.MM.yyyy")

            if (today.isBefore(d)) {
                console.log(i)
                setOffsetSlide(i + 1)
                setSlide(i + 1)
                break
            }
        }
    }, [])


    const handlePlay = (podcast: Podcast) => {
        if (podcast.type === "audio") {
            if (play && podcast.link === audio?.url ) {
                playAudio()
            }else {
                playAudio(audios[podcast.link])
            }


        } else {
            playVideo(podcast.link)
        }
    }


    return (
        <div id="fuel" className="w-full flex flex-col mt-[12.5rem]">
            <div className="flex items-center mb-[1.875rem] ml-[7.5rem]">
                <h3 className="font-bold text-[3.375rem] text- mr-[1.25rem]">
                    Топливо <span className="text-accent">опыта</span>
                </h3>
                <Image
                    width={transformPx(193, width)}
                    height={transformPx(36, width)}
                    src="/flying.png"
                />
            </div>
            <p className="ml-[7.5rem] text-lg mb-[4rem] leading-tight">
                Где взять топливо опыта, которое так необходимо для новых космических свершений?<br />Можно получить его от выдающихся астронавтов. Раз в неделю космонавты БФТ будут<br /> делиться с нами своим опытом.<br />Внимательно слушая подкасты, вы узнаете вдохновляющие истории из жизни БФТ:<br />как мы развивались, через что прошли и к чему стремимся.
            </p>
            <div className="w-full overflow-hidden relative">
                <motion.div
                    initial={{
                        x: 120 / 16 * 1.11 * width / 100
                    }}
                    animate={{
                        x: transformPx(120 - (offsetSlide - 1) * slideWidth + (offsetSlide - 1) * margin, width)
                    }}
                    className="flex flex-row w-[157rem]">
                    {
                        podcasts.map((podcast, index) => {
                            return (
                                <div key={index} className="flex flex-col"
                                    style={{
                                        minWidth: transformPx(slideWidth, width),
                                        marginRight: index < podcasts.length - 1 ? transformPx(margin, width) : 0
                                    }}
                                >
                                    <Icon
                                    onClick={() => {
                                        setSlide(index + 1)
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
                            x: 120 / 16 * 1.11 * width / 100
                        }}
                        animate={{
                            x: transformPx((offsetSlide - 1) * slideWidth + (offsetSlide - 1) * margin, width)
                        }}
                        className='mt-[1rem] h-[1.5rem] flex items-center relative '>
                        <svg width={2512 / 16 * 1.11 * width / 100} height={3}>
                            <line x1="0" y1="1" x2={width} y2="1" stroke="white" fill='white'
                                strokeDasharray="7" strokeWidth={2} />
                        </svg>
                        <motion.div
                            initial={{
                                width: "0rem",
                            }}
                            animate={{
                                width: transformPx(130 + (slide - 1) * slideWidth + (slide - 1) * margin, width)
                            }}
                            className=' left-0 absolute bg-pale-blue h-[0.625rem] shadow-blue'>

                        </motion.div>
                        {
                            podcasts.map((v, i) => {
                                return <div
                                    key={i}
                                    style={{
                                        left: transformPx(120 + (i) * slideWidth + (i) * margin, width),
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


    console.log(play, audio?.url, podcast.link)

    return (
        <div className="relative h-[7rem] flex items-center cursor-pointer"
            onMouseEnter={() => {
                setShow(true)
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