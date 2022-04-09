import React, { memo } from 'react';
import styles from './videoDetails.module.css';

const VideoDetails = memo(({ selectedVideo }) => {
  const { id } = selectedVideo;
  const { title, publishedAt, description, channelTitle } =
    selectedVideo.snippet;
  return (
    <section className={styles.container}>
      <div className={styles.videoPlayer}>
        <iframe
          className={styles.video}
          type="text/html"
          width="100%"
          height="500px"
          src={`https://www.youtube.com/embed/${id}`}
          frameBorder="0"
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
    </section>
  );
});

export default VideoDetails;
