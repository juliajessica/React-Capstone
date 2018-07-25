import React from 'react';
import { Link } from 'react-router-dom';

function AddButton(){

  return(
    <div>
      <Link to='/calendar-add'><button type="button" className="add-cal">ADD</button></Link>
    <style jsx>{`
      .add-cal {
        font-size: .8rem;
        color: white;
        width: 10rem;
        background-color:#EBAFA4;
        border-radius: 5px;
        padding: .5rem 0;
        margin: .3rem 0;
        border: 0px solid;
        opacity: .8;
        cursor: pointer;
      }
      `}
    </style>
  </div>
  );
}


export default AddButton;
