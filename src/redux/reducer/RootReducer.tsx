import { combineReducers } from "redux";
import { authReducer } from "./auth.reducer";

const RootReducer = combineReducers({
    // Add your reducers here
    auth: authReducer,
});

export default RootReducer;
