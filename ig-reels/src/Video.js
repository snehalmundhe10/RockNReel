import React, {useRef, useState} from 'react'
import './VideoCard.css'
import VideoHeader from './VideoHeader'
import VideoFooter from './VideoFooter'

function Video({url, likes, shares, avatarSrc, song, channel }) {
   const [isVideoPlaying, setIsVideoPlaying] = useState(false);
   const videoRef = useRef(null);
    const onVideoPress = () => {
        if(isVideoPlaying){
            //stop the video
            videoRef.current.pause();
            setIsVideoPlaying(false);
           
        }
        else{
            //no video playing, play
            videoRef.current.play();
            setIsVideoPlaying(true);
        }

    }
    //useRef hook
    return (
        <div className="videoCard">
            <VideoHeader/>
        <video 
            ref={videoRef}
            onClick={onVideoPress}
            className="videoCard__player" 
            alt="IG reels"
            src={url}
            loop/>
            <VideoFooter
            channel={channel}
            likes={likes}
            shares={shares}
            avatarSrc={avatarSrc}
            song={song}/>
        </div>
    )
}

export default Video
