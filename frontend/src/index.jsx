import React from 'react';
import {render} from 'react-dom';
import MainApp from './MainApp.jsx';
import store from './store.js';
import { Provider } from 'react-redux';
import {Router, Route, hashHistory, DefaultRoute, IndexRoute} from 'react-router'
import About from './pages/about/About.jsx'
import Editorial from './pages/editorial/Editorial.jsx'

class App extends React.Component {

  render () {
    return (
      <Router history={hashHistory}>
        <Route path="/">
          <IndexRoute component={About}/>
          <Route path="about" component={About}/>
          <Route path="editorial" component={Editorial}/>
        </Route>
      </Router>
    );
  }
}

render(<App/>, document.getElementById('app'))
