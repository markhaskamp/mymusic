
export function storeReducer(state, action) {

  if (state === undefined) {
    return {};
  }

  switch(action.type) {

    default:
      console.log('Unhandled action type;', action.type);
      return state;
  }
}


