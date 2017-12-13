import React,{Component} from 'react';
import {withRouter} from 'react-router-dom';
import axios from 'axios';

class Regis extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
        this.textPassword ="";        
        this.textUsername = "";
        this.textMess = "";       
        this.gotoLog = this.gotoLog.bind(this);
        this.goBack = this.goBack.bind(this);
        this.signUp = this.signUp.bind(this);
    }
    gotoLog(){
        this.props.history.push('/main/mine');
    }
    goBack(){
        this.props.history.goBack();
    }
    //注册
    signUp(){
        //收集用户数据
        const username = this.textUsername.value;
        const message = this.textMess.value;
        const password = this.textPassword.value;
       
        axios.post('/api/users/signUp',{
            username,
            message,
            password
        })
        .then((res) => {
            if(res.data.success){
                //注册成功
                this.props.history.push('/main/mine');
            }else{  //注册失败
                console.log('用户名已经被注册,请直接登录~');
            }
        })
    }
    render() {
        return ( 
            <div className="login-in">
                <header>
                    <i className="iconfont" onClick={this.goBack}>&#xe501;</i>
                    <h3>注册瑜伽园</h3>
                    <span onClick = {this.gotoLog}>登录</span>
                </header>
                <div className="input-login">
                    <div className="message">
                        <input type="text" ref={(input) => { this.textUsername = input; }} placeholder="请输入11位手机号" />
                    </div>
                    <div className="message">
                        <input type="text" ref={(input) => { this.textMess = input; }} placeholder="短信验证码" />
                        <span>获取</span>
                    </div>
                    <div className="message">
                        <input type="text" ref={(input) => { this.textPassword = input; }} placeholder="6-12位数字,英文或字符" />
                    </div>
                </div>
                <p className="goto-reg" onClick={this.signUp}>注册</p>
                <p className="agree">点击注册,表示同意《瑜伽园用户协议》</p>
            </div>
        )
    }
}
export default withRouter(Regis);