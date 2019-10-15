import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Layout, Table, Modal, Input, Form, Button,Select } from 'antd';
import { actinCreators } from './store';

const { Content } = Layout;
const{Option}=Select;
class Product1 extends Component {
    componentDidMount() {
        this.props.getProduct_List();
    };
    render() {
        const { product_list, column, addproduct, deleteproduct,
             modal_visible, showModal, handleCancel, maxvalidator,
            warehouse_options,unit_options,standards_options,
            category_options,minvalidator } = this.props;
        const newlist = product_list.toJS();
        const newcolumn = column.toJS();
        const warehouse_option=warehouse_options.toJS();
        const unit_option=unit_options.toJS();
        const standards_option=standards_options.toJS();
        const category_opstion=category_options.toJS();
        const { getFieldDecorator } = this.props.form;
        const action = {
            title: "操作",
            key: "action",
            render: text => (
                <span>
                    <a onClick={() => deleteproduct(text.id)}>删除</a>
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
                    <Button onClick={() => {
                        showModal();
                    }}>新增商品</Button>
                    <Table dataSource={newlist} columns={newcolumn} rowKey='id'>
                    </Table>
                    <Modal
                        title="供应商信息修改"
                        visible={modal_visible}
                        onOk={() => {
                            const new_product = this.props.form.getFieldsValue();
                            console.log(new_product);
                            addproduct(new_product);
                        }}
                        onCancel={handleCancel}
                        centered={true}
                    >
                        <Form layout="inline" >
                            <Form.Item key="name" label="名称:">
                                {
                                    getFieldDecorator('name', {
                                        rules: [{
                                            required: true,
                                            message: '名称不能为空'
                                        }, {
                                            pattern: new RegExp("^[a-zA-Z_\\u4e00-\\u9fa5]{2,15}$", "g"),
                                            message: '名称必须为字母或者汉字且长度为2-15'
                                        }
                                        ]
                                    }
                                    )(<Input style={{"width":"400px"}}/>)}
                            </Form.Item>
                            <Form.Item key="price" label="价格:">
                                {
                                    getFieldDecorator('price', {
                                        // initialValue: edit_product.get("ture_name"),
                                        rules: [{
                                            required: true,
                                            message: '价格不能为空'
                                        }, {
                                            pattern: new RegExp("(^[1-9]\\d*(\.\\d{1,2})?$)|(^0(\.\\d{1,2})?$)", "g"),
                                            message: "价格必须大于零，可精确到小数点后两位如：1.01"
                                        }
                                        ]
                                    }
                                    )(<Input  style={{"width":"400px"}}/>)}

                            </Form.Item>
                            <Form.Item key="min" label="最小库存:">
                                {
                                    getFieldDecorator('min', {
                                        //initialValue: edit_product.get("email"),
                                        rules: [{
                                            required: true,
                                            message: '最小库存不能为空'
                                        }, {
                                            pattern: new RegExp("^[0-9]*[1-9][0-9]*$", "g"),
                                            message: "最小库存必须为正整数"
                                        },{
                                            validator: minvalidator.bind(this)
                                        }
                                        ]

                                    }
                                    )(<Input style={{"width":"350px"}} />)}

                            </Form.Item>
                            <Form.Item key="max" label="最大库存:">
                                {
                                    getFieldDecorator('max', {
                                        rules: [{
                                            required: true,
                                            message: '最大库存不能为空'
                                        }, {
                                            pattern: new RegExp("^[0-9]*[1-9][0-9]*$", "g"),
                                            message: "最大库存必须为正整数且大于最小库存"
                                        }, {
                                            validator: maxvalidator.bind(this)
                                        }
                                        ]
                                    }
                                    )(<Input  style={{"width":"350px"}} />)}

                            </Form.Item>
                            <Form.Item key="warehouse" label="仓库">
                                {
                                    getFieldDecorator('warehouse', {
                                        initialValue: 1,
                                        rules: [{
                                            required: true,
                                        }
                                        ]
                                    }
                                    )(<Select style={{"width":"400px"}}>
                                        {
                                            warehouse_option.map(item=>(
                                                <Option key={item.id} value={item.id}>{item.name}</Option>
                                            ))
                                            }
                                    </Select>)}
                            </Form.Item>
                            <Form.Item key="unit" label="单位">
                                {
                                    getFieldDecorator('unit', {
                                        initialValue: 1,
                                        rules: [{
                                            required: true,
                                        }]
                                    }
                                    )(<Select style={{"width":"400px"}}>
                                        {
                                            unit_option.map(item=>(
                                                <Option key={item.id} value={item.id}>{item.name}</Option>
                                            ))
                                            }
                                    </Select>)}
                            </Form.Item>
                            <Form.Item key="standards" label="规格">
                                {
                                    getFieldDecorator('standards', {
                                        initialValue: 1,
                                        rules: [{
                                            required: true,
                                        }]
                                    }
                                    )(<Select style={{"width":"400px"}}>
                                        {
                                            standards_option.map(item=>(
                                                <Option key={item.id} value={item.id}>{item.name}</Option>
                                            ))
                                            }
                                    </Select>)}
                            </Form.Item>
                            <Form.Item key="category" label="分类">
                                {
                                    getFieldDecorator('category', {
                                        initialValue: 1,
                                        rules: [{
                                            required: true,
                                        }]
                                    }
                                    )(<Select style={{"width":"400px"}}>
                                        {
                                            category_opstion.map(item=>(
                                                <Option key={item.id} value={item.id}>{item.name}</Option>
                                            ))
                                            }
                                    </Select>)}
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
    column: state.getIn(['ProductReducer', 'column']),
    category_options: state.getIn(['ProductReducer', 'category_options']),
    unit_options: state.getIn(['ProductReducer', 'unit_options']),
    standards_options: state.getIn(['ProductReducer', 'standards_options']),
    warehouse_options: state.getIn(['ProductReducer', 'warehouse_options'])
});
const mapDispatcher = (dispatch) => ({
    addproduct(new_product) {
        dispatch(actinCreators.addproduct(new_product));
    },
    deleteproduct(productid) {
        dispatch(actinCreators.deleteproduct(productid));
    },
    showModal() {
        dispatch(actinCreators.showModal());
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
    maxvalidator(rule, value, callback) {
        const { getFieldValue } = this.props.form;
        const minvalue = getFieldValue("min");
        //    JS比较数字不能直接比较需确认数据类型
        if ((minvalue > 0) && (parseInt(value) <= parseInt(minvalue))) {
            callback("最大库存必须大于最小库存！");
        } else {
            callback();
        }
    },
    minvalidator(rule, value, callback){
        const { getFieldValue } = this.props.form;
        const maxvalue = getFieldValue("max");
        //    JS比较数字不能直接比较需确认数据类型
        if ((maxvalue > 0) && (parseInt(value) >= parseInt(maxvalue))) {
            callback("最小库存必须小于最大库存！");
        } else {
            callback();
        }
    }
});
const Product = Form.create()(Product1);
export default connect(mapState, mapDispatcher)(Product);