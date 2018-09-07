import React from 'react';

export default (props) =>  
(
  <div>
    <button className="big-button"
      onClick={props.handlePick}
      disabled={!props.hasOptions}>What should I do?</button>
  </div>
);
  