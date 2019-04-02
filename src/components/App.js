import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../API/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {
  state = { videos: [], selectedVideo: null };
  handleChange = async (term) => {
    const results = await youtube.get('/search', {
      params: {
        q: term
      }
    });
    this.setState({
      videos: results.data.items,
      selectedVideo: results.data.items[0]
    });
  }

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video })
  }

  componentDidMount = () => {
    this.handleChange('avengers');
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onsubmit={this.handleChange} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;