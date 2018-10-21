/* eslint-disable jsx-a11y/label-has-for */

import React, { Component } from 'react';

class MailModal extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.submitForm = this.submitForm.bind(this);

    this.state = {
      to: 'test@charlieweb.tk',
      cc: '',
      subject: 'qwer',
      message: 'qwe ',
    };
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  submitForm(e) {
    e.preventDefault();

    this.props.sendMail(this.state);
  }

  render() {
    return (
      <div className={`modal${this.props.show ? ' active' : ''}`}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button data-dismiss="modal" onClick={this.props.onModalClose} className="close" type="button">×</button>
              <h4 className="modal-title">Compose</h4>
            </div>
            <div className="modal-body">
              <form onSubmit={this.submitForm} className="form-horizontal">
                <div className="form-group">
                  <label className="col-lg-2 control-label">To</label>
                  <div className="col-lg-10">
                    <input required onChange={this.handleChange} name="to" value={this.state.to} type="email" placeholder="" className="form-control" />
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-lg-2 control-label">Cc</label>
                  <div className="col-lg-10">
                    <input type="email" placeholder="" onChange={this.handleChange} name="cc" value={this.state.cc} className="form-control" />
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-lg-2 control-label">Subject</label>
                  <div className="col-lg-10">
                    <input required type="text" placeholder="" onChange={this.handleChange} name="subject" value={this.state.subject} className="form-control" />
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-lg-2 control-label">Message</label>
                  <div className="col-lg-10">
                    <textarea rows="10" cols="30" onChange={this.handleChange} name="message" value={this.state.message} className="form-control" />
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-lg-offset-2 col-lg-10">
                    <button className="btn btn-send" type="submit">Send</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MailModal;
