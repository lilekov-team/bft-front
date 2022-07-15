import axios from "axios"
import { audios } from "../../components/Molecules/Audio/audio"
import { AudioTrack } from "../../components/Organisms/SeventhSection/seventh-section"
import {v4} from 'uuid'

export const sendWords = async (text: string) => {


    return new Promise<void>((res, rej) => {
        setTimeout(() => {
            res()
        }, 500)
    })

}




export interface Winner {
    name: string,
    job: string,
    text: string,
    amount? : number
}



const winners: Winner[] = [
    {
        name: "Иванов Иван",
        job: "HR-департамент",
        text: `<strong>Искусственный интеллект соберет все изображения в единый образ</strong>, выучив все снимки. В пятницу результат – первый, приславший снимок получит сумму БФТ-денег и шанс попасть в Эфир финального мероприятия.`,
        amount: 1500,
    },
    {
        name: "Иванов Иван",
        job: "HR-департамент",
        text: `<strong>Искусственный интеллект соберет все изображения в единый образ</strong>, выучив все снимки. В пятницу результат – первый, приславший снимок получит сумму БФТ-денег и шанс попасть в Эфир финального мероприятия.`,
        amount: 1200,
    
    },
    {
        name: "Иванов Иван",
        job: "HR-департамент",
        text: `<strong>Искусственный интеллект соберет все изображения в единый образ</strong>, выучив все снимки. В пятницу результат – первый, приславший снимок получит сумму БФТ-денег и шанс попасть в Эфир финального мероприятия.`,
        amount: 1000,
    },
]

export const getWinners = async (): Promise<Winner[]> => {


    return new Promise((res, rej) => {
        setTimeout(() => {
            res(winners)
        }, 500)
    })

}




export const uploadFile = async (
    file: File,
    text: string
): Promise<void> => {


    const formData = new FormData();

    formData.append(`file`, file);
    formData.append('text', text)


    return new Promise<void>((res, rej) => {
        setTimeout(() => {
            res()
        }, 500)
    })
};



export const fetchTrack = async (): Promise<AudioTrack> => {


    return new Promise((res, rej) => {
        setTimeout(() => {
            res(audios["https://www2.cs.uic.edu/~i101/SoundFiles/StarWars60.wav"])
        }, 500)
    })

}



export const uploadVideo = async (
    file: File,

): Promise<void> => {


    const formData = new FormData();

    formData.append(`file`, file);



    return new Promise<void>((res, rej) => {
        setTimeout(() => {
            res()
        }, 500)
    })
};


export const uploadPlot = async (
    file?: File,
    text?: string
): Promise<void> => {


    const formData = new FormData();

    if (file) {
        formData.append(`file`, file);

    }


    if (text) {
        formData.append(`text`, text);
    }




    return new Promise<void>((res, rej) => {
        setTimeout(() => {
            res()
        }, 500)
    })
};




export const getPlotWinners = async (): Promise<Winner[]> => {


    return new Promise((res, rej) => {
        setTimeout(() => {
            res(winners)
        }, 500)
    })

}


export const getGameWinners = async (): Promise<Winner[]> => {


    return new Promise((res, rej) => {
        setTimeout(() => {
            res(winners)
        }, 500)
    })

}



export const sendPodcastVote = async (text: string) => {


    return new Promise<void>((res, rej) => {
        setTimeout(() => {
            res()
        }, 500)
    })

}


export const sendWord = async (text: string) => {


    return new Promise<void>((res, rej) => {
        setTimeout(() => {
            res()
        }, 500)
    })

}


export const register = async (name: string, email: string, dep: string):Promise<void> => {





    localStorage.setItem("belster-registered","1")

    return new Promise<void>((res, rej) => {
        setTimeout(() => {
            res()
        }, 500)
    })

}



export interface Employee {
    name: string,
    surname: string,
    job: string,
    image: string,
    description: string,
    id: string,
}


const employees: Employee[] = [
    {
        id: v4(),
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        name: "Имя",
        surname: "Фамилия",
        job: "Very important job",
        image: "/people/1.png",
    },
    {
        id: v4(),
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        name: "Имя",
        surname: "Фамилия",
        job: "Very important job",
        image: "/people/2.png",
    },
    {
        id: v4(),
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        name: "Имя",
        surname: "Фамилия",
        job: "Very important job",
        image: "/people/3.png",
    },
    {
        id: v4(),
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        name: "Имя",
        surname: "Фамилия",
        job: "Very important job",
        image: "/people/4.png",
    },
    {
        id: v4(),
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        name: "Имя",
        surname: "Фамилия",
        job: "Very important job",
        image: "/people/4.png",
    },
    {
        id: v4(),
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        name: "Имя",
        surname: "Фамилия",
        job: "Very important job",
        image: "/people/4.png",
    },
    {
        id: v4(),
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        name: "Имя",
        surname: "Фамилия",
        job: "Very important job",
        image: "/people/4.png",
    },
    {
        id: v4(),
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        name: "Имя",
        surname: "Фамилия",
        job: "Very important job",
        image: "/people/4.png",
    },
    {
        id: v4(),
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        name: "Имя",
        surname: "Фамилия",
        job: "Very important job",
        image: "/people/4.png",
    },
    {
        id: v4(),
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        name: "Имя",
        surname: "Фамилия",
        job: "Very important job",
        image: "/people/4.png",
    },

    {
        id: v4(),
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        name: "Имя",
        surname: "Фамилия",
        job: "Very important job",
        image: "/people/4.png",
    },
    {
        id: v4(),
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        name: "Имя",
        surname: "Фамилия",
        job: "Very important job",
        image: "/people/4.png",
    },
    {
        id: v4(),
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        name: "Имя",
        surname: "Фамилия",
        job: "Very important job",
        image: "/people/4.png",
    },
    {
        id: v4(),
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        name: "Имя",
        surname: "Фамилия",
        job: "Very important job",
        image: "/people/4.png",
    },

    {
        id: v4(),
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        name: "Имя",
        surname: "Фамилия",
        job: "Very important job",
        image: "/people/4.png",
    },
]



export const getEmployees = async (): Promise<Employee[]> => {


    return new Promise((res, rej) => {
        setTimeout(() => {
            res(employees)
        }, 500)
    })

}
