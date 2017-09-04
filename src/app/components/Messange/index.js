import React, {PropTypes, Component} from 'react';
import CommentBox from '../CommentBox';
import style from './style.css';
import tasks from '../CommentBox/what';

class Messange extends Component {
  render() {
    return (
      <div className={style.messanger}>
        <CommentBox tasks={tasks}/>
      </div>
    );
  }
}

Messange.propTypes = {
  children: PropTypes.node
};

export default Messange;
