import React from 'react';
import add from './../assets/imgs/add.svg';
import { Link } from 'react-router-dom';
//<img src={} />

function GardenName(){

  return(
    <div>
      <div className="garden-user-name">
        <p>JULIA'S GARDEN</p>
        <Link to='/plant-search' className='add-icon'><img src={add} alt="Add to Garden" /></Link>
      </div>
      <div className="verticle-line"></div>
      <style jsx>{`
        .garden-user-name {
          background-color: #F9D7B5;
          height: 90px;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: .4rem .6rem;
          font-size: 2.6rem;
          color: white;
        }
        .garden-user-name img {
          padding: 0 1.3rem;
        }
        .verticle-line {
          height: .6rem;
          width: 100%;
          background-color: #EBAFA4;
        }
      `}
      </style>
    </div>
  );
}

export default GardenName;
