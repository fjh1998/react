import React from 'react';
import { Layout, Form, Input } from 'antd';
import { actinCreators } from './store';
import { connect } from 'react-redux';
import FormItem from 'antd/lib/form/FormItem';


class Login1 extends React.Component {

    //  jumpBack=()=>{
    //      const { isLogin,location } = this.props;
    //     if(isLogin){
    //     console.log({location});
    //     const from = location.state && location.state.from;
    //     this.props.history.push({
    //         pathname: from
    //     })}
    // };
    componentDidUpdate() {
        const { isLogin, location } = this.props;
        if (isLogin) {
            // console.log({ location });
            // const from = location.state && location.state.from;
            this.props.history.push({
                pathname: "/"
            })
        }
    }
    render() {
        const { isLogin, handleClick } = this.props;
        const { getFieldDecorator } = this.props.form;
        // this.jumpBack();
        return (
            <Layout>
                <FormItem label="用户名:">{
                    getFieldDecorator('userName', {
                        rules: [{
                            required: true,
                            message: '名称不能为空'
                        }, {
                            pattern: new RegExp("^[a-zA-Z_\\u4e00-\\u9fa5]{2,15}$", "g"),
                            message: '名称必须为字母或者汉字且长度为2-15'
                        }
                        ]
                    }
                    )(<Input style={{ "width": "400px" }} />)}
                </FormItem>
                <FormItem label="密码:">{
                    getFieldDecorator('password', {
                        rules: [{
                            required: true,
                            message: '密码不能为空'
                        }, {
                            pattern: new RegExp("^[a-zA-Z1-9]{6,12}$", "g"),
                            message: '密码必须为字母或者汉字且长度为6-12'
                        }
                        ]
                    }
                    )(<Input type="password" style={{ "width": "400px" }} />)}
                </FormItem>
                <div className={'login'}>
                    <button className={'login-btn'}
                        onClick={() => {
                            const user = this.props.form.getFieldsValue();
                            handleClick(user);
                        }}>
                        登录
                    </button>
                </div>
            </Layout>
        );
    }
}
const mapState = (state) => ({
    isLogin: state.getIn(["loginReducer", "isLogin"])
});

const mapDispatcher = (dispatch) => ({
    // jumpBack() {
    //     const { location } = this.props;
    //     const from = location.state && location.state.from;
    //     this.props.history.push({
    //         pathname: from
    //     })
    // },
    handleClick(user) {
        console.log(user);
        dispatch(actinCreators.logIn(user));
        //     const { location } = this.props;
        // const from = location.state && location.state.from;
        // this.props.history.push({
        //     pathname: from
        // })
    }
});

const Login = Form.create()(Login1);
export default connect(mapState, mapDispatcher)(Login);

