import axios from 'axios';
import * as actionTypes from './actionTypes';

export const getDetail=(id)=>{
    return (dispatch)=>{
        axios.get('/api/detail.json?id='+id).then((res)=>{
            const result=res.data.data;
            dispatch(changeDetail(result.title,result.content))
            console.log(res.data);
        }).catch(()=>{
            alert('erro');
        })
    }
};

const changeDetail=(title,content)=>({
        type:actionTypes.GET_DETAIL,
        title,
        content
});