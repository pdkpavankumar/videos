import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../API/youtube';
import VideoList from './VideoList';

class App extends React.Component {
  state = {videos: []};
  handleChange = async (term) => {
    const results = await youtube.get('/search', {
      params: {
        q: term
      }
    });
    this.setState({videos: results.data.items});
  }
  render() {
    return (
      <div className="ui container">
        <SearchBar onsubmit={this.handleChange}/>
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

export default App;