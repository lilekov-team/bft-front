import axios from "axios"
import { audios } from "../../components/Molecules/Audio/audio"
import { AudioTrack } from "../../components/Organisms/SeventhSection/seventh-section"
import { v4 } from 'uuid'
import ym from 'react-yandex-metrika';
import { API_URL } from "../../config";










export const sendWords = async (text: string) => {


    const url = API_URL + "/contest/collecting"

    const jwt = getJwt()

    if (!jwt) {
        throw new Error("Вы не авторизованы")
    }

    try {
        const response = await axios.post(url, {
            collection: text
        }, {
            headers: {
                'X-api-token': jwt,
            }
        })




    } catch (err) {
        console.log(err)
        throw new Error("Ошибка отправки")
    }

}




export interface Winner {
    name: string,
    job: string,
    text: string,
    amount?: number
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



    const url = API_URL + "/contest/engine-starting"

    const jwt = getJwt()

    if (!jwt) {
        throw new Error("Вы не авторизованы")
    }

    try {
        const link = await uploadFileToMinio(file, buckets.engine)


        const response = await axios.post(url, {
            "engine_starting": text,
            "engine_starting_sound": link
        }, {
            headers: {
                'X-api-token': jwt,
            }
        })


    } catch (err) {
        console.log(err)
        throw new Error("Ошибка загрузки")
    }
}


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


    const url = API_URL + "/contest/crew-training"

    const jwt = getJwt()

    if (!jwt) {
        throw new Error("Вы не авторизованы")
    }

    try {
        const link = await uploadFileToMinio(file, buckets.crew)


        const response = await axios.post(url, {

            "crew_training": link
        }, {
            headers: {
                'X-api-token': jwt,
            }
        })


    } catch (err) {
        console.log(err)
        throw new Error("Ошибка загрузки")
    }
};


export const uploadPlot = async (
    file?: File,
    text?: string
): Promise<void> => {


    const url = API_URL + "/contest/camera-motor"

    const jwt = getJwt()

    if (!jwt) {
        throw new Error("Вы не авторизованы")
    }

    try {
        let link: string | undefined
        if (file) {

            link = await uploadFileToMinio(file, buckets.engine)
        }


        const response = await axios.post(url, {
            "camera_motor": text,
            "camera_motor_movies": link
        }, {
            headers: {
                'X-api-token': jwt,
            }
        })


    } catch (err) {
        console.log(err)
        throw new Error("Ошибка загрузки")
    }
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



    const url = API_URL + "/contest/out-orbit"

    const jwt = getJwt()

    if (!jwt) {
        throw new Error("Вы не авторизованы")
    }


    const data = {
        "out_orbit": text
    }

    try {
        const response = await axios.post(url, data, {
            headers: {
                'X-api-token': jwt,
            }
        })




    } catch (err) {
        console.log(err)
        throw new Error("Ошибка отправки")
    }

}


export const sendWord = async (text: string) => {
    const url = API_URL + "/contest/heard-podcasts"

    const jwt = getJwt()

    if (!jwt) {
        throw new Error("Вы не авторизованы")
    }


    const data = {
        "heard_podcasts": text
    }

    try {
        const response = await axios.post(url, data, {
            headers: {
                'X-api-token': jwt,
            }
        })




    } catch (err) {
        console.log(err)
        throw new Error("Ошибка отправки")
    }

}



export interface User {
    email: string,
}


export const getUser = (): User | undefined => {



    const userString = localStorage.getItem("belster-user")


    if (!userString) {
        return undefined
    }

    const user: User = JSON.parse(userString)

    return user
}


export const register = async (name: string, email: string, dep: string): Promise<void> => {
    localStorage.setItem("belster-registered", "1")
    localStorage.setItem("belster-user", JSON.stringify({
        email
    }))

    return new Promise<void>((res, rej) => {
        setTimeout(() => {
            res()
        }, 500)
    })
}


export const auth = async (jwt: string) => {
    const url = API_URL + "/contest"


    try {
        const response = await axios.post(url, {}, {
            headers: {
                'X-api-token': jwt,
            }
        })

        const user = {
            email: response.data.email
        }

        localStorage.setItem("belster-registered", "1")
        localStorage.setItem("belster-user", JSON.stringify(user))


    } catch (err: any) {
        console.log(err.request)
        throw new Error("Ошибка авторизации")
    }

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



const counter = 89595157

export const ymAuth = () => {
    const user = getUser()

    if (user) {
        ym('params', { email: user.email })
    }
}



export const viewVideo = (title: string, percentage: number) => {
    ym('reachGoal', 'Просмотр видео', {
        title,
        viewed: percentage
    })
}

export const listenAudio = (title: string, percentage: number) => {
    ym('reachGoal', 'Прослушивание аудио', {
        title,
        viewed: percentage
    })
}





export const viewSection = (title: string) => {
    ym('reachGoal', 'Просмотр раздела: ' + title, {
        title,
    })
}




export const getJwt = () => {
    return localStorage.getItem('belster-jwt')
}




export const heardPodcasts = async (podcast: string) => {

    const url = API_URL + "/contest/out-orbit"

    const jwt = getJwt()

    if (!jwt) {
        throw new Error("Вы не авторизованы")
    }


    const data = {
        "heard_podcasts": podcast
    }

    try {
        const response = await axios.post(url, data, {
            headers: {
                'X-api-token': jwt,
            }
        })




    } catch (err) {
        console.log(err)
        throw new Error("Ошибка отправки")
    }
}



enum buckets {
    engine = "engine-starting-sound",
    crew = "crew-training",
    camera = "camera-motor-movies"
}




export const uploadFileToMinio = async (file: File, bucket: buckets): Promise<string> => {

    const formData = new FormData();


    formData.append(`file`, file);

    const url = API_URL + '/contest/upload' + `?bucket=${bucket}`

    const jwt = getJwt()


    if (!jwt) {
        throw new Error("Вы не авторизованы")
    }

    try {
        const response = await axios.post(url, formData, {
            headers: {
                'X-api-token': jwt,
            }
        })



        return response.data[0].url



    } catch (err) {
        console.log(err)
        throw new Error("Ошибка отправки")
    }

}


export interface AnalyticsData {
    "action_content": string,
    "cutout": boolean,
    "time_video"?: number
}



export const sendAnalyticsData = async (data: AnalyticsData) => {


    const url = API_URL + "/contest/usage"

    const jwt = getJwt()

    if (!jwt) {
        return
    }


    try {
        const response = await axios.post(url, data, {
            headers: {
                'X-api-token': jwt,
            }
        })


    } catch (err) {
        console.log(err)
    }


}