import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Actions from '../actions';

import Loader from '../components/Loader';
import { history } from '../store';

const { login: userActions } = Actions;

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: 'test@charlieweb.tk',
      password: 'admin',
    };
    this.login = this.login.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isloginSuccess) {
      history.push('/');
    }
  }

  onEmailChange(e) {
    this.setState({
      email: e.target.value,
    });
  }

  onPasswordChange(e) {
    this.setState({
      password: e.target.value,
    });
  }

  onSubmit(e) {
    this.props.login(this.state.email, this.state.password);
    e.preventDefault();
  }

  login() {
    this.props.login('a', 'b');
  }

  render() {
    if (this.props.inProgress) {
      return <Loader />;
    }
    return (
      <div className="container">
        <div className="login-form">
          <div className="main-div">
            <div className="panel">
              <p>Please enter your email and password</p>
            </div>
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <input type="email" value={this.state.email} onChange={this.onEmailChange} className="form-control" placeholder="Email Address" />
              </div>
              <div className="form-group">
                <input type="password" value={this.state.password} onChange={this.onPasswordChange} className="form-control" placeholder="Password" />
              </div>
              <div className="forgot">
                <Link to="/">Forgot password?</Link>
              </div>
              <button type="submit" disabled={this.props.inProgress} className="btn btn-warning">Login</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    inProgress: state.authReducer.inProgress,
    isloginSuccess: state.authReducer.isloginSuccess,
  };
}

function mapDispatchToProps(dispatch) {
  function login(email, password) { dispatch(userActions(email, password)); }

  return {
    login,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
