import {fromJS} from 'immutable';
import {actinoTypes} from './index';

const defaultState=fromJS({
    mouseIn:false,
    collapsed:true,
    navlist:[]
});
export default(state=defaultState,action)=>{
    switch (action.type) {
        case actinoTypes.CHANGE_NAV:
            return state.set('collapsed',!state.get('collapsed'));
        case actinoTypes.NAV_LIST:
            return state.set('navlist',action.list);
        default:
            return state;
    }
};
