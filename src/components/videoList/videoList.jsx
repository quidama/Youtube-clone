import React from 'react';
import styles from './videoList.module.css';
import VideoItem from '../videoItem/videoItem.jsx';

const VideoList = ({ videos, onSelectedVideo }) => {
  const handleOnSelectedVideo = video => {
    onSelectedVideo(video);
  };

  return (
    <ul className={styles.videos}>
      {videos.map(item => (
        <VideoItem
          key={(item.id = item.id.videoId ? item.id.videoId : item.id)}
          video={item}
          onSelectedVideo={handleOnSelectedVideo}
        />
      ))}
    </ul>
  );
};

export default VideoList;
