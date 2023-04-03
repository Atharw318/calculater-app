import React from 'react';
import './ClearButton.css';

function ClearButton(props) {
  return (
    <div onClick={() =>props.onClear()} className='clear-btn'>{props.children}</div>
  )
}

export default ClearButton