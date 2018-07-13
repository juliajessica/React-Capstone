import React from 'react';
import Nav from './Nav';

function Profile(){

  return(
    <div>
      <div className="profile">
        <h1>Profile</h1>
      </div>
      <Nav />
      <style jsx>{`
        .profile {
          padding: 0 2rem;
          height: 562px;
        }
      `}
      </style>


    </div>
  );
}

export default Profile;
