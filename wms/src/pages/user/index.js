import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Layout, Table, Divider, Modal, Input, Form } from 'antd';
import { actinCreators } from './store';

const { Content } = Layout;
const { Column } = Table;
class User1 extends Component {

    componentDidMount(){
        this.props.getUser_List();
    };
    render() {
        const { user_list, edituser, deleteuser, modal_visible, showModal, handleCancel, edit_user } = this.props;
        const newlist = user_list.toJS();
        // let new_edit_user = edit_user.toJS();
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

                    <Table dataSource={newlist} rowKey='id'>
                        <Column title="ID" dataIndex="id" key="id" />
                        <Column title="用户名" dataIndex="username" key="username" />
                        <Column title="真实姓名" dataIndex="trueName" key="trueName" />
                        <Column title="手机号" dataIndex="phone" key="phone" />
                        <Column title="邮箱" dataIndex="email" key="email" />
                        <Column
                            title="操作"
                            key="action"
                            render={(text, record) => (
                                <span>
                                    <a onClick={() => {
                                        showModal(text);
                                        this.props.form.setFieldsValue({
                                            "username": text.username,
                                            "trueName":text.trueName,
                                            "phone":text.phone,
                                            "email":text.email
                                        });
                                    }}>编辑</a>
                                    <Divider type="vertical" />
                                    <a onClick={() => deleteuser(text.id)}>删除</a>
                                </span>
                            )}
                        />
                    </Table>
                    <Modal
                        title="Basic Modal"
                        visible={modal_visible}
                        onOk={() => {
                            const new_edit_user = this.props.form.getFieldsValue();
                            new_edit_user.id = edit_user.get("id");
                            return edituser(new_edit_user);
                        }}
                        onCancel={handleCancel}
                    >
                        <Form>
                            <Form.Item key={edit_user.get("username")}>
                                {
                                    getFieldDecorator('username', {
                                        //initialValue: edit_user.get("username"),
                                        rules: [{
                                            required: true,
                                            message: '用户名不能为空'
                                        }, {
                                            pattern: new RegExp('^\\w+$', 'g'),
                                            message: 'username必须为字母或者数字'
                                        }, {
                                            min: 3,
                                            max: 12,
                                            message: "长度不在范围"
                                        }
                                        ]

                                    }
                                    )(<Input addonBefore={"username:"} />)}

                            </Form.Item>
                            <Form.Item key={edit_user.get("trueName")}>
                                {
                                    getFieldDecorator('trueName', {
                                        // initialValue: edit_user.get("trueName"),
                                        rules: [{
                                            required: true,
                                            message: '真实姓名不能为空'
                                        }, {
                                            pattern: new RegExp("^[a-zA-Z_\\u4e00-\\u9fa5]{2,15}$", "g"),
                                            message: "真实姓名必须为字母或汉字且长度为2-15"
                                        }
                                        ]
                                    }
                                    )(<Input addonBefore={"trueName:"} />)}

                            </Form.Item>
                            <Form.Item key={edit_user.get("phone")}>
                                {
                                    getFieldDecorator('phone', {
                                        // initialValue: edit_user.get("phone"),
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
                            <Form.Item key={edit_user.get("email")}>
                                {
                                    getFieldDecorator('email', {
                                        //initialValue: edit_user.get("email"),
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
                            {/* <Input style={{ marginTop: '8px' }} addonBefore={"trueName:"} value={edit_user.get("trueName")} allowClear={true} /> */}
                            {/* <Input style={{ marginTop: '8px' }} addonBefore={"phone:"} value={edit_user.get("phone")} allowClear={true} />
                            <Input style={{ marginTop: '8px' }} addonBefore={"email:"} value={edit_user.get("email")} allowClear={true} /> */}
                        </Form>
                    </Modal>
                </Content>
            </Layout>
        );
    }
};

const mapState = (state) => ({
    user_list: state.getIn(['userReducer', 'user_list']),
    modal_visible: state.getIn(['userReducer', 'modal_visible']),
    edit_user: state.getIn(['userReducer', 'edit_user'])
});
const mapDispatcher = (dispatch) => ({
    edituser(new_edit_user) {
        dispatch(actinCreators.edituser(new_edit_user));
    },
    deleteuser(userid) {
        dispatch(actinCreators.deleteuser(userid));
    },
    showModal(text) {
        dispatch(actinCreators.showModal(text));
    },
    handleCancel() {
        dispatch(actinCreators.hidden_modal());
    },
    getUser_List(){
        dispatch(actinCreators.getUserList());
    }
});
const User = Form.create()(User1);
export default connect(mapState, mapDispatcher)(User);