import './Mainsection.css'
import myimg from '../../assets/images/Bitmap.png'
import twittericon from '../../assets/images/Twitter.png'
import locationicon from '../../assets/images/location-light.png'
import urlicon from '../../assets/images/002-url-light.svg'
import buildingicon from '../../assets/images/building-light.svg'
import buildingicondark from '../../assets/images/001-office-building-dark.png'
import locationicondark from '../../assets/images/location-dark.png'
import urlicondark from '../../assets/images/002-url-dark.png'
import { Mytheme } from '../../App'
import { useContext } from 'react'
import { UserName } from '../../App'
function Mainsection(){
    const passedvalues =useContext(Mytheme)
    const passedusername=useContext(UserName)
    var chick =passedusername;

    return(
        <div className={passedvalues.Theme+'mainsectiondiv'}>
            
            <div id='infodiv'>
                <img id='avatar' src={passedusername.username.avatar_url}/>
                <div id='extradiv'>
                    <div id='nameanddatediv'>
                        <label className={passedvalues.Theme+'name'}>{passedusername.username.name}</label>
                        <label id='belowname'>@{passedusername.username.login}</label>
                    </div>
                    <label id='date'>{passedusername.username.created_at}</label>
                </div>
            </div>
            <div id='lowerinfodiv'>
                    <p className={passedvalues.Theme+'bio'}>{passedusername.username.bio==null ? <p>This profile has no bio</p> : passedusername.username.bio}</p>
                    <div className={passedvalues.Theme+'numbersinfo'}>
                        <div className='commondiv'>
                            <label className={passedvalues.Theme+'infotype'}>Repos</label>
                            <label className={passedvalues.Theme+'infovalue'}>{passedusername.username.public_repos}</label>
                        </div>
                        <div className='commondiv'>
                            <label className={passedvalues.Theme+'infotype'}>Followes</label>
                            <label   className={passedvalues.Theme+'infovalue'}>{passedusername.username.followers}</label>
                        </div>
                        <div className='commondiv'>
                            <label className={passedvalues.Theme+'infotype'}>Following</label>
                            <label   className={passedvalues.Theme+'infovalue'}>{passedusername.username.following}</label>
                        </div>
                    </div>
                    <div id='linksdiv'>
                        <div className='commonlinksdiv'>
                            {passedvalues.Theme=="LIGHT" || passedusername.username.location==null? <img src={locationicon}/>: <img src={locationicondark}/>}
                            <label className={passedvalues.Theme+ 'linkname'}>{passedusername.username.location==null ? <label className='twitter'>Not Available</label> : passedusername.username.location}</label>
                        </div>
                        <div className='commonlinksdiv'>
                        <img src={twittericon}></img>
                        <label  className='twitter'>{passedusername.username.twitter_username==null ? <label className='twitter'>Not Available</label> : passedusername.username.twitter_username}</label>
                        </div>
                        <div className='commonlinksdiv'>
                        {passedvalues.Theme=="LIGHT"|| passedusername.username.blog=="" ?  <img src={urlicon}/> : <img src={urlicondark}/>}
                        <a  className={passedvalues.Theme+ 'linkname'} href={passedusername.username.blog} id='githublink'>{passedusername.username.blog==""? <label className='twitter'>Not Available</label>: passedusername.username.blog}</a>
                        </div>
                        <div className='commonlinksdiv'>
                        {passedvalues.Theme=="LIGHT" || passedusername.username.company==null? <img src={buildingicon}/>: <img src={buildingicondark}/>}
                        <label  className={passedvalues.Theme+ 'linkname'}>{passedusername.username.company==null ? <label className='twitter'>Not Available</label> : passedusername.username.company}</label>
                        </div>
                    </div>
            </div>

        </div>
        
 )

}


export default Mainsection