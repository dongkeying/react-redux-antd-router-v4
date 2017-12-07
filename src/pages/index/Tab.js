import React,{Component} from 'react'
import {Tabs} from 'antd';
import 'antd/lib/tabs/style/css';
import MostNew from './TabNews';

const TabPane = Tabs.TabPane;
function callback(key) {
    console.log(key);
}
class Tab extends Component {
    constructor(props){
        super(props);
        this.styleObj = {
            "color" : '#000',
            "fontWeight" : 'bold',
            "textAlign" : 'center'
        }
    }
    render() {
        return ( 
            <div className="tab-wrap">
                <Tabs 
                defaultActiveKey="1" 
                tabBarStyle={this.styleObj}
                onChange={callback}
                >
                    <TabPane tab="最新" key="1">
                        <MostNew></MostNew>
                    </TabPane>
                    <TabPane tab="热推" key="2">
                        <MostNew></MostNew>
                    </TabPane>
                    <TabPane tab="专题" key="3">
                        <MostNew></MostNew>
                    </TabPane>
                </Tabs>
            </div>  
        )
    }
}
export default Tab;