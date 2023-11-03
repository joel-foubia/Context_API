import React, { createContext, useContext, useState } from 'react'
import './App.css';
// We provided some simple React template code. Your goal is to modify the 
// application so that when you click the toggle button, the favorite programming language 
// toggles between the items in the languages array. The default value should be the first item in the array.

// You must use the Context API for this challenge, which means you have to use the 
// React.createContext and Context.Provider functions. You are free to add classes and styles, 
// but make sure you leave the component ID's and clases provided as they are.

// Submit your code once it is complete and our system will validate your output.

const languages = ['Javascript', 'Python'];

const LanguageContext = createContext();

const LanguageContextProvider = ({ children }) => {
  const [language, setLanguage] = useState(languages[0]);

  const handleToggle = () => {
    setLanguage((prev) => {
      const currentIndex = languages.indexOf(prev);
      return languages[currentIndex < languages.length - 1 ? currentIndex + 1 : 0];
    });
  }

  return (
    <>
      <LanguageContext.Provider value={{ language, handleToggle }}>
        {children}
      </LanguageContext.Provider>
    </>
  )
}

const App = () => {
  return (
    <div>
      <LanguageContextProvider>
        <MainSection />
      </LanguageContextProvider>
    </div>
  )
}

const MainSection = () => {
  const {language, toggleLanguage} = useContext(LanguageContext);
  return (
    <div>
      <p>My Favorite language is : {language}</p>
      <button onClick={toggleLanguage}>Toggle Language</button>
    </div>
  )
}

export default App





