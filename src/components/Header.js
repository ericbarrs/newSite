import React from 'react';

import {
  Navbar,
  NavLink,
  Nav,
  NavItem
} from 'reactstrap';
import {Link} from 'react-router-dom'

export default class Header extends React.Component {

  state = {
    isOpen: false,
    x: true
  }

  isClicked(e){
    this.setState({x: this.state.x === true ? false:true })
    console.log(this.state.x)
    return this.props.isClicked(this.state.x)
  }

  render(){
    return(
      <div>
        <Navbar color="dark" expand="md">
          <h1 className="header" onClick={(e)=>{this.isClicked(e)}} style={{ padding:'8px'}}>Eric Barrs</h1>
            <Nav className="ml-auto">
            <NavItem>
              <Link style={{color: 'rgba(255,255,255,.9)', padding: '8px', display: "block" }} to="/" >Home</Link>
            </NavItem>
              <NavItem>
              <Link style={{ color: 'rgba(255,255,255,.9)', padding:'8px', display:"block"}}to="/aboutme">About Me</Link>
              </NavItem>
              <NavItem>
              <NavLink style={{ color: 'rgba(255,255,255,.9)', padding:'8px',display:'block'}} href="http://www.github.com/ericbarrs">GitHub</NavLink>
              </NavItem>
            </Nav>
        </Navbar>
      </div>
    )
  }
}