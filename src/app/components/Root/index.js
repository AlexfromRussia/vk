import React, {PropTypes, Component} from 'react';
import Menu from '../Menu';
import Navigation from '../Navigation';
import Footer from '../Footer';
import style from './style.css';

class Root extends Component {
  render() {
    return (
      <div className={style.root}>
        <Navigation/>
        <div className={style.body}>
          <Menu/>
          <div className={style.content}> {this.props.children} </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

Root.propTypes = {
  children: PropTypes.node
};

export default Root;
