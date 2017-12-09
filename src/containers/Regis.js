import React,{Component} from 'react';
import {withRouter} from 'react-router-dom';

class Regis extends Component {
    constructor(props) {
        super(props);
        this.state = {
            textPassword : "",
            textUsername : "",
            textMess : ""
        }
        this.gotoLog = this.gotoLog.bind(this);
        this.goBack = this.goBack.bind(this);
    }
    gotoLog(){
        this.props.history.push('/main/mine');
    }
    goBack(){
        this.props.history.goBack();
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
                <p className="goto-reg">注册</p>
                <p className="agree">点击注册,表示同意《瑜伽园用户协议》</p>
            </div>
        )
    }
}
export default withRouter(Regis);