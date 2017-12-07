import React,{Component} from 'react';
import { Tabs, ActivityIndicator } from 'antd-mobile';
import { withRouter } from "react-router-dom";

const tabs = [
    { title: '名师讲堂' },
    { title: '训练计划' }
];

class Tab extends Component {
    componentWillUnmount() {
        clearTimeout(this.closeTimer);
    }
    componentDidMount(){
        fetch('/vip/class')
            .then((res) => res.json())
            .then((data) => {
                this.setState({
                    dataList : data,
                    animating : false
                })
            })
    }
    constructor(){
        super();
        this.state = {
            animating: true,
            dataList : []
        }
    }
    gotoDetail(item){
        this.props.history.push({ pathname: '/detail',state:{item}});
    }
    render() {
        return ( 
            <div>
                <Tabs 
                    tabs={tabs} 
                    initialPage={0} 
                    animated={false} 
                    useOnPan={false}
                    tabBarUnderlineStyle={{ borderColor:"#81c868"}}
                    tabBarActiveTextColor={"#81c868"}
                    >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
                        <ActivityIndicator 
                            animating={this.state.animating} 
                            color={"#4dc060"}
                            />
                        {
                            <ul className="item-class2 bot">
                                {
                                    this.state.dataList.map((item,index) => {
                                        return (
                                             <li onClick={this.gotoDetail.bind(this,item)} key={encodeURI(item.imgUrl)}>
                                                <img src={item.imgUrl} alt="" />
                                                <div className="bottom">
                                                    <p className="title2">{item.title}</p>
                                                    <p className="del">{item.maxPrice}</p>
                                                    <p className="min-price">
                                                        <span className="color">{item.minPrice}<i className="iconfont">&#xe501;</i></span>
                                                        <i className="iconfont">&#xe60c;</i>
                                                    </p>
                                                </div>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        }
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
                        Content of second tab      
                    </div>
                </Tabs>
            </div>
        )
    }
}
export default withRouter(Tab);