import {actinoTypes} from './index';
import axios from 'axios';


const getuserlist=(userlist)=>({
    type:actinoTypes.GET_USER_LIST,
    userlist
});
export const getUserList=()=>{
    return (dispatch)=>{
        axios.get("/api/userList.json").then((res)=>{
            if(res.data.success){
                console.log(res);
                dispatch(getuserlist(res.data.data));
            }else{
                alert("用户列表加载失败");
            }
        }).catch((error)=>{
            console.log(error);
            alert("用户列表加载失败,请刷新重试！");
        })
    }
}
export const edituser=(new_edit_user)=>{
    return (dispatch)=>{
        axios.post("/user/delete",new_edit_user).then((res)=>{
            if(res.data.success){
                dispatch(getuserlist(res.data.data));
            }else{
                alert("用户信息修改失败");
            }
        }).catch((error)=>{
            console.log(error);
            alert("用户信息修改失败,请刷新重试！");
        })
    }
};
export const deleteuser=(userid)=>{
    return (dispatch)=>{
        let data={"userid":userid};
        axios.post("/user/delete",data).then((res)=>{
            if(res.data.success){
                dispatch(getuserlist(res.data.data));
            }else{
                alert("用户删除失败");
            }
        }).catch((error)=>{
            console.log(error);
            alert("用户删除失败,请刷新重试！");
        })
    }
};
export const showModal=(text)=>({
    type:actinoTypes.SHOW_MODAL,
    edit_user:text
});
export const hidden_modal=()=>({
    type:actinoTypes.HIDDEN_MODAL
});
export const setNewEditUser=(new_edit_user)=>({
    type:actinoTypes.SET_NEW_EDIT_USER,
    edit_user:new_edit_user
});
