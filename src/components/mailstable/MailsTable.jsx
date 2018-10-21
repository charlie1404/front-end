import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Dropdown from 'react-bootstrap/lib/Dropdown';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';
import ButtonGroup from 'react-bootstrap/lib/ButtonGroup';
import ToggleButton from 'react-bootstrap/lib/ToggleButton';
import Button from 'react-bootstrap/lib/Button';

import ReadMailModal from '../ReadMailModal';

class MailsTable extends Component {
  constructor() {
    super();
    this.state = {
      pageCounter: 0,
      displayModal: false,
      dispalyMail: {},
    };

    this.incrementCounter = this.incrementCounter.bind(this);
    this.decrementCounter = this.decrementCounter.bind(this);
    this.onMailClick = this.onMailClick.bind(this);
    this.onCloseModal = this.onCloseModal.bind(this);
  }

  componentWillMount() {
    this.mails = Array.from(
      { length: Math.ceil(this.props.mails.length / 12) },
      (v, i) => this.props.mails.slice(i * 12, (i * 12) + 12)
    );
  }

  onCloseModal() {
    this.setState({
      displayModal: false,
      dispalyMail: {},
    });
  }

  onMailClick(mail) {
    this.setState({
      displayModal: true,
      dispalyMail: mail,
    });
  }

  incrementCounter() {
    if (this.state.pageCounter === Math.floor(this.props.mails.length / 12)) return;
    this.setState({
      pageCounter: this.state.pageCounter + 1,
    });
  }

  decrementCounter() {
    if (this.state.pageCounter === 0) return;
    this.setState({
      pageCounter: this.state.pageCounter - 1,
    });
  }

  render() {
    if (!this.mails.length) return null;
    return (
      <React.Fragment>
        <ReadMailModal
          show={this.state.displayModal}
          from={this.state.dispalyMail.fromEmail}
          cc={this.state.dispalyMail.cc}
          subject={this.state.dispalyMail.subject}
          message={this.state.dispalyMail.body}
          onModalClose={this.onCloseModal}
        />
        <div className="inbox-body">
          <div className="mail-option">
            <ButtonToolbar aria-label="Toolbar with button groups">
              <ButtonGroup>
                <ToggleButton variant="info" type="checkbox" defaultChecked value="1" />
                <Button variant="info">All</Button>
              </ButtonGroup>
              <ButtonGroup>
                <Button variant="info" onClick={this.props.loadMails}><i className=" fas fa-sync-alt" /></Button>
              </ButtonGroup>
              <Dropdown>
                <Dropdown.Toggle variant="info" id="dropdown-basic"> More&emsp;<i className="fas fa-caret-down" /></Dropdown.Toggle>
                <Dropdown.Menu>
                  <li><Link to="/"><i className="fas fa-pencil-alt" />&emsp;Mark as Read</Link></li>
                  <li><Link to="/"><i className="fas fa-ban" />&emsp;Spam</Link></li>
                  <li className="divider" />
                  <li><Link to="/"><i className="fas fa-trash-alt" />&emsp;Delete</Link></li>
                </Dropdown.Menu>
              </Dropdown>
              <ul className="unstyled inbox-pagination">
                <li><span>{` ${(this.state.pageCounter * 12) + 1}-${(this.state.pageCounter * 12) + 12}`} of {this.props.mails.length}</span></li>
                <li>
                  <Button onClick={this.decrementCounter} variant="info"><i className="fas fa-angle-left" /></Button>
                  <Button onClick={this.incrementCounter} variant="info"><i className="fas fa-angle-right" /></Button>
                </li>
              </ul>
            </ButtonToolbar>
          </div>

          <table className="table table-inbox table-hover">
            <tbody>
              {
                this.mails[this.state.pageCounter].map((mail) => {
                  const date = new Date(mail.date);
                  const dt = date.toLocaleDateString().replace(/\//g, '-');
                  const tm = date.toLocaleTimeString().slice(0, 5);
                  const subject = mail.subject.slice(0, 20) + (mail.subject.length > 20 ? '...' : '');
                  const body = mail.body.slice(0, 45) + (mail.body.length > 40 ? '...' : '');
                  return (
                    <tr onClick={() => this.onMailClick(mail)} className={mail.status ? '' : 'unread'} key={mail.mid}>
                      <td className="inbox-small-cells">
                        <input type="checkbox" className="mail-checkbox" />
                      </td>
                      <td className="inbox-small-cells"><i className="fas fa-star" /></td>
                      <td className="view-message dont-show">{subject}</td>
                      <td className="view-message ">{body}</td>
                      <td className="view-message inbox-small-cells" />
                      <td className="view-message text-right">{`${dt} ${tm}`}</td>
                    </tr>
                  );
                })
              }
            </tbody>
          </table>
        </div>
      </React.Fragment>
    );
  }
}

export default MailsTable;
