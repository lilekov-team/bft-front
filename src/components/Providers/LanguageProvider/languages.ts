
export enum LanguageTypes {
    RU='Russian',
    EN='en'
}

export type Languages = {
    [key in LanguageTypes]: ILang
};


export interface ILang {
    onClick: string
  }
  
  export const languages: Languages = {
    en: {
      onClick: 'Click me'
    },
    Russian: {
        onClick: 'Нажми меня'
    }
  };
  