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
    this.state = null;
  }

  render() {
    return (
      <div className="inbox-body">
        <ReadMailModal
          show
          from="sameple@email.com"
          cc=""
          subject="test Subject"
          message="hallabol"
        />
        <div className="mail-option">
          <ButtonToolbar aria-label="Toolbar with button groups">
            <ButtonGroup>
              <ToggleButton variant="info" type="checkbox" defaultChecked value="1" />
              <Button variant="info">All</Button>
            </ButtonGroup>
            <ButtonGroup>
              <Button variant="info"><i className=" fas fa-sync-alt" /></Button>
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
              <li><span>1-50 of 234</span></li>
              <li>
                <Button variant="info"><i className="fas fa-angle-left" /></Button>
                <Button variant="info"><i className="fas fa-angle-right" /></Button>
              </li>
            </ul>
          </ButtonToolbar>
        </div>

        <table className="table table-inbox table-hover">
          <tbody>
            <tr className="unread">
              <td className="inbox-small-cells">
                <input type="checkbox" className="mail-checkbox" />
              </td>
              <td className="inbox-small-cells"><i className="fas fa-star" /></td>
              <td className="view-message  dont-show">PHPClass</td>
              <td className="view-message ">Added a new class: Login Class Fast Site</td>
              <td className="view-message  inbox-small-cells"><i className="fa fa-paperclip" /></td>
              <td className="view-message  text-right">9:27 AM</td>
            </tr>
            <tr className="">
              <td className="inbox-small-cells">
                <input type="checkbox" className="mail-checkbox" />
              </td>
              <td className="inbox-small-cells"><i className="fas fa-star" /></td>
              <td className="view-message dont-show">JW Player</td>
              <td className="view-message">Last Chance: Upgrade to Pro for </td>
              <td className="view-message inbox-small-cells" />
              <td className="view-message text-right">March 15</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default MailsTable;
