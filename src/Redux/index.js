import counter from './reducers/counterReducer';
import auth from './reducers/authReducer';
import { combineReducers } from "redux";

const allReducers = combineReducers({
    counter,
    auth,
});

export default allReducers;