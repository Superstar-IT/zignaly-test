import * as TYPES from "../types";

const initState = {
  phones: [],
  selectedPhone: null,
};
  
const phoneReducer = (state = initState, action) => {
  switch (action.type) {
    case TYPES.SET_PHONES:
      return { ...state, phones: action.phones };
    case TYPES.SELECT_PHONE:
      return { ...state, selectedPhone: action.phone };
    default:
      return { ...state };
  }
}

export { 
  initState,
  phoneReducer
};