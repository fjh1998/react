import { fromJS } from 'immutable';
import { actinoTypes } from './index';

const defaultState = fromJS({
    warehouse_list: [],
    column:[],
    modal_visible: false,
    edit_warehouse: fromJS({})
});
export default (state = defaultState, action) => {
    switch (action.type) {
        case actinoTypes.DELETE_WAREHOUSE:
            return state.set('collapsed', !state.get('collapsed'));
        case actinoTypes.EDIT_WAREHOUSE:
            return state.set('navlist', action.list);
        case actinoTypes.SHOW_MODAL:
            return state.merge({
                "modal_visible": true,
                "edit_warehouse": fromJS(action.edit_warehouse)
            });
        case actinoTypes.HIDDEN_MODAL:
            return state.merge({
                'modal_visible': false,
                "edit_warehouse": fromJS({})
            });
        case actinoTypes.GET_WAREHOUSE_LIST:
            return state.merge({
                "warehouse_list":fromJS(action.warehouseList),
                "column":fromJS(action.column)
            });
        default:
            return state;
    }
};
