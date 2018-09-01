import React, { Component } from 'react';



class Profile extends Component {
    

    componentDidMount() {
        let header = new Headers({"Content-Type":"application/json","Authorization":"token KEY"});
        fetch('https://api.github.com/users/macrust', {

        method: 'GET',
        headers: header
        
    })
    .then(response => response.json()).then(json => {console.log(json)}).catch(error => {console.log(error)});

    
      //65dc0c6779b2c89855cf597907ad9a97820c8dc8
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
