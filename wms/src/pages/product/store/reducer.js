import {fromJS} from 'immutable';
import {actinoTypes} from './index';

const defaultState=fromJS({
    product_list:[],
    column:[],
    edit_product:{},
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
              "edit_product":fromJS(action.edit_product)
            }) ;
        case actinoTypes.HIDDEN_MODAL:
            return state.merge({
              'modal_visible':false
              ,edit_product:fromJS({})
            });
        case actinoTypes.SET_NEW_EDIT_CUSTOMER:
            return state.set('edit_custome',action.edit_custome
            );
        case actinoTypes.GET_PRODUCT_LIST:
            console.log(action.productlist);
            return state.merge({
                "product_list":fromJS(action.productlist),
                "column":fromJS(action.columnlist)
            });
        default:
            return state;
    }
};

