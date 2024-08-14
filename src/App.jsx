import { useState,createContext, useContext } from 'react'
import './App.css'
import Firstsection from './Components/Firstsection/Firstsection'
import Searchsection from './Components/Searchsection/Searchsection'
import Mainsection from './Components/Mainsection/Mainsection'
import Togglebtn from './Components/Togglebtn/Togglebtn'
export const Mytheme = createContext(null);

function App() {
      const [Theme, setTheme] =useState("LIGHT")
  return (
    <Mytheme.Provider value={{Theme,setTheme}}>
    <div className={Theme+"maindiv"}>
      <Firstsection></Firstsection>
      <Searchsection></Searchsection>
      <Mainsection></Mainsection>
    </div>
    </Mytheme.Provider>
  )
}

export default App
