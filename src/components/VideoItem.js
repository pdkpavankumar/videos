import React from 'react';

class VideoItem extends React.Component {
  render() {
    return (
      <div>
        {this.props.video.snippet.title}
      </div>
    )
  }
};

export default VideoItem;