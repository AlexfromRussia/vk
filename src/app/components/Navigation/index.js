import React, {PropTypes, Component} from 'react';

class Navigation extends Component {
  render() {
    return (
      <div>Navigation</div>
    );
  }
}

Navigation.propTypes = {
  children: PropTypes.node
};

export default Navigation;
