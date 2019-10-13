import {combineReducers} from 'redux-immutable';
import {navReducer} from  '../common/nav/store'
import {headReducer} from '../common/head/store';
import {Product_Out_RecordReducer} from '../pages/product_out_record/store'
import {Product_In_RecordReducer} from '../pages/product_in_record/store'
import {ProductReducer} from '../pages/product/store';
import {In_Out_RecordReducer} from '../pages/in_out_record/store';
import {CustomerReducer} from '../pages/customer/store';
import {WareHouseReducer} from '../pages/warehouse/store';
import {userReducer} from '../pages/user/store';


const reducer=combineReducers({
    navReducer:navReducer,
    headReducer:headReducer,
    Product_Out_RecordReducer:Product_Out_RecordReducer,
    Product_In_RecordReducer:Product_In_RecordReducer,
    ProductReducer:ProductReducer,
    In_Out_RecordReducer:In_Out_RecordReducer,
    CustomerReducer:CustomerReducer,
    WareHouseReducer:WareHouseReducer,
    userReducer:userReducer
});
export default reducer;