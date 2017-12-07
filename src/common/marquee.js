import React,{Component} from 'react'
class Marquee extends Component {
    render() {
        return ( 
            <div className="notice">
                <i className="iconfont">&#xf0016;</i>
                <div className="queen">
                    <ul>
                        <li>瑜伽暖冬行：即日起升级为瑜伽网VIP年卡的客户，赠送您价值176元《精准瑜伽解剖》书一套！数量有限快来抢购~</li>
                        <li>瑜伽暖冬行：即日起升级为瑜伽网VIP年卡的客户，赠送您价值176元《精准瑜伽解剖》书一套！数量有限快来抢购~</li>
                    </ul>
                </div>
                <i className="iconfont close">&#xe648;</i>
            </div> 
        )
    }
}
export default Marquee;