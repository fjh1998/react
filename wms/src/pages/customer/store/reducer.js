import {fromJS} from 'immutable';
import {actinoTypes} from './index';

const defaultState=fromJS({
    customer_list:[],
    column:[],
    edit_customer:{},
    modal_visible:false
});
export default(state=defaultState,action)=>{
    switch (action.type) {
        case actinoTypes.DELETE_CUSTOMER:
            return state.set('collapsed',!state.get('collapsed'));
        case actinoTypes.EDIT_CUSTOMER:
            return state.set('navlist',action.list);
        case actinoTypes.SHOW_MODAL:
            return state.merge({
              "modal_visible":true,
              "edit_customer":fromJS(action.edit_customer)
            }) ;
        case actinoTypes.HIDDEN_MODAL:
            return state.merge({
              'modal_visible':false
              ,edit_customer:fromJS({})
            });
        case actinoTypes.SET_NEW_EDIT_CUSTOMER:
            return state.set('edit_custome',action.edit_custome
            );
        case actinoTypes.GET_CUSTOMER_LIST:
            return state.merge({
                "customer_list":fromJS(action.customerlist),
                "column":fromJS(action.columnlist)
            });
        default:
            return state;
    }
};

