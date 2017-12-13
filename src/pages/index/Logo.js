import React,{Component} from 'react'
import { withRouter } from 'react-router-dom';

class Logo extends Component {
    constructor(props){
        super(props);
        this.state = {
            dataList : []
        }
    }
    gotoClass(route){
        this.props.history.push("/main/class");
    }
    render() {
        return (
            <ul className="logo-item">                    
                {
                    this.state.dataList.map((item) => 
                        <li key={encodeURI(item.title)} onClick={this.gotoClass.bind(this,item.route)}>
                            <p style={{"background":item.color}}>
                                <i className="iconfont" dangerouslySetInnerHTML={{__html:item.logo}}></i>
                            </p>
                            <h6>{item.title}</h6>
                        </li>
                    )
                }
            </ul>
        )
    }
    componentDidMount(){
        fetch('/vip/logo')
            .then((res) => res.json())
            .then((result) => {
                this.setState({
                    dataList : result
                })
            })
            .catch((err) => {
                console.log('err ' + err);
            })
    }
}
export default withRouter(Logo);