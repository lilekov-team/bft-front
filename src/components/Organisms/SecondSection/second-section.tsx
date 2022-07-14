import { motion } from 'framer-motion'
import moment from 'moment'
import { useEffect, useState } from 'react'
import { useWindowDimensions } from '../../../hooks/dimension'
import Button, { ButtonVariants } from '../../Atoms/Button/button'
import { Routes } from '../../Molecules/Header/header'

const slides = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const transforms: { [key: number]: string } = {
    1: "7.5rem",
    2: "-7.146rem",
    3: "-22.584rem",
    4: "-38.772rem",
    5: "-38.772rem",
    6: "-38.772rem",
    7: "-38.772rem",
    8: "-38.772rem",
    9: "-38.772rem",
}


const transforms2: { [key: number]: string } = {
    1: "0rem",
    2: "-14.646rem",
    3: "-29.084rem",
    4: "-46.272rem",
    5: "-46.272rem",
    6: "-46.272rem",
    7: "-46.272rem",
    8: "-46.272rem",
    9: "-46.272rem",
}


const offsets: { [key: number]: string } = {
    1: "7.75rem",
    2: "22.426rem",
    3: "37.964rem",
    4: "54.352rem",
    5: "68.352rem",
    6: "86.2rem",
    7: "96.915rem",
    8: "114.666rem",
    9: "129.604rem",
}




const data: {
    [key: string]: {
        route: Routes,
        text: string
    }
} = {
    1: {
        route: Routes.BFT,
        text: `БФТ=52. Эта формула максимально ёмко описывает секрет успеха нашей Компании и огромной Команды. Всё, что мы делаем или к чему стремимся, возведено в квадрат. Такой подход поможет нам проделать увлекательный путь за границы орбиты прежних достижений. В космической экспедиции важна каждая мелочь. Поэтому внимательно слушайте аудиоподкасты.<br/>
        Это поможет заработать БФТ-деньги и получить подарки! 
        `
    },
    2: {
        route: Routes.Fuel,
        text: `БФТ=52. Эта формула максимально ёмко описывает секрет успеха нашей Компании и огромной Команды. Всё, что мы делаем или к чему стремимся, возведено в квадрат. Такой подход поможет нам проделать увлекательный путь за границы орбиты прежних достижений. В космической экспедиции важна каждая мелочь. Поэтому внимательно слушайте аудиоподкасты.<br/>
        Это поможет заработать БФТ-деньги и получить подарки! 
        `
    },
    3: {
        route: Routes.Collect,
        text: `БФТ=52. Эта формула максимально ёмко описывает секрет успеха нашей Компании и огромной Команды. Всё, что мы делаем или к чему стремимся, возведено в квадрат. Такой подход поможет нам проделать увлекательный путь за границы орбиты прежних достижений. В космической экспедиции важна каждая мелочь. Поэтому внимательно слушайте аудиоподкасты.<br/>
        Это поможет заработать БФТ-деньги и получить подарки! 
        `
    },
    4: {
        route: Routes.Launch,
        text: `БФТ=52. Эта формула максимально ёмко описывает секрет успеха нашей Компании и огромной Команды. Всё, что мы делаем или к чему стремимся, возведено в квадрат. Такой подход поможет нам проделать увлекательный путь за границы орбиты прежних достижений. В космической экспедиции важна каждая мелочь. Поэтому внимательно слушайте аудиоподкасты.<br/>
        Это поможет заработать БФТ-деньги и получить подарки! 
        `
    },
    5: {
        route: Routes.Route,
        text: `БФТ=52. Эта формула максимально ёмко описывает секрет успеха нашей Компании и огромной Команды. Всё, что мы делаем или к чему стремимся, возведено в квадрат. Такой подход поможет нам проделать увлекательный путь за границы орбиты прежних достижений. В космической экспедиции важна каждая мелочь. Поэтому внимательно слушайте аудиоподкасты.<br/>
        Это поможет заработать БФТ-деньги и получить подарки! 
        `
    },
    6: {
        route: Routes.Prepare,
        text: `БФТ=52. Эта формула максимально ёмко описывает секрет успеха нашей Компании и огромной Команды. Всё, что мы делаем или к чему стремимся, возведено в квадрат. Такой подход поможет нам проделать увлекательный путь за границы орбиты прежних достижений. В космической экспедиции важна каждая мелочь. Поэтому внимательно слушайте аудиоподкасты.<br/>
        Это поможет заработать БФТ-деньги и получить подарки! 
        `
    },
    7: {
        route: Routes.Works,
        text: `БФТ=52. Эта формула максимально ёмко описывает секрет успеха нашей Компании и огромной Команды. Всё, что мы делаем или к чему стремимся, возведено в квадрат. Такой подход поможет нам проделать увлекательный путь за границы орбиты прежних достижений. В космической экспедиции важна каждая мелочь. Поэтому внимательно слушайте аудиоподкасты.<br/>
        Это поможет заработать БФТ-деньги и получить подарки! 
        `
    },
    8: {
        route: Routes.Exit,
        text: `БФТ=52. Эта формула максимально ёмко описывает секрет успеха нашей Компании и огромной Команды. Всё, что мы делаем или к чему стремимся, возведено в квадрат. Такой подход поможет нам проделать увлекательный путь за границы орбиты прежних достижений. В космической экспедиции важна каждая мелочь. Поэтому внимательно слушайте аудиоподкасты.<br/>
        Это поможет заработать БФТ-деньги и получить подарки! 
        `
    },
    9: {
        route: Routes.Auction,
        text: `БФТ=52. Эта формула максимально ёмко описывает секрет успеха нашей Компании и огромной Команды. Всё, что мы делаем или к чему стремимся, возведено в квадрат. Такой подход поможет нам проделать увлекательный путь за границы орбиты прежних достижений. В космической экспедиции важна каждая мелочь. Поэтому внимательно слушайте аудиоподкасты.<br/>
        Это поможет заработать БФТ-деньги и получить подарки! 
        `
    },


}


const dates = ["30.07.2022", "06.08.2022", "13.08.2022", "20.08.2022", "27.08.2022", "03.09.2022", "10.09.2022", "15.09.2022", "15.09.2023"]

const SecondSection = ({
    handleNavigation
}: {
    handleNavigation: (route: Routes) => void
}) => {
    const { width } = useWindowDimensions()
    const [slide, setSlide] = useState(1)
    const [offsetSlide, setOffsetSlide] = useState(1)


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


    const handleChangeSlide = (index: number) => {
        setSlide(index)
    }

    const navigate = () => {
        const route = data[slide].route
        handleNavigation(route)
    }


    return (
        <div className="w-full flex flex-col mt-[12.5rem]">
            <div className="w-full overflow-hidden">
                <motion.div
                    initial={{
                        x: 120 / 16 * 1.11 * width / 100
                    }}
                    animate={{
                        x: transforms[offsetSlide]
                    }}
                    className="flex flex-row w-[157rem]">
                    <div className={`flex flex-col cursor-pointer mr-[5.813rem] h-[18.5rem] justify-between`} onClick={() => handleChangeSlide(1)}>
                        <div className="relative h-[12.125rem] flex items-center">
                            <img src={`/slide1.png`} alt="slide" className="bg-blend-screen w-[8.813rem] h-[11.25rem]" />
                            <img className="bg-blend-screen absolute left-[-1.5rem] top-[2rem]   min-w-[13.125rem] h-[9.563rem]" src={"/slidebg.png"} alt="slidebg" />
                        </div>
                        <div className="text-accent font-bold text-[1.5rem] leading-[1.825rem]">
                            25 июля<br />- 29 июля
                        </div>
                    </div>
                    <div className={`flex flex-col cursor-pointer h-[18.5rem] justify-between mr-[6.688rem]`} onClick={() => handleChangeSlide(2)}>
                        <div className="relative h-[12.125rem] flex items-center">
                            <img src={`/slide2.png`} alt="slide" className="bg-blend-screen w-[8.75rem] h-[12.125rem]" />
                            <img className="bg-blend-screen absolute left-[-1.5rem] top-[2rem]   min-w-[13.125rem] h-[9.563rem]" src={"/slidebg.png"} alt="slidebg" />
                        </div>
                        <div className="text-accent font-bold text-[1.5rem] leading-[1.825rem]">
                            1 августа<br /> - 5 августа
                        </div>
                    </div>
                    <div className={`flex flex-col cursor-pointer h-[18.5rem] justify-between mr-[5.813rem]`} onClick={() => handleChangeSlide(3)}>
                        <div className="relative h-[12.125rem] flex items-center">
                            <img src={`/slide3.png`} alt="slide" className="bg-blend-screen w-[7.063rem] h-[11.25rem]" />
                            <img className="bg-blend-screen absolute left-[-1.5rem] top-[2rem]   min-w-[13.125rem] h-[9.563rem]" src={"/slidebg.png"} alt="slidebg" />
                        </div>
                        <div className="text-accent font-bold text-[1.5rem] leading-[1.825rem]">
                            8 августа<br /> - 12 августа
                        </div>
                    </div>
                    <div className={`flex flex-col cursor-pointer h-[18.5rem] justify-between mr-[4rem]`} onClick={() => handleChangeSlide(4)}>
                        <div className="relative h-[12.125rem] flex items-center">
                            <img src={`/slide4.png`} alt="slide" className="bg-blend-screen w-[10rem] h-[11.25rem]" />
                            <img className="bg-blend-screen absolute left-[-1.5rem] top-[2rem]   min-w-[13.125rem] h-[9.563rem]" src={"/slidebg.png"} alt="slidebg" />
                        </div>
                        <div className="text-accent font-bold text-[1.5rem] leading-[1.825rem]">
                            15 августа<br /> - 19 августа
                        </div>
                    </div>
                    <div className={`flex flex-col cursor-pointer h-[18.5rem] justify-between mr-[4.375rem]`} onClick={() => handleChangeSlide(5)}>
                        <div className="relative h-[12.125rem] flex items-center">
                            <img src={`/slide5.png`} alt="slide" className="bg-blend-screen w-[13.563rem] h-[10.938rem]" />
                            <img className="bg-blend-screen absolute left-[-1.5rem] top-[2rem]   min-w-[13.125rem] h-[9.563rem]" src={"/slidebg.png"} alt="slidebg" />
                        </div>
                        <div className="text-accent font-bold text-[1.5rem] leading-[1.825rem]">
                            22 августа<br /> - 26 августа
                        </div>
                    </div>
                    <div className={`flex flex-col cursor-pointer h-[18.5rem] justify-between mr-[4.375rem]`} onClick={() => handleChangeSlide(6)}>
                        <div className="relative h-[12.125rem] flex items-center">
                            <img src={`/slide6.png`} alt="slide" className="bg-blend-screen w-[6.25rem] h-[11.25rem]" />
                            <img className="bg-blend-screen absolute left-[-1.5rem] top-[2rem]   min-w-[13.125rem] h-[9.563rem]" src={"/slidebg.png"} alt="slidebg" />
                        </div>
                        <div className="text-accent font-bold text-[1.5rem] leading-[1.825rem]">
                            29 августа<br /> - 2 сентября
                        </div>
                    </div>
                    <div className={`flex flex-col cursor-pointer h-[18.5rem] justify-between mr-[6.688rem]`} onClick={() => handleChangeSlide(7)}>
                        <div className="relative h-[12.125rem] flex items-center">
                            <img src={`/slide7.png`} alt="slide" className="bg-blend-screen w-[11.063rem] h-[11.25rem]" />
                            <img className="bg-blend-screen absolute left-[-1.5rem] top-[2rem]   min-w-[13.125rem] h-[9.563rem]" src={"/slidebg.png"} alt="slidebg" />
                        </div>
                        <div className="text-accent font-bold text-[1.5rem] leading-[1.825rem]">
                            5 сентября<br /> - 9 сентября
                        </div>
                    </div>
                    <div className={`flex flex-col cursor-pointer h-[18.5rem] justify-between mr-[5.75rem]`} onClick={() => handleChangeSlide(8)}>
                        <div className="relative h-[12.125rem] flex items-center">
                            <img src={`/slide8.png`} alt="slide" className="bg-blend-screen w-[9.188rem] h-[11.25rem]" />
                            <img className="bg-blend-screen absolute left-[-1.5rem] top-[2rem]   min-w-[13.125rem] h-[9.563rem]" src={"/slidebg.png"} alt="slidebg" />
                        </div>
                        <div className="text-accent font-bold text-[1.5rem] leading-[1.825rem]">
                            14 сентября
                        </div>
                    </div>
                    <div className={`flex flex-col cursor-pointer h-[18.5rem] justify-between `} onClick={() => handleChangeSlide(9)}>
                        <div className="relative h-[12.125rem] flex items-center">
                            <img src={`/slide9.png`} alt="slide" className="bg-blend-screen w-[10.063rem] h-[11.25rem]" />
                            <img className="bg-blend-screen absolute left-[-1.5rem] top-[2rem]   min-w-[13.125rem] h-[9.563rem]" src={"/slidebg.png"} alt="slidebg" />
                        </div>
                        <div className="text-accent font-bold text-[1.5rem] leading-[1.825rem]">
                            15 сентября
                        </div>
                    </div>
                </motion.div>
            </div>
            <div className="w-full overflow-hidden">
                <motion.div
                    initial={{
                        x: 120 / 16 * 1.11 * width / 100
                    }}
                    animate={{
                        x: transforms2[offsetSlide]
                    }}
                    className='mt-[2.375rem] h-[1.25rem] flex items-center relative '>
                    <svg width={2512 / 16 * 1.11 * width / 100} height={3}>
                        <line x1="0" y1="1" x2={width} y2="1" stroke="white" fill='white'
                            strokeDasharray="7" strokeWidth={2} />
                    </svg>
                    <motion.div
                        initial={{
                            width: "0rem",
                        }}
                        animate={{
                            width: offsets[slide]
                        }}
                        className='left-0 absolute bg-accent h-[0.625rem] shadow-pink'>

                    </motion.div>
                    {
                        Object.entries(offsets).map(([key, value]) => {
                            return <div
                                key={key}
                                style={{
                                    left: value,
                                    transform: `translateX(-0.25rem)`
                                }}
                                className={Number.parseInt(key) <= slide ? `absolute  w-[1.25rem] rounded-full h-[1.25rem] border-[0.3125rem] border-accent bg-white` : `absolute  w-[1.25rem] rounded-full h-[1.25rem] border-[0.1925rem] border-white bg-[#253572]`}>
                            </div>
                        })
                    }
                </motion.div>
            </div>
            <div className="w-full overflow-hidden h-[6rem] ">
                <motion.div
                    initial={{
                        x: 120 / 16 * 1.11 * width / 100
                    }}
                    animate={{
                        x: transforms2[offsetSlide]
                    }}
                    className="mt-[2.5rem] h-[2.rem] relative flex items-start"
                >
                    <div
                        style={{
                            left: offsets[1]
                        }}
                        className={`flex items-start font-bold text-base text-white absolute `}>
                        БФТ=5<span className='text-[0.75rem] leading-none mt-1'>2</span>
                    </div>
                    <div
                        style={{
                            left: offsets[2]
                        }}
                        className={`flex items-start font-bold text-base text-white absolute `}>
                        ПРОВЕРКА СВЯЗИ
                    </div>

                    <div
                        style={{
                            left: offsets[3]
                        }}
                        className={`flex items-start font-bold text-base text-white absolute `}>
                        СБОР ВЕЩЕЙ
                    </div>
                    <div
                        style={{
                            left: offsets[4]
                        }}
                        className={`flex items-start font-bold text-base text-white absolute `}>
                        ЗАПУСК ДВИГАТЕЛЯ
                    </div>
                    <div
                        style={{
                            left: offsets[5]
                        }}
                        className={`flex items-start font-bold text-base text-white absolute `}>
                        СТРОИМ МАРШРУТ
                    </div>
                    <div
                        style={{
                            left: offsets[6]
                        }}
                        className={`flex items-start font-bold text-base text-white absolute `}>
                        ПОДГОТОВКА<br />
                        ЭКИПАЖА
                    </div>
                    <div
                        style={{
                            left: offsets[7]
                        }}
                        className={`flex items-start font-bold text-base text-white absolute `}>
                        ПУСКОНАЛАДОЧНЫЕ<br />
                        РАБОТЫ
                    </div>
                    <div
                        style={{
                            left: offsets[8]
                        }}
                        className={`flex items-start font-bold text-base text-white absolute `}>
                        ВЫХОД ЗА ПРЕДЕЛЫ<br /> ОРБИТЫ<br />  <span className='font-normal'>(онлайн вечеринка)</span>

                    </div>
                    <div
                        style={{
                            left: offsets[9]
                        }}
                        className={`flex items-start font-bold text-base text-white absolute `}>
                        АУКЦИОН<br /> «НЕВЕСОМОСТЬ»
                    </div>
                </motion.div>
            </div>
            <div className='w-full flex justify-center mt-[5rem]'>
                <div className='max-w-[50rem] flex flex-col items-center'>
                        <p dangerouslySetInnerHTML={{
                            __html: data[slide].text
                        }}
                        className="mb-[2.5rem] text-lg"
                        >
                        </p>
                        <Button
                        variant={ButtonVariants.FILLED}
                        onClick={navigate}
                        >
                            Перейти
                        </Button>
                </div>
            </div>
        </div>
    )
}



export default SecondSection