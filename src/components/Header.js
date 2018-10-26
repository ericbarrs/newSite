import React from 'react';

import {
  Navbar,
  Nav,
  NavLink,
  NavItem,
  ButtonDropdown, 
  DropdownToggle, 
  DropdownMenu, 
  DropdownItem
} from 'reactstrap';
import {Link} from 'react-router-dom'

export default class Header extends React.Component {
  state = {
    x: true,
    dropdownOpen: false
  }
  toggle=()=>{
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }
  render(){
    return(
      <div className='header'>
        <Navbar color="dark" expand="md">
          <h1 style={{ padding:'8px'}}>Eric Barrs</h1>
            <Nav className="ml-auto">
            <NavItem>
              <Link style={{color: 'rgba(255,255,255,.9)', padding: '8px', display: "block" }} to="/" >Home</Link>
            </NavItem>
              <NavItem>
              <Link style={{ color: 'rgba(255,255,255,.9)', padding:'8px', display:"block"}}to="/aboutme">About Me</Link>
              </NavItem>
              <NavItem>
              <NavLink href="http://www.github.com/ericbarrs" style={{ color: 'rgba(255,255,255,.9)', padding:'8px',display:'block'}} target="_blank">GitHub</NavLink>
              </NavItem>
              <ButtonDropdown direction="left" isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                  <DropdownToggle  caret size="sm" color="primary">
                    Examples
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem ><Link to="/calculator">Calculator</Link></DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem ><Link to="/bestbooks">Best Books</Link></DropdownItem>
                    <DropdownItem divider />
                  </DropdownMenu>
                </ButtonDropdown>
            </Nav>
        </Navbar>
      </div>
    )
  }
}