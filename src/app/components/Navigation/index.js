import React, {PropTypes, Component} from 'react';
import style from './style.css';
import Img from '../../image/Ww2B3BGgmJI.jpg';
import ReactAudioPlayer from 'react-audio-player';
import {Link} from 'react-router';

class Navigation extends Component {
  render() {
    return (
      <div className={style.navigation}>
        <div className={style.header}>
          <div className={style.title}>
            Alex Senotov
          </div>
          <div className={style.foto}>
            <img className={style.img} src={Img}/>
          </div>
          <div className={style.search}>
            <input
              className={style.search_input}
              type="text"
              size={38}
              placeholder="Поиск"
              />
          </div>
          <div className={style.audio}>
            <ReactAudioPlayer
              src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
              controls
              />
          </div>
          <div className={style.block}><span><Link to="/">Menu</Link></span></div>
        </div>
      </div>
    );
  }
}

Navigation.propTypes = {
  children: PropTypes.node
};

export default Navigation;
