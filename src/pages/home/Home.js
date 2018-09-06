/**
 * Created by mapbar_front on 2018/3/18.
 */
import React,{ Component} from 'react';
import './home.css'
// import axios from 'axios'
import Header from '../comments/header'
import {getList} from "../../api/api"
export default class Home extends Component{
    constructor(props) {
        super(props);   
        this.state = {   
            posts: []   
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        console.log(1111)
    }
    componentDidMount() {
        getList().then(res=>{
            const posts = res.CategoryList
            this.setState({ posts });
        })  
    }
    render(){
        return (
            <div>
                <Header headerName='首页'></Header>
                <ul className="leftMenu">
                    {
                        this.state.posts.map((item,index) =>
                            <li key={index} onClick={this.handleClick}>{item.appName}</li>
                        )
                    }
                </ul>
                <div className="bai">
                </div>
            </div>
        )
    }
    
    
}