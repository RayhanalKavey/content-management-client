import { createStore } from "redux";
import { blogReducer } from "../REDUCERS/blogReducer";
// Connect devtools to the project
import { composeWithDevTools } from "@redux-devtools/extension";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";

const store = createStore(
  blogReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
export default store;
