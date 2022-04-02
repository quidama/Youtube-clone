import React from 'react';
import VideoItem from '../videoItem/videoItem.jsx';
import styles from './videoList.module.css';

const VideoList = (props) => {
  const { videos } = props;

  const handleOnSelectedVideo = (video) => {
    props.onSelectedVideo(video);
  };
  return (
    <ul className={styles.videos}>
      {videos.map((item) => (
        <VideoItem
          key={item.id + Math.random()}
          video={item}
          onSelectedVideo={handleOnSelectedVideo}
        />
      ))}
    </ul>
  );
};

export default VideoList;