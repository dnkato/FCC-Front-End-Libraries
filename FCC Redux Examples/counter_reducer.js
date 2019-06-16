const INCREMENT = 'INCREMENT'; // define a constant for increment action types
const DECREMENT = 'DECREMENT'; // define a constant for decrement action types

const defaultState = 0;

const counterReducer = (state = defaultState, action) => {
  switch(action.type) {
    case INCREMENT:
      return state + 1
      break;
    case DECREMENT:
      return state - 1
    default:
      return state;
  }
};
// define the counter reducer which will increment or decrement the state based on the action it receives

const incAction = () => {return {type: INCREMENT} } // define an action creator for incrementing

const decAction = () => { return {type: DECREMENT}} // define an action creator for decrementing

const store = Redux.createStore(counterReducer); // define the Redux store here, passing in your reducers


//console.log(store.getState());
//store.dispatch(incAction());
//console.log(store.getState());
//store.dispatch(incAction());
//console.log(store.getState());
//store.dispatch(decAction());
//console.log(store.getState());