import React,{Component} from 'react';
import {withRouter} from 'react-router-dom';
import axios from 'axios';

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            password : ""
        }
        this.textInput = "";
        this.gotoRegis = this.gotoRegis.bind(this);
        this.gotoLogin = this.gotoLogin.bind(this);
        this.valueChange = this.valueChange.bind(this);
    }
    gotoRegis(){
        //跳转注册页面
        this.props.history.push('/register');
    }
    gotoLogin(){
        //登录验证
        let username = this.textInput.value;
        let password = this.state.password;

        axios({
            method : "post",
            url : "/api/users/signIn",
            data : {
                username,
                password
            }
        }).then((result) => {
            if(result.data.success){
                this.props.history.push('/main');
                console.log('登陆成功');
            }else{
                console.log('用户名或者密码不正确');
            }
        })
    }
    valueChange(e){
        //获取密码
        this.setState({
            password:e.target.value
        })
    }
    render() {
        return ( 
            <div className="login-entry">
                <h3>登录瑜伽园</h3>
                <div className="login">
                    <input type="text" ref={(input) => { this.textInput = input;}} placeholder="已注册的手机号" />
                    <input type="text" value={this.state.password} onChange={this.valueChange} placeholder="6-12位登录密码" />
                </div>
                <div className="button">
                    <span className="register" onClick={this.gotoRegis}>立即注册</span>
                    <span className="forget">忘记密码?</span>
                </div>
                <h4 className="loginup" onClick={this.gotoLogin}>登录</h4>
            </div>  
        )
    }
}
export default withRouter(Login);