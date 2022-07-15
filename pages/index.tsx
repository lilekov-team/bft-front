import type { NextPage } from 'next'
import Header, { Routes } from '../src/components/Molecules/Header/header'
import MainSection from '../src/components/Organisms/MainSection/main-section'
import RegistrationModal from '../src/components/Organisms/Registration/registration'
import SecondSection from '../src/components/Organisms/SecondSection/second-section'
import ThirdSection from '../src/components/Organisms/ThirdSection/third-section'
import { UIEventHandler, useEffect, useRef, useState } from 'react'
import { Audio } from '../src/components/Molecules/Audio/audio'
import { VideoModal } from '../src/components/Molecules/VideoModal/video-modal'
import FourthSection from '../src/components/Organisms/FourthSection/fourth-section'
import FifthSection from '../src/components/Organisms/FifthSection/fifth-section'
import SixthSection from '../src/components/Organisms/SixthSection/sixth-section'
import SeventhSection, { AudioTrack } from '../src/components/Organisms/SeventhSection/seventh-section'
import EighthSection from '../src/components/Organisms/EighthSection/eighth-section'
import NinthSection from '../src/components/Organisms/NinthSection/ninth-section'
import TenthSection from '../src/components/Organisms/TenthSection/tenth-section'
import EleventhSection from '../src/components/Organisms/EleventhSection/eleventhSection'
import TwelthSection from '../src/components/Organisms/TwelthSection/twekth-section'
import ThirteenthSection from '../src/components/Organisms/ThirteenthSection/thriteenth-section'
import FourteenthSection from '../src/components/Organisms/FourteenthSection/fouteenth-section'
import FifteenthSection from '../src/components/Organisms/FifteenthSection/fifteenth-section'
import SixteenthSection from '../src/components/Organisms/SixteenthSection/sixteenth-section'
import SeventeenthSection from '../src/components/Organisms/SeventeenthSection/seventeenth-section'
import EighteenthSection from '../src/components/Organisms/EighteenthSection/eighteenth-section'
import NineteenthSection from '../src/components/Organisms/NinteenthSection/nineteenth-section'
import TwentiethSection from '../src/components/Organisms/TwentiethSection/twentieth-section'
import TwentyfirstSection from '../src/components/Organisms/TwentyfirstSection/twentyfirst-section'
import { AnimatePresence, motion } from 'framer-motion'





const Home: NextPage = () => {
  const [showAudio, setShowAudio] = useState(false)
  const [audio, setAudio] = useState<AudioTrack | undefined>()
  const [video, setVideo] = useState<string | undefined>()
  const [audioPlaying, setAudioPlaying] = useState(false)
  const [controls, setControls] = useState(false)
  const controlsRef = useRef(false)

  const toggleAudio = (play: boolean) => {
    setAudioPlaying(play)
  }

  useEffect(() => {
    setShowAudio(true)
  }, [])


  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])


  const handleNavigation = (route: Routes) => {
    console.log(route)

    document.querySelector(`#${route}`)?.scrollIntoView({
      behavior: 'smooth'
    });
  }

  const playAudio = (src?: AudioTrack) => {
    if (!src) {
      setAudioPlaying(false)
    } else {
      setAudioPlaying(true)
    }
    setAudio(src)

  }

  const playVideo = (src?: string) => {
    setAudio(undefined)
    setVideo(src)
  }


  const handleScroll = (e: Event) => {

    const height =
      window.scrollY

    const header = document.querySelector("header")?.getBoundingClientRect().height ?? 0
    console.log(height, header, controls)
    if (height > header + 50 && !controlsRef.current) {
      setControls(true)
      controlsRef.current = true
    } else if (height < header + 50 && controlsRef.current) {
      setControls(false)
      controlsRef.current = false
    }

  }



  console.log(controls)

  return (
    <div className='w-full min-h-[200rem] bg-main bg-main-fill bg-no-repeat pb-[6.25rem] relative'>
      <Header
        handleNavigation={handleNavigation}
      />
      <RegistrationModal />
      <div className='w-full min-h-screen flex flex-col text-white'>
        <MainSection />
        <SecondSection
          handleNavigation={handleNavigation}
        />
        <ThirdSection
          playAudio={playAudio}
          playVideo={playVideo}
          audio={audio}
          play={audioPlaying}
        />
        <FourthSection />
        <FifthSection />
        <SixthSection />
        <SeventhSection
          playAudio={playAudio}
          audio={audio}
          play={audioPlaying}
        />
        <EighthSection
          playAudio={playAudio}
          audio={audio}
          play={audioPlaying}
        />
        <NinthSection />
        <TenthSection />
        <EleventhSection />
        <TwelthSection />
        <ThirteenthSection />
        <FourteenthSection />
        <FifteenthSection />
        <SixteenthSection />
        <SeventeenthSection />
        <EighteenthSection />
        <NineteenthSection />
        <TwentiethSection />
        <TwentyfirstSection />
      </div>

      {
        showAudio ?
          <Audio
            audio={audio}
            setAudio={toggleAudio}
            play={audioPlaying}
          />
          : null
      }
      <VideoModal
        video={video}
        setVideo={() => {
          setVideo(undefined)
        }}
      />
      <AnimatePresence>
        {
          controls &&
          <motion.div
          initial={{
            x: "12rem",
            y: "-50%"
          }}
          animate={{
            x: "0rem",
            y:"-50%"
          }}

          exit={{
            x: "12rem",
            y:"-50%"
          }}
          
          className='fixed right-[2.5rem] top-[50%] translate-y-[-50%]  z-50'>
            <img onClick={() => handleNavigation(Routes.Fuel)} src="/mic.png" alt="mic" className='cursor-pointer mb-[1.875rem]' />
            <img onClick={() => {
              window.scroll({
                behavior: "smooth",
                top: 0,
                left: 0
              })
            }} src="/menu.png" alt="menu" className='cursor-pointer ' />
          </motion.div>
        }
      </AnimatePresence>

    </div>
  )
}

export default Home
