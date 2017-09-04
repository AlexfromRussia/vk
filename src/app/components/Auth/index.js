import React, {PropTypes} from 'react';
// import TextField from 'material-ui/TextField';
// import RaisedButton from 'material-ui/RaisedButton';
// import style from './style.css';

class Auth extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      authenticated: false
    };
  }
  handleUsernameChanged = event => {
    this.setState({username: event.target.value});
  };
  handlePasswordChanged = event => {
    this.setState({password: event.target.value});
  };
  handleSubmitForm = event => {
    event.preventDefault();
  };
  render() {
    return (
      <form onSubmit={this.handleSubmitForm}>
        <input
          placeholder="Username"
          value={this.state.username}
          onChange={this.handleUsernameChanged}
          />
        <input
          placeholder="Password"
          value={this.state.password}
          type="password"
          onChange={this.handlePasswordChanged}
          />
        <input
          placeholder="File"
          type="file"
          />
        <button
          type="sumbit"
          placeholder="Submit"
          />
      </form>
    );
  }
}

Auth.propTypes = {
  children: PropTypes.node
};

export default Auth;
