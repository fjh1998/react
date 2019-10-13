import React, { PureComponent } from 'react';
import { Layout, Button, Input } from 'antd';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import './style.css';
import {actinCreators} from './store'

const { Header } = Layout;
const { Search } = Input;
class Head extends PureComponent {
    render() {
        const { mouseIn,focuse,blur} = this.props;
        return (
            <Header className="header headerwapper" >
                <CSSTransition
                    timeout={100}
                    in={mouseIn}
                    classNames='searchtrans'
                >
                    <Search
                        allowClear={true}
                        style={{ marginLeft: '100px',float:'left',margin:'18px 18px'}}
                        className={mouseIn ? 'search foucuse ' : 'search'}
                        placeholder="input search text"
                        onFocus={focuse}
                        onSearch={value => console.log(value)}
                        onBlur={blur}
                    />
                </CSSTransition>
                <p className="welcome">Welcome to the warehouse management system wms</p>
                <Button style={{ float: 'right', margin: '18px 18px' }}>登录</Button>
            </Header>
        )
    }
}

const mapState = (state) => ({
    mouseIn: state.getIn(['headReducer', 'mouseIn'])
});
const mapDispatch = (dispatch) => {
    return {
        focuse() {
            dispatch(actinCreators.focuse());
        },
        blur(){
            dispatch(actinCreators.blur());
        }

    }
}
export default connect(mapState, mapDispatch)(Head);