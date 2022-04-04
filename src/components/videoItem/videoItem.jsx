import React from 'react';
import styles from './videoItem.module.css';

const VideoItem = props => {
  const { title, channelTitle, thumbnails, publishedAt } = props.video.snippet;
  const { display } = props;
  const handleOnClick = e => {
    const id = e.target.dataset.id || e.target.parentNode.dataset.id;
    if (id === null) {
      return;
    }
    props.onSelectedVideo(props.video);
  };

  const displayType = display === 'list' ? styles.list : styles.grid;

  return (
    <li
      className={`${styles.container} ${displayType}`}
      onClick={handleOnClick}
      data-id={props.video.id}
    >
      <div className={styles.video}>
        <img
          className={styles.thumbnails}
          src={thumbnails.medium.url}
          alt={title}
        />
        <div className={styles.metadata} data-id={props.video.id}>
          <p className={styles.title}>{title}</p>
          <p className={styles.publishedAt}>{publishedAt}</p>
          <p className={styles.channel}>{channelTitle}</p>
        </div>
      </div>
    </li>
  );
};

export default VideoItem;
