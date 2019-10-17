import {actinoTypes} from './index';
import axios from 'axios';


const getcustomerlist=(customerlist,columnlist)=>({
    type:actinoTypes.GET_CUSTOMER_LIST,
    customerlist,
    columnlist
});
export const getCustomerList=()=>{
    return (dispatch)=>{
        axios.get("/customer/getAllcustomer").then((res)=>{
            if(res.data.code===200){
                const customerlist=res.data.data;
                axios.get("/api/customer_column.json").then((res)=>{                 
                    const column=res.data.data;
                    dispatch(getcustomerlist(customerlist,column));
                }).catch((error)=>{
                    console.error();
                })
            }else{
                alert("用户列表加载失败");
            }
        }).catch((error)=>{
            console.log(error);
            alert("用户列表加载失败,请刷新重试！");
        })
    }
}
export const editcustomer=(new_edit_customer)=>{
    return (dispatch)=>{
        axios.post("/customer/delete",new_edit_customer).then((res)=>{
            if(res.data.success){
                dispatch(getcustomerlist(res.data.data));
            }else{
                alert("用户信息修改失败");
            }
        }).catch((error)=>{
            console.log(error);
            alert("用户信息修改失败,请刷新重试！");
        })
    }
};
export const deletecustomer=(customerid)=>{
    return (dispatch)=>{
        let data={"customerid":customerid};
        axios.post("/customer/delete",data).then((res)=>{
            if(res.data.success){
                dispatch(getcustomerlist(res.data.data));
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
    edit_customer:text
});
export const hidden_modal=()=>({
    type:actinoTypes.HIDDEN_MODAL
});
export const setNewEditCustomer=(new_edit_customer)=>({
    type:actinoTypes.SET_NEW_EDIT_CUSTOMER,
    edit_customer:new_edit_customer
});
