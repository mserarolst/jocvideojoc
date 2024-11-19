import React from "react";
import '../css/VideoActivity.css';
const VideoActivity = ({ videoUrl, description }) => {
  return (
    <div>
      <iframe
        width="100%"
        height="200"
        src={videoUrl}
        title="Vídeo interactiu"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <p>{description}</p>
    </div>
  );
};

export default VideoActivity;
