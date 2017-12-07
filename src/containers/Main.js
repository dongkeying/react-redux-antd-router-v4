import React,{Component} from 'react';
import { Route,withRouter} from 'react-router-dom';

import Header from '../pages/header/Header';
import Footer from '../pages/footer';

import Index from './Index';
import Course from './Course';
import News from './News';
import Mine from './Mine';
import Class from '../pages/index/class/Index'

class Main extends Component {
    componentDidMount(){
    }
    render() {
        return (
            <div className="wrap">             
                <Header></Header>  
                <div className="tab-bar">
                    <Route path="/main" exact component={Index}></Route>
                    <Route path="/main/news" component={News}></Route>
                    <Route path="/main/course" component={Course}></Route>
                    <Route path="/main/mine" component={Mine}></Route>

                    <Route path="/main/class" component={Class}></Route>
                </div>
                <Footer></Footer>
            </div>
        )
    }
}
export default withRouter(Main);