import {actinoTypes} from './index';
import axios from 'axios';

const LogIn=(userName)=>({
    type:actinoTypes.LOGIN_IN,
    userName
})
export const logIn=(user)=>{
    return (dispatch)=>{
        dispatch(LogIn(user.userName));
        // axios.post("/user/login",user).then((res)=>{
        //     if(res.data.code===200){
        //         dispatch(LogIn(user.userName));
        //     }else{
        //         alert("密码错误!");
        //     }
        // })
    }
};
export const LogOut=()=>({
    type:actinoTypes.LOGIN_OUT
});
export const blur=()=>({
    type:actinoTypes.MOUSE_OUT
});
