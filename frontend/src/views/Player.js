import "../styles/player.css";
import React from 'react';
import { useState, useEffect } from "react";
const Player = (props) => {
    const styleControl1 = {
        marginTop: '40px'
    }
    const styleControl2 = {
        marginBottom: '40px'
    }
    const [play, setPlay] = useState(false);
    const [timeSong, setTimeSong] = useState(10);
    const [timeLenghtSong, setTimeLenghtSong] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    useEffect(() => {
        const audio = document.getElementById("audio");
        setTimeSong(audio.currentTime)
        setTimeLenghtSong(audio.duration)
    }, [])
    const playMusic = () => {
        const audio = document.getElementById("audio");
        console.log("play");
        const time_song = document.getElementById("time_song");
        if (audio.paused || audio.ended) {
            console.log(audio.duration);
            setInterval(() => {
                setTimeSong(audio.currentTime);
                console.log(time_song.value);
                console.log(time_song.max);
                setTimeLenghtSong(audio.duration)
                time_song.value = audio.currentTime
                time_song.max = audio.duration


            }, 1000);
            audio.play();

        } else {
            audio.pause();

        }
    };
    return (
        <div className="container">

            <div className="player">
                <div className="player__controls" style={styleControl1} >
                    <div className="player__btn player__btn--small">
                        <i className="bi bi-arrow-left"></i>
                    </div>
                    <h5 className="player__title">Playing Now</h5>
                    <div className="player__btn player__btn--small">
                        <i className="bi bi-list"></i>
                    </div>
                </div>
                <div className="player__album">
                    <img
                        src='/assets/cover.jpg'
                        alt="Album Cover"
                        className="player__img"
                    />
                </div>
                <h2 className="player__artist">Reminber</h2>
                <h3 className="player__song">The weekend</h3>
                <input type="range" value={timeSong} min="0" max={timeLenghtSong} className="player__level" id="time_song" />
                <div className="audio--duration">
                    <div className="start">0{parseInt(timeSong / 60)}:{parseInt(timeSong % 60)}</div>
                    <div className="end">0{timeLenghtSong ? parseInt(timeLenghtSong / 60) : "0"}:{timeLenghtSong ? parseInt(timeLenghtSong % 60) : '00'}</div>
                </div>
                <audio className="player__audio" controls id="audio" >
                    <source src="/assets/media/audio.mp3" type="audio/mpeg" />
                </audio>
                <div className="player__controls" style={styleControl2}>
                    <div className="player__btn player__btn--medium" >
                        <i className="bi bi-skip-backward"></i>
                    </div>
                    <div className="player__btn player__btn--medium blue">
                        <i className="bi bi-play play-btn" onClick={() => playMusic()}></i>
                        <i className="bi bi-pause pause-btn hide" onClick={() => playMusic()}></i>
                    </div>
                    <div className="player__btn player__btn--medium">
                        <i className="bi bi-skip-forward"></i>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Player;