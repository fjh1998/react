import React, { PureComponent, Fragment } from 'react';
import { Layout, Button, Input } from 'antd';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import './style.css';
import {actinCreators} from './store';
import {Link} from 'react-router-dom';
import {actinCreators as loginactionCreators} from '../login/store'

const { Header } = Layout;
const { Search } = Input;
class Head extends PureComponent {
    render() {
        const { mouseIn,focuse,blur,isLogin} = this.props;
return (
            isLogin?(<Header className="header headerwapper" >
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
                <Link to="/login">
                <Button style={{ float: 'right', margin: '18px 18px' }} onClick={()=>loginactionCreators.LogOut()}>注销</Button>
                </Link>
            </Header>):(<Fragment></Fragment>)
        )
}
}

const mapState = (state) => ({
    mouseIn: state.getIn(['headReducer', 'mouseIn']),
    isLogin: state.getIn(["loginReducer", "isLogin"])
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