import { createStore } from 'redux'
import { initialState, theApp } from './reducers/theApp.js'
import { changePage } from './actions/page.js'


let store = createStore(theApp);
store.dispatch(changePage("ABOUT"));

console.log(store.getState());

export default store
