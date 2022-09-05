import axios from "axios"
import { audios } from "../../components/Molecules/Audio/audio"
import { AudioTrack } from "../../components/Organisms/SeventhSection/seventh-section"
import { v4 } from 'uuid'
import ym from 'react-yandex-metrika';
import { API_URL } from "../../config";
import { winnersSixth } from "./winners-sixth";










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
        name: "Шишкина Анастасия",
        job: "Консультант Отдела сопровождения",
        text: `<strong>Искусственный интеллект соберет все изображения в единый образ</strong>, выучив все снимки. В пятницу результат – первый, приславший снимок получит сумму БФТ-денег и шанс попасть в Эфир финального мероприятия.`,
        amount: 1500,
    },
    {
        name: "Черентаева Татьяна",
        job: "Консультант 2 категории Отдела сопровождения",
        text: `<strong>Искусственный интеллект соберет все изображения в единый образ</strong>, выучив все снимки. В пятницу результат – первый, приславший снимок получит сумму БФТ-денег и шанс попасть в Эфир финального мероприятия.`,
        amount: 1200,

    },
]

export const getWinners = async (): Promise<Winner[]> => {


    return new Promise((res, rej) => {
        setTimeout(() => {
            res(winners)
        }, 500)
    })

}




export const getWinnersSixth = async (): Promise<Winner[]> => {


    return new Promise((res, rej) => {
        setTimeout(() => {
            res(winnersSixth)
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
            res(audios["/BFT3.mp3"])
        }, 100)
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
    collection: string[]
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

        const user = response.data

        localStorage.setItem("belster-registered", "1")
        localStorage.setItem("belster-user", JSON.stringify(user))


    } catch (err: any) {
        console.log(err.request)
        throw new Error("Ошибка авторизации")
    }

}





export interface Employee {
    title: string,
    photo: string,
    position: string,
    town: string,
    achievement: string,
    honorary_title: string,
    awards: string,
    last_name: string,
    first_name: string
}


const employees: Employee[] = [{"title":"БЛАГОДАРНОСТИ","photo":"https://25.bftcom.com/e.fedorets@bftcom.com.jpg","last_name":"Федорец","first_name":"Екатерина","position":"Заместитель директора департамента ДП","town":"Челябинск","achievement":"Многолетняя результативная работа, надежность и стремление к постоянному профессиональному росту, преданность интересам Компании","honorary_title":"БЛАГОДАРНОСТЬ ГД","awards":"150 БФТ-денег"},{"title":"БЛАГОДАРНОСТИ","photo":"https://25.bftcom.com/o.zarkova@bftcom.com.jpg","last_name":"Заркова","first_name":"Оксана","position":"Заместитель директора департамента ДПУ","town":"Москва","achievement":"Многолетний безупречный труд на благо Компании, стремление к высоким стандартам, умение побеждать, воодушевлять и поддерживать высокий командный дух, профессионализм, благодаря которому растет количество лояльных Заказчиков","honorary_title":"БЛАГОДАРНОСТЬ ГД","awards":"150 БФТ-денег"},{"title":"БЛАГОДАРНОСТИ","photo":"https://25.bftcom.com/k.shchetochkina@bftcom.com.jpg","last_name":"Щёточкина","first_name":"Ксения","position":"Аналитик ДП","town":"Москва","achievement":"Ответственный подход, четкость в выполнении поставленных задач, умение работать с большим объемом информации и стабильная успешная работа","honorary_title":"БЛАГОДАРНОСТЬ 1-го ЗАМЕСТИТЕЛЯ ГД","awards":"130 БФТ-денег"},{"title":"БЛАГОДАРНОСТИ","photo":"https://25.bftcom.com/t.sibileva@bftcom.com.JPG","last_name":"Сибилева","first_name":"Татьяна","position":"Старший менеджер ОКД ПД","town":"Москва","achievement":"Высокое мастерство, вдумчивость при решении задач и стремление не останавливаться на достигнутом","honorary_title":"БЛАГОДАРНОСТЬ 1-го ЗАМЕСТИТЕЛЯ ГД","awards":"130 БФТ-денег"},{"title":"БЛАГОДАРНОСТИ","photo":"https://25.bftcom.com/d.bogoyavlenskaya@bftcom.com.jpg","last_name":"Богоявленская","first_name":"Дарья","position":"Менеджер по организации маркетинговых мероприятий Управления маркетинга","town":"Москва","achievement":"Высокая ответственность, добросовестность и старательность в работе","honorary_title":"БЛАГОДАРНОСТЬ 1-го ЗАМЕСТИТЕЛЯ ГД","awards":"130 БФТ-денег"},{"title":"БЛАГОДАРНОСТИ","photo":"https://25.bftcom.com/m.kislyakova@bftcom.com.jpg","last_name":"Кислякова","first_name":"Марина","position":"Специалист по связям с общественностью  Управления маркетинга","town":"Москва","achievement":"Ответственный и творческий подход к любой сложной задаче, отзывчивость и помощь коллегам","honorary_title":"БЛАГОДАРНОСТЬ 1-го ЗАМЕСТИТЕЛЯ ГД","awards":"130 БФТ-денег"},{"title":"БЛАГОДАРНОСТИ","photo":"https://25.bftcom.com/i.kayuk@bftcom.com.png","last_name":"Каюк","first_name":"Игорь","position":"Ведущий программист УР ДВП","town":"Белгород","achievement":"Плодотворная многолетняя работа, к юбилею Компании  и отличные результаты работы на проекте МДМ Минздрав.","honorary_title":"Грамота в связи с 25-ти летием","awards":""},{"title":"Знаки отличия","photo":"https://25.bftcom.com/e.mihaylov@bftcom.com.jpg","last_name":"Михайлов","first_name":"Евгений","position":"Ведущий разработчик УР ДПиМР","town":"Чебоксары","achievement":"Большой вклад в разработку программных продуктов на платформе ICE, а также за вклад в проект внедрения БФТ.Хранилища в Роструде","honorary_title":"СЕРЕБРЯНЫЙ ЗНАК","awards":""},{"title":"Знаки отличия","photo":"https://25.bftcom.com/n.ushakov@bftcom.com.jpg","last_name":"Ушаков","first_name":"Николай","position":"Главный программист УР ДИР","town":"Москва","achievement":"Высокое мастество и профессиональное выстраивание работы команды разработки","honorary_title":"СЕРЕБРЯНЫЙ ЗНАК","awards":""},{"title":"Знаки отличия","photo":"https://25.bftcom.com/t.silideykina@bftcom.com.jpg","last_name":"Силидейкина","first_name":"Татьяна","position":"Руководитель АУ ДГЗиФК","town":"Волгоград","achievement":"Высокий профессионализм и ответственный подход к поставленным задачам, а также помощь коллегам в решении задач любой сложности","honorary_title":"СЕРЕБРЯНЫЙ ЗНАК","awards":""},{"title":"Знаки отличия","photo":"https://25.bftcom.com/e.fedotova@bftcom.com.jpg","last_name":"Федотова","first_name":"Елена","position":"Главный специалист второй линии сопровождения УВиС ДСУМИ ДУА","town":"Новокузнецк","achievement":"Эффективность и высокий уровень организации работы в рамках реализации проектов внедрения и сопровождения, умение качественно выполнить значительный объем работы в короткие сроки.","honorary_title":"СЕРЕБРЯНЫЙ ЗНАК","awards":""},{"title":"Знаки отличия","photo":"https://25.bftcom.com/l.smolnikova@bftcom.com.jpg","last_name":"Смольникова","first_name":"Людмила","position":"Руководитель группы направлений УТ ДОК","town":"Москва","achievement":"Высокий профессионализм, наставничество, ответственность и приверженность интересам Компании","honorary_title":"СЕРЕБРЯНЫЙ ЗНАК","awards":""},{"title":"Знаки отличия","photo":"https://25.bftcom.com/o.karsakova@bftcom.com.jpg","last_name":"Карсакова","first_name":"Ольга","position":"Руководитель направления Управления тестирования ДОК (Белгород) ДОК","town":"Белгород","achievement":"Многолетний труд на благо Компании, высокий профессионализм и наставничество","honorary_title":"СЕРЕБРЯНЫЙ ЗНАК","awards":""},{"title":"Знаки отличия","photo":"https://25.bftcom.com/e.drozdova@bftcom.com.jpg","last_name":"Дроздова","first_name":"Елена","position":"Ведущий эксперт,Аналитическое управление ДПиМР","town":"Москва","achievement":"Елена берет на себя и с неизменно высоким качеством выполняет особо сложные задачи внедрения аналитической системы во многих ключевых проектах. В частности, задачи проектирования сложных OLAP кубов для ПФР и проведение испытаний в Росреестре.\n Выдвижение и мотивация Елены очень важно. Она по сути взяла на себя роль ведущего аналитика тимлида в очень сложном проекте Росреестра в условиях отсутствия необходимой поддержки со стороны предыдущей команды","honorary_title":"СЕРЕБРЯНЫЙ ЗНАК","awards":""},{"title":"ЗАСЛУЖЕННЫЙ МАСТЕР БФТ ","photo":"https://25.bftcom.com/f.egorov@bftcom.com.jpg","last_name":"Егоров","first_name":"Федор","position":"Руководитель АУ ДЦУИ ДУА","town":"Москва","achievement":"Высочайший профессионализм, большой вклад в развитие продукта и преданность Компании","honorary_title":"ЗАСЛУЖЕННЫЙ МАСТЕР БФТ","awards":"150 БФТ-денег"},{"title":"ЗАСЛУЖЕННЫЙ МАСТЕР БФТ ","photo":"https://25.bftcom.com/a.sisiukov@bftcom.com.jpg","last_name":"Сисюков","first_name":"Артем","position":"Начальник отдела системных разработок ДЦУИ ДУА","town":"Санкт-Петербург","achievement":"Высочайший профессионализм, большой вклад в развитие продукта и преданность Компании","honorary_title":"ЗАСЛУЖЕННЫЙ МАСТЕР БФТ","awards":"150 БФТ-денег"},{"title":"ЗАСЛУЖЕННЫЙ МАСТЕР БФТ ","photo":"https://25.bftcom.com/d.sarychev@bftcom.com.jpg","last_name":"Сарычев","first_name":"Денис","position":"Руководитель УР ДП","town":"Москва","achievement":"Высокий уровень профессионального мастерства и многолетняя преданность интересам Компании","honorary_title":"ЗАСЛУЖЕННЫЙ МАСТЕР БФТ","awards":"150 БФТ-денег"},{"title":"ЗАСЛУЖЕННЫЙ МАСТЕР БФТ ","photo":"https://25.bftcom.com/a.dotol@bftcom.com.jpg","last_name":"Дотоль","first_name":"Александр","position":"Региональный директор Иркутского отделения ДЭ ДСКК","town":"Иркутск","achievement":"Высочайший уровень мастерства управления коллективом, профессионализм и большой личный вклад в решение поставленных задач в сжатые сроки\n\n","honorary_title":"ЗАСЛУЖЕННЫЙ МАСТЕР БФТ","awards":"150 БФТ-денег"},{"title":"ЗАСЛУЖЕННЫЙ МАСТЕР БФТ ","photo":"https://25.bftcom.com/s.kogan@bftcom.com.jpg","last_name":"Коган","first_name":"Сергей","position":"Заместитель директора департамента ДМАиК","town":"Москва","achievement":"Многолетняя успешная работа по решению задач продуктового развития Компании\n\n","honorary_title":"ЗАСЛУЖЕННЫЙ МАСТЕР БФТ","awards":"150 БФТ-денег"},{"title":"МАСТЕР БФТ ","photo":"https://25.bftcom.com/n.lepeha@bftcom.com.JPG","last_name":"Лепеха","first_name":"Наталья","position":"Региональный директор ЦВС ДЭ ДСКК","town":"Белгород","achievement":"Высокое мастерство в управлении коллективом, успехи в профессиональной деятельности и самоотверженный труд","honorary_title":"МАСТЕР БФТ","awards":"130 БФТ-денег"},{"title":"МАСТЕР БФТ ","photo":"https://25.bftcom.com/r.valeev@bftcom.com.jpg","last_name":"Валеев","first_name":"Ринат","position":"Ведущий программист УР ДВП","town":"Казань","achievement":"Высокое мастерство, успехи в профессиональной деятельности и самоотверженный труд","honorary_title":"МАСТЕР БФТ","awards":"130 БФТ-денег"},{"title":"МАСТЕР БФТ ","photo":"https://25.bftcom.com/s.ryakhin@bftcom.com.jpeg","last_name":"Ряхин","first_name":"Сергей","position":"Руководитель проектов ДПУ","town":"Волгоград","achievement":"Высокий стабильный уровень ведения проектов, ответственный подход к каждой задаче, выстраивание эффективных","honorary_title":"МАСТЕР БФТ","awards":"130 БФТ-денег"},{"title":"МАСТЕР БФТ ","photo":"https://25.bftcom.com/v.beganova@bftcom.com.JPG","last_name":"Беганова","first_name":"Виктория","position":"Ведущий аналитик АУ ДГЗиФК","town":"Белгород","achievement":"Высокий профессионализм и ответственный подход к решению поставленных задач, а также помощь коллегам в решении задач","honorary_title":"МАСТЕР БФТ","awards":"130 БФТ-денег"},{"title":"МАСТЕР БФТ ","photo":"https://25.bftcom.com/p.zholokh@bftcom.com.JPG","last_name":"Жолох","first_name":"Павел","position":"Ведущий программист УР ДГЗиФК","town":"Нижний Новгород","achievement":"Высокий профессионализм и ответственный подход к решению поставленных задач, а также помощь коллегам в решении задач любой сложности","honorary_title":"МАСТЕР БФТ","awards":"130 БФТ-денег"},{"title":"МАСТЕР БФТ ","photo":"https://25.bftcom.com/d.ukhov@bftcom.com.jpg","last_name":"Ухов","first_name":"Дмитрий","position":"Ведущий программист УР ДГЗиФК","town":"Нижний Новгород","achievement":"Высокий профессионализм и ответственный подход к решению поставленных задач, а также помощь коллегам в решении задач любой сложности","honorary_title":"МАСТЕР БФТ","awards":"130 БФТ-денег"},{"title":"МАСТЕР БФТ ","photo":"https://25.bftcom.com/a.smirnova@bftcom.com.jpg","last_name":"Смирнова","first_name":"Алена","position":"Методист УВиС ДСУМИ ДУА","town":"Новокузнецк","achievement":"Мастерство, высокая работоспособность, многозадачность, отличное знание продукта, поддержание клиенто-ориентированного имиджа Компании и приверженность ее идеям\n","honorary_title":"МАСТЕР БФТ","awards":"130 БФТ-денег"},{"title":"МАСТЕР БФТ ","photo":"https://25.bftcom.com/e.khudyakova@bftcom.com.jpg","last_name":"Худякова","first_name":"Екатерина","position":"Заместитель руководителя АУ ДП","town":"Пермь","achievement":"Высокий уровень профессионализма и личный вклад в поддержку и развитие функционала системы АЦК-П по ведению электронных соглашений","honorary_title":"МАСТЕР БФТ","awards":"130 БФТ-денег"},{"title":"МАСТЕР БФТ ","photo":"https://25.bftcom.com/j.marina@bftcom.com.jpg","last_name":"Марина","first_name":"Юлия","position":"Ведущий специалист УФиТС ДЭ ДСКК","town":"Волгоград","achievement":"Выдающиеся профессиональные достижения, высокая личная эффективность и преданность общему делу","honorary_title":"МАСТЕР БФТ","awards":"130 БФТ-денег"},{"title":"МАСТЕР БФТ ","photo":"https://25.bftcom.com/i.komarov@bftcom.com.JPG","last_name":"Комаров","first_name":"Иван","position":"Ведущий специалист УКП ДКСНП ДСКК","town":"Москва","achievement":"Высокий уровень профессионализма, готовность прийти в любое время на выручку пользователям и коллегам","honorary_title":"МАСТЕР БФТ","awards":"130 БФТ-денег"},{"title":"МАСТЕР БФТ ","photo":"https://25.bftcom.com/d.bespalov@bftcom.com.jpg","last_name":"Беспалов","first_name":"Дмитрий","position":"Старший специалист сопровождения нетиповых проектов ЦТС ДСКК","town":"Белгород","achievement":"Неравнодушное отношение к работе, самоотверженный труд, профессионализм и ответственный подход к проблемам Заказчика","honorary_title":"МАСТЕР БФТ","awards":"130 БФТ-денег"},{"title":"МАСТЕР БФТ ","photo":"https://25.bftcom.com/n.smola@bftcom.com.jpg","last_name":"Смола","first_name":"Надежда","position":"Ведущий специалист Благовещенского отделения ДЭ ДСКК","town":"Благовещенск","achievement":"Высокий уровень профессионализма, ответственное и добросовестное отношение к выполняемым задачам по сопровождению Заказчиков, внедрение и обучение новых сотрудников региональных отделений ДЭ ДСКК\n","honorary_title":"МАСТЕР БФТ","awards":"130 БФТ-денег"},{"title":"МАСТЕР БФТ ","photo":"https://25.bftcom.com/n.shumakova@bftcom.com.jpg","last_name":"Шумакова","first_name":"Наталья","position":"Ведущий специалист Благовещенского отделения ДЭ ДСКК","town":"Благовещенск","achievement":"Высокий уровень профессионализма, ответственное и добросовестное отношение к выполняемым задачам. Экспертное знание методологии и функционала АЦК-Финансы в связке с АЦК-Планирование и АЦК-Госзаказ позволяет Наталье решать задачи любой сложности по сопровождению Заказчиков","honorary_title":"МАСТЕР БФТ","awards":"130 БФТ-денег"},{"title":"МАСТЕР БФТ ","photo":"https://25.bftcom.com/e.barzakh@bftcom.com.jpg","last_name":"Барзах","first_name":"Екатерина","position":"Старший специалист Томского отделения ДЭ ДСКК","town":"Томск","achievement":"Успехи в профессиональной деятельности и самоотверженный труд, ответственный подход к поставленным задачам","honorary_title":"МАСТЕР БФТ","awards":"130 БФТ-денег"},{"title":"МАСТЕР БФТ ","photo":"https://25.bftcom.com/s.zvyagina@bftcom.com.jpg","last_name":"Звягина","first_name":"Светлана","position":"Ведущий специалист Нижегородского отделения ДЭ ДСКК","town":"Нижний Новгород","achievement":"Высокий уровень профессионализма, личная самоотдача на проектах сопровождения и внедрения продукта АЦК-Планирование\n\n","honorary_title":"МАСТЕР БФТ","awards":"130 БФТ-денег"},{"title":"МАСТЕР БФТ ","photo":"https://25.bftcom.com/a.zapara@bftcom.com.JPG","last_name":"Запара","first_name":"Анна","position":"Старший специалист ЦВС ДЭ ДСКК","town":"Белгород","achievement":"Ответственное и добросовестное отношение к работе, экспертные знания системы \"АЦК-Планирование\" в связке с системой \"АЦК-Финансы\". Анна обладает прочными знаниями, позволяющими решать задачи любого уровня сложности, проявлять инициативу в получении нового опыта, всегда готова делиться полученной информацией с коллегами.","honorary_title":"МАСТЕР БФТ","awards":"130 БФТ-денег"},{"title":"МАСТЕР БФТ ","photo":"https://25.bftcom.com/i.rakityanskaya@bftcom.com.jpg","last_name":"Ракитянская","first_name":"Инна","position":"Руководитель направления ЦВС ДЭ ДСКК","town":"Белгород","achievement":"Высокий уровень профессионализма, ответственное и добросовестное отношение к выполняемым задачам","honorary_title":"МАСТЕР БФТ","awards":"130 БФТ-денег"},{"title":"МАСТЕР БФТ ","photo":"https://25.bftcom.com/a.evdokimov@bftcom.com.jpg","last_name":"Евдокимов","first_name":"Алексей","position":"Руководитель АУ ДИР","town":"Москва","achievement":"Высокий профессионализм в работе над проектом казначейства г. Москвы","honorary_title":"МАСТЕР БФТ","awards":"130 БФТ-денег"},{"title":"МАСТЕР БФТ ","photo":"https://25.bftcom.com/a.korotkov@bftcom.com.jpg","last_name":"Коротков","first_name":"Андрей","position":"Функциональный архитектор УА ДИР","town":"Белгород","achievement":"Высокое мастерство, успехи в профессиональной деятельности, самоотверженный труд и глубокое погружение в процессы Заказчика\n","honorary_title":"МАСТЕР БФТ","awards":"130 БФТ-денег"},{"title":"МАСТЕР БФТ ","photo":"https://25.bftcom.com/s.leksin@bftcom.com.jpg","last_name":"Лексин","first_name":"Семён","position":"Ведущий специалист УТ ДОК","town":"Дубна","achievement":"Высокое мастерство, личная инициатива, качественное выполнение поставленных задач и активное участие в тестировании новых продуктов","honorary_title":"МАСТЕР БФТ","awards":"130 БФТ-денег"},{"title":"МАСТЕР БФТ ","photo":"https://25.bftcom.com/y.dinusheva@bftcom.com.jpeg","last_name":"Динушева","first_name":"Яна","position":"Старший специалист отдела технической документации ДОК","town":"Белгород","achievement":"Высокий уровень мастерства, успехи в профессиональной деятельности и плодотворная работа на благо Компании\n","honorary_title":"МАСТЕР БФТ","awards":"130 БФТ-денег"},{"title":"МАСТЕР БФТ ","photo":"https://25.bftcom.com/d.raspopov@bftcom.com.jpg","last_name":"Распопов","first_name":"Дмитрий","position":"Руководитель направления по автоматизированному тестированию УТР ДОК","town":"Санкт-Петербург","achievement":"Высокое мастерство , успехи в профессиональной деятельности, самоотверженный труд и неиссякаемый оптимизм в решении любых задач в любое время суток","honorary_title":"МАСТЕР БФТ","awards":"130 БФТ-денег"},{"title":"МАСТЕР БФТ ","photo":"https://25.bftcom.com/e.belyaeva@bftcom.com.jpg","last_name":"Несмачная","first_name":"Елена","position":"Ведущий специалист по автоматизированному и нагрузочному тестированию УТР ДОК","town":"Москва","achievement":"Высочайший уровень компетенций и стабильно высокие результаты в работе\n","honorary_title":"МАСТЕР БФТ","awards":"130 БФТ-денег"},{"title":"МАСТЕР БФТ ","photo":"https://25.bftcom.com/i.orlov@bftcom.com.jpg","last_name":"Орлов","first_name":"Илья","position":"Ведущий специалист по автоматизированному и нагрузочному тестированию УТР ДОК","town":"Калуга","achievement":"Высокое мастерство, успехи в профессиональной деятельности, самоотверженный труд и эффективность в работе","honorary_title":"МАСТЕР БФТ","awards":"130 БФТ-денег"},{"title":"МАСТЕР БФТ ","photo":"https://25.bftcom.com/m.barchan@bftcom.com.jpg","last_name":"Барчан","first_name":"Максим","position":"Руководитель направления УТ ДОК","town":"Белгород","achievement":"Высокое мастерство, успехи в профессиональной деятельности и самоотверженный труд","honorary_title":"МАСТЕР БФТ","awards":"130 БФТ-денег"},{"title":"МАСТЕР БФТ ","photo":"https://25.bftcom.com/a.kushtel@bftcom.com.jpg","last_name":"Куштель","first_name":"Алексей","position":"Руководитель направления АУ ДИР","town":"Москва","achievement":"Мастерство, успехи в профессиональной деятельности и выстраивание работы команды аналитиков на высоком уровне","honorary_title":"МАСТЕР БФТ","awards":"130 БФТ-денег"},{"title":"МАСТЕР БФТ ","photo":"https://25.bftcom.com/i.korotkova@bftcom.com.jpg","last_name":"Короткова","first_name":"Инга","position":"Старший аналитик АУ ДИР","town":"Белгород","achievement":"Высокий уровень профессионализма и отличная работа по обеспечению сбора консолидированной отчетности г. Москвы","honorary_title":"МАСТЕР БФТ","awards":"130 БФТ-денег"},{"title":"МАСТЕР БФТ ","photo":"https://25.bftcom.com/a.davidenko@bftcom.com.JPG","last_name":"Давиденко","first_name":"Артем","position":"Старший специалист сопровождения типовых проектов ЦТС ДСКК","town":"Нижний Новгород","achievement":"Профессиональный и ответственный подход к работе, не безразличие к общему делу, высокая личная эффективность и трудолюбие","honorary_title":"МАСТЕР БФТ","awards":"130 БФТ-денег"},{"title":"МАСТЕР БФТ ","photo":"https://25.bftcom.com/a.mikhalev@bftcom.com.jpg","last_name":"Михалев","first_name":"Алексей","position":"Руководитель группы системного и сетевого администрирования ДИТ","town":"Москва","achievement":"Создание современной технической архитектуры Компании и поддержание в рабочем состоянии информационной системы, соответствующей потребностям пользователей","honorary_title":"МАСТЕР БФТ","awards":"130 БФТ-денег"},{"title":"МАСТЕР БФТ ","photo":"https://25.bftcom.com/i.chaginsky@bftcom.com.jpg","last_name":"Чагинский","first_name":"Илья","position":"Руководитель ИТ-проектов ДИТ","town":"Санкт-Петербург","achievement":"Умение эффективно управлять одновременно несколькими проектами, грамотное выстраивание взаимодействия, умение слышать Заказчика, при этом учитывая интересы проекта","honorary_title":"МАСТЕР БФТ","awards":"130 БФТ-денег"},{"title":"МАСТЕР БФТ ","photo":"https://25.bftcom.com/z.gabdullazyanova@bftcom.com.jpeg","last_name":"Габдуллазянова","first_name":"Зарина","position":"UX-инженер Отдела UX и проектирования интерфейсов АУ ДАПР","town":"Казань","achievement":"Высокий уровень мастерства, профессиональный подход к делу, скрупулезность, ответственность и большой личный вклад в развитие проектов\n","honorary_title":"МАСТЕР БФТ","awards":"130 БФТ-денег"},{"title":"МАСТЕР БФТ ","photo":"https://25.bftcom.com/a.akulin@bftcom.com.jpg","last_name":"Акулин","first_name":"Александр","position":"UX-инженер Отдела UX и проектирования интерфейсов АУ ДАПР","town":"Санкт-Петербург","achievement":"Самоотдача и компетентность в проектной работе, профессиональный подход к делу и эффективность решения","honorary_title":"МАСТЕР БФТ","awards":"130 БФТ-денег"},{"title":"МАСТЕР БФТ ","photo":"https://25.bftcom.com/a.laputin@bftcom.com.JPG","last_name":"Лапутин","first_name":"Андрей","position":"Функциональный архитектор АУ ДАПР","town":"Санкт-Петербург","achievement":"Огромный личный вклад в развитие проектов Роструда и готовность всегда прийти на помощь Команде\n","honorary_title":"МАСТЕР БФТ","awards":"130 БФТ-денег"},{"title":"МАСТЕР БФТ ","photo":"https://25.bftcom.com/a.chebotareva@bftcom.com.jpg","last_name":"Королева","first_name":"Анна","position":"Старший аналитик отдела аналитики АУ ДАПР","town":"Белгород","achievement":"Мастерство, проявленное в решении поставленных задач, трудолюбие, целеустремлённость и личная инициатива","honorary_title":"МАСТЕР БФТ","awards":"130 БФТ-денег"},{"title":"МАСТЕР БФТ ","photo":"https://25.bftcom.com/i.karpenko@bftcom.com.png","last_name":"Карпенко","first_name":"Ирина","position":"Аналитик отдела аналитики АУ ДАПР","town":"Санкт-Петербург","achievement":"Высокое мастерство, успехи в профессиональной деятельности и координация работ по созданию обучающих материалов для сотрудников ДАПР","honorary_title":"МАСТЕР БФТ","awards":"130 БФТ-денег"},{"title":"МАСТЕР БФТ ","photo":"https://25.bftcom.com/o.titova@bftcom.com.jpg","last_name":"Титова","first_name":"Олеся","position":"Старший специалист УКП ДКСНП ДСКК","town":"Белгород","achievement":"Стабильно высокие показатели эффективности, трудолюбие и умение быстро найти выход из сложной ситуации\n","honorary_title":"МАСТЕР БФТ","awards":"130 БФТ-денег"},{"title":"МАСТЕР БФТ ","photo":"https://25.bftcom.com/e.kilin@bftcom.com.jpg","last_name":"Килин","first_name":"Евгений","position":"Ведущий программист УР ДПиМР","town":"Ижевск","achievement":"Качественное выполнение сложных задач по импорту и обработке данных в региональных и федеральных проектах внедрения аналитической BI системы, в частности в проектах внедрения СЗН2.0 и образовательной платформы в Роструде\n\n","honorary_title":"МАСТЕР БФТ","awards":"130 БФТ-денег"},{"title":"МАСТЕР БФТ ","photo":"https://25.bftcom.com/i.kurakaev@bftcom.com.JPG","last_name":"Куракаев","first_name":"Имран","position":"Ведущий специалист сопровождения нетиповых проектов ЦТС ДСКК","town":"Москва","achievement":"Безупречный многолетний труд, высокий профессионализм, огромный вклад в достижение общих целей и готовность решать задачи любой сложности.","honorary_title":"МАСТЕР БФТ","awards":"130 БФТ-денег"},{"title":"МАСТЕР БФТ ","photo":"https://25.bftcom.com/a.nikushkin@bftcom.com.jpg","last_name":"Никушкин","first_name":"Александр","position":"Системный администратор, Административно-технический отдел ДИТ","town":"Москва","achievement":"Большой вклад в модернизацию инфраструктуры Компании, отзывчивость, готовность 24/7 к решению инцидентов и проблем пользователей.","honorary_title":"МАСТЕР БФТ","awards":"130 БФТ-денег"},{"title":"МАСТЕР БФТ ","photo":"https://25.bftcom.com/l.mezhueva@bftcom.com.jpeg","last_name":"Межуева","first_name":"Людмила","position":"Руководитель Отдела документирования АУ ДАПР","town":"Санкт-Петербург","achievement":"Образцовая организация работы Отдела документирования АУ ДАПР, неустанная и неравнодушная работа, ответственность, готовность помочь в любой ситуации, забота о коллективе и отличные результаты работ.","honorary_title":"МАСТЕР БФТ","awards":"130 БФТ-денег"},{"title":"ПРОФЕССИОНАЛ БФТ","photo":"https://25.bftcom.com/d.savelev@bftcom.com.jpg","last_name":"Савельев","first_name":"Дмитрий","position":"Программист УР ДФС","town":"Магнитогорск","achievement":"Высокий уровень самоотдачи, профессионализм и готовность помогать коллегам в любое время","honorary_title":"ПРОФЕССИОНАЛ БФТ","awards":"100 БФТ-денег"},{"title":"ПРОФЕССИОНАЛ БФТ","photo":"https://25.bftcom.com/a.popravkin@bftcom.com.jpg","last_name":"Поправкин","first_name":"Александр","position":"Старший программист УР ДФС","town":"Белгород","achievement":"Высокий уровень профессионализма и большой вклад в организацию работы направления","honorary_title":"ПРОФЕССИОНАЛ БФТ","awards":"100 БФТ-денег"},{"title":"ПРОФЕССИОНАЛ БФТ","photo":"https://25.bftcom.com/a.netepenko@bftcom.com.jpg","last_name":"Нетепенко","first_name":"Артём","position":"Программист УР ДФС","town":"Белгород","achievement":"Высокий профессионализм, ответственное отношение к делу и большой вклад в оптимизацию продуктов Компании\n","honorary_title":"ПРОФЕССИОНАЛ БФТ","awards":"100 БФТ-денег"},{"title":"ПРОФЕССИОНАЛ БФТ","photo":"https://25.bftcom.com/e.petrov@bftcom.com.jpg","last_name":"Петров","first_name":"Евгений","position":"Старший аналитик АУ ДФС","town":"Красноярск","achievement":"Профессионализм, максимальная Клиентоориентированность и стремление развиваться","honorary_title":"ПРОФЕССИОНАЛ БФТ","awards":"100 БФТ-денег"},{"title":"ПРОФЕССИОНАЛ БФТ","photo":"https://25.bftcom.com/d.filatov@bftcom.com.png","last_name":"Филатов","first_name":"Денис","position":"Старший аналитик АУ ДФС","town":"Ярославль","achievement":"Профессионализм, высокие результаты в работе и глубокие знания форматов взаимодействия со сторонними системами различного уровня","honorary_title":"ПРОФЕССИОНАЛ БФТ","awards":"100 БФТ-денег"},{"title":"ПРОФЕССИОНАЛ БФТ","photo":"https://25.bftcom.com/i.filatova@bftcom.com.jpg","last_name":"Филатова","first_name":"Инна","position":"Ведущий аналитик АУ ДФС","town":"Ярославль","achievement":"Качественное сопровождение,  участие в развитии и внедрении функциональности взаимодействия системы «АЦК-Финансы» с системой «АЦК-Госзаказ», готовность осуществлять аналитическую поддержку в любое время\n","honorary_title":"ПРОФЕССИОНАЛ БФТ","awards":"100 БФТ-денег"},{"title":"ПРОФЕССИОНАЛ БФТ","photo":"https://25.bftcom.com/a.zhucov@bftcom.com.png","last_name":"Жуков","first_name":"Алексей","position":"Директор по развитию бизнеса ДП","town":"Белгород","achievement":"Многолетняя преданность Компании и неоценимый вклад в развитие и построение доверительных и продолжительных отношений с Клиентами, лучшие показатели выполнения плана продаж","honorary_title":"ПРОФЕССИОНАЛ БФТ","awards":"100 БФТ-денег"},{"title":"ПРОФЕССИОНАЛ БФТ","photo":"https://25.bftcom.com/a.vekshina@bftcom.com.jpg","last_name":"Векшина","first_name":"Анна","position":"Главный специалист УСА ДВП","town":"Москва","achievement":"Выдающиеся успехи в настройке бизнес-процессов на проекте СЗН 2.0","honorary_title":"ПРОФЕССИОНАЛ БФТ","awards":"100 БФТ-денег"},{"title":"ПРОФЕССИОНАЛ БФТ","photo":"https://25.bftcom.com/r.vesnin@bftcom.com.jpg","last_name":"Веснин","first_name":"Радий","position":"Функциональный архитектор УР ДВП","town":"Москва","achievement":"Высокий уровень профессионализма и мастерства при создании курса по нотации BPMN 2.0 и разработке методологии создания продуктов на ICE","honorary_title":"ПРОФЕССИОНАЛ БФТ","awards":"100 БФТ-денег"},{"title":"ПРОФЕССИОНАЛ БФТ","photo":"https://25.bftcom.com/a.gazizova@bftcom.com.jpg","last_name":"Газизова","first_name":"Анастасия","position":"Ведущий аналитик УСА ДВП","town":"Казань","achievement":"Выдающиеся успехи в настройке бизнес-процессов на проекте СЗН 2.0","honorary_title":"ПРОФЕССИОНАЛ БФТ","awards":"100 БФТ-денег"},{"title":"ПРОФЕССИОНАЛ БФТ","photo":"https://25.bftcom.com/e.lyukshina@bftcom.com.jpg","last_name":"Люкшина","first_name":"Елена","position":"Главный специалист УСА ДВП","town":"Самара","achievement":"Выдающиеся успехи в настройке бизнес-процессов на проекте СЗН 2.0, прекрасные лидерские качества и организаторские способности","honorary_title":"ПРОФЕССИОНАЛ БФТ","awards":"100 БФТ-денег"},{"title":"ПРОФЕССИОНАЛ БФТ","photo":"https://25.bftcom.com/v.sokolov@bftcom.com.jpg","last_name":"Соколов","first_name":"Вячеслав","position":"Руководитель направления ДМАиК","town":"Волгоград","achievement":"Качественное решение методических задач в рамках тематики по управлению имуществом\n","honorary_title":"ПРОФЕССИОНАЛ БФТ","awards":"100 БФТ-денег"},{"title":"ПРОФЕССИОНАЛ БФТ","photo":"https://25.bftcom.com/r.fakhrutdinov@bftcom.com.PNG","last_name":"Фахрутдинов","first_name":"Руслан","position":"Ведущий консультант УМиБАФП ДМАиК","town":"Москва","achievement":"Высокая работоспособность и профессиональный подход к выполнению проектных задач","honorary_title":"ПРОФЕССИОНАЛ БФТ","awards":"100 БФТ-денег"},{"title":"ПРОФЕССИОНАЛ БФТ","photo":"https://25.bftcom.com/e.pyataeva@bftcom.com.jpg","last_name":"Пятаева","first_name":"Елена","position":"Ведущий аналитик АУ ДКУА ДУА","town":"Нижний Новгород","achievement":"Высокий уровень профессионализма, личная эффективность и умение в короткие сроки изучить новую предметную область","honorary_title":"ПРОФЕССИОНАЛ БФТ","awards":"100 БФТ-денег"},{"title":"ПРОФЕССИОНАЛ БФТ","photo":"https://25.bftcom.com/n.koroleva@bftcom.com.jpg","last_name":"Королева","first_name":"Наталья","position":"Ведущий аналитик отдела бизнес-анализа АУ ДЦУИ ДУА","town":"Дубна","achievement":"Выдающиеся профессиональные достижения, высокая личная эффективность и преданность интересам Компании","honorary_title":"ПРОФЕССИОНАЛ БФТ","awards":"100 БФТ-денег"},{"title":"ПРОФЕССИОНАЛ БФТ","photo":"https://25.bftcom.com/e.labintseva@bftcom.com.jpg","last_name":"Лабинцева","first_name":"Елена","position":"Ведущий специалист АУ ДЦУИ ДУА","town":"Челябинск","achievement":"Выдающиеся профессиональные достижения, высокая личная эффективность и преданность интересам Компании","honorary_title":"ПРОФЕССИОНАЛ БФТ","awards":"100 БФТ-денег"},{"title":"ПРОФЕССИОНАЛ БФТ","photo":"https://25.bftcom.com/m.lazovskaia@bftcom.com.JPG","last_name":"Лазовская","first_name":"Мария","position":"Ведущий аналитик группы системного анализа АУ ДЦУИ ДУА","town":"Дубна","achievement":"Выдающиеся профессиональные достижения, высокая личная эффективность и преданность интересам Компании","honorary_title":"ПРОФЕССИОНАЛ БФТ","awards":"100 БФТ-денег"},{"title":"ПРОФЕССИОНАЛ БФТ","photo":"https://25.bftcom.com/a.mahov@bftcom.com.JPG","last_name":"Махов","first_name":"Альберт","position":"Ведущий аналитик группы бизнес-анализа АУ ДЦУИ ДУА","town":"Москва","achievement":"Выдающиеся профессиональные достижения, высокая личная эффективность и преданность интересам Компании","honorary_title":"ПРОФЕССИОНАЛ БФТ","awards":"100 БФТ-денег"},{"title":"ПРОФЕССИОНАЛ БФТ","photo":"https://25.bftcom.com/e.ruban@bftcom.com.jpg","last_name":"Рубан","first_name":"Евгения","position":"Ведущий программист УР ДЦУИ ДУА","town":"Новосибирск","achievement":"Выдающиеся профессиональные достижения, высокая личная эффективность и преданность интересам Компании","honorary_title":"ПРОФЕССИОНАЛ БФТ","awards":"100 БФТ-денег"},{"title":"ПРОФЕССИОНАЛ БФТ","photo":"https://25.bftcom.com/s.stepanjan@bftcom.com.jpg","last_name":"Степанян","first_name":"Степан","position":"Старший программист УР ДЦУИ ДУА","town":"Дубна","achievement":"Выдающиеся профессиональные достижения, высокая личная эффективность и преданность интересам Компании","honorary_title":"ПРОФЕССИОНАЛ БФТ","awards":"100 БФТ-денег"},{"title":"ПРОФЕССИОНАЛ БФТ","photo":"https://25.bftcom.com/a.troshina@bftcom.com.jpg","last_name":"Трошина","first_name":"Анна","position":"Специалист по сопровождению Отдела сопровождения ДЦУИ ДУА","town":"Дубна","achievement":"Выдающиеся профессиональные достижения, высокая личная эффективность и преданность интересам Компании","honorary_title":"ПРОФЕССИОНАЛ БФТ","awards":"100 БФТ-денег"},{"title":"ПРОФЕССИОНАЛ БФТ","photo":"https://25.bftcom.com/d.belyaeva@bftcom.com.jpg","last_name":"Беляева","first_name":"Дарья","position":"Ведущий аналитик Отдела бизнес-архитектутры ДАСИС","town":"Москва","achievement":"Системный подход к работе, умение формулировать целостные суждения в условиях неопределенности","honorary_title":"ПРОФЕССИОНАЛ БФТ","awards":"100 БФТ-денег"},{"title":"ПРОФЕССИОНАЛ БФТ","photo":"https://25.bftcom.com/e.andreeva@bftcom.com.jpg","last_name":"Андреева","first_name":"Елена","position":"Ведущий аналитик Отдела бизнес-архитектуры ДАСИС","town":"Москва","achievement":"Профессиональное видение процесса в целом, высокая скорость решения поставленных задач и нацеленность на постоянное развитие","honorary_title":"ПРОФЕССИОНАЛ БФТ","awards":"100 БФТ-денег"},{"title":"ПРОФЕССИОНАЛ БФТ","photo":"https://25.bftcom.com/efedorova@bftcom.com.jpg","last_name":"Федорова","first_name":"Евгения","position":"Ведущий аналитик Отдела бизнес-архитектуры ДАСИС","town":"Москва","achievement":"Системный подход к работе, умение анализировать и структурировать большие объемы информации","honorary_title":"ПРОФЕССИОНАЛ БФТ","awards":"100 БФТ-денег"},{"title":"ПРОФЕССИОНАЛ БФТ","photo":"https://25.bftcom.com/a.nakhaeva@bftcom.com.JPG","last_name":"Нахаева","first_name":"Айжана","position":"Технический писатель ДПУ","town":"Москва","achievement":"Профессионализм, надежность и полная самоотдача при работе по федеральным проектам","honorary_title":"ПРОФЕССИОНАЛ БФТ","awards":"100 БФТ-денег"},{"title":"ПРОФЕССИОНАЛ БФТ","photo":"https://25.bftcom.com/t.davydova@bftcom.com.jpg","last_name":"Давыдова","first_name":"Татьяна","position":"Руководитель проектов ДПУ","town":"Нижний Новгород","achievement":"Высокий профессионализм, мастерство и знание продуктов, благодаря которым успешно реализуются проекты и растет количество лояльных пользователей наших решений","honorary_title":"ПРОФЕССИОНАЛ БФТ","awards":"100 БФТ-денег"},{"title":"ПРОФЕССИОНАЛ БФТ","photo":"https://25.bftcom.com/D.Schurova@bftcom.com.jpg","last_name":"Щурова","first_name":"Диана","position":"Аналитик АУ ДГЗиФК","town":"Белгород","achievement":"Высокая самоотдача, профессионализм и преданность интересам Компании","honorary_title":"ПРОФЕССИОНАЛ БФТ","awards":"100 БФТ-денег"},{"title":"ПРОФЕССИОНАЛ БФТ","photo":"https://25.bftcom.com/a.grischenkova@bftcom.com.jpg","last_name":"Грищенкова","first_name":"Анна","position":"Руководитель направления АУ ДГЗиФК","town":"Волгоград","achievement":"Активное участие в проектах внедрения, высокая самоотдача, профессионализм и ответственный подход к поставленным задачам","honorary_title":"ПРОФЕССИОНАЛ БФТ","awards":"100 БФТ-денег"},{"title":"ПРОФЕССИОНАЛ БФТ","photo":"https://25.bftcom.com/i.lomov@bftcom.com.png","last_name":"Ломов","first_name":"Иван","position":"Старший программист УР ДГЗиФК","town":"Москва","achievement":"Активное участие в проектах по разработке новых продуктов, высокий профессионализм и ответственный подход к поставленным задачам","honorary_title":"ПРОФЕССИОНАЛ БФТ","awards":"100 БФТ-денег"},{"title":"ПРОФЕССИОНАЛ БФТ","photo":"https://25.bftcom.com/d.komleva@bftcom.com.JPG","last_name":"Комлева","first_name":"Дарья","position":"Ведущий аналитик АУ ДГЗиФК","town":"Нижний Новгород","achievement":"Высокая самоотдача, профессионализм и преданность интересам Компании","honorary_title":"ПРОФЕССИОНАЛ БФТ","awards":"100 БФТ-денег"},{"title":"ПРОФЕССИОНАЛ БФТ","photo":"https://25.bftcom.com/y.volynskaya@bftcom.com.jpg","last_name":"Волынская","first_name":"Ярославна","position":"Руководитель группы по подбору персонала УПП","town":"Санкт-Петербург","achievement":"Высокие результаты работы по созданию и развитию группы по подбору персонала, активное участие в доработке новой автоматизированной системы FW","honorary_title":"ПРОФЕССИОНАЛ БФТ","awards":"100 БФТ-денег"},{"title":"ПРОФЕССИОНАЛ БФТ","photo":"https://25.bftcom.com/sv.morozov@bftcom.com.jpg","last_name":"Морозов","first_name":"Сергей","position":"Руководитель группы разработки АЦК АСУ ГФ ДП","town":"Казань","achievement":"Высокий профессионализм, способность качественно и оперативно решать задачи любой сложности, преданность работе и интересам Компании","honorary_title":"ПРОФЕССИОНАЛ БФТ","awards":"100 БФТ-денег"},{"title":"ПРОФЕССИОНАЛ БФТ","photo":"https://25.bftcom.com/n.donskikh@bftcom.com.jpeg","last_name":"Донских","first_name":"Наталья","position":"Старший аналитик АУМС ДП","town":"Санкт-Петербург","achievement":"Высокий уровень личной эффективности и профессионализм, проявленный при решении задач Компании","honorary_title":"ПРОФЕССИОНАЛ БФТ","awards":"100 БФТ-денег"},{"title":"ПРОФЕССИОНАЛ БФТ","photo":"https://25.bftcom.com/a.chashkov@bftcom.com.png","last_name":"Чашков","first_name":"Александр","position":"Старший программист УР ДП","town":"Оренбург","achievement":"Профессиональные достижения и высокая личная эффективность в работе","honorary_title":"ПРОФЕССИОНАЛ БФТ","awards":"100 БФТ-денег"},{"title":"ПРОФЕССИОНАЛ БФТ","photo":"https://25.bftcom.com/m.abdullaev@bftcom.com.jpeg","last_name":"Абдуллаев","first_name":"Магомет","position":"Ведущий аналитик АУ ДП","town":"Нальчик","achievement":"Высокая личная эффективность в разработке новых решений, грамотность и высокий уровень коммуникаций во взаимодействии с Заказчиком","honorary_title":"ПРОФЕССИОНАЛ БФТ","awards":"100 БФТ-денег"},{"title":"ПРОФЕССИОНАЛ БФТ","photo":"https://25.bftcom.com/a.medvedev@bftcom.com.jpg","last_name":"Медведев","first_name":"Алексей","position":"Старший аналитик Аналитического управления АСУ ГФ ДП","town":"Москва","achievement":"Профессиональный подход к работе, умение сосредотачиваться на приоритетных задачах и доводить их до успешного выполнения","honorary_title":"ПРОФЕССИОНАЛ БФТ","awards":"100 БФТ-денег"},{"title":"ПРОФЕССИОНАЛ БФТ","photo":"https://25.bftcom.com/i.listratenko@bftcom.com.jpg","last_name":"Листратенко","first_name":"Иван","position":"Программист группы разработки АЦК АСУ ГФ ДП","town":"Санкт-Петербург","achievement":"Профессиональный подход к работе, нацеленность на результат и командная работа","honorary_title":"ПРОФЕССИОНАЛ БФТ","awards":"100 БФТ-денег"},{"title":"ПРОФЕССИОНАЛ БФТ","photo":"https://25.bftcom.com/i.kadyrova@bftcom.com.jpg","last_name":"Кадырова","first_name":"Ильмира","position":"Старший специалист по тестированию ДОКПО ДПЦТ","town":"Уфа","achievement":"Профессионализм в разработке и внедрении МНТ на ФБХД и ФБ УНСИ, разработке материалов для школы тестирования \"Элемент\"","honorary_title":"ПРОФЕССИОНАЛ БФТ","awards":"100 БФТ-денег"},{"title":"ПРОФЕССИОНАЛ БФТ","photo":"https://25.bftcom.com/i.matkov@bftcom.com.jpg","last_name":"Матьков","first_name":"Илья","position":"Ведущий системный аналитик ДСП ДПЦТ","town":"Москва","achievement":"Высокий профессионализм, выполнение огромного объема задач по системному анализу и многочисленному документированию компонента ФБХД новой ФГИС ЕГРН Наставничество и поддержка коллег","honorary_title":"ПРОФЕССИОНАЛ БФТ","awards":"100 БФТ-денег"},{"title":"ПРОФЕССИОНАЛ БФТ","photo":"https://25.bftcom.com/p.barmenkov@bftcom.com.jpg","last_name":"Барменков","first_name":"Павел","position":"Ведущий инженер-разработчик ДСП ДПЦТ","town":"Киров","achievement":"Успехи в работе, профессионализм и большой личный вклад в решение задач по разработке ФБХД новой ФГИС ЕГРН","honorary_title":"ПРОФЕССИОНАЛ БФТ","awards":"100 БФТ-денег"},{"title":"ПРОФЕССИОНАЛ БФТ","photo":"https://25.bftcom.com/n.bikbaev@bftcom.com.jpg","last_name":"Бикбаев","first_name":"Наиль","position":"Ведущий инженер по внедрению ДСП ДПЦТ","town":"Уфа","achievement":"Профессионализм и мастерство при выполнении задач в динамической обстановке, большой личный вклад в достижение общих целей Компании","honorary_title":"ПРОФЕССИОНАЛ БФТ","awards":"100 БФТ-денег"},{"title":"ПРОФЕССИОНАЛ БФТ","photo":"https://25.bftcom.com/n.malakhova@bftcom.com.JPG","last_name":"Малахова","first_name":"Наталья","position":"Ведущий методолог ДСП ДПЦТ","town":"Москва","achievement":"Ведущий методолог по 2-м ключевым направлениям: «Обеспечение качества данных ЕРГН» и «Тиражирование ФГИС ЕГРН 20», бесспорный профессионал и риск-консультант по восприятию функционала конечными пользователями ИС Росреестра","honorary_title":"ПРОФЕССИОНАЛ БФТ","awards":"100 БФТ-денег"},{"title":"ПРОФЕССИОНАЛ БФТ","photo":"https://25.bftcom.com/v.rakityanskiy@bftcom.com.JPG","last_name":"Ракитянский","first_name":"Владислав","position":"Старший специалист УФиТС ДЭ ДСКК","town":"Белгород","achievement":"Профессионализм, высокая личная эффективность и преданность интересам Компании","honorary_title":"ПРОФЕССИОНАЛ БФТ","awards":"100 БФТ-денег"},{"title":"ПРОФЕССИОНАЛ БФТ","photo":"https://25.bftcom.com/a.mamekina@bftcom.com.jpg","last_name":"Мамекина","first_name":"Алеся","position":"Специалист УКП ДКСНП ДСКК","town":"Белгород","achievement":"Стабильно высокие показатели эффективности и трудолюбия, умение собраться в критический момент и быстро найти выход из сложной ситуации","honorary_title":"ПРОФЕССИОНАЛ БФТ","awards":"100 БФТ-денег"},{"title":"ПРОФЕССИОНАЛ БФТ","photo":"https://25.bftcom.com/ap.fedchenko@bftcom.com.jpg","last_name":"Федченко","first_name":"Андрей","position":"Старший специалист ЦВиС ДЭ ДСКК","town":"Белгород","achievement":"Успешное и качественное выполнение поставленных задач, высокая эффективность и ответственный подход к работе","honorary_title":"ПРОФЕССИОНАЛ БФТ","awards":"100 БФТ-денег"},{"title":"ПРОФЕССИОНАЛ БФТ","photo":"https://25.bftcom.com/o.trubitcyna@bftcom.com.jpg","last_name":"Трубицына","first_name":"Оксана","position":"Руководитель направления ЦВиС ДЭ ДСКК","town":"Белгород","achievement":"Дисциплинирование рабочего процесса, многозадачность, оперативность, накопленный опыт знаний и передача его сотрудникам отделений","honorary_title":"ПРОФЕССИОНАЛ БФТ","awards":"100 БФТ-денег"},{"title":"ПРОФЕССИОНАЛ БФТ","photo":"https://25.bftcom.com/e.krivoshchekov@bftcom.com.jpg","last_name":"Кривощеков","first_name":"Евгений","position":"Старший специалист Тюменского отделения ДЭ ДСКК","town":"Тюмень","achievement":"Выдающиеся профессиональные достижения, высокая личная самоотдача и эффективность, преданность интересам Компании","honorary_title":"ПРОФЕССИОНАЛ БФТ","awards":"100 БФТ-денег"},{"title":"ПРОФЕССИОНАЛ БФТ","photo":"https://25.bftcom.com/o.yuritsyna@bftcom.com.jpg","last_name":"Юрицына","first_name":"Олеся","position":"Ведущий специалист Нижегородского отделения ДЭ ДСКК","town":"Нижний Новогород","achievement":"Готовность решать задачи любой сложности, личная эффективность, многозадачность и клиентоориентированность","honorary_title":"ПРОФЕССИОНАЛ БФТ","awards":"100 БФТ-денег"},{"title":"ПРОФЕССИОНАЛ БФТ","photo":"https://25.bftcom.com/y.zaboev@bftcom.com.jpg","last_name":"Забоев","first_name":"Юрий","position":"Ведущий специалист Пермского отделения ДЭ ДСКК","town":"Пермь","achievement":"Ответственное и добросовестное отношение к работе, экспертные знания Системы \"АЦК-Финансы\" в связке с региональной информационной системой \"РИС-Закупки\"","honorary_title":"ПРОФЕССИОНАЛ БФТ","awards":"100 БФТ-денег"},{"title":"ПРОФЕССИОНАЛ БФТ","photo":"https://25.bftcom.com/m.mustafina@bftcom.com.JPG","last_name":"Мустафина","first_name":"Марина","position":"Ведущий специалист Пермского отделения ДЭ ДСКК","town":"Пермь","achievement":"Высокая эффективность и профессионализм, высокий уровень знаний в сфере бюджетного законодательства, что позволяет решать задачи любого уровня сложности по Системе «АЦК-Планирование» в связке с «АЦК-Финансы»","honorary_title":"ПРОФЕССИОНАЛ БФТ","awards":"100 БФТ-денег"},{"title":"ПРОФЕССИОНАЛ БФТ","photo":"https://25.bftcom.com/a.ischenko@bftcom.com.jpeg","last_name":"Ищенко","first_name":"Анастасия","position":"Старший специалист Волгоградского отделения ДЭ ДСКК","town":"Волгоград","achievement":"Добросовестность, качественность и высокая эффективность","honorary_title":"ПРОФЕССИОНАЛ БФТ","awards":"100 БФТ-денег"},{"title":"ПРОФЕССИОНАЛ БФТ","photo":"https://25.bftcom.com/e.savin@bftcom.com.jpg","last_name":"Савин","first_name":"Евгений","position":"Руководитель Санкт-Петербургского отделения ДЭ ДСКК","town":"Санкт-Петербург","achievement":"Высокая работоспособность, профессионализм и ответственность","honorary_title":"ПРОФЕССИОНАЛ БФТ","awards":"100 БФТ-денег"},{"title":"ПРОФЕССИОНАЛ БФТ","photo":"https://25.bftcom.com/e.pustozerova@bftcom.com.jpg","last_name":"Пустозерова","first_name":"Елена","position":"Руководитель проектов ДИР","town":"Москва","achievement":"Качественное и своевременное закрытие проектов","honorary_title":"ПРОФЕССИОНАЛ БФТ","awards":"100 БФТ-денег"},{"title":"ПРОФЕССИОНАЛ БФТ","photo":"https://25.bftcom.com/m.kovaleva@bftcom.com.jpg","last_name":"Ковалева","first_name":"Марина","position":"Руководитель УПЭиН ДИР","town":"Москва","achievement":"Профессионализм, высокие результаты в работе по подготовке отчётной документации","honorary_title":"ПРОФЕССИОНАЛ БФТ","awards":"100 БФТ-денег"},{"title":"ПРОФЕССИОНАЛ БФТ","photo":"https://25.bftcom.com/s.likhanova@bftcom.com.jpeg","last_name":"Лиханова","first_name":"Светлана","position":"Ведущий аналитик УА ДИР","town":"Москва","achievement":"Профессионализм, высокие результаты аналитической работы с изменениями требований","honorary_title":"ПРОФЕССИОНАЛ БФТ","awards":"100 БФТ-денег"},{"title":"ПРОФЕССИОНАЛ БФТ","photo":"https://25.bftcom.com/m.krinitsyna@bftcom.com.jpg","last_name":"Криницына","first_name":"Марина","position":"Главный программист УР ДИР","town":"Сочи","achievement":"Выстраивание эффективной работы команды разработки","honorary_title":"ПРОФЕССИОНАЛ БФТ","awards":"100 БФТ-денег"},{"title":"ПРОФЕССИОНАЛ БФТ","photo":"https://25.bftcom.com/d.strashnov@bftcom.com.jpg","last_name":"Страшнов","first_name":"Денис","position":"Аналитик АУ ДИР","town":"Москва","achievement":"Профессионализм, высокие показатели в работе и готовность помочь преодолеть любые трудности команде сопровождения системы казначейства г. Москвы","honorary_title":"ПРОФЕССИОНАЛ БФТ","awards":"100 БФТ-денег"},{"title":"ПРОФЕССИОНАЛ БФТ","photo":"https://25.bftcom.com/s.sokolova@bftcom.com.jpg","last_name":"Соколова","first_name":"Сабина","position":"Ведущий аналитик АУ ДИР","town":"Чебоксары","achievement":"Высокий профессиональный уровень в проработке ключевых задач Заказчика","honorary_title":"ПРОФЕССИОНАЛ БФТ","awards":"100 БФТ-денег"},{"title":"ПРОФЕССИОНАЛ БФТ","photo":"https://25.bftcom.com/e.senyagina@bftcom.com.jpg","last_name":"Сенягина","first_name":"Елена","position":"Ведущий менеджер по работе с ключевыми клиентами ДРК","town":"Москва","achievement":"Высокий уровень профессионализма, активность и энтузиазм в работе","honorary_title":"ПРОФЕССИОНАЛ БФТ","awards":"100 БФТ-денег"},{"title":"ПРОФЕССИОНАЛ БФТ","photo":"https://25.bftcom.com/m.simachkov@bftcom.com.jpg","last_name":"Симачков","first_name":"Максим","position":"Менеджер по работе с ключевыми клиентами ДРК","town":"Москва","achievement":"Высокий уровень профессионализма, активность и энтузиазм в работе","honorary_title":"ПРОФЕССИОНАЛ БФТ","awards":"100 БФТ-денег"},{"title":"ПРОФЕССИОНАЛ БФТ","photo":"https://25.bftcom.com/o.shaldunov@bftcom.com.JPG","last_name":"Шалдунов","first_name":"Олег","position":"Менеджер по работе с клиентами ДРК","town":"Москва","achievement":"Высокий уровень профессионализма, активность и энтузиазм в работе","honorary_title":"ПРОФЕССИОНАЛ БФТ","awards":"100 БФТ-денег"},{"title":"ПРОФЕССИОНАЛ БФТ","photo":"https://25.bftcom.com/d.prokudin@bftcom.com.jpg","last_name":"Прокудин","first_name":"Даниил","position":"Старший специалист УТ ДОК","town":"Калининград","achievement":"Достижение высоких показателей в тестировании “АЦК-Планирования” и смежных продуктов, быстрое освоение и эффективная работа на новых направлениях деятельности","honorary_title":"ПРОФЕССИОНАЛ БФТ","awards":"100 БФТ-денег"},{"title":"ПРОФЕССИОНАЛ БФТ","photo":"https://25.bftcom.com/a.keller@bftcom.com.jpg","last_name":"Келлер","first_name":"Альбина","position":"Специалист отдела технической документации ДОК","town":"Калининград","achievement":"Профессиональные достижения, высокая личная эффективность и преданность интересам Компании","honorary_title":"ПРОФЕССИОНАЛ БФТ","awards":"100 БФТ-денег"},{"title":"ПРОФЕССИОНАЛ БФТ","photo":"https://25.bftcom.com/m.ivanov@bftcom.com.jpg","last_name":"Иванов","first_name":"Михаил","position":"Старший специалист по управлению конфигурациями УТР ДОК","town":"Санкт-Петербург","achievement":"Эффективное внедрение практик аудита информационной безопасности в процесс DevOps","honorary_title":"ПРОФЕССИОНАЛ БФТ","awards":"100 БФТ-денег"},{"title":"ПРОФЕССИОНАЛ БФТ","photo":"https://25.bftcom.com/o.aryshtaeva@bftcom.com.jpg","last_name":"Арыштаева","first_name":"Ольга","position":"Старший специалист УТ ДОК","town":"Иркутск","achievement":"Выдающиеся профессиональные достижения, высокая личная эффективность и преданность интересам Компании","honorary_title":"ПРОФЕССИОНАЛ БФТ","awards":"100 БФТ-денег"},{"title":"ПРОФЕССИОНАЛ БФТ","photo":"https://25.bftcom.com/a.kiselchuk@bftcom.com.jpg","last_name":"Кисельчук","first_name":"Александр","position":"Специалист УТ ДОК","town":"Калининград","achievement":"Выдающиеся профессиональные достижения, высокая личная эффективность и преданность интересам Компании","honorary_title":"ПРОФЕССИОНАЛ БФТ","awards":"100 БФТ-денег"},{"title":"ПРОФЕССИОНАЛ БФТ","photo":"https://25.bftcom.com/d.zuev@bftcom.com.jpeg","last_name":"Зуев","first_name":"Денис","position":"Старший архитектор ДСП ДПЦТ","town":"Москва","achievement":"Профессиональная проработка ключевые решений по проекту и согласование их с Заказчиком (миграция и синхронизация данных ЕГРН, межсистемные блокировки)","honorary_title":"ПРОФЕССИОНАЛ БФТ","awards":"100 БФТ-денег"},{"title":"ПРОФЕССИОНАЛ БФТ","photo":"https://25.bftcom.com/av.evdokimov@bftcom.com.jpg","last_name":"Евдокимов","first_name":"Алексей","position":"Главный инженер разработчик ДСП ДПЦТ","town":"Санкт-Петербург","achievement":"Мастерство и стремление к совершенствованию в профессиональной деятельности, готовность сделать больше, лучше при создании новой ФГИС ЕГРН\n","honorary_title":"ПРОФЕССИОНАЛ БФТ","awards":"100 БФТ-денег"},{"title":"ПРОФЕССИОНАЛ БФТ","photo":"https://25.bftcom.com/a.guzairova@bftcom.com.jpeg","last_name":"Гузаирова","first_name":"Альбина","position":"Ведущий специалист по тестированию ДОКПО ДПЦТ","town":"Уфа","achievement":"Выдающиеся профессиональные достижения, высокая личная эффективность и преданность интересам Компании","honorary_title":"ПРОФЕССИОНАЛ БФТ","awards":"100 БФТ-денег"},{"title":"ПРОФЕССИОНАЛ БФТ","photo":"https://25.bftcom.com/d.golubev@bftcom.com.jpg","last_name":"Голубев","first_name":"Дмитрий","position":"Ведущий  архитектор ДСП ДПЦТ","town":"Обнинск","achievement":"Неоценимый вклад в проектирование и разработку компонента ФБХД новой ФГИС ЕГРН, наставничество и развитие профессиональных навыков коллег","honorary_title":"ПРОФЕССИОНАЛ БФТ","awards":"100 БФТ-денег"},{"title":"ПРОФЕССИОНАЛ БФТ","photo":"https://25.bftcom.com/e.erofeev@bftcom.com.jpg","last_name":"Ерофеев","first_name":"Евгений","position":"Руководитель направления ДСП ДПЦТ","town":"Уфа","achievement":"Высокий профессионализм, ответственность и инициативность, нацеленность на общий результат, координация многочисленных процессов продуктовых команд при создании новой ФГИС ЕГРН","honorary_title":"ПРОФЕССИОНАЛ БФТ","awards":"100 БФТ-денег"},{"title":"ПРОФЕССИОНАЛ БФТ","photo":"https://25.bftcom.com/a.ukolov@bftcom.com.jpg","last_name":"Уколов","first_name":"Александр","position":"Старший программист Отдел JS разработки УР ДАПР","town":"Москва","achievement":"Качественное и быстрое выполнение сложной работы, творческий подход в решении задач и высокая ответственность, проявленная в ходе реализации нового функционала","honorary_title":"ПРОФЕССИОНАЛ БФТ","awards":"100 БФТ-денег"},{"title":"ПРОФЕССИОНАЛ БФТ","photo":"https://25.bftcom.com/v.vakulov@bftcom.com.jpg","last_name":"Вакулов","first_name":"Виталий","position":"Ведущий программист Отдел JS разработкиУР ДАПР","town":"Санкт-Петербург","achievement":"Ответственность, добросовестность, трудолюбие и огромный практический опыт","honorary_title":"ПРОФЕССИОНАЛ БФТ","awards":"100 БФТ-денег"},{"title":"ПРОФЕССИОНАЛ БФТ","photo":"https://25.bftcom.com/y.tokmyanin@bftcom.com.jpg","last_name":"Токмянин","first_name":"Юрий","position":"Старший программист Отдел JS разработкиУР ДАПР","town":"Санкт-Петербург","achievement":"Выдающиеся профессиональные достижения, высокая личная эффективность и преданность интересам Компании","honorary_title":"ПРОФЕССИОНАЛ БФТ","awards":"100 БФТ-денег"},{"title":"ПРОФЕССИОНАЛ БФТ","photo":"https://25.bftcom.com/y.cherkez@bftcom.com.jpg","last_name":"Черкез","first_name":"Юрий","position":"Ведущий специалист по тестированию Отдел тестирования УСиЭ ДАПР","town":"Санкт-Петербург","achievement":"Выдающиеся профессиональные достижения, высокая личная эффективность и преданность интересам Компании","honorary_title":"ПРОФЕССИОНАЛ БФТ","awards":"100 БФТ-денег"},{"title":"ПРОФЕССИОНАЛ БФТ","photo":"https://25.bftcom.com/t.gubarevich@supercode.ru.jpg","last_name":"Абрамова","first_name":"Татьяна","position":"Ведущий аналитик ДРПУД ДПЦТ","town":"Москва","achievement":"Профессиональный подход к реализации поставленных задач: невероятная скорость и качество их выполнения, глубокий, детальный анализ при реализации любой задачи","honorary_title":"ПРОФЕССИОНАЛ БФТ","awards":"100 БФТ-денег"},{"title":"ПРОФЕССИОНАЛ БФТ","photo":"https://25.bftcom.com/a.alyakhunov@bftcom.com.jpg","last_name":"Аляхунов","first_name":"Амир","position":"Младший UX-инженер Отдел UX и проектирования интерфейсов АУ ДАПР","town":"Санкт-Петербург","achievement":"Качественная работа и уверенный профессиональный подход к решению задач, отзывчивость Сотрудник на которого можно положиться на 100%","honorary_title":"ПРОФЕССИОНАЛ БФТ","awards":"100 БФТ-денег"},{"title":"ПРОФЕССИОНАЛ БФТ","photo":"https://25.bftcom.com/m.prepeliza@bftcom.com.JPG","last_name":"Препелица","first_name":"Максим","position":"Старший аналитик  отдела аналитики АУ ДАПР","town":"Краснодар","achievement":"Самостоятельность, инициативность при выполнении своих обязанностей, качественные результаты работы, нацеленность на достижение результата, готовность помочь коллегам с задачами, высокий уровень самоорганизации","honorary_title":"ПРОФЕССИОНАЛ БФТ","awards":"100 БФТ-денег"},{"title":"ПРОФЕССИОНАЛ БФТ","photo":"https://25.bftcom.com/i.matsala@bftcom.com.jpeg","last_name":"Мацала","first_name":"Ирина","position":"Ведущий аналитик отдела аналитики АУ ДАПР","town":"Тюмень","achievement":"Самостоятельность, инициативность при выполнении своих обязанностей, качественные результаты работы, нацеленность на достижение результата, готовность помочь коллегам с задачами, высокий уровень самоорганизации","honorary_title":"ПРОФЕССИОНАЛ БФТ","awards":"100 БФТ-денег"},{"title":"ПРОФЕССИОНАЛ БФТ","photo":"https://25.bftcom.com/e.shkaranda@bftcom.com.jpg","last_name":"Шкаранда","first_name":"Екатерина","position":"Старший технический писатель отдела документирования АУ ДАПР","town":"Ростов-на-Дону","achievement":"Высокая результативность, умение в кратчайшие сроки подготовить внушительный объем документации надлежащего качества, отличная командная работа","honorary_title":"ПРОФЕССИОНАЛ БФТ","awards":"100 БФТ-денег"},{"title":"ПРОФЕССИОНАЛ БФТ","photo":"https://25.bftcom.com/e.bushaeva@bftcom.com.jpg","last_name":"Бушаева","first_name":"Елена","position":"Технический писатель  Отдел документирования АУ ДАПР","town":"Москва","achievement":"Неоценимый вклад в подготовку документации по нескольким направлениям одновременно, терпение и трудолюбие, вовлеченность в специфику работы документатора","honorary_title":"ПРОФЕССИОНАЛ БФТ","awards":"100 БФТ-денег"},{"title":"ПРОФЕССИОНАЛ БФТ","photo":"https://25.bftcom.com/d.malyh@bftcom.com.jpeg","last_name":"Малых","first_name":"Денис","position":"Ведущий инженер данных отдела данных АУ ДАПР","town":"Екатеринбург","achievement":"Профессиональный подход к решению задач, высокое качество выполняемых работ и отзывчивость","honorary_title":"ПРОФЕССИОНАЛ БФТ","awards":"100 БФТ-денег"},{"title":"ПРОФЕССИОНАЛ БФТ","photo":"https://25.bftcom.com/a.galaev@bftcom.com.jpg","last_name":"Галаев","first_name":"Анатолий","position":"Заместитель директора департамента ДСУД ДПЦТ","town":"Москва","achievement":"Большой личный вклад в развитие и внедрение продуктов подразделения, высокий профессионализм и результативность","honorary_title":"ПРОФЕССИОНАЛ БФТ","awards":"100 БФТ-денег"},{"title":"ПРОФЕССИОНАЛ БФТ","photo":"https://25.bftcom.com/i.mametev@bftcom.com.jpg","last_name":"Маметьев","first_name":"Ильдар","position":"Заместитель руководителя АУ ДСУД ДПЦТ","town":"Москва","achievement":"Высокий профессионализм и компетенции в решении задач ДСУД, ответственное отношение к делу","honorary_title":"ПРОФЕССИОНАЛ БФТ","awards":"100 БФТ-денег"},{"title":"ПРОФЕССИОНАЛ БФТ","photo":"https://25.bftcom.com/n.chukina@bftcom.com.jpg","last_name":"Чукина","first_name":"Наталья","position":"Руководитель направления АУ ДСУД ДПЦТ","town":"Москва","achievement":"Профессионализм и компетенции при реализации проектов внедрения БФТ.ЕНСИ в федеральных ведомствах, ответственное отношение к делу","honorary_title":"ПРОФЕССИОНАЛ БФТ","awards":"100 БФТ-денег"},{"title":"ПРОФЕССИОНАЛ БФТ","photo":"https://25.bftcom.com/d.alekseenko@bftcom.com.jpg","last_name":"Алексеенко","first_name":"Денис","position":"Ведущий дата-аналитик отдела дата-аналитики АУ ДАПР","town":"Санкт-Петербург","achievement":"Мастерство, проявленное в решении поставленных задач, трудолюбие и целеустремлённость, а также инициативность, необходимая для выполнения задач в срок","honorary_title":"ПРОФЕССИОНАЛ БФТ","awards":"100 БФТ-денег"},{"title":"ПРОФЕССИОНАЛ БФТ","photo":"https://25.bftcom.com/a.syrovatskii@bftcom.com.jpg","last_name":"Сыроватский","first_name":"Артем","position":"Ведущий системный архитектор Отдел технической архитектуры ДАСИС","town":"Москва","achievement":"Широкий технический кругозор, умение решать задачи любого уровня сложности, проверять их на практике и легко переключаться между ними","honorary_title":"ПРОФЕССИОНАЛ БФТ","awards":"100 БФТ-денег"},{"title":"ПРОФЕССИОНАЛ БФТ","photo":"https://25.bftcom.com/v.doroginin@bftcom.com.jpg","last_name":"Дорогинин","first_name":"Вадим","position":"Ведущий системный архитектор Отдел технической архитектуры ДАСИС","town":"Москва","achievement":"Быстрое погружение в сложнейший проект, проактивность и умение решать неординарные задачи","honorary_title":"ПРОФЕССИОНАЛ БФТ","awards":"100 БФТ-денег"},{"title":"ПРОФЕССИОНАЛ БФТ","photo":"https://25.bftcom.com/ekontsevaya@bftcom.com.jpg","last_name":"Концевая","first_name":"Екатерина","position":"Ведущий аналитик Отдел бизнес-архитектуры ДАСИС","town":"Москва","achievement":"Профессионализм и выполнение большого объема задач с неизменно высоким результатом","honorary_title":"ПРОФЕССИОНАЛ БФТ","awards":"100 БФТ-денег"},{"title":"ПРОФЕССИОНАЛ БФТ","photo":"https://25.bftcom.com/a.roitman@bftcom.com.JPG","last_name":"Ройтман","first_name":"Анастасия","position":"Старший юрист юридического отдела ПД","town":"Москва","achievement":"Выполнение сложнейших задач, возникающих в процессе исполнения проектов Компании и готовность выполнять большой объем работы в сжатые сроки","honorary_title":"ПРОФЕССИОНАЛ БФТ","awards":"100 БФТ-денег"},{"title":"ПРОФЕССИОНАЛ БФТ","photo":"https://25.bftcom.com/n.yurieva@bftcom.com.jpg","last_name":"Юрьева","first_name":"Наталья","position":"Главный технический эксперт отдела технической экспертизы ПД","town":"Москва","achievement":"Ответственное отношение к выполнению сложных задач, инициативность и позитивный подход","honorary_title":"ПРОФЕССИОНАЛ БФТ","awards":"100 БФТ-денег"},{"title":"ПРОФЕССИОНАЛ БФТ","photo":"https://25.bftcom.com/n.mosolov@bftcom.com.jpeg","last_name":"Мосолов","first_name":"Николай","position":"Заместитель начальника юридического отдела ПД","town":"Москва","achievement":"Профессионализм и поддержка коллег при выполнении задач различной сложности","honorary_title":"ПРОФЕССИОНАЛ БФТ","awards":"100 БФТ-денег"},{"title":"ПРОФЕССИОНАЛ БФТ","photo":"https://25.bftcom.com/e.egorova@bftcom.com.jpg","last_name":"Егорова","first_name":"Елена","position":"Старший аналитик АУ ДКУА ДУА","town":"Пенза","achievement":"Высокое мастерство, успехи в профессиональной деятельности и глубокие знания по направлению","honorary_title":"ПРОФЕССИОНАЛ БФТ","awards":"100 БФТ-денег"},{"title":"ПРОФЕССИОНАЛ БФТ","photo":"https://25.bftcom.com/v.ivanov@bftcom.com.jpg","last_name":"Иванов","first_name":"Владимир","position":"Руководитель проектов ДПУ","town":"Волгоград","achievement":"Высокая работоспособность, профессиональный подход и проактивная позиция при реализации нестандартных проектов","honorary_title":"ПРОФЕССИОНАЛ БФТ","awards":"100 БФТ-денег"},{"title":"ПРОФЕССИОНАЛ БФТ","photo":"https://25.bftcom.com/o.homyakova@bftcom.com.jpg","last_name":"Хомякова","first_name":"Олеся","position":"Аналитик ДКУА ДУА","town":"Калининград","achievement":"Профессионализм, эффективность и умение методично добиваться результата","honorary_title":"ПРОФЕССИОНАЛ БФТ","awards":"100 БФТ-денег"},{"title":"ПРОФЕССИОНАЛ БФТ","photo":"https://25.bftcom.com/d.safronov@bftcom.com.jpg","last_name":"Сафронов","first_name":"Дмитрий","position":"Ведущий специалист Отдел сопровождения УСиЭ ДАПР","town":"Москва","achievement":"Высокая отдача в работе - на  1000%, безоговорочная поддержка коллег, открытость новому, выстраивание эффективных коммуникаций, как с сотрудниками отдела, руководителями проекта, так и с Заказчиком \n","honorary_title":"ПРОФЕССИОНАЛ БФТ","awards":"100 БФТ-денег"},{"title":"ПРОФЕССИОНАЛ БФТ","photo":"https://25.bftcom.com/e.lipets@bftcom.com.jpg","last_name":"Липец","first_name":"Элина","position":"Руководитель направления ДОКПО ДПЦТ","town":"Уфа","achievement":"Большой вклад в развитие обеспечения качества, активное участие в деятельности по организации процессов тестирования","honorary_title":"ПРОФЕССИОНАЛ БФТ","awards":"100 БФТ-денег"},{"title":"ПРОФЕССИОНАЛ БФТ","photo":"https://25.bftcom.com/s.kashirov@bftcom.com.jpg","last_name":"Каширов","first_name":"Сергей","position":"Заместитель директора Департамента специальных проектов ДПЦТ","town":"Москва","achievement":"Отличная работа с Заказчиком по направлению \"Качество данных ЕГРН\"","honorary_title":"ПРОФЕССИОНАЛ БФТ","awards":"100 БФТ-денег"},{"title":"ПРОФЕССИОНАЛ БФТ","photo":"https://25.bftcom.com/oa.chetverikova@bftcom.com.jpg","last_name":"Четверикова","first_name":"Ольга","position":"Заместитель руководителя управления маркетинга","town":"Чебоксары","achievement":"Высокий профессионализм в работе и постоянное развитие своих профессиональных навыков","honorary_title":"ПРОФЕССИОНАЛ БФТ","awards":"100 БФТ-денег"},{"title":"ПРОФЕССИОНАЛ БФТ","photo":"https://25.bftcom.com/i.chernysh@bftcom.com.jpg","last_name":"Черныш","first_name":"Инна","position":"Старший менеджер по работе с партнерами Департамента партнерских отношений","town":"Москва","achievement":"Высокий профессионализм, самостоятельный и ответственный подход в работе","honorary_title":"ПРОФЕССИОНАЛ БФТ","awards":"100 БФТ-денег"},{"title":"ПРОФЕССИОНАЛ БФТ","photo":"https://25.bftcom.com/n.zakharenko@bftcom.com.jpg","last_name":"Захаренко","first_name":"Николай","position":"Менеджер по работе с партнерами Департамента партнерских отношений","town":"Москва","achievement":"Высокий профессионализм, самостоятельный и ответственный подход в работе","honorary_title":"ПРОФЕССИОНАЛ БФТ","awards":"100 БФТ-денег"},{"title":"ПРОФЕССИОНАЛ БФТ","photo":"https://25.bftcom.com/n.nigmetzyanova@bftcom.com.jpg","last_name":"Нигмедзянова","first_name":"Наина","position":"Директор Центра обучения клиентов","town":"Чебоксары","achievement":"Высокий профессионализм, самостоятельный и ответственный подход в работе","honorary_title":"ПРОФЕССИОНАЛ БФТ","awards":"100 БФТ-денег"},{"title":"ЗАСЛУЖЕННЫЙ ПРЕПОДАВАТЕЛЬ БФТ ","photo":"https://25.bftcom.com/a.sbrodov@bftcom.com.jpg","last_name":"Сбродов","first_name":"Александр","position":"Ведущий специалист УКП ДКСНП ДСКК","town":"Москва","achievement":"Разработка и реализация концепции обучения новых сотрудников и курсов для повышения квалификации специалистов, благодаря которой мы имеем стабильный и качественный профессиональный рост сотрудников","honorary_title":"ЗАСЛУЖЕННЫЙ ПРЕПОДАВАТЕЛЬ БФТ","awards":"100 БФТ-денег"},{"title":"ЗАСЛУЖЕННЫЙ ПРЕПОДАВАТЕЛЬ БФТ ","photo":"https://25.bftcom.com/f.gusev@bftcom.com.JPG","last_name":"Гусев","first_name":"Федор","position":"Начальник отдела бизнес-анализа АУ ДЦУИ ДУА","town":"Москва","achievement":"Большой вклад в обучение новых сотрудников: подготовка и чтение лекций, тестовые задания и планирование профессионального роста\n","honorary_title":"ЗАСЛУЖЕННЫЙ ПРЕПОДАВАТЕЛЬ БФТ","awards":"100 БФТ-денег"},{"title":"ПРЕПОДАВАТЕЛЬ БФТ","photo":"https://25.bftcom.com/a.reshetnik@bftcom.com.jpg","last_name":"Решетник","first_name":"Артур","position":"Ведущий системный инженер УТР ДОК","town":"Москва","achievement":"Наставничество и обучение коллег, написание подробных книг и статей по различному стеку ПО, применяемого в Компании","honorary_title":"ПРЕПОДАВАТЕЛЬ БФТ","awards":"50 БФТ-денег"},{"title":"ПРЕПОДАВАТЕЛЬ БФТ","photo":"https://25.bftcom.com/a.korepanov@bftcom.com.jpg","last_name":"Корепанов","first_name":"Александр","position":"Начальник отдела разработки баз данных ДТЭ ДРОЭФИС","town":"Ижевск","achievement":"Участие в роли спикера на форуме \"ИННОВА-2022\"","honorary_title":"ПРЕПОДАВАТЕЛЬ БФТ","awards":"50 БФТ-денег"},{"title":"ПРЕПОДАВАТЕЛЬ БФТ","photo":"https://25.bftcom.com/d.giliazev@bftcom.com.jpeg","last_name":"Гилязев","first_name":"Дмитрий","position":"Старший разработчик группы разработки Ижевск ОРППО ДТЭ ДРОЭФИС","town":"Ижевск","achievement":"Проведение мастер-класса «Разработка лендинг страницы продвижения своего проекта на MUI (React)» на форуме \"ИННОВА-2022\"","honorary_title":"ПРЕПОДАВАТЕЛЬ БФТ","awards":"50 БФТ-денег"},{"title":"ПРЕПОДАВАТЕЛЬ БФТ","photo":"https://25.bftcom.com/a.zakirov@bftcom.com.jpg","last_name":"Закиров","first_name":"Айдар","position":"Младший разработчик группы разработки Ижевск ОРППО ДТЭ ДРОЭФИС","town":"Ижевск","achievement":"Проведение мастер-класса «Разработка лендинг страницы продвижения своего проекта на MUI (React)» на форуме \"ИННОВА-2022\"","honorary_title":"ПРЕПОДАВАТЕЛЬ БФТ","awards":"50 БФТ-денег"},{"title":"ПРЕПОДАВАТЕЛЬ БФТ","photo":"https://25.bftcom.com/n.buyanova@bftcom.com.jpg","last_name":"Буянова","first_name":"Наталья","position":"Ведущий консультант ДМАиК","town":"Волгоград","achievement":"Успешное проведение обучающих вебинаров в рамках проекта Эксперт БФТ","honorary_title":"ПРЕПОДАВАТЕЛЬ БФТ","awards":"50 БФТ-денег"},{"title":"ПРЕПОДАВАТЕЛЬ БФТ","photo":"https://25.bftcom.com/vsokolov@bftcom.com.jpeg","last_name":"Соколов","first_name":"Владислав","position":"Аналитик аналитического отдела ДРОЭФИС","town":"Пермь","achievement":"Разработка программы и проведение цикла лекций по теме \"Основы ITIL\"","honorary_title":"ПРЕПОДАВАТЕЛЬ БФТ","awards":"50 БФТ-денег"},{"title":"АВТОР ПУБЛИКАЦИЙ","photo":"https://25.bftcom.com/m.chzhao@bftcom.com.jpg","last_name":"Чжао","first_name":"Михаил","position":"Специалист УТР ДОК","town":"Калининград","achievement":"Автор нескольких публикаций по информационным технологиям, тестированию и искусственному интеллекту","honorary_title":"АВТОР ПУБЛИКАЦИЙ","awards":"20 БФТ-денег"},{"title":"СПАСИБО, КАПИТАН","photo":"https://25.bftcom.com/d.fomin@bftcom.com.jpg","last_name":"Фомин","first_name":"Дмитрий","position":"Директор департамента ДПиМР","town":"Москва","achievement":"Самоотверженный труд и создание рабочей обстановки, способствующей продуктивной работе нашего коллектива","honorary_title":"СПАСИБО, КАПИТАН","awards":""},{"title":"СПАСИБО, КАПИТАН","photo":"https://25.bftcom.com/e.zanozina@bftcom.com.JPG","last_name":"Занозина","first_name":"Екатерина","position":"Заместитель директора дирекции Дирекция АЦК","town":"Москва","achievement":"Самоотверженный труд и создание рабочей обстановки, способствующей продуктивной работе нашего коллектива","honorary_title":"СПАСИБО, КАПИТАН","awards":""},{"title":"СПАСИБО, КАПИТАН","photo":"https://25.bftcom.com/i.borisova@bftcom.com.jpg","last_name":"Борисова","first_name":"Ирина","position":"Заместитель директора по технологическим вопросам ДВП","town":"Красноярск","achievement":"Команда СЗН ICE номинирует Ирину Борисову и говорит: «Спасибо, Капитан! За храбрость и отвагу перед любыми трудностями, за неисчерпаемый источник знаний, за изящество и мудрость при руководстве командой","honorary_title":"СПАСИБО, КАПИТАН","awards":""},{"title":"СПАСИБО, КАПИТАН","photo":"https://25.bftcom.com/u.zakharenko@bftcom.com.jpg","last_name":"Захаренко","first_name":"Юлия","position":"Заместитель коммерческого директора КД","town":"Москва","achievement":"Чуткость, гибкость, мудрые советы и наставления Мы ценим ваш огромный труд и осознаем масштабы вашего вклада в наш профессиональный рост и развитие курируемых подразделений","honorary_title":"СПАСИБО, КАПИТАН","awards":""},{"title":"СПАСИБО, КАПИТАН","photo":"https://25.bftcom.com/m.zhirkova@bftcom.com.JPG","last_name":"Жиркова","first_name":"Мария","position":"Директор департамента ДОК","town":"Москва","achievement":"И в штиль, и в грозу, и в солнечный зной - \nНаш капитан за нас всех горой!\nОтчеты, регрессы - нам нипочем,\nКогда Вы стоите за нашим плечом!\n\n","honorary_title":"СПАСИБО, КАПИТАН","awards":""},{"title":"СПАСИБО, КАПИТАН","photo":"https://25.bftcom.com/r.ardavov@bftcom.com.jpg","last_name":"Ардавов","first_name":"Рустамбек","position":"Директор департамента ДГЗиФК","town":"Москва","achievement":"Поддержание командного духа, помощь в решении поставленных задач и достижении нашего общего результата","honorary_title":"СПАСИБО, КАПИТАН","awards":""},{"title":"СПАСИБО, КАПИТАН","photo":"https://25.bftcom.com/n.marasanova@bftcom.com.jpg","last_name":"Марасанова","first_name":"Наталья","position":"Директор департамента ПД","town":"Москва","achievement":"Поддержание командного духа, развитие и профессионализм, который взращивает Наталья в сотрудниках, что позволяет выполнять Правовому департаменту все поставленные задачи по защите интересов Компании, правовому обеспечению продаж и исполнения проектов в постоянном режиме и в правильном направлении","honorary_title":"СПАСИБО, КАПИТАН","awards":""},{"title":"СПАСИБО, КАПИТАН","photo":"https://25.bftcom.com/s.stepanova@bftcom.com.jpg","last_name":"Скотникова","first_name":"Сусанна","position":"Руководитель управления АУ","town":"Москва","achievement":"Внимательность, терпение, креативность, целеустремленность и настойчивость в достижении общих целей.\nМы гордимся таким профессиональным и компетентным руководителем, деятельность которого  – это образец ответственности и самоотдачи. \nМы рады трудиться под руководством, такого неравнодушного и отзывчивого человека.\n","honorary_title":"СПАСИБО, КАПИТАН","awards":""},{"title":"СПАСИБО, КАПИТАН","photo":"https://25.bftcom.com/y.stetsenko@bftcom.com.jpg","last_name":"Стеценко","first_name":"Яна","position":"Заместитель директора департамента по административным вопросам ДВП","town":"Москва","achievement":"Правду молвить, чудо-Яна\nХороша и многогранна:\nВысока, стройна, умна,\nИ энергии полна.\n\nЯна нас оберегает,\nЕсли надо - помогает.\nБюджеты, планы, отпуска:\nЕе работа велика.\n\nСкажем мы \"Спасибо, Яна!\nТы достойна \"капитана\"\n","honorary_title":"СПАСИБО, КАПИТАН","awards":""},{"title":"СПАСИБО, КАПИТАН","photo":"https://25.bftcom.com/r.aliakhunov@bftcom.com.jpg","last_name":"Аляхунов","first_name":"Руслан","position":"Руководитель АУ ДАПР","town":"Санкт-Петербург","achievement":"Преданность своему делу, внимательность и честность к сотрудникам. Неоценимый вклад в развитие, благодаря чему взаимодействие между сотрудниками отделов стало лучше и прозрачнее","honorary_title":"СПАСИБО, КАПИТАН","awards":""}]


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

    const url = API_URL + '/contest' +
        '/upload' + `?bucket=${bucket}`

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



        return response.data.url



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