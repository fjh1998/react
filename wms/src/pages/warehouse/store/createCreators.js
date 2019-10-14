import {actinoTypes} from './index';
import axios from 'axios';



export const getUserList=()=>{
    return (dispatch)=>{
        axios.get("/api/warehouseList.json").then((res)=>{
            if(res.data.success){
                const warehouselist=res.data.data;
                axios.get("/api/warehouse_column.json").then((res)=>{                 
                    const column=res.data.data;
                    dispatch(getwarehouseList(warehouselist,column));
                }).catch((error)=>{
                    console.log(error);
            alert("仓库列表加载失败,请刷新重试！");
                })
            }else{
                alert("仓库列表加载失败");
            }
        }).catch((error)=>{
            console.log(error);
            alert("仓库列表加载失败,请刷新重试！");
        })
    }
}
export const editwarehouse=(new_edit_warehouse)=>{
    return (dispatch)=>{
        axios.post("/user/delete",new_edit_warehouse).then((res)=>{
            if(res.data.success){
                dispatch(getwarehouseListagain(res.data.data));
            }else{
                alert("仓库信息修改失败");
            }
        }).catch((error)=>{
            console.log(error);
            alert("仓库信息修改失败,请刷新重试！");
        })
    }
};
export const deletewarehouse=(warehouseid)=>{
    return (dispatch)=>{
        let data={"warehouseid":warehouseid};
        axios.post("/warehouse/delete",data).then((res)=>{
            if(res.data.success){
                dispatch(getwarehouseListagain(res.data.data));
            }else{
                alert("仓库删除失败");
            }
        }).catch((error)=>{
            console.log(error);
            alert("仓库删除失败,请刷新重试！");
        })
    }
};
export const showModal=(text)=>({
    type:actinoTypes.SHOW_MODAL,
    edit_warehouse:text
});
export const hidden_modal=()=>({
    type:actinoTypes.HIDDEN_MODAL
});
const getwarehouseList=(warehouseList,column)=>({
    type:actinoTypes.GET_WAREHOUSE_LIST,
    warehouseList,
    column
});
const getwarehouseListagain=(warehouseList)=>({
    type:actinoTypes.GET_WAREHOUSE_LIST,
    warehouseList
});