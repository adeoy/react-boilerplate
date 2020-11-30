export const actions = {
  setInitialState: "SET_INITIAL_STATE",
};

export const setInitialState = (payload) => ({
  type: actions.setInitialState,
  payload,
});
