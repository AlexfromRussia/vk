import React, {PropTypes, Component} from 'react';
import style from './style.css';
import Img from '../../image/Ww2B3BGgmJI.jpg';
import Img1 from '../../image/vadim.jpg';
import Img2 from '../../image/ramis.jpg';
import Img3 from '../../image/katya.jpg';
import Img4 from '../../image/aleksei.jpg';
import Img5 from '../../image/leha.jpg';
import YoutubePlayer from 'react-youtube';
import Comment from '../CommentBox';
import Modal from 'react-modal';
// import Audio from 'react-audioplayer';
const erer = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'black'
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)'
  }
};

class Profile extends Component {
  state = {
    isOpen: false
  };
  handleClick = () => {
    this.setState({isOpen: true});
  };
  handleClose = () => {
    this.setState({isOpen: false});
  };
  render() {
    const opts = {
      height: '112',
      width: '200',
      playerVars: {autoplay: 0
      }
    };
    const marg = {style: erer};
    return (
      <div className={style.left_right}>
        <Modal
          isOpen={this.state.isOpen}
          onRequestClose={this.handleClose}
          contentLabel="Modal"
          {...marg}
          >
          <img src="https://pp.userapi.com/c638230/v638230024/548b5/LT08qrqQx-E.jpg"/>
        </Modal>
        <div className={style.right}>
          <div className={style.foto_page}>Profile
            <div className={style.foto}> <img className={style.avatar} src={Img} onClick={this.handleClick}/></div>
            <div className={style.redactor}>
              <button className={style.button}> Редактирование </button>
            </div>
          </div>
        </div>
        <div className={style.friend}>
          <div className={style.header_title}>
            <div className={style.title_friend}> Друзья </div>
          </div>
          <div className={style.user}>
            <div className={style.user_id}>
              <div className={style.people_avatar}><img className={style.img_friend} src={Img}/></div>
              <div className={style.people_title}>Alex</div>
            </div>
            <div className={style.user_id}>
              <div className={style.people_avatar}><img className={style.img_friend} src={Img1}/></div>
              <div className={style.people_title}>Вадим</div>
            </div>
            <div className={style.user_id}>
              <div className={style.people_avatar}><img className={style.img_friend} src={Img2}/></div>
              <div className={style.people_title}>Рамис</div>
            </div>
            <div className={style.user_id}>
              <div className={style.people_avatar}><img className={style.img_friend} src={Img3}/></div>
              <div className={style.people_title}>Катя</div>
            </div>
            <div className={style.user_id}>
              <div className={style.people_avatar}><img className={style.img_friend} src={Img4}/></div>
              <div className={style.people_title}>Алексей</div>
            </div>
            <div className={style.user_id}>
              <div className={style.people_avatar}><img className={style.img_friend} src={Img5}/></div>
              <div className={style.people_title}>Алексей</div>
            </div>
          </div>
        </div>
        <div className={style.youtube}>
          <div className={style.container}>
            <div className={style.header_title}>
              <div className={style.title_video}> Видеозаписи
              </div>
            </div>
            <div className={style.video}>{<YoutubePlayer videoId="mYFaghHyMKc" opts={opts}/>}</div>
            <div className={style.title_video}>
              <a href="https://www.youtube.com/watch?v=mYFaghHyMKc">Family of the Year - Hero [Boyhood] (Official)</a>
            </div>
            <div className={style.video}>{<YoutubePlayer videoId="1F5LSuS8Go8" opts={opts}/>}</div>
            <div className={style.title_video}>
              <a href="https://www.youtube.com/watch?v=1F5LSuS8Go8">Family of the Year - The Stairs [Official Video] - Loma Vista</a>
            </div>
          </div>
        </div>
        <div className={style.commentBox}>
          <div className={style.comment}>
            <Comment tasks={['222']}/>
          </div>
        </div>
      </div>
    );
  }
}

Profile.propTypes = {
  children: PropTypes.node
};

export default Profile;
