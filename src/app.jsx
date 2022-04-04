import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styles from './app.module.css';
import Header from './components/header/header';
import VideoList from './components/videoList/videoList';
import VideoPlayer from './components/videoPlayer/videoPlayer';

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [video, setVideo] = useState('');

  const handleOnSearch = query => {
    youtube.search(query).then(items => setVideos(items));
  };

  useEffect(() => {
    youtube.mostPopular().then(items => setVideos(items));
  }, []);

  const handleOnSelectedVideo = item => {
    setVideo(item);
  };

  return (
    <BrowserRouter className={styles.app}>
      <Header onSearch={handleOnSearch} />
      <Routes>
        <Route
          path="/"
          element={
            videos && (
              <VideoList
                videos={videos}
                onSelectedVideo={handleOnSelectedVideo}
              />
            )
          }
        />
        <Route
          path="/selected"
          element={
            <VideoPlayer
              videos={videos}
              video={video}
              onSelectedVideo={handleOnSelectedVideo}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
