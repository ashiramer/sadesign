import React from 'react';
import {render} from 'react-dom';
import MainApp from './MainApp.jsx';
import store from './store.js';
import { Provider } from 'react-redux';

class App extends React.Component {

  render () {
    console.log(store.getState());
    return (
      <Provider store={store}>
        <div>
          < MainApp/>
        </div>
      </Provider>
    );
  }
}

render(<App/>, document.getElementById('app'))
