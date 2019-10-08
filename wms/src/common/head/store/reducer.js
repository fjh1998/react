import {fromJS} from 'immutable';
import {actinoTypes} from './index';

const defaultState=fromJS({
    mouseIn:false
});
export default(state=defaultState,action)=>{
    switch (action.type) {
        case actinoTypes.MOUSE_IN:
            return state.set('mouseIn',true);
        case actinoTypes.MOUSE_OUT:
            return state.set('mouseIn',false);
        default:
            return state;
    }
};
