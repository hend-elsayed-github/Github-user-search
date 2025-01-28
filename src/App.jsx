import { useState,createContext, useContext ,useEffect } from 'react'
import './App.css'
import Firstsection from './Components/Firstsection/Firstsection'
import Searchsection from './Components/Searchsection/Searchsection'
import Mainsection from './Components/Mainsection/Mainsection'
import Togglebtn from './Components/Togglebtn/Togglebtn'
export const Mytheme = createContext(null);
export const UserName = createContext(null);

function App() {
      const [Theme, setTheme] =useState("LIGHT")
      const [username, setusername] =useState([])
  return (
    <Mytheme.Provider value={{Theme,setTheme}}>
      <UserName.Provider value={{username,setusername}}>
    <div className={Theme+"maindiv"}>
      <Firstsection></Firstsection>
      <Searchsection></Searchsection>
      { username==" "? <div className={Theme+"NODATA"}><p className={Theme+"alert"}>Search Github username...</p></div>:
      <Mainsection></Mainsection>
}
    </div>
    </UserName.Provider>
    </Mytheme.Provider>
  )
 
}

export default App
