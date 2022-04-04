import React from 'react';
import styles from './videoDetails.module.css';

const VideoDetails = ({ selectedVideo }) => {
  const { id } = selectedVideo;
  const { title, publishedAt, description, channelTitle } =
    selectedVideo.snippet;
  return (
    <div className={styles.container}>
      <div className={styles.videoPlayer}>
        <iframe
          src={`https://www.youtube.com/embed/${id}`}
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="video"
        ></iframe>
      </div>
      <div className={styles.metaData}>
        <p className={styles.title}>{title}</p>
        <p className={styles.publishedAt}>{publishedAt}</p>
        <p className={styles.channelTitle}>{channelTitle}</p>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

export default VideoDetails;
