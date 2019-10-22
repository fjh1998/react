import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import {connect} from 'react-redux';

// 这个组件将根据登录的情况, 返回一个路由
const PrivateRoute = ({component: Component, ...props}) => {
    // 解构赋值 将 props 里面的 component 赋值给 Component
    // const {login}=this.props;
    return <Route {...props} render={(p) => {
        const login = props.login;
        console.log(props.login);
        if (login){ // 如果登录了, 返回正确的路由
            return <Component />
        } else { // 没有登录就重定向至登录页面
            alert("你还没有登录哦, 确认将跳转登录界面进行登录!");
            return <Redirect to={{
                pathname: '/login',
                state: {
                    from: p.location.pathname
                }
            }}/>
        }
    }}/>
}
const mapState=(state)=>({
    login:state.getIn(["loginReducer","isLogin"])
});
const mapDispatcher=(dispatch)=>({

})
export default connect(mapState,mapDispatcher)(PrivateRoute);