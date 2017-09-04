import React, {PropTypes, Component} from 'react';
import style from './style.css';

class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      radioGroup: {
        angular: false,
        react: true,
        ember: false
      }
    };
  }
  handleRadio = event => {
    console.log('HandleRadio', event);
    const object = {};
    object[event.target.value] = event.target.checked;
    this.setState({
      radioGroup: object
    });
    setTimeout(() => {
      console.log(this.state);
    }, 300);
  };

  handleClick = () => {
    console.log('HandleRadio');
  }

  render() {
    return (
      <div className={style.test} onClick={this.handleClick}>
        <form>
          <input type="checkbox" checked={this.state.radioGroup.angular} onChange={this.handleRadio}/>
          <input type="checkbox" checked={this.state.radioGroup.react} onChange={this.handleRadio}/>
          <input type="checkbox" checked={this.state.radioGroup.ember} onChange={this.handleRadio}/>
        </form>
      </div>
    );
  }
}
Feed.propTypes = {
  children: PropTypes.node
};

export default Feed;
