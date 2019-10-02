import  axios from 'axios';
import  {actionTypes} from './index';

export const login=(accout,password)=>{
    return (dispatch)=>{
        axios.get('/api/login.json?account='+accout+'&password'+password).then(
            (res)=>{
                const result =res.data.data;
                if(result){
                    dispatch(changelogin());
                }else{
                    alert('登录失败');
                }
            }
        )
    }
};
export const logout=()=>({
    type:actionTypes.CHANGE_LOGOUT,
    value:false
})
const changelogin=()=>({
    type:actionTypes.CHANGE_LOGIN,
    value:true
});