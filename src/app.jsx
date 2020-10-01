import React, { useEffect, useState } from "react";
import "./app.css";
import videos_list from "./components/video_list/videos_list";
import VideoList from "./components/video_list/videos_list";

const App = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyDtuG29hVV1bhHmHZ8MJPTi5gTUrGgZkNs",
      requestOptions
    )
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log("error", error));
  }, []);

  return <VideoList videos={videos} />;
};

export default App;
