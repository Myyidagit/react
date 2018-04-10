import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    NavLink
} from 'react-router-dom';
import Home from '../pages/home/Home';
import About from '../pages/about/About';
import Main from '../pages/main/main';
class routers extends Component {
    render() {
        return (
            <Router>
               <div>
                    <ul className="bottomMuen">
                        <NavLink to="/home" activeClassName="home">首页</NavLink>
                        <NavLink to="/about" activeClassName="about">关于</NavLink>
                        <NavLink to="/main" activeClassName="main">我的</NavLink>
                    </ul>
                    <div className="content">
                        <Route exact path="/" component={Home} />
                        <Route exact path="/home" component={Home} />                        
                        <Route path="/about" component={About} />
                        <Route path="/main" component={Main} />
                    </div>
               </div>
            </Router>
      ) ;
    }
  }
  export default routers;