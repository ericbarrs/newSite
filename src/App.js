import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './components/Header';
import Main from './containers/mainContainer';
import Aboutme from './routes/aboutme';
import ToDoList from './routes/todolist';
import BestBooks from './routes/BestBooks';
import Calculator from './routes/Calculator';

import './App.css';

class App extends Component {



  isClicked =(x)=>{
    if(x){
      this.setState({SidebarOpen: true})
    }else{
      this.setState({ SidebarOpen: false })
    }
  }

  render() {
    return (
      <BrowserRouter>
      <div className="App">
      <Header/>
      <Route exact path="/" component={Main} />
      <Route exact path="/aboutme" component={Aboutme} />
      <Route exact path="/calculator" component={Calculator} />
      <Route exact path="/todolist" component={ToDoList} />
      <Route exact path="/bestbooks" component={BestBooks} />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
