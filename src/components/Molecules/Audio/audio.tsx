

import dynamic from 'next/dynamic';
import { useEffect, useRef, useState } from 'react';
import { listenAudio, sendAnalyticsData } from '../../../data/api/api';
import { AudioTrack } from '../../Organisms/SeventhSection/seventh-section';
const ReactAplayer: any = dynamic(() => import('react-aplayer'), { ssr: false });



const props = {
    theme: '#0B0027',
    mini: false,
    fixed: true,
    autoplay: true,

};


export const audios: {
    [key: string]: AudioTrack
} = {

    "https://25.bftcom.com/1h.wav": {
        artist: "BFT",
        cover: "/logo-square.png",
        name: "Первый космодром",
        url: "https://25.bftcom.com/1h.wav"
    },

    "https://25.bftcom.com/2h.wav": {
        artist: "BFT",
        cover: "/logo-square.png",
        name: "Солнечные батареи",
        url: "https://25.bftcom.com/2h.wav"
    },
    "https://25.bftcom.com/3h.wav": {
        artist: "BFT",
        cover: "/logo-square.png",
        name: "25 слов",
        url: "https://25.bftcom.com/3h.wav"
    },
    "https://25.bftcom.com/4h.wav": {
        artist: "BFT",
        cover: "/logo-square.png",
        name: "Звуки вселенной",
        url: "https://25.bftcom.com/4h.wav"
    },
}

let interval: NodeJS.Timer | undefined

export const Audio = ({
    audio,
    setAudio,
    play,
    showClose
}: {
    audio: AudioTrack | undefined,
    setAudio: (play: boolean) => void,
    play: boolean,
    showClose: (show: boolean) => void

}) => {
    const [AP, setAP] = useState<any>(null)
    const apRef = useRef<any>()

    useEffect(() => {
        return () => {
            clearInterval(interval as any)
        }
    }, [])





    useEffect(() => {
        toggle()
    }, [audio])


    useEffect(() => {

        if (play && AP?.paused) {

            AP.play()
        } else if (AP && !AP.paused && !play) {
            AP.pause()
        }
    }, [play])

    const toggle = async () => {

        if (!audio && AP) {
            showClose(false)
            await AP.destroy()
            setAP(null)
            apRef.current = null
        } else {
            if (!audio && AP) {
                await AP.pause()
            } else if (AP && audio) {

                AP.list.remove(0)
                AP.list.add([audio]);
                await AP.play()
            }

        }

    }

    const onPlay = () => {
        if (audio) {
            setAudio(true)
            const timeViewed = apRef.current?.audio?.currentTime ?? 0
            sendAnalyticsData({
                action_content: audio.name,
                cutout: true,
                time_video: Math.round(timeViewed)
            })
        }
        if (interval) {
            clearInterval(interval as any)
        }
        interval = setInterval(() => {
            if (apRef.current) {

                const timeViewed = apRef.current.audio.currentTime
                const total = apRef.current.audio.duration


                listenAudio(audio?.name ?? "", timeViewed / (total + 1))

            }
        }, 10000)
    }

    const onPause = () => {
        if (audio) {
            setAudio(false)
            const timeViewed = apRef.current?.audio?.currentTime ?? 0
            sendAnalyticsData({
                action_content: audio.name,
                cutout: false,
                time_video: Math.round(timeViewed)
            })
        }
        if (interval) {
            clearInterval(interval as any)
            interval = undefined
        }
    }

    const init = (ap: any) => {
        setAP(ap)

        apRef.current = ap
        showClose(true)
    }


    if (!audio) return null


    return (

        <ReactAplayer
            {...props}
            audio={[audio]}
            onInit={init}
            onPause={onPause}
            onPlay={onPlay}
        />
    )
}
