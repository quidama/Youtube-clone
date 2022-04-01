import React from 'react';
import VideoItem from './videoItem';

const VideoPlayer = (props) => {
  const { id } = props.video;
  const { title, description, channelTitle } = props.video.snippet;

  const handleOnSelectedVideo = (video) => {
    props.onSelectedVideo(video);
  };

  return (
    <div className='player'>
      <div className='videoPlay'>
        <iframe
          className='selectedVideo'
          src={`https://www.youtube.com/embed/${id}`}
        ></iframe>
        <div className='videoTitle'>{title}</div>
        <div className='videoChannelTitle'>{channelTitle}</div>
        <div className='videoDescription'>{description}</div>
      </div>
      <ul className='playerVideos'>
        {props.videos.map((item) => (
          <VideoItem
            key={item.id}
            video={item}
            onSelectedVideo={handleOnSelectedVideo}
          />
        ))}
      </ul>
    </div>
  );
};

export default VideoPlayer;
