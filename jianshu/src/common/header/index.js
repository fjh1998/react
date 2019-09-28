import React from 'react';
import {SeacherInfoList,SeacherInfoItem,SeacherInfoSwith,SeacherInfoTitle, SeacherInfo,SeachWrapper, HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button } from './style'
import { CSSTransition } from 'react-transition-group';
import {connect} from 'react-redux';
import {actionCreators} from './store';

const getListArea=(show)=>{
    if(show){
        return (                        <SeacherInfo>
            <SeacherInfoTitle>
                热门搜索
                <SeacherInfoSwith>
                    换一换
                </SeacherInfoSwith>
            </SeacherInfoTitle>
            <SeacherInfoList>
                <SeacherInfoItem>教育</SeacherInfoItem>
                <SeacherInfoItem>教育</SeacherInfoItem>
                <SeacherInfoItem>教育</SeacherInfoItem>
                <SeacherInfoItem>教育</SeacherInfoItem>
                <SeacherInfoItem>教育</SeacherInfoItem>
                <SeacherInfoItem>教育</SeacherInfoItem>
                <SeacherInfoItem>教育</SeacherInfoItem>
                <SeacherInfoItem>教育</SeacherInfoItem>
                <SeacherInfoItem>教育</SeacherInfoItem>
            </SeacherInfoList>
        </SeacherInfo>);
    }else{

    }
}
const Header=(props)=>{
    return(
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
                            in={props.focused}
                            timeout={200}
                            classNames="slide"
                        >
                            <NavSearch
                                onFocus={props.handelinputfocus}
                                onBlur={props.handelinputblur}
                                className={props.focused ? 'focused' : ''}
                            ></NavSearch>
                        </CSSTransition>
                        <i className={props.focused ? 'focused iconfont' : 'iconfont'}>&#xe631;</i>
                    {getListArea(props.focused)}
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

const mapStateToProps=(state)=>{
    return{
        focused : state.getIn(['header','focused'])
        // state.get('header').get('focused')
    }
}
const mapDispathToProps=(dispatch)=>{
    return{
    handelinputfocus() {
        dispatch(actionCreators.searchFocus());
    },
    handelinputblur() {
        dispatch(actionCreators.searchBlur());
    }
    }
}
export default connect(mapStateToProps,mapDispathToProps)(Header);