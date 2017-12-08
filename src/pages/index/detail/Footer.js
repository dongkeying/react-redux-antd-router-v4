import React,{Component} from 'react'
class Footer extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return ( 
            <div className="footer">
                <p className="ques">
                    <i className="iconfont">&#xe627;</i>
                    <span>咨询</span>
                </p>
                <p className="ques">
                    <i className="iconfont">&#xe632;</i>
                    <span>收藏</span>
                </p>
                <p className="add-cart" onClick={this.props.addCart}>加入购物车</p>
                <p className="buy">立即购买</p>
            </div>
        )
    }
}
export default Footer;