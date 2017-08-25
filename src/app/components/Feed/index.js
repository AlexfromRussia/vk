import React, {PropTypes, Component} from 'react';

class Feed extends Component {
  render() {
    return (
      <div>Feed</div>
    );
  }
}

Feed.propTypes = {
  children: PropTypes.node
};

export default Feed;
