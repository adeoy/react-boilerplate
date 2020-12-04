import axios from "axios";

export const actions = {
  setInitialState: "SET_INITIAL_STATE",
};

export const setInitialState = (payload) => ({
  type: actions.setInitialState,
  payload,
});

export const getInitialState = () => {
  return async (dispatch) => {
    Promise.all([
      axios.get("http://127.0.0.1:5000/api/v1/tasks/"),
    ]).then(([tasks,]) => {
      dispatch(
        setInitialState({
          tasks: tasks.data.data,
        })
      );
    }).catch((err) => {
      console.log(err);
    });
  }
};
