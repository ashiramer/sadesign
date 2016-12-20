import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions/page.js';
import { Link } from 'react-router';


require('./sidebar.css');

//const logo = require('./images/logoblack.jpg')

const logo = require("./logoblack.jpg")
const tabsbio = require("./tabsbio.png")
const tabseditorial = require("./tabseditorial.png")

class SideBarTab extends React.Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    return <Link to={this.props.name}><img className="tab-label" src={this.props.src} /></Link>
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
        <SideBarTab src={tabsbio} name="about"/>
        <SideBarTab src={tabseditorial} name="editorial"/>
      </div>
    );
  }

}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default LeftSideBar;

