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
            arrCheckedId : [],
            isChecked:false,
            allPrice : 0
        }
    }
    onChange = (val) => {
        if(val){ // 点击单个商品
            //存储id数组
            let arrId = this.state.arrCheckedId;
            if (arrId.includes(val.id)){  //取消选中
                //删除指定id为val.id的一项
                let index = arrId.indexOf(val.id);
                arrId.splice(index,1); 
                this.setState({
                    isChecked:false
                }) 
            }else{ // 选中
                arrId.push(val.id);
                if(arrId.length === this.props.dataList.length){
                    this.setState({
                        isChecked: true
                    }) 
                }
            }
            this.setState({
                arrCheckedId: arrId
            })
        }else{  //val是undefined 表明用户点击了全选按钮
            // this.props.dataList.length表示Store中存储的购物车信息
            if (this.props.dataList.length > 0){
                if (this.state.isChecked){  //取消全选,价格清空
                    this.props.calcTotalPrice({
                        totalPrice:0,
                        totalCount:0
                    });
                    this.setState({
                        isChecked: false
                    })
                }else{  //全选,计算价格
                    let totalData = this.props.dataList.reduce((prev,next) => {
                        //使用reduce累加结果:  注意state中存储的价格是   $234这样的格式,所以需要去除空格,减掉$符号
                        return {
                            totalPrice: prev.totalPrice + next.count * next.minPrice.trim().slice(1).trim(),
                            totalCount: prev.totalCount + next.count
                        }
                    }, { totalCount: 0, totalPrice:0})
                    this.props.calcTotalPrice(totalData);
                    this.setState({
                        isChecked : true
                    })
                }
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
                                checked={this.state.arrCheckedId.includes(item.id)}
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
                <Footer 
                Checked={this.state.isChecked}
                onActive={() => this.onChange.call(this)}></Footer>
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