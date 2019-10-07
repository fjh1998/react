import {combineReducers} from 'redux-immutable';
import {navReducer} from  '../common/nav/store'

const reducer=combineReducers({
    navReducer:navReducer
});
export default reducer;