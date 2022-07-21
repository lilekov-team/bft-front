import { route } from 'next/dist/server/router'
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
    Navigation = "navigation",
    Connection = "connection",
    CollectResults = "collect-results",
    LaunchResults = "launch-results",
    PrepareResults = "prepare-results",
    Stars = "stars",
    Camera = "camera",
    CameraResults = 'camera-results',
    WorksResults = 'works-results',
    Listen = 'listen',
    Final = 'final',
    Key = 'key'
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
    handleNavigation: navigate,
    toggle,
    hidden
}: {
    handleNavigation: (route: Routes) => void,
    hidden: Routes[],
    toggle: () => void
}) => {
    const { width } = useWindowDimensions()


    const handleNavigation = (route: Routes) => {
        if (hidden.includes(route)) return
        navigate(route)
    }

    return (
        <header className="w-full flex justify-center pl-[13rem] pr-[14.5rem] pt-[1.25rem]">
            <div className="w-full  flex justify-between items-center">
                <Image src="/logo.png" alt="logo" width={150 / 16 * 1.11 * width / 100} height={52 / 16 * 1.11 * width / 100} priority onClick={() => toggle()} />
                <div className='flex items-center'>


                    <div className='relative border-l-2 border-l-accent pl-[0.75rem] mr-[1.875rem] flex items-start text-white text-sm leading-[1.0675rem] cursor-pointer' onClick={() => handleNavigation(Routes.BFT)}>

                        <span >БФТ=5</span><span className='text-[0.625rem] pt-[1px] leading-none'>2</span>
                    </div>

                    <div className='border-l-2 border-l-accent pl-[0.75rem] mr-[1.875rem] flex items-start text-white text-sm leading-[1.0675rem] cursor-pointer' onClick={() => handleNavigation(Routes.Fuel)}>
                        <span >Топливо<br />опыта</span>
                    </div>

                    <div className={`relative border-l-2 border-l-accent pl-[0.75rem] mr-[1.875rem] flex items-start text-white text-sm leading-[1.0675rem] ${hidden.includes(Routes.Collect) ? 'cursor-default' : 'cursor-pointer'}`} onClick={() => handleNavigation(Routes.Collect)}>
                        {
                            hidden.includes(Routes.Collect) &&
                            <div className='l-[0.75rem] z-20 absolute top-1/2 translate-y-[-50%]'>
                                <img src="/lock.png" alt='lock' />
                            </div>
                        }
                        <span className={`${hidden.includes(Routes.Collect) ? 'text-[#ffffff44]' : 'text-white'}`}>Сбор<br />вещей</span>
                    </div>

                    <div className={`relative border-l-2 border-l-accent pl-[0.75rem] mr-[1.875rem] flex items-start text-white text-sm leading-[1.0675rem] ${hidden.includes(Routes.Launch) ? 'cursor-default' : 'cursor-pointer'}`} onClick={() => handleNavigation(Routes.Launch)}>
                        {
                            hidden.includes(Routes.Launch) &&
                            <div className='l-[0.75rem] z-20 absolute top-1/2 translate-y-[-50%]'>
                                <img src="/lock.png" alt='lock' />
                            </div>
                        }
                        <span className={`${hidden.includes(Routes.Launch) ? 'text-[#ffffff44]' : 'text-white'}`}>Запуск<br />двигателя</span>
                    </div>
                    <div className={`relative border-l-2 border-l-accent pl-[0.75rem] mr-[1.875rem] flex items-start text-white text-sm leading-[1.0675rem] ${hidden.includes(Routes.Route) ? 'cursor-default' : 'cursor-pointer'}`} onClick={() => handleNavigation(Routes.Route)}>
                        {
                            hidden.includes(Routes.Route) &&
                            <div className='l-[0.75rem] z-20 absolute top-1/2 translate-y-[-50%]'>
                                <img src="/lock.png" alt='lock' />
                            </div>
                        }
                        <span className={`${hidden.includes(Routes.Route) ? 'text-[#ffffff44]' : 'text-white'}`}>Строим<br />маршрут</span>
                    </div>
                    <div className={`relative border-l-2 border-l-accent pl-[0.75rem] mr-[1.875rem] flex items-start text-white text-sm leading-[1.0675rem] ${hidden.includes(Routes.Prepare) ? 'cursor-default' : 'cursor-pointer'}`} onClick={() => handleNavigation(Routes.Prepare)}>
                        {
                            hidden.includes(Routes.Prepare) &&
                            <div className='l-[0.75rem] z-20 absolute top-1/2 translate-y-[-50%]'>
                                <img src="/lock.png" alt='lock' />
                            </div>
                        }
                        <span className={`${hidden.includes(Routes.Prepare) ? 'text-[#ffffff44]' : 'text-white'}`}>Подготовка<br />экипажа</span>
                    </div>
                    <div className={`relative border-l-2 border-l-accent pl-[0.75rem] mr-[1.875rem] flex items-start text-white text-sm leading-[1.0675rem] ${hidden.includes(Routes.Works) ? 'cursor-default' : 'cursor-pointer'}`} onClick={() => handleNavigation(Routes.Works)}>
                        {
                            hidden.includes(Routes.Works) &&
                            <div className='l-[0.75rem] z-20 absolute top-1/2 translate-y-[-50%]'>
                                <img src="/lock.png" alt='lock' />
                            </div>
                        }
                        <span className={`${hidden.includes(Routes.Works) ? 'text-[#ffffff44]' : 'text-white'}`}>Пусконаладочные<br />работы</span>
                    </div>
                    <div className={`relative border-l-2 border-l-accent pl-[0.75rem]  flex items-start text-white text-sm leading-[1.0675rem] ${hidden.includes(Routes.Exit) ? 'cursor-default' : 'cursor-pointer'}`} onClick={() => handleNavigation(Routes.Exit)}>
                        {
                            hidden.includes(Routes.Exit) &&
                            <div className='l-[0.75rem] z-20 absolute top-1/2 translate-y-[-50%]'>
                                <img src="/lock.png" alt='lock' />
                            </div>
                        }
                        <span className={`${hidden.includes(Routes.Exit) ? 'text-[#ffffff44]' : 'text-white'}`}>Выход за<br />пределы орбиты</span>
                    </div>
                </div>
            </div>
        </header>
    )
}



export default Header