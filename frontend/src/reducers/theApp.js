

const initialState = {
  nothing: "my state"
}
function theApp(state = initialState, action) {
  if (typeof state == 'undefined') {
	  return initialState
  }
  return state
}


export default theApp
