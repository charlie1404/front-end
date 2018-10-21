import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Settings extends Component {
  constructor() {
    super();
    this.state = null;
  }

  render() {
    return (
      <div>
        <Link to="/login">Login</Link><br />
        <Link to="/register">Register</Link><br />
        <Link to="/profile">Profile</Link><br />
        <Link to="/">Home</Link><br />
        <pre>{ JSON.stringify(this.props, null, 2) }</pre>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
