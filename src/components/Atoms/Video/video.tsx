import { useEffect, useRef } from 'react'
import { BigPlayButton, Player, PlayerReference } from 'video-react'
import { sendAnalyticsData, viewVideo } from '../../../data/api/api'



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
            const total = ref.current.video.video.duration


            viewVideo(src ?? "", timeViewed/(total + 1 ))
        }, 10000)

        const timeViewed = ref.current?.video?.video?.currentTime ?? 0
        sendAnalyticsData({
            action_content: src,
            cutout: true,
            time_video: Math.round(timeViewed)
        })
    }

    const onPause = () => {
        clearInterval(interval as any)
        interval = undefined


        const timeViewed = ref.current?.video?.video?.currentTime ?? 0
        sendAnalyticsData({
            action_content: src,
            cutout: false,
            time_video: Math.round(timeViewed)
        })
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