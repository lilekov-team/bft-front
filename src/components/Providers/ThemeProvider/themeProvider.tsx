import React, { ReactNode, useContext, useEffect, useState } from "react";

export enum ThemeTypes {
    DARK= 'dark',
    LIGHT='LIGHT'
}

interface ContextProps {
    theme: ThemeTypes,
    toggleTheme: () => void
}

const ThemeContext = React.createContext<ContextProps|null>(null);




const getDefaultTheme = () => {
    if (typeof window !== 'undefined' && localStorage.customTheme === 'dark' || (!('customTheme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        return ThemeTypes.DARK
      } else {
        return ThemeTypes.LIGHT
      }
}


const ThemeProvider: React.FC<{children: ReactNode}> = ({children}) => {
  
    const [theme, setTheme] = useState<ThemeTypes>(ThemeTypes.LIGHT)


    useEffect(() => {
        setTheme(getDefaultTheme())
    }, [])



    useEffect(() => {
        
        if (theme === ThemeTypes.DARK) {
            document.documentElement.classList.add('dark')
            localStorage.customTheme = 'dark'
        } else {
            document.documentElement.classList.remove('dark')
            localStorage.customTheme = 'light'
        }

    }, [theme])



    
    
    
    const toggleTheme = () => {
        setTheme(theme === ThemeTypes.DARK ? ThemeTypes.LIGHT : ThemeTypes.DARK)
    }


    return (
        <ThemeContext.Provider
        value={{
            theme: theme,
            toggleTheme: toggleTheme
        }}
        >
            {children}
        </ThemeContext.Provider>
    )
}


export const useTheme = () => {
    const theme = useContext(ThemeContext)
    if (!theme) {
        throw new Error('useTheme hook used outside ThemeProvider')
    }
    return theme;
}

export default ThemeProvider;