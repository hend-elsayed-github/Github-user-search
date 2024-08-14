import './Togglebtn.css'
import { useContext,useState } from 'react'
import { Mytheme } from '../../App'
import moonicon from '../../assets/images/moonicon.png'
import sunicon from '../../assets/images/002-sun.svg'
function Togglebtn(){
    const Theme =useContext(Mytheme)
    const [chicked,setchicked]=useState("DARK")
    function Handleonclick(){
        if(chicked=="DARK"){
            setchicked("LIGHT")
        }else{
            setchicked("DARK")
        }
        Theme.setTheme(chicked);
        }
        // console.log(chicked)
        
        
        
    return(
        <button id='togglebtn'>
            <label className={chicked+"color"}>{chicked}</label>
            {chicked=="DARK"? <img src={moonicon} onClick={Handleonclick}/>:
            <img src={sunicon} onClick={Handleonclick}/>}
            
        </button>
    )
}

export default Togglebtn