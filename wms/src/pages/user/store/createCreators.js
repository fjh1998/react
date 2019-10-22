import {actinoTypes} from './index';
import axios from 'axios';


const getuserlist=(userlist)=>({
    type:actinoTypes.GET_USER_LIST,
    userlist
});
export const getUserList=()=>{
    return (dispatch)=>{
        axios.get("/user/getAlluser").then((res)=>{
            if( res.data.code===200){
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
        axios.post("/user/Updateuser",new_edit_user
        ).then((res)=>{
            if(res.data.code==200){
                dispatch(getuserlist(res.data.data));
                alert("用户信息修改成功");
            }else{
                alert(res.message);
            }
        }).catch((error)=>{
            console.log(error);
            alert("用户信息修改失败,请刷新重试！");
        })
    }
};
export const deleteuser=(userid)=>{
    return (dispatch)=>{
        let data={"id":userid};
        console.log(JSON.stringify(data));
        axios.get("/user/Deleteuser?userid="+userid).then((res)=>{
            if(res.data.code===200){
                dispatch(getuserlist(res.data.data));
                alert("用户删除成功");
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
