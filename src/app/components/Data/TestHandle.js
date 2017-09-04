import React, {PropTypes, Component} from 'react';
import style from './style.css';

class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ''
    };
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    console.log('form', this.state.email);
  }
  handleEmailChange(event) {
    console.log('email was changed', event.target.value);
    this.setState({email: event.target.value});
  }
  render() {
    return (
      <div className={style.form}>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="email" value={this.state.email} onChange={this.handleEmailChange}/>
          <button>Save</button>
        </form>
      </div>
    );
  }
}
Feed.propTypes = {
  children: PropTypes.node
};

export default Feed;
