import { fromJS } from 'immutable';
import * as actionTypes from './common';

const defaultState = fromJS({
    topicList: [],
    articleList: [],
    recommendList: [],
    writerList: [],
    writerListPage: {
        page: 1,
        totalePage: 0
    },
    articlePage:1,
    showScroll:false
}); 

export default (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_HOME_DATA:
            return changeHomeData(state,action);
        case actionTypes.ADD_HOME_LIST:
            return addMoreList(state,action);
         case actionTypes.TOP_TOGGLE_SHOE:{
            return state.set('showScroll',action.show);
        }
        default:
            return state;
    }
};
const changeHomeData=(state,action)=>{
    return state.merge({
        topicList:fromJS(action.topicList),
        articleList:fromJS(action.articleList),
         recommendList:fromJS(action.recommendList),
         writerList:fromJS(action.writerList)
     });
};
const addMoreList=(state,action)=>{
    return state.merge({
        'articleList':state.get('articleList').concat(fromJS(action.list)),
        articlePage:action.nextpage                
    })
};