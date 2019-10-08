import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Layout, Menu, Icon } from 'antd';
import { actinCreators } from './store';

const { Content } = Layout;
class Product_Out_Record extends PureComponent {

    render() {
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
                    Product_Out_Record
          </Content>

            </Layout>
        );
    }
};

const mapState = (state) => ({

});
const mapDispatcher = (dispatch) => ({

});
export default connect(mapState, mapDispatcher)(Product_Out_Record);