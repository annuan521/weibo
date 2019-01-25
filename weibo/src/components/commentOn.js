import React,{Component} from "react";
import axios from "axios";
import store from "../store"
import dispatcher from "../store/dispatcher"
export default class CommentOn extends Component{
    constructor(){
        super();
        this.state=store.getState()
        store.on("update",()=>{
            this.setState(store.getState())
        })
    }
    render() {
        let {contextList,pageArr} = this.state;
        return(
            <div className="commentOn">
                <div className="noContent">暂无留言</div>
                <div className="messList">
                    {contextList.map((v)=>{
                        return(
                            <div className="reply" key={v._id}>
                            <p className="replyContent">{v.context}</p>
                            <p className="operation">
                            <span className="replyTime">{v.addTime}</span>
                            <span className="handle">
                                <a href="javascript:;" className="top" onClick={this.handleUp.bind(this,{id:v._id,type:1})}>{v.topNum}</a>
                                <a href="javascript:;" className="down_icon"onClick={this.handleUp.bind(this,{id:v._id,type:2})}>{v.downNum}</a>
                                <a href="javascript:;" className="cut" onClick={this.handleDel.bind(this,v._id)}>删除</a>
                            </span>
                        </p>
                    </div>
                        )
                       
                    })}
                  
            </div>
                <div className="page">
                {pageArr.map((v)=>{
                    return(
                        <a href="javascript:;" className="active" onClick={this.handleClick.bind(this,v)} key={v}>{v}</a>
                    )
                })}
                    {/* <a href="javascript:;">2</a>
                    <a href="javascript:;">3</a> */}
                </div>
            </div>
        )
    }
    componentDidMount(){
        this.getWeibo(this.state.pageIndex)
    }
    handleDel(id){
        let action = {
            type:"HANDLE_DEL",
            pre:id
        }
        dispatcher.dispatch(action)
    }
    handleUp(params){
        let action = {
            type:"HANDLE_UP",
            pre:params
        }
        dispatcher.dispatch(action)
    }
    handleClick(v){
        let action = {
            type:"HANDLE_CLICK",
            pre:v
        }
        dispatcher.dispatch(action)    
    }
    getWeibo(pageIndex){
        let action = {
            type:"GET_WEIBO",
            pre:pageIndex
        }
        dispatcher.dispatch(action)
    }
}