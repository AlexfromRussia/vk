import React from 'react';
import style from './style.css';

class ToDoAppList extends React.Component {
  handleRemove = elem => {
    const value = elem.target.parentNode.querySelector('span').innerText;
    this.props.remove(value);
  }
  render() {
    console.log('123', this.props.tasks);
    const items = this.props.tasks.map((elem, i) => {
      return (
        <li key={i} className={style.li}><span className={style.text}>{elem}</span><button className={style.button} onClick={this.handleRemove}>Remove</button></li>
      );
    });
    return (
      <ul className={style.ul}>
        {items}
      </ul>
    );
  }
}

ToDoAppList.propTypes = {
  tasks: React.PropTypes.array,
  remove: React.PropTypes.func
};

export default ToDoAppList;
