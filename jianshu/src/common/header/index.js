import React, { Component } from 'react';
import { SeacherInfoList, SeacherInfoItem, SeacherInfoSwith, SeacherInfoTitle, SeacherInfo, SeachWrapper, HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button } from './style'
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import {toJS} from 'immutable';
 
class Header extends Component {
    getListArea = ()=> {
        const { focused,list,page,mousein,mouseIn,mouseLeave}=this.props;
        const pageList=[];
        const newList=list.toJS();
        for(let i=((page-1)*10);i<page*10;i++){
            pageList.push(
                <SeacherInfoItem key={newList[i]}>{newList[i]}</SeacherInfoItem>
            )
        }
        if (focused || mousein) {
            return (
            <SeacherInfo onMouseEnter={mouseIn}
            onMouseLeave={mouseLeave}>
                <SeacherInfoTitle>
                    热门搜索
                    <SeacherInfoSwith>
                        换一换
                    </SeacherInfoSwith>
                </SeacherInfoTitle>
                <SeacherInfoList>
                    {pageList}
                </SeacherInfoList>
            </SeacherInfo>);
        } else {
    
        }
    }
    render() {
        const { focused,handelinputblur,handelinputfocus }=this.props;
        return (
            <HeaderWrapper>
                <Logo />
                <Nav>
                    <NavItem className="left active">首页</NavItem>
                    <NavItem className="left">下载App</NavItem>
                    <NavItem className="right">登录</NavItem>
                    <NavItem className="right">
                        <i className="iconfont">&#xe636;</i>
                    </NavItem>
                    <SeachWrapper>
                        <CSSTransition
                            in={focused}
                            timeout={200}
                            classNames="slide"
                        >
                            <NavSearch
                                onFocus={handelinputfocus}
                                onBlur={handelinputblur}
                                className={focused ? 'focused' : ''}
                            ></NavSearch>
                        </CSSTransition>
                        <i className={focused ? 'focused iconfont' : 'iconfont'}>&#xe631;</i>
                        {this.getListArea()}
                    </SeachWrapper>
                </Nav>
                <Addition>
                    <Button className="writting"><i className="iconfont">&#xe6a4;</i>写文章</Button>
                    <Button className="reg">注册</Button>
                </Addition>
                {/* <div>
                    <Link>Unstyled, boring Link</Link>
                    <br />
                    <StyledLink>Styled, exciting Link</StyledLink>
                </div>
                <div>
                    <Buttona>Normal Button</Buttona>
                    <Buttona as="a" href="/">Link with Button styles</Buttona>
                    <TomatoButton as="a" href="/">Link with Tomato Button styles</TomatoButton>
                </div> */}
            </HeaderWrapper>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        focused: state.getIn(['header', 'focused']),
        list:state.getIn(['header','list']),
        page:state.getIn(['header','page']),
        mousein:state.getIn(['header','mousein'])
        // state.get('header').get('focused')
    }
}
const mapDispathToProps = (dispatch) => {
    return {
        handelinputfocus() {
            dispatch(actionCreators.getList());
            dispatch(actionCreators.searchFocus());
        },
        handelinputblur() {
            dispatch(actionCreators.searchBlur());
        },
        mouseIn(){
               dispatch(actionCreators.mouseenter());
        },
        mouseLeave(){
               dispatch(actionCreators.mouseLeave());
        }
    }
}
export default connect(mapStateToProps, mapDispathToProps)(Header);