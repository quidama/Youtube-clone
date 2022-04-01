import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './app.css';
import Header from './components/header';
import VideoList from './components/videoList';
import VideoPlayer from './components/videoPlayer';

function App() {
  const [videos, setVideos] = useState([]);
  const [video, setVideo] = useState('');
  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch(
      'https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyAiW4T9jjYje4DaCC5rLfjHvnSaJ9wzGYg',
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideos(result.items))
      .catch((error) => console.log('error', error));
  }, []);

  const handleOnSelectedVideo = (video) => {
    setVideo(video);
  };
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          exact
          path='/'
          element={
            <VideoList
              videos={videos}
              onSelectedVideo={handleOnSelectedVideo}
            />
          }
        ></Route>
        <Route
          path='/selected'
          element={
            <VideoPlayer
              videos={videos}
              video={video}
              onSelectedVideo={handleOnSelectedVideo}
            />
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
