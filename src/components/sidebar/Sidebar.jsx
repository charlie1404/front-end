import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/lib/Button';
import Dropdown from 'react-bootstrap/lib/Dropdown';
import Actions from '../../actions';

import MailModal from '../MailModal';

class Sidebar extends Component {
  constructor() {
    super();
    this.onModalClose = this.onModalClose.bind(this);
    this.state = {
      displayModal: false,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      displayModal: nextProps.inProgress,
    });
  }

  onModalClose() {
    this.setState({
      displayModal: false,
    });
  }


  render() {
    return (
      <React.Fragment>
        {
          this.props.isSendMailSuccess && alert('Mail Send Successfull')
        }
        {
          this.props.isSendMailFailed && alert('Mail Send Unsuccessfull')
        }
        <aside className="sm-side">
          <div className="user-head">
            <Link className="inbox-avatar" to="/profile">
              <img width="64" hieght="64" alt="" src="https://via.placeholder.com/64x64" />
            </Link>
            <div className="user-name">
              <h5><Link to="/profile">Alireza Zare</Link></h5>
              <span><Link to="/profile">Info.Ali.Pci@Gmail.com</Link></span>
            </div>
            <Dropdown className="mail-dropdown pull-right">
              <Dropdown.Toggle variant="warning" id="dropdown-basic">
                <i className="fas fa-caret-down" />
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <li><Link to="/profile"><i className="fas fa-user-circle" />&emsp;Profile</Link></li>
                <li><Link to="/logout"><i className="fas fa-sign-out-alt" />&emsp;Logout</Link></li>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="inbox-body">
            <Button onClick={() => this.setState({ displayModal: true })} variant="danger" className="btn-compose">Compose</Button>
            <MailModal
              show={this.state.displayModal}
              onModalClose={this.onModalClose}
              sendMail={this.props.sendMail}
            />
          </div>
          <ul className="inbox-nav inbox-divider">
            <li className="active"><Link to="/"><i className="fas fa-inbox" /> Inbox <span className="label label-danger pull-right">2</span></Link></li>
            <li><Link to="/sent"><i className="fas fa-sign-in-alt" /> Sent Mail</Link></li>
            <li><Link to="/important"><i className="fas fa-bookmark" /> Important</Link></li>
            <li><Link to="/drafts"><i className=" fas fa-clipboard-list" /> Drafts <span className="label label-info pull-right">30</span></Link></li>
            <li><Link to="/bin"><i className=" fas fa-trash-alt" /> Trash</Link></li>
          </ul>
          <ul className="nav nav-pills nav-stacked labels-info inbox-divider">
            <li><h4>Labels</h4></li>
            <li><Link to="/"><i className="fas fa-circle text-danger" /> Work</Link></li>
            <li><Link to="/"> <i className="fas fa-circle text-success" /> Design</Link></li>
            <li><Link to="/"> <i className="fas fa-circle text-info " /> Family</Link></li>
            <li><Link to="/"> <i className="fas fa-circle text-warning " /> Friends</Link></li>
            <li><Link to="/"> <i className="fas fa-circle text-primary " /> Office</Link></li>
          </ul>
        </aside>
      </React.Fragment>
    );
  }
}

function mapStateToProps({ mailReducer }) {
  return {
    inProgress: mailReducer.inProgress,
    isSendMailSuccess: mailReducer.isSendMailSuccess,
    isSendMailFailed: mailReducer.isSendMailFailed,
  };
}

function mapDispatchToProps(dispatch) {
  function sendMail(...params) {
    dispatch(Actions.sendMail(...params));
  }

  return {
    sendMail,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
