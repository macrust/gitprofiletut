import React, { Component } from 'react';



class Profile extends Component {
    
  constructor(props) {
    super(props);
    this.state = {
      userInfo : {}
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

  render() {
    return (
      <div>
        Profile page
     </div>
    );
  }
}

export default Profile;
