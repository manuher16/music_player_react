import "../styles/player.css";
const Player = (props) => {
    const styleControl1 = {
        marginTop: '40px'
    }
    const styleControl2 = {
        marginBottom: '40px'
    }

    const play = () => {
        const audio = document.getElementById("audio");
        const playPause = document.getElementById("play");
        if (audio.paused || audio.ended) {
            playPause.querySelector(".pause-btn").classList.remove("hidden");
            playPause.querySelector(".play-btn").classList.add("hidden");
        } else {
            audio.pause();
            playPause.querySelector(".pause-btn").classList.add("hidden");
            playPause.querySelector(".play-btn").classList.remove("hidden");
        }
    };
    return (
        <div className="container">
            <div className="player">
                <div className="player__controls" style={styleControl1} >
                    <div className="player__btn player__btn--small">
                        <i className="bis bi-arrow-left"></i>
                    </div>
                    <h5 className="player__title">Playin Now</h5>
                    <div className="player__btn player__btn--small">
                        <i className="bis bi-list"></i>
                    </div>
                </div>
                <div className="player__album">
                    <img
                        src='/assets/cover.jpg'
                        alt="Album Cover"
                        className="player__img"
                    />
                </div>
                <h2 className="player__artist">Disclosure</h2>
                <h3 className="player__song">Lach</h3>
                <input type="range" value="20" min="0" className="player__level" />
                <div className="audio--duration">
                    <div className="start">00:01</div>
                    <div className="end">04:30</div>
                </div>
                <audio className="player__audio" controls id="audio" >
                    <source src="/assets/media/audio.mp3" type="audio/mpeg" />
                </audio>
                <div className="player__controls" style={styleControl2}>
                    <div className="player__btn player__btn--medium" >
                        <i className="bis bi-skip-backward"></i>
                    </div>
                    <div className="player__btn player__btn--medium blue">
                        <i className="bis bi-play play-btn" onClick={() => play}></i>
                        <i className="bis bi-pause pause-btn hide" onClick={() => play}></i>
                    </div>
                    <div className="player__btn player__btn--medium">
                        <i className="bis bi-skip-forward"></i>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Player;