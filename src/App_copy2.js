import React, { useState, useContext, createContext } from 'react';

const languages = ['JavaScript', 'Python'];

const LanguagesContext = createContext();

const LanguageContextProvider = ({children}) => {
  const [language, setLanguage] = useState(languages[0]);

  const toggleLanguage = () => 
    setLanguage(prev => {
      const currentIndex = languages.indexOf(prev);
      return languages[currentIndex < languages.length - 1 ? currentIndex + 1 : 0];
    })

  return (
    <LanguagesContext.Provider value={{language, toggleLanguage}}>
      {children}
    </LanguagesContext.Provider>
  )
}

const App = () => 
  (
    <LanguageContextProvider>
      <MainSection/>
    </LanguageContextProvider>
  )


  const MainSection = () => {
    const {language, toggleLanguage} = useContext(LanguagesContext);
  
    return (
      <div>
        <p id="favoriteLanguage">Favorite programing language: {language}</p>
        <button id="changeFavorite" onClick={toggleLanguage}>Toggle language</button>
      </div>
    )
  }
  export default App; 