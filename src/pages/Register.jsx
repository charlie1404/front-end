import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Register extends Component {
  constructor() {
    super();
    this.state = null;
  }

  render() {
    return (
      <div>
        <Link to="/login">Login</Link><br />
        <Link to="/">Home</Link><br />
        <Link to="/profile">Profile</Link><br />
        <Link to="/settings">Settings</Link><br />
        <pre>{ JSON.stringify(this.props, null, 2) }</pre>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state,
});

const mapDispatchToProps = dispatch => ({
  // signin: () => dispatch(signin())
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
