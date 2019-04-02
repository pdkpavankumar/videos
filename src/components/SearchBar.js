import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' };
  hanldeSearch = (event) => {
    this.setState({ term: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onsubmit(this.state.term);
  }

  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.handleSubmit}>
          <div className="field">
            <label>Video Search</label>
            <input type="text" value={this.state.term} onChange={this.hanldeSearch} />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;