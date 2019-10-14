import {actinoTypes} from './index';
import axios from 'axios';

const getproductlist=(productlist,columnlist)=>({
    type:actinoTypes.GET_PRODUCT_LIST,
    productlist,
    columnlist
});
export const getProductList=()=>{
    return (dispatch)=>{
        axios.get("/api/productList.json").then((res)=>{
            if(res.data.success){
                const productlist=res.data.data;
                axios.get("/api/product_column.json").then((res)=>{
                    const column=res.data.data;
                    dispatch(getproductlist(productlist,column));
                }).catch((error)=>{
                    console.error();
                })
            }else{
                alert("商品列表加载失败");
            }
        }).catch((error)=>{
            console.log(error);
            alert("商品列表加载失败,请刷新重试！");
        })
    }
}
export const editproduct=(new_edit_product)=>{
    return (dispatch)=>{
        axios.post("/product/delete",new_edit_product).then((res)=>{
            if(res.data.success){
                dispatch(getproductlist(res.data.data));
            }else{
                alert("商品信息修改失败");
            }
        }).catch((error)=>{
            console.log(error);
            alert("商品信息修改失败,请刷新重试！");
        })
    }
};
export const deleteproduct=(productid)=>{
    return (dispatch)=>{
        let data={"productid":productid};
        axios.post("/product/delete",data).then((res)=>{
            if(res.data.success){
                dispatch(getproductlist(res.data.data));
            }else{
                alert("商品删除失败");
            }
        }).catch((error)=>{
            console.log(error);
            alert("商品删除失败,请刷新重试！");
        })
    }
};
export const showModal=(text)=>({
    type:actinoTypes.SHOW_MODAL,
    edit_product:text
});
export const hidden_modal=()=>({
    type:actinoTypes.HIDDEN_MODAL
});
export const setNewEditProduct=(new_edit_product)=>({
    type:actinoTypes.ADD_NEW_PRODUCT,
    edit_product:new_edit_product
});
