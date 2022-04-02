import React from 'react';
import VideoItem from '../videoItem/videoItem';
import styles from './videoPlayer.module.css';

const VideoPlayer = (props) => {
  const { title, description, channelTitle, publishedAt } = props.video.snippet;

  const handleOnSelectedVideo = (video) => {
    props.onSelectedVideo(video);
  };

  const id =
    props.video.kind === 'youtube#searchResult'
      ? props.video.id.videoId
      : props.video.id;

  return (
    <div className={styles.videoPlayer}>
      <div className={styles.video}>
        <div className={styles.selected}>
          <iframe
            src={`https://www.youtube.com/embed/${id}`}
            allow='autoplay; encrypted-media'
            title='video'
          ></iframe>
        </div>
        <div className={styles.title}>{title}</div>
        <div className={styles.channelTitle}>{channelTitle}</div>
        <div className={styles.publishedAt}>{publishedAt}</div>
        <div className={styles.description}>{description}</div>
      </div>
      <ul className={styles.videoList}>
        {props.videos.map((item) => (
          <VideoItem
            key={item.id + Math.random()}
            video={item}
            onSelectedVideo={handleOnSelectedVideo}
          />
        ))}
      </ul>
    </div>
  );
};

export default VideoPlayer;
