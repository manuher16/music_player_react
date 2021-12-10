import "../styles/player.css";
import React from 'react';
import { useState, useEffect } from "react";
import { useSelector } from 'react-redux'
import PlayList from "../components/Playlist"
const Player = (props) => {
    const [showPlayList, setShowPlayList] = useState(false);
    const song = useSelector(state => state.player.playing);
    const autoPlay = useSelector(state => state.player.autoPlay);
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
        const time_song = document.getElementById("time_song");
        const audio = document.getElementById("audio");

        audio.src = song.file;
        setTimeSong(audio.currentTime);
        setTimeLenghtSong(audio.duration)
        time_song.value = audio.currentTime
        time_song.max = audio.duration
    }, [])
    const playMusic = () => {
        const audio = document.getElementById("audio");

        const time_song = document.getElementById("time_song");
        if (audio.paused || audio.ended) {

            setInterval(() => {
                setTimeSong(audio.currentTime);
                setTimeLenghtSong(audio.duration)
                time_song.value = audio.currentTime
                time_song.max = audio.duration
                if (audio.ended) {
                    setPlay(false)
                }
            }, 1000);
            audio.play();
            setPlay(true);
        } else {
            audio.pause();
            setPlay(false);
        }
    };
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="player">
                        <div className="player__controls" style={styleControl1} >
                            <div className="player__btn player__btn--small">
                                <i className="bi bi-arrow-left"></i>
                            </div>
                            <h5 className="player__title">Playing Now</h5>
                            <div className="player__btn player__btn--small" onClick={() => setShowPlayList(!showPlayList)}>
                                <i className="bi bi-list"></i>
                            </div>
                        </div>
                        <div className="player__album">
                            <img
                                src={song.image}
                                alt="Album Cover"
                                className="player__img"
                            />
                        </div>
                        <h2 className="player__artist">{song.name}</h2>
                        <h3 className="player__song">{song.artist}</h3>
                        <input type="range" value={timeSong} min="0" max={timeLenghtSong} className="player__level" id="time_song" />
                        <div className="audio--duration">
                            <div className="start">0{parseInt(timeSong / 60)}:{parseInt(timeSong % 60)}</div>
                            <div className="end">0{timeLenghtSong ? parseInt(timeLenghtSong / 60) : "0"}:{timeLenghtSong ? parseInt(timeLenghtSong % 60) : '00'}</div>
                        </div>
                        {autoPlay ?
                            <audio className="player__audio" controls id="audio" src={song.file} autoplay /> :
                            <audio className="player__audio" controls id="audio" src={song.file} autoplay />
                        }
                        <div className="player__controls" style={styleControl2}>
                            <div className="player__btn player__btn--medium" >
                                <i className="bi bi-skip-backward"></i>
                            </div>
                            <div className="player__btn player__btn--medium blue">
                                {!play ?
                                    <i className="bi bi-play play-btn" onClick={() => playMusic()}></i> :
                                    <i className="bi bi-pause pause-btn " onClick={() => playMusic()}></i>
                                }
                            </div>
                            <div className="player__btn player__btn--medium">
                                <i className="bi bi-skip-forward"></i>
                            </div>
                        </div>
                    </div>
                </div>
                {showPlayList ?
                    <div className="col">
                        <PlayList />
                    </div> : null}

            </div>
        </div >
    );
}

export default Player;