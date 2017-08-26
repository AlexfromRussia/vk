import React, {PropTypes, Component} from 'react';
import style from './style.css';
import Img from '../../image/Ww2B3BGgmJI.jpg';

class Navigation extends Component {
  render() {
    return (
      <div className={style.navigation}>
        <div className={style.header}>
          <div className={style.title}> Alex Senotov</div>
          <div className={style.foto}> <img className={style.img} src={Img}/></div>
          <div className={style.search}> <input className={style.search} type="text" size={40} placeholder="Поиск" value=""/> </div>
        </div>
      </div>
    );
  }
}

Navigation.propTypes = {
  children: PropTypes.node
};

export default Navigation;
