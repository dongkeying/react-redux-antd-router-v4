import React, { Component } from 'react';
import { Switch, BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import Main from '../containers/Main';
import Search from '../pages/header/Search';
import Detail from '../pages/index/detail/index';
import Cart from '../pages/index/detail/cart';
import Regis from '../containers/Regis';

//redux
import { Provider } from 'react-redux';
import store from '../redux/store'

import NoMatch from '../pages/Nomatch';

class SwitchCom extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <Switch>      
                        <Redirect exact from="/" to="/main" />             
                        <Route path="/main" component={Main} />
                        <Route path="/detail" component={Detail} />
                        <Route path="/cart" component={Cart} />
                        <Route path="/search" component={Search} />
                        <Route path="/register" component={Regis} />
                        <Route component={NoMatch} />
                    </Switch>
                </Router>
            </Provider>
        )
    }
}

export default SwitchCom;