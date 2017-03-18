import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import firebase from 'firebase';

class App extends Component {
  constructor(){
    super()
    this.addToDo = this.addToDo.bind(this);
  }
componentWillMount(){
  let refRoot = firebase.database().ref('/todos/');
  refRoot.on('child_added',(snapshot)=>{
      console.log(snapshot.val());
  });
}
  
addToDo(e){
  e.preventDefault();
  let refRoot  = firebase.database().ref('/todos/');
  refRoot.push({todo: this.refs.todo.value});
  this.refs.todo.value = '';
  console.log(this.refs.todo.value);
}

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React ToDo List</h2>
        </div>
        <div className="formContainer">
          <form onSubmit = {this.addToDo}>
            <input type="text" ref = "todo" placeholder="ToDo Item"/>
            <button>ADD TODO</button>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
