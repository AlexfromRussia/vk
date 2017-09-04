import React, {PropTypes, Component} from 'react';
import style from './style.css';
import data from '../Data/data';

class Friend extends Component {
  state = {
    filterValue: ''
  };
  renderFriend = item => {
    let image = null;
    if (item.image) {
      image = <img src={item.image} className={style.img_s}/>;
    }
    return (
      <div>
        <div className={style.item_data}>{item.name}</div>
        <div className={style.item_img}>
          {image}
        </div>
      </div>
    );
  };
  handleFilterChange = e => {
    this.setState({filterValue: e.target.value});
  };
  render() {
    const filteredData = data.filter(item => {
      return item.name.toLowerCase().indexOf(this.state.filterValue) === 0;
    });
    return (
      <div className={style.friend}>
        <div className={style.friend_header}>
          <div className={style.friend_title}>Все друзья</div>
          <div className={style.friend_button1}>
            <button className={style.friend_button}>Найти друзей</button>
          </div>
        </div>
        <div className={style.friend_search}>
          <div className={style.friend_search_f}>
            <input
              className={style.friend_search_field}
              type="text"
              placeholder="Начните вводить имя друга"
              onChange={this.handleFilterChange}
              value={this.state.filterValue}
              />
            <div className={style.parametr}>Параметры</div>
          </div>
        </div>
        <div className={style.friend_id}>
          <div className={style.friend_container}>
            {filteredData.map(this.renderFriend)}
          </div>
        </div>
      </div>
    );
  }
}

Friend.propTypes = {
  children: PropTypes.node
};

export default Friend;
