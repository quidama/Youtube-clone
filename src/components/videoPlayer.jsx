import React from 'react';
import VideoItem from './videoItem';

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
    <div className='player'>
      <div className='videoPlay'>
        <div className='selectedVideo'>
          <iframe
            src={`https://www.youtube.com/embed/${id}`}
            allow='autoplay; encrypted-media'
            title='video'
          ></iframe>
        </div>
        <div className='videoTitle'>{title}</div>
        <div className='videoChannelTitle'>{channelTitle}</div>
        <div className='videoPublishedAt'>{publishedAt}</div>
        <div className='videoDescription'>{description}</div>
      </div>
      <ul className='videosSelected'>
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
