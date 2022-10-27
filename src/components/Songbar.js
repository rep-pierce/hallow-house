import React from "react";

function Songbar({handleSongClick}){

    return (
        // <iframe className="music-bar" src="https://bandcamp.com/EmbeddedPlayer/album=2065642348/size=small/bgcol=ffffff/linkcol=0687f5/track=1001770880/transparent=true/" seamless><a href="https://meditationsinfear.bandcamp.com/album/iii">III by William Austin Clay</a></iframe>
        <button className="music-bar" onClick={handleSongClick}>play</button>
    )
}

export default Songbar