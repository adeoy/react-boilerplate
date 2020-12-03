import { actions } from "../actions";

const reducer = (state, action) => {
  switch (action.type) {
    case actions.setInitialState:
      return {
        ...state,
        ...action.payload,
      };
    case actions.addTask:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case actions.removeTask:
      return {
        ...state,
        tasks: state.tasks.filter((item) => item._id !== action.payload),
      };
    case actions.updateTask:
      const filtered = state.tasks.filter((item) => item._id !== action.payload._id);
      return {
        ...state,
        tasks: [...filtered, action.payload],
      };
    default:
      return state;
  }
};

export default reducer;
