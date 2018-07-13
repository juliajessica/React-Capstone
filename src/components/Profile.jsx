import React from 'react';
import Nav from './Nav';
import profileBgImg from './../assets/imgs/profile-bg.svg';

function Profile(){

  return(
    <div>
      <div className="profile">
        <h3>Profile</h3>
      </div>
      <Nav />
      <style jsx>{`
        .profile {
          margin: 0;
          padding: 0;
          display: block;
          padding: 0 2rem;
          height: 562px;
          background-image: url(${profileBgImg});
          background-repeat: no-repeat;
          background-position: center;
          background-size: cover;
        }
      `}
      </style>


    </div>
  );
}

export default Profile;
