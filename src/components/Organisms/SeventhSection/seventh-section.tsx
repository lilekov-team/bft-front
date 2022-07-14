import Image from "next/image"
import { ChangeEventHandler, useState } from "react"
import { useWindowDimensions } from "../../../hooks/dimension"
import { transformPx } from "../../../utils/utils"
import { FaPause } from 'react-icons/fa'
import FileUpload from "../../Atoms/FileUpload/file-upload"
import { uploadFile } from "../../../data/api/api"
import { useCustomToast } from "../../../hooks/toast"

export interface AudioTrack {
    url: string,
    artist: string,
    cover: string,
    name: string,
    paused?: boolean
}


const audios: AudioTrack[] = [
    {
        url: "/Zemlyane_-_Trava_u_doma_55297782.mp3",
        artist: "Земляне",
        cover: "/earth.png",
        name: "Трава у дома"
    },
    {
        url: "/David_Bowie_-_Ground_Control_to_Major_Tom_64090800.mp3",
        artist: "David Bowie",
        cover: "/bowie.png",
        name: "Ground Control"
    },
    {
        url: "/The_Beatles_-_Across_The_Universe_47963680.mp3",
        artist: "John Lennon",
        cover: "/lennon.png",
        name: "Accross the universe"
    },
    {
        url: "/Noise_MC_-_Na_Marse_Klassno_63371930.mp3",
        artist: "Noize MC",
        cover: "/noize.png",
        name: "На марсе классно"
    },
]




const SeventhSection = ({
    playAudio,
    audio,
    play
}: {
    playAudio: (src?: AudioTrack) => void,
    audio: AudioTrack | undefined,
    play: boolean
}) => {
    const { width } = useWindowDimensions()
    const [file, setFile] = useState<File | undefined>()
    const [loading, setLoading] = useState(false)
    const [text, setText] = useState("")
    const toast = useCustomToast()

    const send = () => {
        if (!file) return


        setLoading(true)


        uploadFile(file, text)
            .then(() => {
                toast("", "success", "Успешно отправлено")
                setText("")
                setFile(undefined)
            })
            .catch((err) => {
                toast("", "error", err.message)
            })
            .finally(() => {
                setLoading(false)
            })
    }

    const upload = (file: File) => {
        setFile(file)
    }


    const handleChange: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
        setText(e.target.value)
    }

    

    return (
        <div id="launch" className="w-full flex flex-col mt-[12.5rem] px-[7.5rem] relative z-0">
            <div className="flex items-center mb-[1.875rem] z-10">
                <h3 className="font-bold text-[3.375rem] text- mr-[1.25rem]">
                    Запуск <span className="text-accent">двигателя</span>
                </h3>
                <Image
                    width={transformPx(189, width)}
                    height={transformPx(26, width)}
                    src="/flying.png"
                />
            </div>
            <p className="text-2xl text-accent font-bold max-w-[56.25rem]">
                Бескрайние просторы Вселенной всегда очаровывали музыкантов. Мы собрали  особенный космический плейлист<br /> для межзвездных путешествий. Послушайте эти песни, пусть они вдохновят на создание собственного трека о космических IT-миссиях.
            </p>
            <p className="mt-[1.5rem] text-lg max-w-[56.25rem]">
                Настало время командной игры.
            </p>
            <p className="my-[1rem] text-lg max-w-[56.25rem]">
                Для этого придумайте, какое слово лучше всего характеризует<br />Компанию БФТ и её путь. Запишите его громко и четко на диктофон<br />без посторонних шумов. Вы можете сделать это хором вместе<br />с коллегами.
            </p>
            <p className=" text-lg mb-[6.25rem] z-10 text-white max-w-[56.25rem]">
                Профессиональный битбоксер и диджей соберет все фразы<br />из городов от Владивостока до Калининграда и сделает из них<br />единый космический трек «Рокот космодрома БФТ-25».
            </p>

            <textarea value={text} onChange={handleChange} className={`mb-[1.875rem] h-[5rem] bg-transparent w-[22.5rem] border-accent  border-2 resize-none py-4 px-[4rem] text-white text-lg placeholder:text-[#ffffff88]`} placeholder="Введите текст">

            </textarea>
            <FileUpload
                onUpload={upload}
                onSend={send}
                title="Отправить"
                loading={loading}
                file={file}
                accept="audio"
                id="audio"
            />
            <div className="absolute right-[7.5rem] top-[16.75rem] flex flex-col w-[30.438rem]">
                {
                    audios.map((track) => {
                        return <Track
                            key={track.url}
                            audio={audio}
                            track={track}
                            playAudio={playAudio}
                            play={play}
                        />
                    })
                }
            </div>
        </div>
    )


}

const Track = ({
    audio,
    playAudio,
    track,
    play
}: {
    track: AudioTrack,
    playAudio: (src?: AudioTrack) => void,
    audio: AudioTrack | undefined,
    play: boolean
}) => {

    const [hover, setHover] = useState(false)
    const { width } = useWindowDimensions()

    return (
        <div onMouseEnter={() => {
            setHover(true)
        }}
            onMouseLeave={() => {
                setHover(false)
            }}
            className="w-full border-2 border-transparent hover:border-accent flex items-center p-[0.6rem] cursor-pointer"
            onClick={() => {
                playAudio(audio?.url === track.url && play ? undefined : track)
            }}>
            <div className="w-[6.25rem] h-[6.25rem] flex justify-center items-center relative">
                <img src={track.cover} alt="cover" className="w-[6.25rem] h-[6.25rem]" />
                {
                    hover &&
                    <div className="absolute">
                        <div
                            style={{
                                width: transformPx(2 * 33, width),
                                height: transformPx(2 * 33, width),

                            }}
                            className="bg-accent hover:bg-accent-dark rounded-full flex justify-center items-center"
                        >
                            {
                                audio?.url === track.url && play ?
                                    <FaPause />
                                    :
                                    <img src="/play2.png" alt="play" className="w-[1.25rem] h-[1.25rem] relative left-[2px]" />
                            }
                        </div>
                    </div>
                }
            </div>
            <div className="flex flex-col ml-[1.25rem] text-white text-lg">
                <span className="mb-[0.375rem] font-bold">
                    {track.name}
                </span>
                <span >
                    {track.artist}
                </span>
            </div>
        </div>
    )


}


export default SeventhSection