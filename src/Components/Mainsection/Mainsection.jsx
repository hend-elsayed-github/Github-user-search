import './Mainsection.css'
import myimg from '../../assets/images/Bitmap.png'
import twittwricon from '../../assets/images/Twitter.png'
import locationicon from '../../assets/images/location-light.png'
import urlicon from '../../assets/images/002-url-light.svg'
import buildingicon from '../../assets/images/building-light.svg'
import { Mytheme } from '../../App'
import { useContext } from 'react'
function Mainsection(){
    const passedvalues2 =useContext(Mytheme)
    return(
        <div className={passedvalues2.Theme+'mainsectiondiv'}>
            <div id='infodiv'>
                <img src={myimg}/>
                <div id='extradiv'>
                    <div id='nameanddatediv'>
                        <label id='name'>The Octocat</label>
                        <label id='belowname'>@octocat</label>
                    </div>
                    <label id='date'>Joined 25 Jan 2011</label>
                </div>
            </div>
            <div id='lowerinfodiv'>
                    <p id='bio'>This profile has no bio</p>
                    <div id='numbersinfo'>
                        <div className='commondiv'>
                            <label className='infotype'>Repos</label>
                            <label className='infovalue'>8</label>
                        </div>
                        <div className='commondiv'>
                            <label className='infotype'>Followes</label>
                            <label  className='infovalue'>3938</label>
                        </div>
                        <div className='commondiv'>
                            <label className='infotype'>Following</label>
                            <label  className='infovalue'>9</label>
                        </div>
                    </div>
                    <div id='linksdiv'>
                        <div className='commonlinksdiv'>
                            <img src={locationicon}></img>
                            <label className='linkname'>San Francisco</label>
                        </div>
                        <div className='commonlinksdiv'>
                        <img src={twittwricon}></img>
                        <label  className='linkname'>Not Available</label>
                        </div>
                        <div className='commonlinksdiv'>
                        <img src={urlicon}></img>
                        <a  className='linkname' href='https://github.blog' id='githublink'>https://github.blog</a>
                        </div>
                        <div className='commonlinksdiv'>
                        <img src={buildingicon}></img>
                        <label  className='linkname'>@github</label>
                        </div>
                    </div>
            </div>
        </div>
    )
}


export default Mainsection