import React, {PropTypes, Component} from 'react';
import data from '../Data/data';
import NameList from '../Data/NameList';
import Credit from '../Data/Credit';
import Search from '../Data/Search';
import Short from '../Data/Short';

class Feed extends Component {
  state = {
    filter: ''
  };

  handleFilterChange = text => {
    this.setState({
      filter: text
    });
  };

  render() {
    return (
      <div>
        <Short/>
        <main>
          <Search value={this.state.filter} onChange={this.handleFilterChange}/>
          <NameList data={data} filter={this.state.filter}/>
          <Credit/>
        </main>
      </div>
    );
  }
}

Feed.propTypes = {
  children: PropTypes.node
};

export default Feed;
