import { LOAD_BLOG } from "../actionTypes/actionTypes";

const initialState = {
  blogs: [],
};
const modificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_BLOG:
      return {
        ...state,
        products: action.payload,
      };
    default:
      return state;
  }
};
export default modificationReducer;
