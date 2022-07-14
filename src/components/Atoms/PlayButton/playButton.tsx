import { FaPause } from "react-icons/fa"
import { useWindowDimensions } from "../../../hooks/dimension"
import { transformPx } from "../../../utils/utils"

interface PlayButtonProps {
    onClick: () => void,
    radius: number,
    pause?:boolean
}



const PlayButton: React.FC<PlayButtonProps> = ({
    onClick,
    radius,
    pause
}) => {
    const { width } = useWindowDimensions()


    return (
        <div
            onClick={onClick}
            style={{
                border: `0.25rem solid rgba(255, 35, 91, 0.1)`,
                width: transformPx(2 * radius, width),
                height: transformPx(2 * radius, width),
            }}
            className="rounded-full flex justify-center items-center cursor-pointer"
        >
            <div
                style={{
                    border: `0.25rem solid rgba(255, 35, 91, 0.6)`,
                    width: transformPx(2 * radius, width) * 0.81,
                    height: transformPx(2 * radius, width) * 0.81,

                }}
                className="rounded-full flex justify-center items-center"

            >
                <div
                    style={{
                        border: `0.25rem solid #FF235B`,
                        width: transformPx(2 * radius, width) * 0.65,
                        height: transformPx(2 * radius, width) * 0.65,

                    }}
                    className="rounded-full flex justify-center items-center"

                >
                    <div
                        style={{
                            width: transformPx(2 * radius, width) * 0.44,
                            height: transformPx(2 * radius, width) * 0.44,

                        }}
                        className="bg-accent hover:bg-accent-dark rounded-full flex justify-center items-center"
                    >
                        {
                            pause ?

                            <FaPause/>
                            :
                            <img src="/play2.png" alt="play" />
                        }
                    </div>

                </div>

            </div>
        </div>
    )
}



export default PlayButton