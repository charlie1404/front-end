/* eslint-disable jsx-a11y/label-has-for */

import React from 'react';

class ReadMailModal extends React.PureComponent {
  render() {
    console.log(this.props);
    return (
      <div className={`modal${this.props.show ? ' active' : ''}`}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button data-dismiss="modal" onClick={this.props.onModalClose} className="close" type="button">×</button>
              <h4 className="modal-title">Read Mail</h4>
            </div>
            <div className="modal-body">
              <div className="form-horizontal">
                <div className="form-group">
                  <label className="col-lg-2 control-label">From</label>
                  <div className="col-lg-10">
                    <input disabled value={this.props.from} type="email" className="form-control" />
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-lg-2 control-label">Cc</label>
                  <div className="col-lg-10">
                    <input disabled type="email" value={this.props.cc} className="form-control" />
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-lg-2 control-label">Subject</label>
                  <div className="col-lg-10">
                    <input disabled value={this.props.subject} type="text" className="form-control" />
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-lg-2 control-label">Message</label>
                  <div className="col-lg-10">
                    <textarea disabled rows="10" cols="30" style={{ resize: 'vertical' }} value={this.props.message} className="form-control" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ReadMailModal;
