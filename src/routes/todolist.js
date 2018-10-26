import React, { Component } from 'react';

class ToDoList extends Component {
  state = {
  input:"",
  list:[]
}
clickHanlder=(e)=>{
  if(e.key === 'Enter'){
  this.setState({list: [...this.state.list, this.state.input]})
    console.log("enter")
  }
}
  changeHandler(e){
    let text = e.target.value
    this.setState({input: text})
  }

  deleteItem(e,index){
    const newArray = this.state.list;
    newArray.splice(index,1)
    this.setState({
      list: newArray,
      input:'',
    })
  }

  getList(){
    const newList = this.state.list.map((value,index)=>{
      return <div onClick={(e)=>{this.deleteItem(e, index)}}key={index}>{value}</div>})
      return newList
  }

  render() {
    return (
      <div className="ToDoList">
        <h1>Todo list</h1>
        <input 
          onKeyPress={(e)=>{this.clickHanlder(e)}} 
          onChange={(e)=>{this.changeHandler(e)}} 
          value={this.state.input}
          placeholder="enter text"></input>
        <div>{this.getList()}</div>
      </div>
    );
  }
}

export default ToDoList;