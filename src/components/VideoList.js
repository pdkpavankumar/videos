import React from 'react';
import VideoItem from './VideoItem';

const VideoList = (props) => {
  return (props.videos).map((video) => {
    return <VideoItem video={video} key={video.id.videoId} />;
  });
};

export default VideoList;