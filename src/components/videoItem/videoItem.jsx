import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './videoItem.module.css';

const VideoItem = props => {
  const { title, channelTitle, thumbnails, publishedAt } = props.video.snippet;
  const navigate = useNavigate();

  const handleOnClick = e => {
    const id = e.target.dataset.id || e.target.parentNode.dataset.id;
    if (id === null) {
      return;
    }
    props.onSelectedVideo(props.video);
    navigate('/selected');
  };

  // if (props.others === true) {
  //   const others = document.querySelector('li');
  //   others.classList.add('others');
  // }

  return (
    <li
      className={styles.container}
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
