import React from 'react';
import "./Audio.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import {  faBackward } from "@fortawesome/free-solid-svg-icons";
import {  faForward } from "@fortawesome/free-solid-svg-icons";
import '@fontsource/roboto/500.css';
import { Typography, Slider } from '@mui/material';
import {  faPause } from "@fortawesome/free-solid-svg-icons";
import {  faStop } from "@fortawesome/free-solid-svg-icons";
import {  faDownload } from "@fortawesome/free-solid-svg-icons";




const Audio = (props) => {
    return(
        <div className='styleOfAudio'>
            <div className='margin'></div>
            <div className='audioDiv'>
            <img className='imgStyle' src={props.image} alt={props.image}/>
            <div className='textOfDivStyle'><Typography variant='H1' className='songNameStyle'>{props.nameOfSong}</Typography></div>
            <div className='audioStyle'>
                <div className='sliderAudio'>                 
                    <Typography variant="p" component="p" className='styleOfTime'>{props.currentTime}</Typography>
                    <div className="slidecontainer">
                        <Slider value={props.inputGo} max={props.endOfMusic} />
                    </div>
                    <Typography variant="p" component="p" className='styleOfTime'>{props.howMuchIsLeft}</Typography>
                </div>
            <audio
                autoPlay
                ref={props.audioRef}
                style={{'display': 'none'}}
                src={props.musicName}/>
            </div>
            <div className='buttonNextAndPrevious'>
                <button onClick={props.previous}><FontAwesomeIcon icon={faBackward} className='styleOfIcon'></FontAwesomeIcon></button>
                <button onClick={props.stop}><FontAwesomeIcon icon={faStop} className='styleOfIcon'></FontAwesomeIcon></button>
                <button onClick={props.playAudio}><FontAwesomeIcon icon={faPlay} className='styleOfIcon'></FontAwesomeIcon></button>
                <button onClick={props.pauseAudio}><FontAwesomeIcon icon={faPause} className='styleOfIcon'></FontAwesomeIcon></button>
                <button onClick={props.next}><FontAwesomeIcon icon={faForward} className='styleOfIcon'></FontAwesomeIcon></button>
                
            </div>
            <div className='saveSongStyle'><a className='hrefStyle' download={props.nameOfSong} href={props.saveSong}><FontAwesomeIcon icon={faDownload } className='styleOfIconHref'></FontAwesomeIcon></a></div>
            </div>
            
        </div>
    )
}
export default Audio