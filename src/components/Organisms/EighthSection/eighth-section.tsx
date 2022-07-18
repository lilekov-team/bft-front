import { useEffect } from "react"
import Image from "next/image"
import { useState } from "react"
import { fetchTrack } from "../../../data/api/api"
import { useWindowDimensions } from "../../../hooks/dimension"
import { transformPx } from "../../../utils/utils"
import PlayButton from "../../Atoms/PlayButton/playButton"
import { AudioTrack } from "../SeventhSection/seventh-section"

interface SectionProps {
    playAudio: (track?: AudioTrack) => void,
    audio: AudioTrack | undefined,
    play: boolean
}

const EighthSection: React.FC<SectionProps> = ({
    audio,
    playAudio,
    play
}) => {

    const { width } = useWindowDimensions()
    const [track, setTrack] = useState<AudioTrack | undefined>()


    useEffect(() => {
        fetchTrack()
            .then((res) => {
                setTrack(res)
            })
            .catch(err => {
                console.log(err)
            })

    }, [])

    return (
        <div className="w-full flex flex-col mt-[12.5rem] px-[7.5rem] relative z-0">
            <div className="flex items-center mb-[1.875rem] ">
                <h3 className="font-bold text-[3.375rem] text- mr-[1.25rem]">
                    Рокот космодрома <span className="text-accent">БФТ-25</span>
                </h3>
                <Image
                    width={transformPx(193, width)}
                    height={transformPx(36, width)}
                    src="/flying.png"
                    priority
                />
            </div>
            <div className="flex items-center">
                <div className="flex flex-col mr-[12.5rem]">
                    <p className="text-accent font-bold text-2xl leading-snug">
                        Только по-настоящему сплоченная команда<br />
                        способна создать такой шедевр.
                    </p>
                    <p className="text-white text-lg leading-tight mt-[2rem]">
                        Послушайте, что у получилось.<br />Продолжение этого хита прозвучит на онлайн-трансляции,<br />посвящённой юбилею БФТ.
                    </p>
                </div>
                {
                    track &&
                    <PlayButton
                        onClick={() => {
                            if (audio?.url === track.url && play) {
                                playAudio(undefined)
                            } else {
                                playAudio(track)
                            }
                        }}
                        radius={75}
                        pause={audio?.url === track.url && play}
                    />
                }
            </div>
        </div>
    )
}



export default EighthSection