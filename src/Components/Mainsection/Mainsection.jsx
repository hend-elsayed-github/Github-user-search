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
function Mainsection(){
    const passedvalues =useContext(Mytheme)
    return(
        <div className={passedvalues.Theme+'mainsectiondiv'}>
            <div id='infodiv'>
                <img src={myimg}/>
                <div id='extradiv'>
                    <div id='nameanddatediv'>
                        <label className={passedvalues.Theme+'name'}>The Octocat</label>
                        <label id='belowname'>@octocat</label>
                    </div>
                    <label id='date'>Joined 25 Jan 2011</label>
                </div>
            </div>
            <div id='lowerinfodiv'>
                    <p className={passedvalues.Theme+'bio'}>This profile has no bio</p>
                    <div className={passedvalues.Theme+'numbersinfo'}>
                        <div className='commondiv'>
                            <label className={passedvalues.Theme+'infotype'}>Repos</label>
                            <label className={passedvalues.Theme+'infovalue'}>8</label>
                        </div>
                        <div className='commondiv'>
                            <label className={passedvalues.Theme+'infotype'}>Followes</label>
                            <label   className={passedvalues.Theme+'infovalue'}>3938</label>
                        </div>
                        <div className='commondiv'>
                            <label className={passedvalues.Theme+'infotype'}>Following</label>
                            <label   className={passedvalues.Theme+'infovalue'}>9</label>
                        </div>
                    </div>
                    <div id='linksdiv'>
                        <div className='commonlinksdiv'>
                            {passedvalues.Theme=="DARK"? <img src={locationicondark}/>: <img src={locationicon}/>}
                            <label className={passedvalues.Theme+ 'linkname'}>San Francisco</label>
                        </div>
                        <div className='commonlinksdiv'>
                        <img src={twittericon}></img>
                        <label  id='twitter'>Not Available</label>
                        </div>
                        <div className='commonlinksdiv'>
                        {passedvalues.Theme=="DARK"? <img src={urlicondark}/>: <img src={urlicon}/>}
                        <a  className={passedvalues.Theme+ 'linkname'} href='https://github.blog' id='githublink'>https://github.blog</a>
                        </div>
                        <div className='commonlinksdiv'>
                        {passedvalues.Theme=="DARK"? <img src={buildingicondark}/>: <img src={buildingicon}/>}
                        <label  className={passedvalues.Theme+ 'linkname'}>@github</label>
                        </div>
                    </div>
            </div>
        </div>
    )
}


export default Mainsection