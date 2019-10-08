import {actinoTypes} from './index';
import axios from 'axios';

const navlist=(list)=>({
    type:actinoTypes.NAV_LIST,
    list
})
export const chagenav=()=>({
    type:actinoTypes.CHANGE_NAV
});
export const getNavList=()=>{
    return (dispatch)=>{
        axios.get("/api/navList.json").then((res)=>{
            dispatch(navlist(res.data));
        }).catch((erro)=>{
            console.log(erro);
        })
    }
};
