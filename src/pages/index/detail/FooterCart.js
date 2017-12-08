import React,{Component} from 'react';
import {connect} from 'react-redux';
import { Checkbox } from 'antd-mobile';

const CheckboxItem = Checkbox.CheckboxItem;
class Footer extends Component {
    render() {
        return ( 
            <div className="footer-cart">
                <CheckboxItem onChange={this.props.onActive}>
                    <div className="goto-buy">
                        <h3>全选</h3>
                        <p>
                            <i>${this.props.data ? this.props.data.totalPrice : 0}</i>
                            <a href={"javascript:;"}>
                            结算
                            (<span>{this.props.data ? this.props.data.totalCount : 0}</span>)
                            </a>
                        </p>
                    </div>
                </CheckboxItem>
            </div>  
        )
    }
}
export default connect(
    (state) => {
        return {
            data: state.calcTotalPrice.data
        }
    }
)(Footer);