import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Layout, Table} from 'antd';
import { actinCreators } from './store';

const { Content } = Layout;
class In_Out_Record extends PureComponent {
    componentDidMount() {
        this.props.getIn_Out_Record_List();
    };
    render() {
        const { product_list, column} = this.props;
        const newlist = product_list.toJS();
        const newcolumn = column.toJS();
        const action = {
            title: "操作",
            key: "action",
            render: text => (
                <span>
                    {/* <a onClick={() => deletecustomer(text.id)}>删除</a> */}
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
                </Content>
            </Layout>
        );
    }
};

const mapState = (state) => ({
    product_list: state.getIn(['In_Out_RecordReducer', 'product_list']),
    column: state.getIn(['In_Out_RecordReducer', 'column']),
});
const mapDispatcher = (dispatch) => ({
    getIn_Out_Record_List() {
        dispatch(actinCreators.getIn_Out_RecordList());
    }

});

export default connect(mapState, mapDispatcher)(In_Out_Record);