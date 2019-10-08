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
            <Header className="header" >
                <CSSTransition
                    timeout={100}
                    in={mouseIn}
                    className='searchtrans'
                >
                    <Search
                        style={{ marginLeft: '100px', width: '160px' }}
                        className={mouseIn ? 'foucuse search' : 'search'}
                        placeholder="input search text"
                        onFocus={focuse}
                        onSearch={value => console.log(value)}
                        onBlur={blur}
                    />
                </CSSTransition>
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