import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Actions from '../actions';

const { login: userActions } = Actions;

class Login extends Component {
  constructor() {
    super();
    this.state = null;
    this.login = this.login.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    console.log('nextProps', nextProps);
  }

  login() {
    this.props.login('a', 'b');
  }

  render() {
    return (
      <div>
        { this.props.inProgress && <span>Loading...</span> }
        <button onClick={this.login}>Test</button><br />
        <Link to="/">Home</Link><br />
        <Link to="/register">Register</Link><br />
        <Link to="/profile">Profile</Link><br />
        <Link to="/settings">Settings</Link><br />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  inProgress: state.authReducer.inProgress,
});

const mapDispatchToProps = dispatch => ({
  login: (email, password) => dispatch(userActions(email, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
