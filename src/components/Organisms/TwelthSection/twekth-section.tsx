import Image from "next/image"
import { useWindowDimensions } from "../../../hooks/dimension"
import { transformPx } from "../../../utils/utils"
import EmployeeCarousel from "../../Molecules/EmployeeCarousel/employee-carousel"

const TwelthSection = () => {

    const { width } = useWindowDimensions()


    return (
        <div className="w-full flex flex-col  px-[7.5rem] relative z-0">
            <div className="flex items-center mb-[1.875rem] ">
                <h3 className="font-bold text-[3.375rem] text- mr-[1.25rem]">
                    Наши <span className="text-accent">звезды</span>
                </h3>
                <Image
                    width={transformPx(189, width)}
                    height={transformPx(26, width)}
                    src="/flying.png"
                />
            </div>
            <div className="flex flex-col mb-5rem">
                <p className="text-white text-lg mb-[1rem]">
                    В каждом звездном экипаже есть люди, на которых стоит равняться. Каждый год мы отмечаем<br /> таких сотрудников в Команде БФТ. Они не просто работают, а привносят новые идеи,<br />
                    развивают Компанию и вместе с ней стремятся каждый день быть лучше, чем вчера!


                </p>
                <p className="text-white text-lg mb-[1rem]">
                    Одним словом — ЭТО НАШИ ЗВЁЗДЫ!

                </p>
                <p className="text-white text-lg">
                    И в этом году мы рады представить Команде наших сотрудников,<br />получивших почётные звания БФТ.
                </p>
            </div>
            <EmployeeCarousel />
        </div>
    )
}



export default TwelthSection