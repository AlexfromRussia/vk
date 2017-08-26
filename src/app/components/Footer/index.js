import React, {PropTypes, Component} from 'react';
import style from './style.css';

class Footer extends Component {
  render() {
    return (
      <div className={style.footer}>hey</div>
    );
  }
}

Footer.propTypes = {
  children: PropTypes.node
};

export default Footer;
