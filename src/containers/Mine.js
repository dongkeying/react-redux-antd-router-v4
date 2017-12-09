import React, { Component } from 'react';
import Login from './Login';

class Mine extends Component {
    constructor(){
        super()
        this.state = {
            isLogin : false
        }
    }
    render() {
        return (
            <div className="mine-wrap">
            {
                this.state.isLogin ? (
                    <div className="isLogin">
                        {/* 头部个人信息 */}
                        <div className="head">
                            <div className="center">
                                <img src={require("../images/userImg.png")} alt=""/>
                                <div>
                                    <h4>username</h4>
                                    <h5><i className="iconfont">&#xe627;</i>***</h5>
                                </div>
                                <i className="iconfont">&#xe501;</i>
                            </div>
                        </div>
                        {/* 优惠券区域 */}
                        <div className="tickets">
                            <div className="ticket">
                                <span>0 张</span>
                                <h6>优惠券</h6>
                            </div>
                            <div className="score">
                                <span>13 分</span>
                                <h6>积分</h6>
                            </div>
                        </div>
                        {/* 订单信息 */}
                        <div className="item">
                            <div className="yearcard">
                                <div className="yearitem">
                                    <i className="iconfont">&#xe63f;</i>
                                    <h3>我的年卡会员</h3>
                                    <span>未开通<i className="iconfont">&#xe501;</i></span>
                                </div>
                            </div>
                            <div className="yearcard">
                                <div className="yearitem">
                                    <i className="iconfont">&#xe632;</i>
                                    <h3>已收藏</h3>
                                    <span><i className="iconfont">&#xe501;</i></span>
                                </div>
                                <div className="yearitem">
                                    <i className="iconfont">&#xe667;</i>
                                    <h3>已购课程</h3>
                                    <span>共0部<i className="iconfont">&#xe501;</i></span>
                                </div>
                            </div>
                            <div className="yearcard">
                                <div className="yearitem">
                                    <i className="iconfont">&#xe746;</i>
                                    <h3>我的订单</h3>
                                    <span><i className="iconfont">&#xe501;</i></span>
                                </div>
                                <div className="yearitem">
                                    <i className="iconfont">&#xe60c;</i>
                                    <h3>购物车</h3>
                                    <span>更多好物在这里<i className="iconfont">&#xe501;</i></span>
                                </div>
                            </div>
                            {/* 退出登录 */}
                            <div className="logout">
                                退出登录
                            </div>
                        </div>
                    </div>
                ) : 
                (
                    <Login></Login>
                )
            }
            </div>
        )
    }
}
export default Mine;