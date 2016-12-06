import { SWITCH_PAGE, PAGES } from '../actions/pages.js'

const initialState = {
  page: PAGES.ABOUT
}

function page(state = initialState, action) {
  return { page: action.PAGE_TYPE }
  
}

const theApp = combineReducers({page})

export default theApp
