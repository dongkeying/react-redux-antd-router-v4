import React,{Component} from 'react';
import {connect} from 'react-redux';

import Header from './Header';
import Footer from './FooterCart';
import { List, Checkbox } from 'antd-mobile';

const CheckboxItem = Checkbox.CheckboxItem;

class Cart extends Component {
    onChange = (val) => {
        console.log('checked');
        console.log(val);
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
                            <CheckboxItem key={item.id} onChange={() => this.onChange(item)}>
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
                <Footer onActive={() => this.onChange()}></Footer>
            </div>  
        )
    }
}
export default connect(
    (state) => {
        console.log(state.getVisibleProducts);
        return {
            dataList: state.getVisibleProducts
        }
    }
)(Cart);