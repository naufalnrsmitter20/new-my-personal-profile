import React from "react";

interface VideoPlayerProps {
  src: string;
  type: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src, type }) => {
  return (
    <div>
      <video width="600" controls autoPlay>
        <source src={src} type={type} />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
