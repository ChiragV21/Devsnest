import {createStore } from "redux";
import {userFormReducer} from "./userForm/userFormReducer"
const store = createStore(userFormReducer);

export default store;