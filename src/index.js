import React from 'react';
import ReactDOM from 'react-dom';

import Router from './Router';
import sw from './sw';

ReactDOM.render(<Router />, document.getElementById('root'));
sw();
