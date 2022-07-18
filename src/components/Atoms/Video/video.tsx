import { useEffect, useRef } from 'react'
import { BigPlayButton, Player, PlayerReference } from 'video-react'



interface VideoProps {
    src: string,
    color: "blue" | "pink",
    poster?: string
}


let interval: NodeJS.Timer | undefined

const Video: React.FC<VideoProps> = ({
    src,
    color,
    poster
}) => {
    const ref = useRef<typeof Player>(null)
    

    useEffect(() => {
        return () => {
            clearInterval(interval as any)
        }
    }, [])


    const onPlay = () => {
        interval = setInterval(() => {
            const timeViewed = ref.current.video.video.currentTime
            console.log(timeViewed)
        }, 5000)
    }

    const onPause = () => {
        clearInterval(interval as any)
        interval = undefined
    }

    return (
        <div className={color === "blue" ? 'w-[75rem] h-[42.313rem] border-[0.1925rem] border-main-blue shadow-video-blue' : 'w-[75rem] h-[42.313rem] border-[0.1925rem] border-accent shadow-video-pink'}>
            <Player
                // playsInline
                poster={poster ?? "/placeholder.png"}
                src={src}
                autoPlay={false}
                preload={"auto"}
                muted={true}
                ref={ref}
                onPlay={onPlay}
                onPause={onPause}

            >
                <BigPlayButton
                    position='center'
                />
            </Player>
        </div>
    )

}



export default Video