import React, { Component } from 'react';
import {FormGroup,ControlLabel,FormControl,Button} from 'react-bootstrap';


class Profile extends Component {
    
  constructor(props) {
    super(props);
    this.state = {
      userInfo : {},
      editing : false
    }


  }

    componentDidMount() {
        let header = new Headers({"Content-Type":"application/json","Authorization":"token KEY"});
        fetch('https://api.github.com/users/macrust', {

        method: 'GET',
        headers: header
        
    })
    .then(response => response.json()).then(json => {this.setState ({userInfo : json})}).catch(error => {console.log(error)});

    
     
      }

      updateValue(type, event) {
          var userInfoCopy = JSON.parse(JSON.stringify(this.state.userInfo));
          userInfoCopy[type] = event.target.value;
          this.setState({userInfo:userInfoCopy});
      }

  render() {
    return (
      <div>My login <strong>{this.state.userInfo.login}</strong><br />
               
               <Button bsStyle="primary" onClick={() => this.setState({editing: !this.state.editing})}>Edit</Button>

               {this.state.editing ?
                 <FormGroup>
                 <ControlLabel>Name</ControlLabel>
                 <FormControl
                   type="text"
                   value={this.state.userInfo.name}
                   placeholder="Nazwa"
                   onChange={this.updateValue.bind(this,'name')}
                 />
                 
               
               
               <ControlLabel>Bio</ControlLabel>
               <FormControl
                type="text"
                value={this.state.userInfo.bio}
                placeholder="Bio"
                onChange={this.updateValue.bind(this,'bio')}
               />
               <ControlLabel>Location</ControlLabel>
               <FormControl
                type="text"
                value={this.state.userInfo.location}
                placeholder="Location"
                onChange={this.updateValue.bind(this,'location')}
               />                    
               <ControlLabel>Company</ControlLabel>
               <FormControl
                type="text"
                value={this.state.userInfo.company}
                placeholder="Company"
                onChange={this.updateValue.bind(this,'company')}
               />                 
               </FormGroup>
              :
                <div>
                  <p>Name <strong>{this.state.userInfo.name}</strong></p>
                  <p>Bio <strong>{this.state.userInfo.bio}</strong></p>
                  <p>Location <strong>{this.state.userInfo.location}</strong></p>
                  <p>Company <strong>{this.state.userInfo.company}</strong></p>
                </div> }
      
     </div>
    );
  }
}

export default Profile;
