import { createStore } from 'redux'

function transition(state, action) {
  switch (action.type) {
    case 'ABOUT':
      return {pageType: "ABOUT"}
  }
}


let store = createStore(transition);
store.dispatch({type: "ABOUT"});

console.log(store.getState());

export default store
