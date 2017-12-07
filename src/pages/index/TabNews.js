import React,{Component} from 'react'

class TabNews extends Component {
    constructor(props){
        super(props);
        this.state = {
            dataList : []
        }
    }
    render() {
        return ( 
            <div className="tab-wrap">
            {
                this.state.dataList.map((item) => 
                    <div className="tab-item" key={item.object.data.id}>
                        <img src={item.object.data.list_image_url} alt=""/>
                        <div className="tab-right">
                            <p className="content">
                                <span className="info">{item.object.data.important_collection?item.object.data.important_collection.title:'青春'}</span>
                                {item.object.data.public_abbr}
                            </p>
                            <p className="content-bottom">
                                <span>{item.object.data.user.nickname}</span>
                                <time>{item.object.data.id}</time>
                            </p>
                        </div>
                    </div>  
                )
            }
            </div>
        )
    }
    componentDidMount() {
        fetch('/news/mobile/trending/now?page=1&count=15')
            .then((res) => res.json())
            .then((result) => {
                this.setState({
                    dataList : result
                })
            })
    }
}
export default TabNews;