import React,{Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
// import { Toast, WhiteSpace, WingBlank, Button } from 'antd-mobile';
// import  getVisibleProducts from '../../../redux/reducers/index';
import { addToCart } from '../../../redux/actions/index';
// import * as ACTIONS_TYPES  from '../../../redux/actions/action_types';
import Header from "./Header";
import Footer from "./Footer";

class Cart extends Component {
    constructor() {
        super()
        this.state = {
            dataItem: {
                "id" : "45346576875",
                "imgUrl": "http://www.yujia.com/Public/attached/image/20170527/20170527161020_499349.jpg",
                "title": "\n                                     瑜课堂丨超值VIP至尊视频年卡                                ",
                "maxPrice": "￥7284",
                "minPrice": "\n                                        ￥\n                                        3588                                        \n                                    "
            }
        }
    }
    componentWillMount(){
        if (this.props.location.state){
            this.setState({
                dataItem: this.props.location.state.item
            })
        }
    }
    addGood(item){
        let state = this.props.cart;
        if (state.length > 0){
            const flag = state.filter((ele) => {
                return item.id === ele.id;
            })
            if(flag.length >0) {  //商品已经出现过
                flag[0].count++;
            }else{
                item.count = 1;
                this.props.addCart(item);
            }
        }else{
            item.count = 1;
            this.props.addCart(item);
        }
    }
    //跳转页面
    gotoCart(){
        console.log('jump');
        this.props.history.push('/cart');
    }
    render() {
        return ( 
            <div className="cart-wrap">
                <Header gotoCart = {this.gotoCart.bind(this)}></Header>
                <div className="content">
                    <img src={this.state.dataItem.imgUrl} alt={this.state.dataItem.title} />
                    <h2>{this.state.dataItem.title}</h2>
                    <div className="class-detail">
                        <p className="study">
                            学习价: 
                            <strong>{this.state.dataItem.minPrice}</strong>
                            <span>{this.state.dataItem.maxPrice}</span>
                        </p>
                        <p className="time">时长:<strong>精选思课</strong></p>
                        <p className="time">有效期:<strong>365天</strong></p>
                    </div>
                    <div className="coupon">
                        <p className="get">
                            <i className="iconfont">&#xe63f;</i>
                            <span>领取优惠券</span>
                        </p>
                        <p className="comment">
                            <i className="iconfont">&#xe629;</i>
                            <span>商品评价</span>
                        </p>
                    </div>
                </div>
                <Footer addCart={() => { this.addGood(this.state.dataItem)}} ></Footer>
                {/* <WingBlank>
                    <Button onClick={successToast}>success</Button>
                </WingBlank> */}
            </div>
        )
    }
}
export default withRouter(connect(
    (state) => {
        // console.log(state.getVisibleProducts);  reducer函数的,相当于state是一个大的对象,里面是每一个reducer方法
        return {
            cart: state.getVisibleProducts
        }
    },
    (dispatch) => {
        return {
            addCart: (item) => {
                addToCart(dispatch, item);
            }
        }        
    }
)(Cart));