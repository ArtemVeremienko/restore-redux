import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

import reducer from './reducers'

const logMiddleware = ({ getState, dispatch }) => (nextDispatch) => (action) => {
  console.log(action.type, getState())
  return nextDispatch(action)
}

const stringMiddleware = () => (dispatch) => (action) => {
  if (typeof action === 'string') {
    return dispatch({
      type: action
    })
  }
  return dispatch(action)
}

const store = createStore(reducer, applyMiddleware(thunkMiddleware, stringMiddleware, logMiddleware))

const delayedActionCreater = (timeout) => (dispatch) => {
  setTimeout(() => dispatch({
    type: 'DELAYED_ACTION'
  }), timeout)
}

store.dispatch(delayedActionCreater(3000))

store.dispatch('HELLO_WORLD')

export default store