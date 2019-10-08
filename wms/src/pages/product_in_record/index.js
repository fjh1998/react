import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Layout, Menu, Icon } from 'antd';
import { actinCreators } from './store';

const { Content } = Layout;
class Product_In_record extends PureComponent {

    render() {
        return (
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        background: '#fff',
                        minHeight: 280,
                    }}
                >
                    product_in_record
          </Content> 
        );
    }
};

const mapState = (state) => ({

});
const mapDispatcher = (dispatch) => ({

});
export default connect(mapState, mapDispatcher)(Product_In_record);