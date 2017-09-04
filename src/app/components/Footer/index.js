import React, {PropTypes, Component} from 'react';
import style from './style.css';

class Footer extends Component {
  render() {
    return (
      <div className={style.footer}>У ВК НЕТУ ФУТЕРА ААААА</div>
    );
  }
}

Footer.propTypes = {
  children: PropTypes.node
};

export default Footer;
