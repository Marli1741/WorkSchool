import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import FacebookEmojiCounter from './Facebookemoji';
import ToggleMode from './ToggleModeComponent';

ReactDOM.render(
  <React.Fragment>
    <FacebookEmojiCounter type="Like" />
    <FacebookEmojiCounter type="Love" />
    <ToggleMode />
  </React.Fragment>,
  document.getElementById('root')
);
