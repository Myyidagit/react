/**
 * Created by mapbar_front on 2018/3/18.
 */
import React,{ Component} from 'react';
import './home.css'
// import axios from 'axios'
import {bannerList,storeList} from "../../api/api"
export default class Home extends Component{
    constructor(props) {
        super(props);   
        this.state = { 
            address:'北京市望京sohoT11701', 
            inputMsg:'', 
            posts: [],
            homestoreList:[]   
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        console.log(1111)
    }
    componentDidMount() {
        bannerList().then(res=>{
            console.log(res)
            res.splice(res.length-1,1)
            const posts = res
            this.setState({ posts });
        })
        storeList().then(res=>{
            console.log(res)
            let homestoreList = res
            this.setState({ homestoreList });
        })
    }
    render(){
        let inputmsg = this.state.inputMsg
        let bannerList = this.state.posts
        let storeListb = this.state.homestoreList
        return (
            <div>
                <div className='home_header'>
                    <p>{this.state.address}</p>
                </div>
                <div className="home_serch">
                    <input placeholder='搜索饿了么商家、商品名称' value={inputmsg}/>
                </div>
                <div className='home_banner'>
                    {
                        bannerList.map((item,index)=>
                            <li key={index}>
                                <img alt='' src='//fuss10.elemecdn.com/0/d0/dd7c960f08cdc756b1d3ad54978fdjpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/'/>
                                <p>{item.name}</p>
                            </li>
                        )
                    }
                </div>
                <div className='home_storeList'>
                    {
                        storeListb.map((item,index)=>
                            <li key={index}>
                                <img alt='' src='//fuss10.elemecdn.com/0/d0/dd7c960f08cdc756b1d3ad54978fdjpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/'/>
                                <span>{item.restaurant.name}</span>
                                <span>{item.restaurant.address}</span>
                            </li>
                        )
                    }
                </div>
            </div>
        )
    }
    
    
}