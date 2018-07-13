import React from 'react';
import Nav from './Nav';
import profileBgImg from './../assets/imgs/profile-bg.svg';
import profileImg from './../assets/imgs/profileImg.svg';
import leaf from './../assets/imgs/leaf.svg';

function Profile(){

  return(
    <div>
      <div className="profile">
        <h3>Profile</h3>
        <img src={profileImg} className="profile-Img" alt="profile image"/>
        <div className="profile-details">
          <p>NAME: Julia Sheremet</p>
          <p>NUMBER OF PLANTS: 2</p>
          <p>PLANT MOM: <img src={leaf} alt="leaf icon"/> Fern</p>
          <p className='plant2'><img src={leaf} alt="leaf icon" /> Fiddle Leaf Fig</p>
          <p>EXPERIENCE: 2 Years</p>
        </div>


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
        .profile-Img {
          border-radius: 99em;
          border: 0px solid;
          box-shadow: 0 3px 2px rgba(0, 0, 0, 0.3);
        }
        .profile-details {
          padding: .8rem;
          color: white;
          font-size: 1.3rem;

        }
        .plant2 {
          padding-left: 6rem;
        }
      `}
      </style>


    </div>
  );
}

export default Profile;
