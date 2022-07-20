import Image from 'next/image'
import { useWindowDimensions } from '../../../hooks/dimension'

export enum Routes {
    BFT = "bft",
    Fuel = "fuel",
    Collect = "collect",
    Launch = "launch",
    Route = "route",
    Prepare = "prepare",
    Works = "works",
    Exit = "exit",
    Auction = "auction",
    Navigation = "navigation"

}

interface HeaderOption {
    label: string
    route: Routes
}



const options: HeaderOption[] = [
    {
        label: 'БФТ=52',
        route: Routes.BFT
    },
    {
        label: 'Топливо опыта',
        route: Routes.Fuel
    },
    {
        label: 'Сбор вещей',
        route: Routes.Collect
    },
    {
        label: 'Запуск двигателя',
        route: Routes.Launch
    },
    {
        label: 'Строим маршрут',
        route: Routes.Route
    },
    {
        label: 'Подготовка экипажа',
        route: Routes.Prepare
    },
    {
        label: 'Пусконаладочные работы',
        route: Routes.Works
    },
    {
        label: 'Выход за пределы орбиты',
        route: Routes.Exit
    },

]



const Header = ({
    handleNavigation
}: {
    handleNavigation: (route: Routes) => void
}) => {
    const { width } = useWindowDimensions()


    return (
        <header className="w-full flex justify-center pl-[5.375rem] pr-[7.5rem] pt-[1.25rem]">
            <div className="w-full  flex justify-between items-center">
                <Image src="/logo.png" alt="logo" width={150 / 16 * 1.11 * width / 100} height={52 / 16 * 1.11 * width / 100} priority/>
                <div className='flex items-center'>
                    <div className='border-l-2 border-l-accent pl-[0.75rem] mr-[1.875rem] flex items-start text-white text-sm leading-[1.0675rem] cursor-pointer' onClick={() => handleNavigation(Routes.BFT)}>
                        <span >БФТ=5</span><span className='text-[0.625rem] pt-[1px] leading-none'>2</span>
                    </div>

                    <div className='border-l-2 border-l-accent pl-[0.75rem] mr-[1.875rem] flex items-start text-white text-sm leading-[1.0675rem] cursor-pointer' onClick={() => handleNavigation(Routes.Fuel)}>
                        <span >Топливо<br/>опыта</span>
                    </div>

                    <div className='border-l-2 border-l-accent pl-[0.75rem] mr-[1.875rem] flex items-start text-white text-sm leading-[1.0675rem] cursor-pointer' onClick={() => handleNavigation(Routes.Collect)}>
                        <span >Сбор<br/>вещей</span>
                    </div>

                    <div className='border-l-2 border-l-accent pl-[0.75rem] mr-[1.875rem] flex items-start text-white text-sm leading-[1.0675rem] cursor-pointer' onClick={() => handleNavigation(Routes.Launch)}>
                        <span >Запуск<br/>двигателя</span>
                    </div>
                    <div className='border-l-2 border-l-accent pl-[0.75rem] mr-[1.875rem] flex items-start text-white text-sm leading-[1.0675rem] cursor-pointer' onClick={() => handleNavigation(Routes.Route)}>
                        <span >Строим<br/>маршрут</span>
                    </div>
                    <div className='border-l-2 border-l-accent pl-[0.75rem] mr-[1.875rem] flex items-start text-white text-sm leading-[1.0675rem] cursor-pointer' onClick={() => handleNavigation(Routes.Prepare)}>
                        <span >Подготовка<br/>экипажа</span>
                    </div>
                    <div className='border-l-2 border-l-accent pl-[0.75rem] mr-[1.875rem] flex items-start text-white text-sm leading-[1.0675rem] cursor-pointer' onClick={() => handleNavigation(Routes.Works)}>
                        <span >Пусконаладочные<br/>работы</span>
                    </div>
                    <div className='border-l-2 border-l-accent pl-[0.75rem] flex items-start text-white text-sm leading-[1.0675rem] cursor-pointer' onClick={() => handleNavigation(Routes.Exit)}>
                        <span >Выход за<br/>пределы орбиты</span>
                    </div>
                </div>
            </div>
        </header>
    )
}



export default Header