import React from 'react';
import Nav from './Nav';
import profileBgImg from './../assets/imgs/profile-bg.svg';
import profileImg from './../assets/imgs/profileImg.svg';
import leaf from './../assets/imgs/leaf.svg';
import settings from './../assets/imgs/settings.svg';
import { Link } from 'react-router-dom';

function ProfileEdit(){

  return(
    <div>
      <div className="profile-edit">
        <h3>Profile Edit</h3>

          <div className="profile-edit-layout">
            <Link to='/profile-edit'><img src={profileImg} className="profile-edit-Img" alt="profile image"/><img src={settings} alt="setting icon"/></Link>
            <div className="profile-edit-details">
              <p><Link to='/profile-edit'><img src={settings} alt="setting icon"/></Link> NAME: Julia Sheremet</p>
              <p><Link to='/profile-edit'><img src={settings} alt="setting icon"/></Link> NUMBER OF PLANTS: 2</p>
              <p><Link to='/profile-edit'><img src={settings} alt="setting icon"/></Link> PLANT MOM: <img src={leaf} alt="leaf icon"/> Fern</p>
              <p className='plant2-edit'><img src={leaf} alt="leaf icon" /> Fiddle Leaf Fig</p>
              <p><Link to='/profile-edit'><img src={settings} alt="setting icon"/></Link> EXPERIENCE: 2 Years</p>
            </div>
          </div>
        </div>
        <Nav />
        <style jsx>{`
          .profile-edit {
            margin-top: 0rem;
            padding: 0;
            height: 562px;
          }
          .profile-edit-layout {
            background-image: url(${profileBgImg});
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
            height: 630px;
            width: 100%;
          }
          .profile-edit-Img {
            border-radius: 99em;
            border: 0px solid;
            box-shadow: 0 3px 2px rgba(0, 0, 0, 0.3);
            margin: .9rem;
          }
          .profile-edit-details {
            padding: 1.5rem;
            color: white;
            font-size: 1.3rem;

          }
          .plant2-edit {
            padding-left: 7.3rem;
          }
        `}
        </style>
    </div>
  );
}

export default ProfileEdit;
