import React, {PropTypes, Component} from 'react';
import style from './NameList.css';

class NameList extends Component {
  render() {
    const {data, filter} = this.props;
    const nameList = data.filter(item => {
      return item.name.toLowerCase().indexOf(filter.toLowerCase()) >= 0;
    })
    .map(person => {
      return (
        <span key={person.id} className={style[person.sex]}>{person.name}</span>
      );
    });
    return (
      <div className={style.root}>
        {nameList}
      </div>
    );
  }
}

NameList.propTypes = {
  data: PropTypes.array,
  filter: PropTypes.string
};

export default NameList;
