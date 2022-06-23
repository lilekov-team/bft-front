import type { NextPage } from 'next'
import { useState } from 'react'
import Button, { ButtonVariants } from '../src/components/Atoms/Button/button'
import FormField from '../src/components/Atoms/FormField/form-field'
import Typography, { TextVariants } from '../src/components/Atoms/Typography/typography'
import { useLanguage } from '../src/components/Providers/LanguageProvider/language-provider'
import { LanguageTypes } from '../src/components/Providers/LanguageProvider/languages'
import { useTheme } from '../src/components/Providers/ThemeProvider/themeProvider'
import SearchSVG from '../assets/search.svg'
import ScrollToTopButton from '../src/components/Molecules/Fab/scroll-to-top-button'
import SearchField from '../src/components/Molecules/SearchField/search-field'
import Select from '../src/components/Atoms/Select/select'
import { CaretDown } from '../src/components/Atoms/Icons/CaretDown'
import Checkbox from '../src/components/Atoms/Checkbox/checkbox'
import AnimatedBurger from '../src/components/Atoms/Icons/AnimatedBurger'



const Home: NextPage = () => {

  const { theme, toggleTheme } = useTheme()
  const { currentLanguage, changeLanguage, language } = useLanguage()
  const [text, setText] = useState("")
  const [error, setError] = useState<undefined | string>()
  const [value, setValue] = useState<string | undefined>()
  const [check, setCheck] = useState(false)







  const toggleLanguage = () => {
    const newLang = currentLanguage === LanguageTypes.EN ? LanguageTypes.RU : LanguageTypes.EN


    changeLanguage(newLang)
  }

  return (
    <div className='h-[240rem]'>
      <button className='bg-main-red p-4 h-10 text-main-blue' onClick={toggleTheme}>
        {'TOGGLE THEME' + 'current Theme: ' + theme}
      </button>
      <button className='bg-main-red p-4 h-10 text-main-blue' onClick={toggleLanguage}>
        {language.onClick}
      </button>
      <Button variant={ButtonVariants.OUTLINED} onClick={() => setError(error ? undefined : 'error')}>
        Button
      </Button>
      <Typography variant={TextVariants.MAIN} className="mb-3">
        Typography
      </Typography>
      <div className='px-20'>
        <FormField
          value={text}
          onChange={(value) => setText(value)}
          name="text"
          type='phone'
          error={error}
          placeholder='Placeholder'
          suffix={<SearchSVG />}

        />
      </div>
      <div className='px-20 mt-5 py-5 bg-light-grey'>

        <SearchField<string>
          onOptionSelected={() => { }}
          options={[{
            label: 'First option',
            value: '1'
          },
          {
            label: 'Second option',
            value: '2'
          },
          {
            label: 'Third option',
            value: '3'
          }
          ]}
          onSearch={() => { }}
          placeholder="Текст"
          collapse={true}
        />
      </div>
      <div className='px-20 mt-5 py-5 bg-light-grey'>

        <Select<string>
          onChange={(value) => { setValue(value) }}
          options={[{
            label: 'First option',
            value: '1'
          },
          {
            label: 'Second option',
            value: '2'
          },
          {
            label: 'Third option',
            value: '3'
          }
          ]}
          placeholder="Выберите опцию"
          
          value={value}
        />
      </div>
      <Checkbox
      checked={check}
      onChange={() => {
        setCheck(c => !c)
      }}
      error={error ? true : false}
      text={'Checkbox'}
      />
      <div className='p-4'>
        <AnimatedBurger/>
      </div>
      <ScrollToTopButton />
    </div>
  )
}

export default Home
