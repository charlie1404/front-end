import React from 'react';

function Header() {
  return (
    <div className="inbox-head">
      <h3>Inbox</h3>
      <form action="#" className="pull-right position">
        <div className="input-append">
          <input type="text" className="sr-input" placeholder="Search Mail" />
          <button className="btn sr-btn" type="button"><i className="fa fa-search" /></button>
        </div>
      </form>
    </div>
  );
}

export default Header;
