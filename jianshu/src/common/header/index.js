import React, { PureComponent } from 'react';
import { SeacherInfoList, SeacherInfoItem, SeacherInfoSwith, SeacherInfoTitle, SeacherInfo, SeachWrapper, HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button } from './style'
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import {Link} from 'react-router-dom';
 
class Header extends PureComponent {
    getListArea = ()=> {
        const { handelChangePage,totalPage,focused,list,page,mousein,mouseIn,mouseLeave}=this.props;
        const pageList=[];
        const newList=list.toJS();
        if(newList.length){
        for(let i=((page-1)*10);i<page*10;i++){
            pageList.push(
                <SeacherInfoItem key={newList[i]}>{newList[i]}</SeacherInfoItem>
            )
        }
    }
        if (focused || mousein) {
            return (
            <SeacherInfo onMouseEnter={mouseIn}
            onMouseLeave={mouseLeave}>
                <SeacherInfoTitle>
                    热门搜索
                    <SeacherInfoSwith onClick={()=>handelChangePage(page,totalPage,this.spinIcon)}>
                        <i ref={(icon)=>{this.spinIcon=icon}} className="iconfont spin">&#xe606;</i>
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
        const { focused,handelinputblur,handelinputfocus,list}=this.props;
        return (
            <HeaderWrapper>
                <Link to='/'>
                <Logo />
                </Link>
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
                                onFocus={()=>handelinputfocus(list)}
                                onBlur={handelinputblur}
                                className={focused ? 'focused' : ''}
                            ></NavSearch>
                        </CSSTransition>
                        <i className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe631;</i>
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
        mousein:state.getIn(['header','mousein']),
        totalPage:state.getIn(['header','totalPage'])
        // state.get('header').get('focused')
    }
}
const mapDispathToProps = (dispatch) => {
    return {
        handelinputfocus(list) {
            if(list.size===0)
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
        },
        handelChangePage(page,totalPage,spin){
            let originAngle=spin.style.transform.replace(/[^0-9]/ig,'');
            if(originAngle){
                originAngle=parseInt(originAngle,10);
            }else{
                originAngle=0;
            }
            spin.style.transform='rotate('+(originAngle+360)+'deg)';
               if(page<totalPage){
                   dispatch(actionCreators.changePage(page+1));
               }else{
                dispatch(actionCreators.changePage(1));
               }
        }
    }
}
export default connect(mapStateToProps, mapDispathToProps)(Header);