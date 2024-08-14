import './Searchsection.css'
import searchicon from '../../assets/images/searchicon.png'
import { Mytheme } from '../../App'
import { useContext } from 'react'
function Searchsection(){
    const passedvalues =useContext(Mytheme)
    return(
        <div className={ passedvalues.Theme+"searchsectiondiv"}>
            <div id='searchdiv'>
                <img src={searchicon}></img>
                <input className={passedvalues.Theme + "searchtopic"} value='Search Github username...'></input>
            </div>
            <button id='searchbtn'>Search</button>
        </div>
    )
}

export default Searchsection