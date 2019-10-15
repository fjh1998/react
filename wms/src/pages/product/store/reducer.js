import {fromJS} from 'immutable';
import {actinoTypes} from './index';

const defaultState=fromJS({
    product_list:[],
    column:[],
    modal_visible:false,
    category_options:[],
    unit_options:[],
    standards_options:[],
    warehouse_options:[]
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
              "category_options":fromJS(action.category_opstions),
              "unit_options":fromJS(action.unit_options),
              "standards_options":fromJS(action.standards_options),
              "warehouse_options":fromJS(action.warehouse_options)
            }) ;
        case actinoTypes.HIDDEN_MODAL:
            return state.merge({
              'modal_visible':false
              ,edit_product:fromJS({})
            });
        case actinoTypes.GET_PRODUCT_LIST:
            return state.merge({
                "product_list":fromJS(action.productlist),
                "column":fromJS(action.columnlist)
            });
        default:
            return state;
    }
};

