import { useEffect, useRef } from 'react'
import { BigPlayButton, Player, PlayerReference } from 'video-react'



interface VideoProps {
    src: string,
    color: "blue" | "pink",
    poster?: string
}


const Video: React.FC<VideoProps> = ({
    src,
    color,
    poster
}) => {


    return (
        <div className={color === "blue" ? 'w-[75rem] h-[42.313rem] border-[0.1925rem] border-main-blue shadow-video-blue' : 'w-[75rem] h-[42.313rem] border-[0.1925rem] border-accent shadow-video-pink'}>
            <Player
                // playsInline
                poster={poster ?? "/placeholder.png"}
                src={src}
                autoPlay={false}
                preload={"auto"}
                muted={true}

            >
                <BigPlayButton
                    position='center'
                />
            </Player>
        </div>
    )

}



export default Video