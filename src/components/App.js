import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Table }  from 'react-bootstrap';

import Profile from './Profile';
import Slider from './Slider';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentTab : 'profile'
    } 
  }

  render() {
    return (
      <div>
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">Kamac nauka!</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav pullRight>
            <NavItem eventKey={1} href="#"  onClick={() => this.setState({currentTab:'slider'})}>Slider</NavItem>
            <NavItem eventKey={2} href="#" onClick={() => this.setState({currentTab:'profile'})}>Profile</NavItem>
          </Nav>
        </Navbar>
        <div className="container"><h1>Test</h1>
        {this.state.currentTab==='slider' ? <Slider /> : false }
        {this.state.currentTab==='profile' ? <Profile /> : false }
        </div>
     </div>
    );
  }
}

export default App;
