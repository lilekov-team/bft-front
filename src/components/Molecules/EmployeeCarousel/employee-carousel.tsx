import { useEffect, useRef, useState } from "react"
import { Employee, getEmployees } from "../../../data/api/api"
import Slider, { Settings } from "react-slick";
import Image from "next/image";
import { transformPx } from "../../../utils/utils";
import { useWindowDimensions } from "../../../hooks/dimension";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useInView } from 'react-intersection-observer'




const EmployeeCarousel = ({
    select,
    selected
}: {

    selected: Employee | undefined,
    select: (empl: Employee | undefined) => void
}) => {
    const { width } = useWindowDimensions()
    const [employees, setEmployees] = useState<Employee[]>([])
    const ref = useRef<Slider>(null)
    const { ref: observerRef, inView } = useInView({
        triggerOnce: true,

    })
    const [settings, setSettings] = useState<Settings>({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        variableWidth: true,
        draggable: false,
        arrows: false,
        pauseOnHover: true,
        


    })

    const [autoplay, setAutoplay] = useState(false)

    useEffect(() => {
        getEmployees()
            .then((res) => {
                setEmployees(res)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])


    useEffect(() => {
        if (inView) {
            setTimeout(() => {
                ref.current?.slickPlay()
                
            }, 1000)

        }
    }, [inView])



    const next = () => {
        ref.current?.slickNext()
    }

    const prev = () => {
        ref.current?.slickPrev()
    }


    return (
        <div onMouseEnter={() => {
            ref.current?.slickPause()
        }}
        onMouseLeave={() => {
            ref.current?.slickPlay()
        }}
        ref={observerRef} className="mt-[3.75rem] h-[27.625rem] overflow-hidden px-[14.5rem] relative pt-[0.5rem]">
            <Slider  ref={ref} autoplay={autoplay} {...settings}>
                {
                    employees.map((employee, index) => {
                        return <Slide
                        key={index}
                        employee={employee}
                        select={select}
                        selected={selected}
                        />
                    })
                }
            </Slider>
            <div onClick={prev} className="cursor-pointer z-50 w-[3.125rem] h-[3.125rem] absolute left-[14.5rem] top-[18.563rem] rounded-full bg-accent flex justify-center items-center">
                <FaChevronLeft />
            </div>
            <div onClick={next} className="cursor-pointer z-50 w-[3.125rem] h-[3.125rem] absolute right-[11.825rem] top-[18.563rem] rounded-full bg-accent flex justify-center items-center">
                <FaChevronRight />
            </div>
        </div>

    )
}



const Slide = ({
    employee,
    select,
    selected
}: {
    employee: Employee,
    selected: Employee | undefined,
    select: (empl: Employee | undefined) => void
}) => {
    const { width } = useWindowDimensions()
    const [hover, setHover] = useState(false)


    


    return (
        <div >
            <div className="flex flex-col relative w-[16.125rem]">
                <img

                    style={{
                        width: transformPx(200, width),
                        height: transformPx(240, width)

                    }}
                    src={employee.image}
                    onMouseEnter={() => {
                        setHover(true)
                        select(employee)
                    }}
                    onMouseLeave={() => {
                        setHover(false)
                        select(undefined)
                    }}
                    className={`grayscale hover:grayscale-0 duration-300 hover:shadow-pink-full cursor-pointer`}
                />
                <div className="h-[1.25rem] mt-[2.5rem] flex items-center w-full relative">
                    <div className="w-full h-[0.625rem] shadow-blue bg-white">

                    </div>
                    <div className="absolute left-0 w-[1.25rem] h-[1.25rem] rounded-full border-[0.1925rem] border-white bg-[#253572]">

                    </div>
                </div>
                <div className="mt-[1.625rem] flex flex-col pr-[4rem]">
                    <span className="text-pale-blue text-2xl font-bold ">
                        {employee.name}
                    </span>
                    <span className="text-pale-blue text-2xl font-bold mb-[1rem]">
                        {employee.surname}
                    </span>
                    <span className="text-white-blue text-lg  ">
                        {employee.job}
                    </span>
                </div>
            </div>
        </div>
    )
}


export default EmployeeCarousel