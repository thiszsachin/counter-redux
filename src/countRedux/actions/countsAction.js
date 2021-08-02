import { incrementWith10, decrementWith5 } from "../constants";

export const count = (countFromUSer) => async (dispatch) => {
  dispatch({
    type: incrementWith10,
    payload: countFromUSer
  });
};
