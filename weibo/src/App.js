import React, { Component } from 'react';
import CommentOn from "./components/commentOn"
import Context from "./components/context"
import "./style/weibo.css"
class App extends Component {
  render() {
    return (
      <div className="App">
        <Context/>
        <CommentOn/>
      </div>
    )
  }
}

export default App;
