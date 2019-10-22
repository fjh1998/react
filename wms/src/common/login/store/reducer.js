import {fromJS} from 'immutable';
import {actinoTypes} from './index';

const defaultState=fromJS({
    isLogin:false,
    userName:''
});
export default(state=defaultState,action)=>{
    switch (action.type) {
        case actinoTypes.LOGIN_IN:
            return state.merge({
                'isLogin':true,
                userName:action.userName
            });
        case actinoTypes.LOGIN_OUT:
            return state.merge({
                'isLogin':false,
                userName:''
            });
        default:
            return state;
    }
};
