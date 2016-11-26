import { createStore } from 'redux'
import theApp from './reducers/theApp.js'

let store = createStore(theApp, {state: "nothing"})

export default store
