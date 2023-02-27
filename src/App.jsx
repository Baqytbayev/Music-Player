import React, {useEffect, useRef, useState} from 'react';
import './App.css';
import Audio from './Component/Audio/Audio';



function App() {
    const audioRef = useRef()
    const [playMusic, setPlayMusic] = useState(0)
    const [playMusicStartTime, setPlayMusicStartTime] = useState(0)
    const playAudio = () => {
            audioRef.current.play()
            console.log(audioRef.current)
        }
    const stopAudio = () => {
        audioRef.current.pause()
        audioRef.current.currentTime = 0;
    }
    useEffect(() => {
        setInterval(() => {
            const musicTime = Math.floor( audioRef?.current?.duration)
            const currentMusicTime = Math.floor( audioRef?.current?.currentTime)
            setPlayMusic(musicTime - currentMusicTime)
            setPlayMusicStartTime(currentMusicTime)
        }, 100)
    })    
    const pauseAudio =() => {
            audioRef.current.pause()
    }
    function timeToMinuteAndSecond(time) {
        if(time && !isNaN(time)){
            const minute = Math.floor(time / 60) < 10 ? `0${Math.floor(time / 60)}` : Math.floor(time / 60);
            const second = Math.floor(time % 60) < 10 ? `0${Math.floor(time % 60)}` : Math.floor(time % 60);
            return `${minute}:${second}`
        }
        return '00:00'
        
    }
    const imageOfSong=['bitch1.jpg', 'money_trees2.jpg', 'humble3.jpg', 'swimming__pools4.jpg']
    const nameOfSongs = ['Kendrick Lamar__Bitch__Dont__Kill__My__Vibe.mp3',
        'Kendrick_Lamar__Money_Trees.mp3',
        'Kendrick-Lamar__Humble.mp3',
        'Kendrick-Lamar__Swimming-Pools.mp3']
        const [song, setSong] = useState(0);

        const nextSong = () => {
            setSong(prev => {
                if (prev === nameOfSongs.length - 1 && prev === imageOfSong.length - 1) {
                    return 0;
                } else {
                    return prev + 1;
                }
            });
        };
        const previosSong = () => {
            setSong(prev => {
                if (prev === nameOfSongs.length - 1 && prev === imageOfSong.length - 1) {
                    return prev - 1;;
                } else {
                    return 0;
                }
            });
        };

    return (
    <div className="App">
        <div className="App">
        <Audio 
            image={"./images/"+imageOfSong[song]}       
            nameOfSong={nameOfSongs[song]}
            audioRef={audioRef}
            playAudio={playAudio}
            pauseAudio={pauseAudio}
            currentTime={timeToMinuteAndSecond(playMusicStartTime)}
            howMuchIsLeft={timeToMinuteAndSecond(playMusic)}
            musicName={"./music/"+nameOfSongs[song]}
            next={nextSong}
            previous={previosSong}
            inputGo={playMusicStartTime}
            endOfMusic={playMusic}
            stop={stopAudio}
            saveSong={"./music/"+nameOfSongs[song]}
    />
            </div>
    </div>
);
    }

export default App;
