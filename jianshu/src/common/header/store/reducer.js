import * as constants from './constants';
import { fromJS } from 'immutable'

const defaultState = fromJS({
        focused: false,
        list: [],
        page: 1,
        totalPage: 1,
        mousein:false,
});
export default (state = defaultState, action) => {
        switch (action.type) {
                case constants.SEARCH_FOCUS:
                        return state.set('focused', true);
                case constants.SEARCH_BLUR:
                        return state.set('focused', false);
                case constants.CHANGE_LIST:
                        //merge可一次修改多个数据，只调用一次性能比连续set高
                        //return state.set('list', action.data).set('totalPage', action.totalPage);
                        return state.merge({
                                list:action.data,
                                totalPage:action.totalPage
                        })
                case constants.MOUSE_ENTER:
                        return state.set('mousein',true);              
                case constants.MOUSE_LEAVE:
                        return state.set('mousein',false);              
                case constants.CHANGE_PAGE:
                        return state.set('page',action.page);              
                default:
                        return state;
        }
        // if(action.type===constants.SEARCH_FOCUS){
        //     return state.set('focused',true);
        // }
        // if(action.type===constants.SEARCH_BLUR){
        //     return state.set('focused',false);
        // }
        // if
        // return state;
};