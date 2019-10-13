import {fromJS} from 'immutable';
import {actinoTypes} from './index';

const defaultState=fromJS({
    user_list:[],
      modal_visible:false,
      edit_user:fromJS({})
});
export default(state=defaultState,action)=>{
    switch (action.type) {
        case actinoTypes.DELETE_USER:
            return state.set('collapsed',!state.get('collapsed'));
        case actinoTypes.EDIT_USER:
            return state.set('navlist',action.list);
        case actinoTypes.SHOW_MODAL:
            return state.merge({
              "modal_visible":true,
              "edit_user":fromJS(action.edit_user)
            }) ;
        case actinoTypes.HIDDEN_MODAL:
            return state.merge({
              'modal_visible':false
              ,edit_user:fromJS({})
            });
        case actinoTypes.SET_NEW_EDIT_USER:
            return state.set('edit_user',action.edit_user
            );
        case actinoTypes.GET_USER_LIST:
            return state.set('user_list',fromJS(action.userlist));
        default:
            return state;
    }
};
