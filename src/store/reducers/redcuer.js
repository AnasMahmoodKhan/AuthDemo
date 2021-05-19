import { combineReducers } from "redux";
import authReducer from "./AuthReducer";
import dataReducer from "./DataReducer";

export default combineReducers({
  auth: authReducer,
  data: dataReducer,
});
