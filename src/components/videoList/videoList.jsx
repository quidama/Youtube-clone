import React from 'react';
import styles from './videoList.module.css';
import VideoItem from '../videoItem/videoItem.jsx';

const VideoList = ({ videos, onSelectedVideo, display }) => {
  const handleOnSelectedVideo = video => {
    onSelectedVideo(video);
  };
  console.log(display);
  return (
    <ul className={styles.videos}>
      {videos.map(item => (
        <VideoItem
          key={(item.id = item.id.videoId ? item.id.videoId : item.id)}
          video={item}
          onSelectedVideo={handleOnSelectedVideo}
          display={display}
        />
      ))}
    </ul>
  );
};

export default VideoList;
