import React from 'react';
require('./sidebar.css');

//const logo = require('./images/logoblack.jpg')

const logo = require("./logoblack.jpg")
const tabsbio = require("./tabsbio.png")
const tabseditorial = require("./tabseditorial.png")

class LeftSideBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
	    <div id="sidebar">
        <img id="logo" src={logo}/> 
        <img className="tab-label" src={tabsbio}/>
        <img className="tab-label" src={tabseditorial}/>
      </div>
    );
  }

}

export default LeftSideBar;
