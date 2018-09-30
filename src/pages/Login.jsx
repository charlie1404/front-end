import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import userActions from '../actions/users';
import { LOGIN_ACTION } from '../action-constants';

class Login extends Component {
  componentWillReceiveProps(nextProps) {
    console.log('nextProps', nextProps);
  }

  render() {
    console.log(this.props.authReducer);
    return (
      <div>
        <button onClick={this.props.login}>Test</button><br />
        <Link to="/">Home</Link><br />
        <Link to="/register">Register</Link><br />
        <Link to="/profile">Profile</Link><br />
        <Link to="/settings">Settings</Link><br />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state,
});

const mapDispatchToProps = dispatch => ({
  login: ev => dispatch({ type: LOGIN_ACTION, payload: userActions.login(ev) }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
