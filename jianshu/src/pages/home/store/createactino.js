import * as actionTypes from './common';
import Axios from 'axios';

const change_home_data=(result)=>({
    type:actionTypes.CHANGE_HOME_DATA,
    topicList:result.topicList,
    articleList:result.articleList,
    recommendList:result.recommendList,
    writerList:result.writerList
});
const addHomeList=(list,nextpage)=>({
    type:actionTypes.ADD_HOME_LIST,
    list:list,
    nextpage:nextpage
})

export const getHomeInfo=()=>{
    return (dispatch)=>{
        Axios.get('/api/home.json').then((res)=>{
            const result=res.data.data;
            dispatch(change_home_data(result));
        }).catch((erro)=>{
            console.log(erro);
        })
    }
};
export const getMoreList=(page)=>{
    console.log(page);
    return (dispatch)=>{
        Axios.get('/api/homeList.json?page='+page).then((res)=>{
            const list=res.data.data.articleList;
            dispatch(addHomeList(list,page+1));
        })
    }
};
export const toggleTopShoe=(show)=>({
    type:actionTypes.TOP_TOGGLE_SHOE,
    show
})