import React, {PropTypes, Component} from 'react';
import {Link} from 'react-router';
import style from './style.css';

class Menu extends Component {
  render() {
    return (
      <div className={style.menu}>
        <span className={style.left_label}><Link to="/">Моя страница</Link></span>
        <span className={style.left_label}><Link to="/feed">Новости</Link></span>
        <span className={style.left_label}><Link to="/">Сообщения</Link></span>
        <span className={style.left_label}><Link to="/">Друзья</Link></span>
        <span className={style.left_label}><Link to="/">Фотографии</Link></span>
      </div>
    );
  }
}

Menu.propTypes = {
  children: PropTypes.node
};

export default Menu;
