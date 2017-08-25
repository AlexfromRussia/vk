import React, {PropTypes, Component} from 'react';

class Menu extends Component {
  render() {
    return (
      <div>Menu</div>
    );
  }
}

Menu.propTypes = {
  children: PropTypes.node
};

export default Menu;
