import React,{Component} from 'react';

import Marquee from '../../../common/marquee';
import Tab from './tabs';
// 瑜课堂
class Index extends Component {
    componentDidMount(){
        console.log(this.props.gotocart);
        // console.log(this.props.goto);
    }
    render() {
        return ( 
            <div className="class-wrap">
                <img src={require('../../../images/banner1.jpg')} alt=""/>
                <Marquee></Marquee>
                {/* 热门精选 */}
                <div className="hot-class">
                    <div className="head">
                        <span className="ico"><i className="iconfont">&#xe6a0;</i></span>
                        <div className="font">
                            <h4>热门精选</h4>
                            <p>您想要的瑜伽课程的都在这里</p>
                        </div>
                    </div>
                    <ul className="item-class2 top">
                        <li>
                            <img src={require('../../../images/banner1.jpg')} alt=""/>
                            <div className="bottom">
                                <p className="title2">高温瑜伽26式|体式瑜伽.....</p>
                                <p className="quick">极速瘦身</p>
                            </div>
                        </li>
                        <li>
                            <img src={require('../../../images/banner1.jpg')} alt=""/>
                            <div className="bottom">
                                <p className="title2">高温瑜伽26式|体式瑜伽.....</p>
                                <p className="quick">极速瘦身</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="body-class">
                    <Tab></Tab>
                </div>
            </div>  
        )
    }
}
export default Index;