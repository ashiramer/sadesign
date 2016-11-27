import React from 'react';
require('./sidebar.css');

class LeftSideBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
	    <div id="sidebar"> Sup </div>
    );
  }

}

export default LeftSideBar;
