import { AnimatePresence, motion } from "framer-motion"
import Image from "next/image"
import { useEffect, useState } from "react"
import { FaTimes } from "react-icons/fa"
import { useInView } from "react-intersection-observer"
import { Employee, viewSection } from "../../../data/api/api"

import { useWindowDimensions } from "../../../hooks/dimension"
import { transformPx } from "../../../utils/utils"
import EmployeeCarousel from "../../Molecules/EmployeeCarousel/employee-carousel"








const TwelthSection = () => {

    const { width } = useWindowDimensions()
    const [selected, setSelected] = useState<Employee | undefined>()
    const { ref, inView } = useInView({
        triggerOnce: true
    })
    const [filter, setFilter] = useState<string | undefined>()


    const toggleFilter = (value: string) => {
        if (value === filter) {
            setFilter(undefined)
        } else {
            setFilter(value)
        }
    }

    useEffect(() => {
        if (inView) {
            viewSection("Наши звезды")
        }
    }, [inView])


    const selectEmployee = (employee?: Employee) => {
        setSelected(employee)
    }

    return (
        <div ref={ref} className="w-full flex flex-col   relative z-0">
            <div className="flex justify-between pl-[14.5rem] pr-[12.25rem]">
                <div className="flex flex-col">

                    <div className="flex items-center mb-[1.875rem] ">
                        <h3 className="font-bold text-[3.375rem] text- mr-[1.25rem]">
                            Наши <span className="text-accent">звезды</span>
                        </h3>
                        <Image
                            width={transformPx(193, width)}
                            height={transformPx(36, width)}
                            src="/flying.png"
                        />
                    </div>
                    <div className="flex flex-col mb-5rem">
                        <p className="text-white text-lg mb-[1rem]">
                            В каждом звездном экипаже есть люди, на которых стоит равняться. Каждый год<br /> мы отмечаем таких сотрудников в Команде БФТ. Они не просто работают,<br /> а привносят новые идеи, развиваютКомпанию и вместе с ней стремятся<br /> каждый день быть лучше, чем вчера!
                        </p>
                        <p className="text-white text-lg mb-[1rem]">
                            Одним словом — ЭТО НАШИ ЗВЁЗДЫ!
                        </p>
                        <p className="text-white text-lg">
                            И в этом году мы рады представить Команде более <strong>100 наших сотрудников</strong>,<br /> получивших почётные звания БФТ.
                        </p>
                    </div>
                </div>

                <AnimatePresence>
                    {
                        selected &&
                        <motion.div
                            initial={{
                                opacity: 0,
                            }}
                            animate={{
                                opacity: 1,
                            }}
                            exit={{
                                opacity: 0,
                            }}
                            style={{
                                background: `linear-gradient(0deg, rgba(1, 0, 55, 0.85), rgba(1, 0, 55, 0.85)),
                                linear-gradient(0deg, #FF235B, #FF235B)`
                            }}
                            className="w-[28.75rem] mt-[1.5rem] h-[16.813rem] py-[2.25rem] px-[2.75rem] shadow-pink-full border-accent border-2 relative">
                            <img
                                className="cursor-pointer absolute top-[1.375rem] right-[0.75rem] w-[1.5rem] h-[1.5rem]"
                                onClick={() => {
                                    setSelected(undefined)
                                }}
                                src="/close.png"
                                alt="close"
                            />
                            <div className="text-white text-sm leading-tight flex flex-col">
                                <p className="mb-2">
                                    ДОЛЖНОСТЬ: {selected.position}
                                </p>
                                <p className="mb-2">
                                    ГОРОД: {selected.town}
                                </p>
                                <p className="mb-2">
                                    ДОСТИЖЕНИЕ: {selected.achievement}
                                </p>
                                <p className="mb-2">
                                    ПОЧЕТНОЕ ЗВАНИЕ: {selected.honorary_title}
                                </p>
                                <p className="mb-2">
                                    НАГРАДА: {selected.awards}
                                </p>
                            </div>
                        </motion.div>
                    }
                </AnimatePresence>
            </div>
            <div className="pl-[14.5rem] pr-[12.25rem] flex flex-row flex-wrap mt-[3.75rem] gap-3">
                <div onClick={() => toggleFilter("Благодарности")} className={`cursor-pointer w-[11.875rem] h-[3.75rem] flex justify-center items-center border-2 text-lg  ${filter === "Благодарности" ? "bg-accent shadow-pink-sm border-transparent text-white " : "border-random-grey text-random-grey bg-transparent"}`}>
                    Благодарности
                </div>
                <div onClick={() => toggleFilter("Заслуженный мастер /Мастер")} className={`cursor-pointer w-[21.688rem] h-[3.75rem] flex justify-center items-center border-2 text-lg  ${filter === "Заслуженный мастер /Мастер" ? "bg-accent shadow-pink-sm border-transparent text-white " : "border-random-grey text-random-grey bg-transparent"}`}>
                    Заслуженный мастер /Мастер
                </div>
                <div onClick={() => toggleFilter("Заслуженный преподаватель/ преподаватель")} className={`cursor-pointer w-[30.963rem] h-[3.75rem] flex justify-center items-center border-2 text-lg  ${filter === "Заслуженный преподаватель/ преподаватель" ? "bg-accent shadow-pink-sm border-transparent text-white " : "border-random-grey text-random-grey bg-transparent"}`}>
                Заслуженный преподаватель/ преподаватель
                </div>
                <div onClick={() => toggleFilter("Автор публикаций")} className={`cursor-pointer w-[14.438rem] h-[3.75rem] flex justify-center items-center border-2 text-lg  ${filter === "Автор публикаций" ? "bg-accent shadow-pink-sm border-transparent text-white " : "border-random-grey text-random-grey bg-transparent"}`}>
                Автор публикаций
                </div>
                <div onClick={() => toggleFilter("Профессионал")} className={`cursor-pointer w-[11.813rem] h-[3.75rem] flex justify-center items-center border-2 text-lg  ${filter === "Профессионал" ? "bg-accent shadow-pink-sm border-transparent text-white " : "border-random-grey text-random-grey bg-transparent"}`}>
                Профессионал
                </div>
                <div onClick={() => toggleFilter("Спасибо капитан")} className={`cursor-pointer w-[12.813rem] h-[3.75rem] flex justify-center items-center border-2 text-lg  ${filter === "Спасибо капитан" ? "bg-accent shadow-pink-sm border-transparent text-white " : "border-random-grey text-random-grey bg-transparent"}`}>
                Спасибо капитан
                </div>
                <div onClick={() => toggleFilter("Знаки отличия")} className={`cursor-pointer w-[11.375rem] h-[3.75rem] flex justify-center items-center border-2 text-lg  ${filter === "Знаки отличия" ? "bg-accent shadow-pink-sm border-transparent text-white " : "border-random-grey text-random-grey bg-transparent"}`}>
                Знаки отличия
                </div>
                
            </div>
            <EmployeeCarousel
                select={selectEmployee}
                selected={selected}
                filter={filter}
            />
        </div>
    )
}



export default TwelthSection