import React from 'react';
import style from './style.css';

class AddNewTask extends React.Component {
  handleJustSubmitted = event => {
    event.preventDefault();
    const input = event.target.querySelector('input');
    const value = input.value;
    input.value = '';
    this.props.updateList(value);
  };
  render() {
    return (
      <form className={style.form} onSubmit={this.handleJustSubmitted}>
        <input type="text" placeholder="Введите новый комментарий" className={style.messanger}/>
        <button className={style.button_Add}>Добавить</button>
      </form>
    );
  }
}

AddNewTask.propTypes = {
  updateList: React.PropTypes.func
};

export default AddNewTask;
