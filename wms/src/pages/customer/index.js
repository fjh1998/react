import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Layout, Table, Divider, Modal, Input, Form } from 'antd';
import { actinCreators } from './store';

const { Content } = Layout;
class Customer1 extends Component {

    componentDidMount(){
        this.props.getcoustomer_List();
    };
    render() {
        const { customer_list,column, editcustomer, deletecustomer, modal_visible, showModal, handleCancel, edit_customer, setNewEditUser } = this.props;
        const newlist = customer_list.toJS();
        const newcolumn=column.toJS();
        // let new_edit_customer = edit_customer.toJS();
        const { getFieldDecorator } = this.props.form;
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

                    <Table dataSource={newlist} Column={newcolumn} Key='id'>
                        <Column
                            title="操作"
                            key="action"
                            render={(text, record) => (
                                <span>
                                    <a onClick={() => {
                                        console.log(record);
                                        console.log("text:");
                                        console.log(text);
                                        showModal(text);
                                        this.props.form.setFieldsValue({
                                            "customername": text.customername,
                                            "ture_name":text.ture_name,
                                            "phone":text.phone,
                                            "email":text.email
                                        });
                                    }}>编辑</a>
                                    <Divider type="vertical" />
                                    <a onClick={() => deletecustomer(text.id)}>删除</a>
                                </span>
                            )}
                        />
                    </Table>
                    <Modal
                        title="Basic Modal"
                        visible={modal_visible}
                        onOk={() => {
                            const new_edit_customer = this.props.form.getFieldsValue();
                            new_edit_customer.id = edit_customer.get("id");
                            return editcustomer(new_edit_customer);
                        }}
                        onCancel={handleCancel}
                    >
                        <Form>
                            <Form.Item key={edit_customer.get("customername")}>
                                {
                                    getFieldDecorator('customername', {
                                        //initialValue: edit_customer.get("customername"),
                                        rules: [{
                                            required: true,
                                            message: '用户名不能为空'
                                        }, {
                                            pattern: new RegExp('^\\w+$', 'g'),
                                            message: 'customername必须为字母或者数字'
                                        }, {
                                            min: 3,
                                            max: 12,
                                            message: "长度不在范围"
                                        }
                                        ]

                                    }
                                    )(<Input addonBefore={"customername:"} />)}

                            </Form.Item>
                            <Form.Item key={edit_customer.get("ture_name")}>
                                {
                                    getFieldDecorator('ture_name', {
                                        // initialValue: edit_customer.get("ture_name"),
                                        rules: [{
                                            required: true,
                                            message: '真实姓名不能为空'
                                        }, {
                                            pattern: new RegExp("^[a-zA-Z_\\u4e00-\\u9fa5]{2,15}$", "g"),
                                            message: "真实姓名必须为字母或汉字且长度为2-15"
                                        }
                                        ]
                                    }
                                    )(<Input addonBefore={"ture_name:"} />)}

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
                            <Form.Item key={edit_customer.get("email")}>
                                {
                                    getFieldDecorator('email', {
                                        //initialValue: edit_customer.get("email"),
                                        rules: [{
                                            required: true,
                                            message: 'email不能为空'
                                        }, {
                                            pattern: new RegExp("^[_0-9a-zA-Z-]+(\.[_0-9a-zA-Z-])*@[0-9a-zA-Z-]+(\.[0-9a-zA-Z-]+)+$", "g"),
                                            message: "请输入正确的email"
                                        }
                                        ]

                                    }
                                    )(<Input addonBefore={"email:"} />)}

                            </Form.Item>
                            {/* <Input style={{ marginTop: '8px' }} addonBefore={"ture_name:"} value={edit_customer.get("ture_name")} allowClear={true} /> */}
                            {/* <Input style={{ marginTop: '8px' }} addonBefore={"phone:"} value={edit_customer.get("phone")} allowClear={true} />
                            <Input style={{ marginTop: '8px' }} addonBefore={"email:"} value={edit_customer.get("email")} allowClear={true} /> */}
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
    column:state.getIn(['CustomerReducer', 'column']),
});
const mapDispatcher = (dispatch) => ({
    editcustomer(new_edit_customer) {
        console.log(new_edit_customer);
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
    setNewEditUser(new_edit_customer) {
        dispatch(actinCreators.setNewEditUser(new_edit_customer));
    },
    getUser_List(){
        dispatch(actinCreators.getUserList());
    }
});
const Customer = Form.create()(Customer1);
export default connect(mapState, mapDispatcher)(Customer);