import React,{Component} from 'react';
import {connect} from 'react-redux';

import Header from './Header';
import Footer from './FooterCart';
import { List, Checkbox } from 'antd-mobile';
import {calcPrice} from '../../../redux/actions/index';

const CheckboxItem = Checkbox.CheckboxItem;

class Cart extends Component {
    constructor(){
        super();
        this.state = {
            allChecked : false,
            allPrice : 0
        }
    }
    onChange = (val) => {
        if(val){ // 点击单个商品
            console.log(val);
            this.setState((prevState) => {
                return {
                    allChecked: false
                }
            })
        }else{  //val是undefined 表明用户点击了全选按钮
            if (this.props.dataList.length > 0){
                let totalData = this.props.dataList.reduce((prev,next) => {
                    //使用reduce累加结果:  注意state中存储的价格是   $234这样的格式,所以需要去除空格,减掉$符号
                    return {
                        totalPrice: prev.totalPrice + next.count * next.minPrice.trim().slice(1).trim(),
                        totalCount: prev.totalCount + next.count
                    }
                }, { totalCount: 0, totalPrice:0})
                this.props.calcTotalPrice(totalData);
                this.setState((prevState) => {
                    return {
                        allChecked : !prevState.allChecked
                    }
                })
            }else{
                alert('先去挑选喜欢的产品吧');
            }
        }
    }
    render() {
        return ( 
            <div className="cart-wrap-detail">
                <Header></Header>
                <div className="cart-list">
                {
                    this.props.dataList.length === 0 ? (
                        "购物车空空如也~"
                    ) : 
                    <List>
                        {this.props.dataList.map(item => (
                            <CheckboxItem 
                                key={item.id} 
                                checked={this.state.allChecked}
                                onChange={() => this.onChange(item)}
                            >
                            <div className="img-parent">
                                    <img src={item.imgUrl} alt=""/>
                                <div className="cart-right">
                                    <h4>{item.title}</h4>
                                    <p className="userful">有效期: 180天</p>
                                    <p className="class-price">
                                        <span>{item.minPrice}</span>
                                        <i>X{item.count}</i>
                                    </p>
                                </div>
                            </div>
                            </CheckboxItem>
                        ))}
                    </List>
                }
                </div>
                <Footer onActive={() => this.onChange.call(this)}></Footer>
            </div>  
        )
    }
}
export default connect(
    (state) => {
        return {
            dataList: state.getVisibleProducts
        }
    },
    (dispatch) => {
        return {
            calcTotalPrice: (data) => {
                calcPrice(dispatch,data);
            }
        }
    }
)(Cart);