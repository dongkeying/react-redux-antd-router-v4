import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';

class Footer extends Component {
    render() {
        return ( 
            <ul className="footer">
                <li>
                    <i className="iconfont">&#xe6d9;</i>
                    <NavLink exact to="/main" activeStyle={{ color: '#4dc060' }}>首页</NavLink>
                </li>
                <li>
                    <i className="iconfont">&#xe629;</i>
                    <NavLink to="/main/news" activeStyle={{ color: '#4dc060' }}>资讯</NavLink>
                </li>
                <li>
                    <i className="iconfont">&#xe63f;</i>
                    <NavLink to="/main/course" activeStyle={{ color: '#4dc060' }}>课程</NavLink>
                </li>
                <li>
                    <i className="iconfont">&#xe6b8;</i>
                    <NavLink to="/main/mine" activeStyle={{ color: '#4dc060' }}>我的</NavLink>
                </li>
            </ul>
        )
    }
}
export default Footer;