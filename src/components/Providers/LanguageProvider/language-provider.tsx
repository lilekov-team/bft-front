import React, { ReactNode, useContext, useEffect, useState } from "react";
import { ILang, languages, LanguageTypes } from "./languages";



const getDefaultLanguage = () => {
    if (localStorage.currentLanguage === 'en' ) {
        return LanguageTypes.EN
      } else {
        return LanguageTypes.RU
      }
}


interface ContextProps {
    language: ILang,
    currentLanguage: LanguageTypes,
    changeLanguage: (lang: LanguageTypes) => void
}

const LanguageContext = React.createContext<ContextProps|null>(null);


const LanguageProvider: React.FC<{children: ReactNode}> = ({children}) => {
    const [language, setLanguage] = useState<LanguageTypes>(LanguageTypes.RU)
    
    // moment.locale(language === 'Russian' ? 'ru' : 'en')


    useEffect(() => {
        setLanguage(getDefaultLanguage())
    }, [])



    useEffect(() => {
        
        if (language === LanguageTypes.EN) {
            
            localStorage.currentLanguage = 'en'
        } else {
            
            localStorage.currentLanguage = 'Russian'
        }

    }, [language])

    const changeLanguage = (language: LanguageTypes) => {
        setLanguage(language)
    }

    return (
        <LanguageContext.Provider
        value={{
            language: languages[language],
            currentLanguage: language,
            changeLanguage
        }}
        >
            {children}
        </LanguageContext.Provider>
    )
}


export const useLanguage = () => {
    const language = useContext(LanguageContext)
    if (!language) {
        throw new Error('useLanguage hook used outside LanguageProvider')
    }
    return language;
}

export default LanguageProvider;