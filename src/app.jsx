import React, { useState, useEffect } from 'react';
import styles from './app.module.css';
import VideoDetails from './components/details/videoDetails';
import Header from './components/header/header';
import VideoList from './components/videoList/videoList';

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleOnSearch = query => {
    youtube.search(query).then(items => {
      setVideos(items);
      setSelectedVideo(null);
    });
  };

  useEffect(() => {
    youtube.mostPopular().then(items => setVideos(items));
  }, []);

  const handleOnSelectedVideo = video => {
    setSelectedVideo(video);
  };
  console.log(selectedVideo);
  return (
    <>
      <Header onSearch={handleOnSearch} />
      <section className={styles.content}>
        {selectedVideo && (
          <div className={styles.detail}>
            <VideoDetails selectedVideo={selectedVideo} />
          </div>
        )}
        <div className={styles.list}>
          {videos && (
            <VideoList
              videos={videos}
              onSelectedVideo={handleOnSelectedVideo}
              display={!selectedVideo ? 'list' : 'grid'}
            />
          )}
        </div>
      </section>
    </>
  );
}

export default App;
