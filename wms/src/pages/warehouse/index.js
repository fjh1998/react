import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Layout, Table, Divider, Modal, Input, Form } from 'antd';
import { actinCreators } from './store';

const { Content } = Layout;
const { Column } = Table;
class WareHouse1 extends Component {
    componentDidMount(){
        this.props.getWarehouse_List();
    };
    render() {
        const { warehouse_list,column, editwarehouse, deletewarehouse, modal_visible, showModal, handleCancel, edit_warehouse} = this.props;
        const newlist = warehouse_list.toJS();
        const newcolumn=column.toJS();
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
                                    "description": text.description
                                });
                        }}>编辑</a>
                        <Divider type="vertical" />
                        <a onClick={() => deletewarehouse(text.id)}>删除</a>
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
                        title="Basic Modal"
                        visible={modal_visible}
                        onOk={() => {
                            const new_edit_warehouse = this.props.form.getFieldsValue();
                            new_edit_warehouse.id = edit_warehouse.get("id");
                            return editwarehouse(new_edit_warehouse);
                        }}
                        onCancel={handleCancel}
                    >
                        <Form>
                            <Form.Item key={edit_warehouse.get("name")}>
                                {
                                    getFieldDecorator('name', {
                                        //initialValue: edit_warehouse.get("username"),
                                        rules: [{
                                            required: true,
                                            message: '名称不能为空'
                                        }, {
                                            pattern: new RegExp('^\\w+$', 'g'),
                                            message: 'name必须为字母或者数字'
                                        }, {
                                            min: 3,
                                            max: 12,
                                            message: "长度不在范围"
                                        }
                                        ]

                                    }
                                    )(<Input addonBefore={"name:"} />)}

                            </Form.Item>
                            <Form.Item key={edit_warehouse.get("address")}>
                                {
                                    getFieldDecorator('address', {
                                        // initialValue: edit_warehouse.get("ture_name"),
                                        rules: [{
                                            required: true,
                                            message: '地址不能为空'
                                        }, {
                                            pattern: new RegExp("^[a-zA-Z_\\u4e00-\\u9fa5]{2,15}$", "g"),
                                            message: "真实姓名必须为字母或汉字且长度为2-15"
                                        }
                                        ]
                                    }
                                    )(<Input addonBefore={"address:"} />)}
                            </Form.Item>
                            <Form.Item key={edit_warehouse.get("phone")}>
                                {
                                    getFieldDecorator('description', {
                                        // initialValue: edit_warehouse.get("phone"),
                                        rules: []
                                    }
                                    )(<Input addonBefore={"description:"} />)}

                            </Form.Item> 
                        </Form>
                    </Modal>
                </Content>
            </Layout>
        );
    }
};

const mapState = (state) => ({
    warehouse_list: state.getIn(['WareHouseReducer', 'warehouse_list']),
    modal_visible: state.getIn(['WareHouseReducer', 'modal_visible']),
    edit_warehouse: state.getIn(['WareHouseReducer', 'edit_warehouse']),
    column: state.getIn(['WareHouseReducer', 'column'])
});
const mapDispatcher = (dispatch) => ({
    editwarehouse(new_edit_warehouse) {
        console.log(new_edit_warehouse);
        dispatch(actinCreators.editwarehouse(new_edit_warehouse));
    },
    deletewarehouse(warehouseid) {
        dispatch(actinCreators.deletewarehouse(warehouseid));
    },
    showModal(text) {
        dispatch(actinCreators.showModal(text));
    },
    handleCancel() {
        dispatch(actinCreators.hidden_modal());
    },
    getWarehouse_List(){
        dispatch(actinCreators.getUserList());
    }
});
const WareHouse = Form.create()(WareHouse1);
export default connect(mapState, mapDispatcher)(WareHouse);