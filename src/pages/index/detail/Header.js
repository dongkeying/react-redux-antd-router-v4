import React,{Component} from 'react';
import {withRouter} from 'react-router-dom';

class Header extends Component {
    constructor({match}) {
        super()
        this.state = {

        }
        this.url = match.url;
    }
    goBack(){
        this.props.history.goBack();
    }

    render() {
        return ( 
            <div className="header">
                <span className="ico" onClick={this.goBack.bind(this)}>
                    <i className="iconfont">&#xe501;</i>
                </span>
                {
                    this.url === '/detail' ? (
                        <div>
                            <h3>商品详情</h3>
                            <span className="ico" onClick={this.props.gotoCart.bind(this)}>
                                <i className="iconfont">&#xe60c;</i>
                            </span>
                        </div>
                    ) : <h3>购物车</h3>
                }
                <span className="ico">
                    <i className="iconfont">&#xe6b8;</i>
                </span>
            </div>  
        )
    }
}
export default withRouter(Header);