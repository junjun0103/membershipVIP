import { createStore } from 'redux'; //load createStore API
export default createStore((state, action) => {
  //this is a reducer
  if (state === undefined) {
    return { number: 0 };
  }
  if (action.type === 'INCREMENT') {
    return { ...state, number: state.number + action.size };
  }

  return state;
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
