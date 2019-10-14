import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Layout, Table, Divider, Modal, Input, Form } from 'antd';
import { actinCreators } from './store';

const { Content } = Layout;
class Customer1 extends Component {

    componentDidMount() {
        this.props.getCustomer_List();
    };
    render() {
        const { customer_list, column, editcustomer, modalinit, deletecustomer, modal_visible, showModal, handleCancel, edit_customer, setNewEditCustomer } = this.props;
        const newlist = customer_list.toJS();
        const newcolumn = column.toJS();
        const { getFieldDecorator } = this.props.form;
        const action={
                title:"操作",
                key:"action",
                render: text => (
                        <span>
                            <a onClick={() => {
                               showModal(text);
                               this.props.form.setFieldsValue({
                                        "name": text.name,
                                        "address": text.address,
                                        "contact": text.contact,
                                        "phone": text.phone
                                    });
                            }}>编辑</a>
                            <Divider type="vertical" />
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

                    <Table dataSource={newlist} columns={newcolumn} rowKey='id'>
                    </Table>
                    <Modal
                        title="供应商信息修改"
                        visible={modal_visible}
                        onOk={() => {
                            const new_edit_customer = this.props.form.getFieldsValue();
                            new_edit_customer.id = edit_customer.get("id");
                            return editcustomer(new_edit_customer);
                        }}
                        onCancel={handleCancel}
                        centered={true}

                    >
                        <Form>
                            <Form.Item key={edit_customer.get("name")}>
                                {
                                    getFieldDecorator('name', {
                                        //initialValue: edit_customer.get("customername"),
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
                            <Form.Item key={edit_customer.get("address")}>
                                {
                                    getFieldDecorator('address', {
                                        // initialValue: edit_customer.get("ture_name"),
                                        rules: [{
                                            required: true,
                                            message: '地址不能为空'
                                        }, {
                                            pattern: new RegExp("^[0-9a-zA-Z_\\u4e00-\\u9fa5]{2,15}$", "g"),
                                            message: "地址必须为字母、数字或汉字且长度为5-20"
                                        }
                                        ]
                                    }
                                    )(<Input addonBefore={"地址:"} />)}

                            </Form.Item>
                            <Form.Item key={edit_customer.get("contact")}>
                                {
                                    getFieldDecorator('contact', {
                                        //initialValue: edit_customer.get("email"),
                                        rules: [{
                                            required: true,
                                            message: '联系人不能为空'
                                        }, {
                                            pattern: new RegExp("^[a-zA-Z_\\u4e00-\\u9fa5]{2,10}$", "g"),
                                            message: "联系人必须为字母或汉字且长度为2-10"
                                        }
                                        ]

                                    }
                                    )(<Input addonBefore={"联系人:"} />)}

                            </Form.Item>
                            <Form.Item key={edit_customer.get("phone")}>
                                {
                                    getFieldDecorator('phone', {
                                        // initialValue: edit_customer.get("phone"),
                                        rules: [{
                                            required: true,
                                            message: '手机号码不能为空'
                                        }, {
                                            pattern: new RegExp("^1[3|4|5|7|8]\\d{9}$", "g"),
                                            message: "请输入正确的11位手机号码"
                                        }]

                                    }
                                    )(<Input addonBefore={"phone:"} />)}

                            </Form.Item>
                        </Form>
                    </Modal>
                </Content>
            </Layout>
        );
    }
};

const mapState = (state) => ({
    customer_list: state.getIn(['CustomerReducer', 'customer_list']),
    modal_visible: state.getIn(['CustomerReducer', 'modal_visible']),
    edit_customer: state.getIn(['CustomerReducer', 'edit_customer']),
    column: state.getIn(['CustomerReducer', 'column']),
});
const mapDispatcher = (dispatch) => ({
    editcustomer(new_edit_customer) {
        dispatch(actinCreators.editcustomer(new_edit_customer));
    },
    deletecustomer(customerid) {
        dispatch(actinCreators.deletecustomer(customerid));
    },
    showModal(text) {
        dispatch(actinCreators.showModal(text));
    },
    handleCancel() {
        dispatch(actinCreators.hidden_modal());
    },
    setNewEditCustomer(new_edit_customer) {
        dispatch(actinCreators.setNewEditCustomer(new_edit_customer));
    },
    getCustomer_List() {
        dispatch(actinCreators.getCustomerList());
    },
    deletecustomer(customerid) {
        dispatch(actinCreators.deletecustomer(customerid));
    },
});
const Customer = Form.create()(Customer1);
export default connect(mapState, mapDispatcher)(Customer);