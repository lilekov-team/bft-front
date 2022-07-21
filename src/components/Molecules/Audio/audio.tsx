

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
    "https://www2.cs.uic.edu/~i101/SoundFiles/StarWars60.wav": {
        name: 'BFT',
        artist: 'BFT',
        url: 'https://www2.cs.uic.edu/~i101/SoundFiles/StarWars60.wav',
        cover: '/logo-square.png',
    },
    "/David_Bowie_-_Ground_Control_to_Major_Tom_64090800.mp3": {
        url: "/David_Bowie_-_Ground_Control_to_Major_Tom_64090800.mp3",
        artist: "David Bowie",
        cover: "/bowie.png",
        name: "Ground Control"
    },
    "/The_Beatles_-_Across_The_Universe_47963680.mp3": {
        url: "/The_Beatles_-_Across_The_Universe_47963680.mp3",
        artist: "John Lennon",
        cover: "/lennon.png",
        name: "Accross the universe"
    },
    "/Noise_MC_-_Na_Marse_Klassno_63371930.mp3": {
        url: "/Noise_MC_-_Na_Marse_Klassno_63371930.mp3",
        artist: "Noize MC",
        cover: "/noize.png",
        name: "На марсе классно"
    },
    "/Zemlyane_-_Trava_u_doma_55297782.mp3": {
        url: "/Zemlyane_-_Trava_u_doma_55297782.mp3",
        artist: "Земляне",
        cover: "/earth.png",
        name: "Трава у дома"
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