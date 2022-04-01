import React from 'react';
import VideoItem from './videoItem.jsx';

const VideoList = (props) => {
  const { videos } = props;

  const handleOnSelectedVideo = (video) => {
    props.onSelectedVideo(video);
  };
  return (
    <ul className='videos'>
      {videos.map((item) => (
        <VideoItem
          key={item.id}
          video={item}
          onSelectedVideo={handleOnSelectedVideo}
        />
      ))}
    </ul>
  );
};

export default VideoList;
