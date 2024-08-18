import './Searchsection.css'
import searchicon from '../../assets/images/searchicon.png'
import { Mytheme } from '../../App'
import { UserName } from '../../App'
import { useContext, useEffect, useState } from 'react'

function Searchsection(){
    const passedvalues =useContext(Mytheme)
    const passedusername=useContext(UserName)
    // const [infoarray,setinfoarray]=useState([])
    // const [username,setusername] =useState("")

    const [id, setId] = useState('')
    const [data, setData] = useState(null)

    const handleClick = async () => {
    const data = await (await fetch(`https://api.github.com/users/${id}`)).json()
    setData(data)
    passedusername.setusername(data)
    }

    // console.log(data)
    // console.log(passedusername.username.name)
    
    return(
        <div className={ passedvalues.Theme+"searchsectiondiv"}>
            <div id='searchdiv'>
                <img src={searchicon}></img>
                {/* <form className='myform'>
                    <input className={passedvalues.Theme + "searchtopic"}  value={username}></input>
                    <button id='searchbtn'>Search</button>
                </form> */}
                <input className={passedvalues.Theme + "searchtopic"} placeholder='Search Github username...' 
                value={id} onChange={e => setId(e.target.value)}></input>
            </div>
            <button id='searchbtn' type="submit" onClick={handleClick}>Search</button>
        </div>
    )
}

export default Searchsection
