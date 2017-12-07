import React,{Component} from 'react';
import { List, Checkbox } from 'antd-mobile';

const CheckboxItem = Checkbox.CheckboxItem;
class Footer extends Component {
    render() {
        return ( 
            <div className="footer-cart">
                <CheckboxItem onChange={this.props.onChange}>
                    <div className="goto-buy">
                        <h3>全选</h3>
                        <p>
                            <i>$0</i>
                            <a href={"javascript:;"}>
                            结算
                            (<span>0</span>)
                            </a>
                        </p>
                    </div>
                </CheckboxItem>
            </div>  
        )
    }
}
export default Footer;