import React,{Component} from 'react';
import {NavLink, withRouter} from 'react-router-dom';
class Header extends Component {
    constructor(){
        super();
        this.goto = this.goto.bind(this);
    }
    goto() {
        this.props.history.push('/search');
    }
    render() {
        return ( 
            <header className="title">
                <h3>瑜伽园</h3>
                <ul className="info">
                    <li onClick={this.goto}>
                        <i className="iconfont">&#xe6ac;</i>
                    </li>
                    <li>
                        <i className="iconfont">&#xe621;</i>
                    </li>
                    <li>
                        <NavLink to="/mine" activeStyle={{ color: '#4dc060' }}><i className="iconfont">&#xe70b;</i></NavLink>
                    </li>
                </ul>
            </header>
        )
    }
}
export default withRouter(Header);