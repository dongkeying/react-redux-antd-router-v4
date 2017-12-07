import React,{Component} from 'react';
import Slick from '../pages/index/Slick';

import Banner from '../pages/index/Banner';
import Logo from '../pages/index/Logo';
import Tab from '../pages/index/Tab';
import Teacher from '../pages/index/Teacher';
import Marquee from '../common/marquee';

//redux
import {connect} from 'react-redux';
import * as actions from '../redux/actions';
import store from '../redux/store';

class Index extends Component {
    goto(){
        this.props.history.push("/cart");
    }
    render() {
        return ( 
            <div className="index-wrap">
                {/* 消息滚动提醒 */}
                <Marquee></Marquee>
                {/* 轮播图 */}
                <div className="banner">
                    <Banner></Banner>
                </div>
                {/* logo部分 */}
                <div className="logo">
                    <Logo></Logo>
                </div>
                {/* Tab切换 */}
                <div className="tab">
                    <Tab></Tab>
                </div>
                {/* 热门推荐 */}
                <div className="hot-recom">
                    <div className="great">
                        <span><i className="iconfont">&#xe6a0;</i></span>
                        <h4 onClick={this.goto.bind(this)}>热门推荐</h4>
                    </div>
                    {/* 点击滑动效果 */}
                    <Slick></Slick>
                </div>
                {/* 瑜伽老师 */}
                <div className="teacher">
                    <div className="header common">
                        <h4>瑜伽仕</h4>
                        <span className="more">更多<i className="iconfont">&#xe605;</i></span>
                    </div>
                    <div className="content">
                        <Teacher></Teacher>
                    </div>
                </div>
            </div>  
        )
    }
    componentDidMount(){
        console.log(store.getState());
    }
}

function mapStateToProps(state) {
    return {
        a : state.a
    }
}
function mapDispatchToProps(dispatch) {
    return {
        // setA : () => {
        //     dispatch(actions.addTodo('aaaa'));
        // }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Index);