import React, {useRef, useState} from "react";
import {BsFillPlayFill, BsPauseFill} from 'react-icons/bs';

import './Video.css';

export const Video = () => {
  const [playVideo, setPlayVideo] = useState<boolean>(false);
  const video = useRef<HTMLVideoElement | null>(null);

  const handleVideo = () => {
    setPlayVideo(prev => !prev);
  }

  playVideo ? video.current?.play() : video.current?.pause();

  return (
      <div className="app__video">
        <video
            src={require('../../assets/car_video.mp4')}
            ref={video}
            loop
            controls={false}
            muted
        />
        <div className="app__video-overlay flex__center">
          <div
              className="app__video-overlay_circle flex__center"
              onClick={handleVideo}
          >
            {playVideo
                ? <BsPauseFill color="#fff" fontSize={30}/>
                : <BsFillPlayFill color="#fff" fontSize={30}/>
            }
          </div>
        </div>
      </div>
  );
};