import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";
import Youtube from "./service/youtubeService";
import YoutubeAxios from "./service/youtubeService-axios";

const youtube = new YoutubeAxios(process.env.REACT_APP_YOUTUBE_API_KEY);
ReactDOM.render(<App youtube={youtube} />, document.getElementById("root"));
