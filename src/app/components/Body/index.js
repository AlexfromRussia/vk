import React, {PropTypes, Component} from 'react';
import style from './style.css';

class Body extends Component {
  render() {
    return (
      <div className={style.body}>
        <div className={style.btn}>c</div>
        <div className={style.btn1}>c</div>
      </div>
    );
  }
}

Body.propTypes = {
  children: PropTypes.node
};

export default Body;
