import React from 'react';
import { useNavigate } from 'react-router-dom';

const VideoItem = (props) => {
  const { title, channelTitle, thumbnails } = props.video.snippet;
  const navigate = useNavigate();

  const handleOnClick = (e) => {
    const id = e.target.dataset.id || e.target.parentNode.dataset.id;
    if (id === null) {
      return;
    }
    props.onSelectedVideo(props.video);
    navigate('/selected');
  };

  return (
    <li className='video' onClick={handleOnClick} data-id={props.video.id}>
      <img className='thumbnails' src={thumbnails.default.url} alt={title} />
      <div className='discription' data-id={props.video.id}>
        <span className='title'>{title}</span>
        <span className='channelTitle'>{channelTitle}</span>
      </div>
    </li>
  );
};

export default VideoItem;
