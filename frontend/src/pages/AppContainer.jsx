import React, { PropTypes } from 'react';
import {Route} from 'react-router';
import About from './about/About.jsx';
import * as Actions from '../actions/page.js';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

require('./container.css');

class AppContainer extends React.Component {

  constructor(props, page) {
    super(props);
    //this.state = {likesCount : 0};
    //this.onLike = this.onLike.bind(this);
    console.log(this.state);
  }

  //onLike () {
  //  let newLikesCount = this.state.likesCount + 1;
  //  this.setState({likesCount: newLikesCount});
  //}

  render() {
    return (
        <div>
        {this.props.activeRoute}
        </div>
    );
  }

}

export default AppContainer;
