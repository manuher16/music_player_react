import React from 'react';
import { useState, useEffect } from 'react';
import ItemPlayList from './itemPlayList';
const PlayList = () => {
    const songs = [
        {
            name: 'Reminber',
            artist: 'The Weekend',
            album: 'Starboy',
            image: '/assets/cover.jpg',
            file: "/assets/media/audio.mp3",
        }, {
            name: 'El mundo es mio',
            artist: 'Bad Bunny',
            image: 'https://i.scdn.co/image/ab67616d0000b273005ee342f4eef2cc6e8436ab',
            file: '/assets/media/audio_1.mp3'
        }, {
            name: "Sugar",
            artist: "Maroon 5",
            image: "https://upload.wikimedia.org/wikipedia/en/5/53/Maroon_5_-_V_%28Official_Album_Cover%29.png",
            file: '/assets/media/audio_2.mp3'
        },
        {
            name: "Despacito",
            artist: "Luis Fonsi",
            image: "https://suave.hn/wp-content/uploads/2019/02/Luis-Fonsi-Vida-1600x1600.jpg",
            file: '/assets/media/audio_3.mp3'
        }, {
            name: "Botella tras botella",
            artist: "Cristian Nodal",
            image: "https://e.snmc.io/i/600/s/2f9133daba98af55c7d326bca4a1628c/8961978/gera-mx-and-christian-nodal-botella-tras-botella-Cover-Art.jpg",
            file: '/assets/media/audio_4.mp3'
        }
    ]
    const [list, setList] = useState([]);
    useEffect(() => {
        const tempList = []
        for (let i = 0; i < songs.length; i++) {
            tempList.push(<ItemPlayList item={songs[i]} id={i + 1} />);
        }
        setList(tempList);
        console.log(tempList);
    }, [])
    return (
        <div className="playlist">
            <div className="playlist__title">PlayList</div>
            <div className="playlist__list">
                {list}
            </div>
        </div>

    )
}
export default PlayList