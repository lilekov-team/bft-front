import Image from "next/image"
import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"
import { viewSection } from "../../../data/api/api"
import { useWindowDimensions } from "../../../hooks/dimension"
import { transformPx } from "../../../utils/utils"
import WordsForm from "../../Molecules/WordsForm/words-form"

const FifthSection = () => {
   
    const { width } = useWindowDimensions()
    const {ref, inView} = useInView({
        triggerOnce: true
    })


    useEffect(() => {
        if (inView) {
            viewSection("Сбор вещей")
        }
    }, [inView])
    

    return (
        <div ref={ref}  id="collect" className="w-full flex flex-col mt-[12.5rem] px-[14.5rem] relative z-0 ">
            <div className="flex items-center mb-[1.875rem] ">
                <h3 className="font-bold text-[3.375rem] text- mr-[1.25rem]">
                    Сбор <span className="text-accent">вещей</span>
                </h3>
                <Image
                    width={transformPx(193, width)}
                    height={transformPx(36, width)}
                    src="/flying.png"
                />
            </div>
            <div className="flex mb-[5rem]">
                <p className="w-[22.5rem] text-accent font-bold text-2xl leading-tight mr-[2.375rem]">
                    Чтобы выйти за пределы орбиты, возьмем с собой только самое необходимое - опыт профессиональных побед, выход на новый уровень возможностей.
                </p>
                <p className="w-[29rem] text-white font-normal text-lg leading-tight">
                    Давайте соберем общий багаж из историй, которые изменили профессиональную жизнь каждого. Расскажите о своих достижениях. Есть одно условие - рассказ должен не превышать <br/>25 слов - нужно экономить место в багажном модуле. Напишите свою историю и нажмите «отправить». Мы выберем самые яркие рассказы и опубликуем их. А автор лучшего будет приглашен в прямой эфир, посвящённый юбилею БФТ.
                </p>
            </div>
            <WordsForm
            
            
            />

            <img 
            src="/astro.png"
            className="absolute right-0 top-0 -z-10"
            alt="astro2"
            style={{
                width: transformPx(642.5, width),
                height: transformPx( 1270, width),
                transform: `translateY(-35%)`
            }}
            />

        </div>
    )
}



export default FifthSection