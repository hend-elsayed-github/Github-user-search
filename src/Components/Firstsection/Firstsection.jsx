import './Firstsection.css'
import Togglebtn from '../Togglebtn/Togglebtn'
import { Mytheme } from '../../App'
import { useContext } from 'react'

function Firstsection(){
    const passedvalues =useContext(Mytheme)
    return(
        <div id='firestsectiondiv'>
            <label className={passedvalues.Theme +"logoname"}>devfinder</label>
            <Togglebtn></Togglebtn>
        </div>
    )
}

export default Firstsection