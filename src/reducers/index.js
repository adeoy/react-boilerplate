import { actions } from "../actions";

const reducer = (state, action) => {
  switch (action.type) {
    case actions.setInitialState:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
