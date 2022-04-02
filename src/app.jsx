import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './app.css';
import Header from './components/header/header';
import VideoList from './components/videoList/videoList';
import VideoPlayer from './components/videoPlayer/videoPlayer';

function App() {
  const [videos, setVideos] = useState([]);
  const [video, setVideo] = useState('');
  const [search, setSearch] = useState('');
  const [init, setInit] = useState(true);

  // console.log(`search: ${search}, init: ${init}`);

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
    // console.log('video mode');
  }, [init]);

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };
    if (search !== null || search !== '') {
      fetch(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${search}&key=AIzaSyAiW4T9jjYje4DaCC5rLfjHvnSaJ9wzGYg`,
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => setVideos(result.items))
        .catch((error) => console.log('error', error));
      // console.log('search mode');
      setSearch('');
    }
  }, [search]);

  const handleOnSelectedVideo = (video) => {
    setVideo(video);
  };

  const handleOnSearch = (search) => {
    setSearch(search);
  };

  const handleOnInit = (y) => {
    setInit(y);
  };

  return (
    <BrowserRouter>
      <Header onSearch={handleOnSearch} onInit={handleOnInit} init={init} />
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
