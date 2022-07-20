import { motion } from 'framer-motion'
import moment from 'moment'
import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { viewSection } from '../../../data/api/api'
import { useWindowDimensions } from '../../../hooks/dimension'
import { transformPx } from '../../../utils/utils'
import Button, { ButtonVariants } from '../../Atoms/Button/button'
import { Routes } from '../../Molecules/Header/header'

const slides = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const transforms: { [key: number]: string } = {
    1: "14.5rem",
    2: "0.354rem",
    3: "-15.584rem",
    4: "-31.772rem",
    5: "-47.352rem",
    6: "-47.352rem",
    7: "-47.352rem",
    8: "-47.352rem",
    9: "-47.352rem",
}


const transforms2: { [key: number]: string } = {
    1: "0rem",
    2: "-14.646rem",
    3: "-29.084rem",
    4: "-46.272rem",
    5: "-60.272rem",
    6: "-60.272rem",
    7: "-60.272rem",
    8: "-60.272rem",
    9: "-60.272rem",
}


const offsets: { [key: number]: string } = {
    1: "14.75rem",
    2: "29.426rem",
    3: "44.964rem",
    4: "61.352rem",
    5: "75.352rem",
    6: "93.2rem",
    7: "108.290rem",
    8: "125.041rem",
    9: "138.979rem",
}




const data: {
    [key: string]: {
        route: Routes,
        text: string
    }
} = {
    1: {
        route: Routes.BFT,
        text: `БФТ=52. Эта формула максимально ёмко описывает секрет успеха нашей Компании и огромной<br/> Команды. Всё, что мы делаем или к чему стремимся, возведено в квадрат. Такой подход поможет<br/> нам проделать увлекательный путь за границы орбиты прежних достижений. В космической<br/> экспедиции важна каждая мелочь. Поэтому внимательно слушайте аудиоподкасты. Это поможет<br/> заработать БФТ-деньги и получить подарки!  
        `
    },
    2: {
        route: Routes.Fuel,
        text: `Проверка связи. Приём! Как слышно? Не хотелось бы остаться без связи посреди бескрайнего<br/> космоса, правда же? К счастью, нам это не грозит. Подготовит нас к полёту опытный астронавт в<br/> Команде БФТ. Перед экспедицией она проведёт подробный инструктаж, где расскажет, как собрать<br/> вещи, подготовить корабль,  собрать экипаж и, конечно, достичь желаемого результата. А ещё не<br/> забываем ловить космические радиочастоты, чтобы послушать аудиоподкаст “Солнечные батареи”<br/> и пополнить топливные баки опыта!
        `
    },
    3: {
        route: Routes.Collect,
        text: `Сбор вещей. Важный этап подготовки космической экспедиции. Ведь с собой мы возьмём только<br/> самое нужное. Это профессиональный опыт каждого из нас. Задача новой недели - написать<br/> рассказ о своих достижениях в Компании. Но всего из 25 слов - экономим место в багаже! Самые<br/> яркие истории будут отмечены ценными подарками! Ну а пока идёт сбор вещей, слушаем<br/> традиционный аудиоподкаст под названием “25 слов”- топливные баки опыта сами себя не<br/> наполнят!
        `
    },
    4: {
        route: Routes.Launch,
        text: `Запуск двигателя. Тише. Давайте прислушаемся, как звучит наш космодром… Здесь целая<br/> симфония из звуков! Предлагаем создать из них наш собственный трек о космических IT-миссиях -<br/> “Рокот космодрома БФТ-25”. Это будет хит! И гимн нашей дружной Команды! А вдохновиться нам<br/> поможет плейлист из мировых хитов на тему космоса и, конечно, свежий аудиоподкаст “Звуки<br/> вселенной”. Кстати, принять участие в создании подкастов может каждый из нас! Для этого нужно<br/> отправить заявку на <a style="text-decoration: underline;" href="mailto:d.chavshino@bftcom.com">почту</a>.
        `
    },
    5: {
        route: Routes.Route,
        text: `Подготовка экипажа. Готова ли космическая Команда БФТ на подвиги? Ответ однозначен. Всегда<br/> готова и совершает их каждый день. Ведь каждый из нас - настоящий ГЕРОЙ! Как на работе, так и<br/> дома, со своими детьми. На этой неделе у нас будет новое задание - посмотреть на себя глазами<br/> наших БФТусиков. Они ответят на несколько вопросов о работе своих родителей. А их ответы мы<br/> запишем на видео и смонтируем душевный ролик. Заряжаемся позитивной энергией и продолжаем<br/> пополнять топливные баки опыта очередным аудиоподкастом “Источник энергии”!
        `
    },
    6: {
        route: Routes.Prepare,
        text: `Строим маршрут. Наше межгалактическое путешествие будет намного остросюжетней, чем это показано в<br/> известных блокбастерах. Мы сделаем своё кино об экспедиции! В этом нам помогут наши 4 Сверхновые<br/> ценности БФТ. Уверены: получится лучше, чем в Голливуде! Кстати, у нас будет и своя Аллея Звёзд,<br/> которая откроется 29 августа.  На ней мы увидим имена всех наших коллег, получивших в этом году<br/> почётные звания БФТ! Равняемся на них и пишем сценарии для нашей киноленты! А в творческом порыве<br/> не забываем про новый аудиоподкаст “Ценности окрыляют” и про возможность стать участником<br/> <a style="text-decoration: underline;" href="mailto:d.chavshino@bftcom.com">следующего подкаста</a>! 
        `
    },
    7: {
        route: Routes.Works,
        text: `Пусконаладочные работы. Здесь как и в IT- проектах нужны точные расчёты. Предлагаем проверить<br/> наши интеллектуальные способности в космической онлайн-игре “Однажды в космосе”. Для этого<br/> собираем команду, читаем инструкцию и помним, что успех рассчитывается по формуле БФТ=52!<br/> Кстати, до Аукциона остаётся всё меньше и меньше световых лет, поэтому не упустите шанс<br/> заработать ещё больше БФТ-денег! И послушать подкаст под названием “Посыл во вселенную”.
        `
    },
    8: {
        route: Routes.Exit,
        text: `Выход за пределы орбиты. Да, друзья! Мы на финишной прямой захватывающих испытаний и<br/> готовы выйти за пределы орбиты наших прежних достижений! Слушаем финальный аудиоподкаст<br/> “Земля в иллюминаторе” и наполняем под завязку топливные баки опыта. 8 недель космического<br/> онлайн-марафона пролетели незаметно. И настала пора подводить итоги: голосуем за лучший<br/> аудиоподкаст и пользуемся последней возможностью заработать БФТ-деньги! Уже на этой неделе<br/> пройдёт юбилейный прямой эфир, на котором всех ждёт масса сюрпризов!
        `
    },
    9: {
        route: Routes.Auction,
        text: `Аукцион “Невесомость”. Ура, мы уже достигли первой космической скорости и можем объявить<br/> старт Аукциона! Готовим накопленные БФТ-деньги и участвуем. Приятный бонус - у зрителей тоже<br/> есть возможность заработать приз!  
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
    const { ref, inView } = useInView({
        triggerOnce: true
    })


    useEffect(() => {
        if (inView) {
            viewSection("Календарь")
        }
    }, [inView])



    useEffect(() => {
        const today = moment()

        for (let i = 0; i < dates.length; i++) {
            const d = moment(dates[i], "DD.MM.yyyy")

            if (today.isBefore(d)) {

                setOffsetSlide(i + 1)
                setSlide(i + 1)
                break
            }
        }
    }, [])


    const handleChangeSlide = (index: number) => {
        setSlide(index)
        setOffsetSlide(index)
    }

    const navigate = () => {
        const route = data[slide].route
        handleNavigation(route)
    }


    return (
        <div id={"navigation"} ref={ref} className="w-full flex flex-col mt-[12.5rem]">
            <div className="w-full overflow-hidden">
                <motion.div
                    initial={{
                        x: transformPx(232, width)
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
                            12 сентября<br /> - 14 сентября
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
                    className='mt-[2.375rem] h-[1.25rem] flex items-center relative '
                    style={{
                        width: '138.979rem'
                    }}
                >
                    <svg width={2512 / 16 * 1.11 * width / 100} height={3}>
                        <line x1="0" y1="1" x2={2512 / 16 * 1.11 * width / 100} y2="1" stroke="white" fill='white'
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
            <div className="w-full overflow-hidden h-[7rem] ">
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
                        className={`flex flex-col w-[12.688rem] items-start font-bold text-base text-white absolute `}>
                        ВЫХОД ЗА ПРЕДЕЛЫ<br /> ОРБИТЫ<br />  <p className='font-normal'>(онлайн вечеринка)</p>

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
                <div className=' flex flex-col items-center'>
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