import React, { PropTypes } from 'react';
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
      <div id="app-container">
      	<About/>
      </div>
    );
  }

}

AppContainer.propTypes = {
  pageType: PropTypes.string.isRequired
}


function mapStateToProps(state) {
  console.log(state);
  let newState = {pageType: state.pageType};
  console.log(newState);
  return newState;
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
