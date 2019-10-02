import {combineReducers} from 'redux-immutable';
import {headerReducer} from '../common/header/store';
import  {homeReducer} from '../pages/home/store';
import {detailReducer} from '../pages/detail/store';
import {loginReducer} from '../pages/login/store'

const reducer= combineReducers({
    header:headerReducer,
    homeReducer:homeReducer,
    detailReducer:detailReducer,
    loginReducer:loginReducer
});
export default reducer;