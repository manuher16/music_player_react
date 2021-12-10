import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSongPlaying } from "../features/player/playerSlice";
const ItemPlayList = (props) => {
    const [song, setSong] = useState(props.item);
    const dispatch = useDispatch();
    const [play, setPlay] = useState(false);
    console.log(song);
    return (
        <div className="item__playlist">

            <img src={song.image} alt="imagen album" className="item__playlist__img" />

            <div className="item__playlist__info">
                <div className="item__playlist__info__author">
                    {song.name}
                </div>
                <div className="item__playlist__info__name">
                    {song.artist}
                </div>
            </div>
            <div className="item__playlist_controls">
                <div className="player__btn player__btn--small blue" onClick={() => dispatch(setSongPlaying(song))}>
                    <i className="bi bi-play item__playlist_controls__play" />
                </div>



            </div>
        </div>
    );

}
export default ItemPlayList;