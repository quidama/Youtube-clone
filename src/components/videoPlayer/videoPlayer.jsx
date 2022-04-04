import React, { useState } from 'react';
import VideoItem from '../videoItem/videoItem';
import styles from './videoPlayer.module.css';

const VideoPlayer = props => {
  const [others, setOthers] = useState(true);
  const { id } = props.video;
  const { title, description, channelTitle, publishedAt } = props.video.snippet;

  const handleOnSelectedVideo = video => {
    props.onSelectedVideo(video);
  };

  return (
    <div className={styles.videoPlayer}>
      <div className={styles.video}>
        <div className={styles.selected}>
          <iframe
            src={`https://www.youtube.com/embed/${id}`}
            allow="autoplay; encrypted-media"
            title="video"
          ></iframe>
        </div>
        <div className={styles.title}>{title}</div>
        <div className={styles.channelTitle}>{channelTitle}</div>
        <div className={styles.publishedAt}>{publishedAt}</div>
        <div className={styles.description}>{description}</div>
      </div>
      <ul className={styles.videoList}>
        {props.videos.map(item => (
          <VideoItem
            key={item.id}
            video={item}
            onSelectedVideo={handleOnSelectedVideo}
            others={others}
          />
        ))}
      </ul>
    </div>
  );
};

export default VideoPlayer;
