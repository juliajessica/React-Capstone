import React from 'react';
import add from './../assets/imgs/add.svg';
import settings from './../assets/imgs/settings.svg';
import { Link } from 'react-router-dom';
//<img src={} />

function Garden(){

  return(
    <div>
      <div className="garden">
        <h3>Garden</h3>
          <div className="user-name">
            <p>JULIA'S GARDEN</p>
            <Link to='/garden-edit'><img src={add} alt="Add to Garden"/></Link>
          </div>
          <div className="verticle-line"></div>
          <div className="plant-garden">

            <h1>will have plant name</h1>
            <Link to='/garden-edit'><img src={settings} alt="setting icon to edit garden"/></Link>
          </div>
      </div>
      <style jsx>{`
        .garden {
          margin-top: 0rem;
          padding: 0;
          height: 565px;
        }
        .user-name{
          background-color: #F9D7B5;
          height: 90px;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .user-name p, img{
          font-size: 2.6rem;
          color: white;
          padding-left: 1rem;
        }
        .user-name img{
          padding-right: 1rem;
        }
        .verticle-line {
          height: .6rem;
          width: 100%;
          background-color: #EBAFA4;
        }
        .plant-garden {
          margin-top: 2rem;
          height: 90px;
          width: 100%;
          background-color: #EBAFA4;
          display: flex;
          align-items: center;
          justify-content: space-around;
        }

      `}
      </style>


    </div>
  );
}

export default Garden;
