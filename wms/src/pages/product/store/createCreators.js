import { actinoTypes } from './index';
import axios from 'axios';

const getproductlist = (productlist, columnlist) => ({
    type: actinoTypes.GET_PRODUCT_LIST,
    productlist,
    columnlist
});
const modaldetail = (category_opstions, unit_options, standards_options, warehouse_options) => ({
    type: actinoTypes.SHOW_MODAL,
    category_opstions,
    unit_options,
    standards_options,
    warehouse_options
});
export const getProductList = () => {
    return (dispatch) => {
        axios.get("/product/getAllProduct").then((res) => {
            console.log(res);
            if (res.data.code===200) {
                const productlist = res.data.data;
                axios.get("/api/product_column.json").then((res) => {
                    const column = res.data.data;
                    dispatch(getproductlist(productlist, column));
                }).catch((error) => {
                    console.error();
                })
            } else {
                alert("商品列表加载失败");
            }
        }).catch((error) => {
            console.log(error);
            alert("商品列表加载失败,请刷新重试！");
        })
    }
}
export const addproduct = (new_product) => {
    return (dispatch) => {
        axios.post("/product/delete", new_product).then((res) => {
            if (res.data.success) {
                dispatch(getNewProductList(res.data.data));
            } else {
                alert("商品信息添加失败,请刷新重试！");
            }
        }).catch((error) => {
            console.log(error);
            alert("商品信息添加失败,请刷新重试！");
        })
    }
};
export const deleteproduct = (productid) => {
    return (dispatch) => {
        let data = { "productid": productid };
        axios.post("/product/delete", data).then((res) => {
            if (res.data.success) {
                dispatch(getNewProductList(res.data.data));
            } else {
                alert("商品删除失败");
            }
        }).catch((error) => {
            console.log(error);
            alert("商品删除失败,请刷新重试！");
        })
    }
};
export const showModal = () => {
    return (dispatch)=>{
        axios.get("/api/add_product.json").then((res)=>{
            const category_options=res.data.data.category;
            const unit_options=res.data.data.unit;
            const standards_options=res.data.data.standards;
            const warehouse_options=res.data.data.warehouse; 
            dispatch(modaldetail(category_options,unit_options,standards_options,warehouse_options));
        }).catch((error)=>{
            console.log(error);
            alert("商品属性列表获取失败，请刷新重试!");
        })
    }
};
export const hidden_modal = () => ({
    type: actinoTypes.HIDDEN_MODAL
});
export const getNewProductList = (new_productlist) => ({
    type: actinoTypes.GET_NEW_PRODUCTLIST,
    productlist: new_productlist
});

