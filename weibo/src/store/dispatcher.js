import {Dispatcher} from "flux";
import store from "../store"

const dispatcher = new Dispatcher();

dispatcher.register((action)=>{
    switch(action.type){
        case "HANDLE_CHANGE":store.handleChange(action.pre)
        break;
        case "HANDLE_ADD":store.handleAdd()
        break;
        case "GET_WEIBO":store.getWeibo(action.pre)
        break;
        case "HANDLE_CLICK":store.handleClick(action.pre)
        break;
        case "HANDLE_DEL":store.handleDel(action.pre)
        break;
        case "HANDLE_UP":store.handleUp(action.pre)
        break;
    }
    
})

export default dispatcher;