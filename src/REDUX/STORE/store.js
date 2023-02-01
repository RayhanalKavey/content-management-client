import { createStore } from "redux";
import { blogReducer } from "../REDUCERS/blogReducer";
// Connect devtools to the project
import { composeWithDevTools } from "@redux-devtools/extension";

const store = createStore(blogReducer, composeWithDevTools());
export default store;
