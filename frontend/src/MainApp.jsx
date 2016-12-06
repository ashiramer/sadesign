import React from 'react';
import LeftSideBar from './sidebar/LeftSideBar.jsx';
import AppContainer from './pages/AppContainer.jsx';

import state from './store.js';

require('./main.css');

class MainApp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {likesCount : 0};
    this.onLike = this.onLike.bind(this);
  }

  onLike () {
    let newLikesCount = this.state.likesCount + 1;
    this.setState({likesCount: newLikesCount});
  }

  render() {
    return (
      <div className="main-style">
      	<LeftSideBar/>
        <AppContainer/>
      </div>
    );
  }

}

export default MainApp;
