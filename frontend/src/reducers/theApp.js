import { SWITCH_PAGE, PAGES } from '../actions/page.js'
import { combineReducers } from 'redux'

export const initialState = {
  page: PAGES.ABOUT
}

function page(state = initialState, action) {
  console.log(action);
  return { page: action.page }
  
}

export const theApp = combineReducers({page})

