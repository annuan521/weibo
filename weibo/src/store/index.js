const EventEmitter = require("events")
const axios = require("axios")
const store = Object.assign(EventEmitter.prototype,{
    state:{
        val:"",
        contextList:[],
        pageArr:[],
        pageIndex:1
    },
    getState(){
        return this.state
    },
    handleChange(val){
        this.state.val = val
        this.emit("update")
    },
    handleAdd(){
        axios.post("/addWeibo",{context:this.state.val}).then((data)=>{
            this.getWeibo(this.state.pageIndex)
        })
    },
    getWeibo(pageIndex){
        axios.get("/getweibo",{params:{pageIndex}}).then(({data})=>{
            var arr = [];
            for(var i = 1 ;i <= data.pageSum; i++){
                arr.push(i);
            }
                this.state.contextList = data.contextList;
                this.state.pageArr = arr;
                this.emit("update")
        })
        
    },
    handleClick(v){
        this.getWeibo(v)
        this.emit("update")
    },
    handleDel(id){
        axios.get("/deleteweibo",{params:{id}}).then((data)=>{
            this.getWeibo(this.state.pageIndex)
            this.emit("update")
        })
    },
    handleUp(params){
        axios.get("/topweibo",{params:{id:params.id,type:params.type}}).then((data)=>{
            this.getWeibo(this.state.pageIndex)
            this.emit("update")
        })
    }
})

export default store;