import React from 'react';
import Nav from './Nav';
import profileBgImg from './../assets/imgs/profile-bg.svg';
import profileImg from './../assets/imgs/profileImg.svg';
import leaf from './../assets/imgs/leaf.svg';
import settings from './../assets/imgs/settings.svg';

function Profile(){

  return(
    <div>
      <div className="profile">
        <h3>Profile</h3>
        <div className="profile-layout">
          <img src={profileImg} className="profile-Img" alt="profile image"/><img src={settings} alt="setting icon"/>
          <div className="profile-details">
            <p><img src={settings} alt="setting icon"/> NAME: Julia Sheremet</p>
            <p><img src={settings} alt="setting icon"/> NUMBER OF PLANTS: 2</p>
            <p><img src={settings} alt="setting icon"/> PLANT MOM: <img src={leaf} alt="leaf icon"/> Fern</p>
            <p className='plant2'><img src={leaf} alt="leaf icon" /> Fiddle Leaf Fig</p>
            <p><img src={settings} alt="setting icon"/> EXPERIENCE: 2 Years</p>
          </div>
        </div>


      </div>
      <Nav />
      <style jsx>{`
        .profile {
          margin-top: 0rem;
          padding: 0;
          height: 562px;
        }
        .profile-layout {
          background-image: url(${profileBgImg});
          background-repeat: no-repeat;
          background-position: center;
          background-size: cover;
          height: 630px;
          width: 100%;
        }
        .profile-Img {
          border-radius: 99em;
          border: 0px solid;
          box-shadow: 0 3px 2px rgba(0, 0, 0, 0.3);
          margin: .9rem;
        }
        .profile-details {
          padding: 1.5rem;
          color: white;
          font-size: 1.3rem;

        }
        .plant2 {
          padding-left: 7.3rem;
        }
      `}
      </style>


    </div>
  );
}

export default Profile;
