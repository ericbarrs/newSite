import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Main from './containers/mainContainer'
import Aboutme from './routes/aboutme'

import './App.css';

class App extends Component {

  state = {
    SidebarOpen: false,
  }

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
      <Header isClicked={this.isClicked}/>
      <Sidebar open={this.state.SidebarOpen}/>
      <Route exact path="/" component={Main} />
      <Route exact path="/aboutme" component={Aboutme} />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
