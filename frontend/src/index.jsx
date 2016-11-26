import React from 'react';
import {render} from 'react-dom';
import MainApp from './MainApp.jsx';
import store from './store.js';

class App extends React.Component {

  render () {
    return (
      <div>
        <p> Hello React!</p>
        < MainApp/>
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'))
