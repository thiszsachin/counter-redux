import { decrementWith5, incrementWith10 } from "./constants";

export const countReducer = (state = 10, action) => {
  switch (action.type) {
    case incrementWith10:
      return state + action.payload;
    case decrementWith5:
      return state - action.payload;
    default:
      return state;
  }
};
