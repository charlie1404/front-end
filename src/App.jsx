import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import MailsTable from './components/mailstable/MailsTable';


import Loader from './components/Loader';

class App extends Component {
  constructor() {
    super();
    this.state = null;
  }

  componentWillMount() {
    // this.props.loadMails();
  }

  static defaultProps = {
    inProgress: false,
  }

  render() {
    if (this.props.inProgress) {
      return <Loader />;
    }
    return (
      <div className="mail-box">
        <Sidebar />
        <aside className="lg-side">
          <Header />
          <MailsTable />
        </aside>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { ...state };
}

function mapDispatchToProps(dispatch) {
  // function loadMails() { dispatch(loadMails()); }

  return {
    // loadMails,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
