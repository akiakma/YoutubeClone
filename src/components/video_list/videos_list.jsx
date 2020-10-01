import React from "react";
import Videoitem from "../video_item/video_item";

const VideoList = props => (
  <ul>
    {props.videos.map(video => (
      <Videoitem key={video.id} video={video} />
    ))}
  </ul>
);

export default VideoList;
