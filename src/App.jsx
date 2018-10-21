import React, { Component } from 'react';
import { connect } from 'react-redux';

import Actions from './actions';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import MailsTable from './components/mailstable/MailsTable';

import Loader from './components/Loader';

class App extends Component {
  static defaultProps = {
    inProgress: false,
  }

  constructor() {
    super();
    this.state = {
      mails: [],
    };
  }

  componentWillMount() {
    this.props.loadMails();
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.data) {
      this.setState({
        mails: nextProps.data,
      });
    }
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
          <MailsTable
            mails={this.state.mails}
            loadMails={this.props.loadMails}
          />
        </aside>
      </div>
    );
  }
}

function mapStateToProps({ mailReducer }) {
  return { ...mailReducer };
}

function mapDispatchToProps(dispatch) {
  function loadMails() { dispatch(Actions.loadMails()); }

  return {
    loadMails,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
