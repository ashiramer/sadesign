import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions/page.js';


require('./sidebar.css');

//const logo = require('./images/logoblack.jpg')

const logo = require("./logoblack.jpg")
const tabsbio = require("./tabsbio.png")
const tabseditorial = require("./tabseditorial.png")

class SideBarTab extends React.Component {
  
  constructor(props) {
    super(props);
  }

  getSelected() {
    console.log(this.props.name);
  }

  render() {
    return <img className="tab-label" onClick={this.getSelected.bind(this)} src={this.props.src} />
  }
}

class LeftSideBar extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {
    return (
	    <div id="sidebar">
        <img id="logo" src={logo}/> 
        <SideBarTab onClick={this.getSelected} src={tabsbio} name="ABOUT"/>
        <SideBarTab onClick={this.getSelected} src={tabseditorial} name="EDITORIAL"/>
      </div>
    );
  }

}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(mapDispatchToProps)(LeftSideBar);

