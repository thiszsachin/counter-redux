import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { countReducer } from "./reducers";

import { composeWithDevTools } from "redux-devtools-extension";

const reducers = combineReducers({
  // add all the reducers here
  countState: countReducer
});

export const initialState = {};

const middelware = [thunk];

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middelware))
);

export default store;
