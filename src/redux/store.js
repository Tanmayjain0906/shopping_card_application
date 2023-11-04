import shoppingReducer from "./reducer/shoppingReducer";
import { createStore } from "redux";

const store = createStore(shoppingReducer);

export default store;