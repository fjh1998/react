import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Layout, Table, Modal, Input, Form, Button } from 'antd';
import { actinCreators } from './store';

const { Content } = Layout;

class Product1 extends Component {
    componentDidMount() {
        this.props.getProduct_List();
    };
    render() {
    const { product_list, column, editproduct, deletecustomer, modal_visible, showModal, handleCancel, edit_product } = this.props;
    const newlist = product_list.toJS();
    const newcolumn = column.toJS();
    const text = edit_product.toJS();
    const { getFieldDecorator } = this.props.form;
    const action={
            title:"操作",
            key:"action",
            render: text => (
                    <span>
                        <a onClick={() => deletecustomer(text.id)}>删除</a>
                    </span>
                )                       
        };
        newcolumn.push(action);
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Content
                style={{
                    margin: '24px 16px',
                    padding: 24,
                    background: '#fff',
                    minHeight: 280,
                }}
            >
                <Button onClick={()=>{
                    showModal();
                    }}>增商品</Button>
                <Table dataSource={newlist} columns={newcolumn} rowKey='id'>
                </Table>
                <Modal
                    title="供应商信息修改"
                    visible={modal_visible}
                    onOk={() => {
                        const new_edit_product = this.props.form.getFieldsValue();
                        new_edit_product.id = edit_product.get("id");
                        return editproduct(new_edit_product);
                    }}
                    onCancel={handleCancel}
                    centered={true}

                >
                    <Form>
                        <Form.Item key="name">
                            {
                                getFieldDecorator('name', {
                                    initialValue: edit_product.get("customername"),
                                    rules: [{
                                        required: true,
                                        message: '名称不能为空'
                                    }, {
                                        pattern: new RegExp("^[a-zA-Z_\\u4e00-\\u9fa5]{2,15}$", "g"),
                                        message: '名称必须为字母或者汉字且长度为2-15'
                                    }
                                    ]
                                }
                                )(<Input addonBefore={"名称:"} />)}
                        </Form.Item>
                        <Form.Item key="price">
                            {
                                getFieldDecorator('price', {
                                    // initialValue: edit_product.get("ture_name"),
                                    rules: [{
                                        required: true,
                                        message: '地址不能为空'
                                    }, {
                                        pattern: new RegExp("^[1-9]\d*(\.\d{1,2})?$)\|(^0(\.\d{1,2})?$", "g"),
                                        message: "价格必须大于零，可精确到小数点后两位如：1.01"
                                    }
                                    ]
                                }
                                )(<Input addonBefore={"价格:"} />)}

                        </Form.Item>
                        <Form.Item key="min">
                            {
                                getFieldDecorator('min', {
                                    //initialValue: edit_product.get("email"),
                                    rules: [{
                                        required: true,
                                        message: '最小库存不能为空'
                                    }, {
                                        pattern: new RegExp("^[0-9]*[1-9][0-9]*$", "g"),
                                        message: "最小库存必须为正整数"
                                    }
                                    ]

                                }
                                )(<Input addonBefore={"最小库存:"} />)}

                        </Form.Item>
                        <Form.Item key="max">
                            {
                                getFieldDecorator('max', {
                                    // initialValue: edit_product.get("phone"),
                                    rules: [{
                                        required: true,
                                        message: '最大库存不能为空'
                                    }, {
                                        pattern: new RegExp("^[0-9]*[1-9][0-9]*$", "g"),
                                        message: "最大库存必须为正整数且大于最小库存"
                                    }]

                                }
                                )(<Input addonBefore={"最大库存:"} />)}

                        </Form.Item>
                    
                    </Form>
                </Modal>
            </Content>
        </Layout>
    );
}
};

const mapState = (state) => ({
product_list: state.getIn(['ProductReducer', 'product_list']),
modal_visible: state.getIn(['ProductReducer', 'modal_visible']),
edit_product: state.getIn(['ProductReducer', 'edit_product']),
column: state.getIn(['ProductReducer', 'column']),
});
const mapDispatcher = (dispatch) => ({
editproduct(new_edit_product) {
    dispatch(actinCreators.editproduct(new_edit_product));
},
deletecustomer(productid) {
    dispatch(actinCreators.deletecustomer(productid));
},
showModal(text) {
    dispatch(actinCreators.showModal(text));
},
handleCancel() {
    dispatch(actinCreators.hidden_modal());
},
AddNewProduct(new_product) {
    dispatch(actinCreators.AddNewProduct(new_product));
},
getProduct_List() {
    dispatch(actinCreators.getProductList());
},
deletecustomer(productid) {
    dispatch(actinCreators.deleteproduct(productid));
},
});
const Product = Form.create()(Product1);
export default connect(mapState, mapDispatcher)(Product);