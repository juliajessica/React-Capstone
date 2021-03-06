import React from 'react';
import { Link } from 'react-router-dom';


function EditButton(){

  return(
    <div>
      <Link to='/calendar-edit'><button type="button" className="edit-btn">EDIT</button></Link>
    <style jsx>{`
      .edit-btn {
        font-size: .8rem;
        color: white;
        width: 10rem;
        background-color:#0A07DF;
        border-radius: 5px;
        padding: .5rem 0;
        margin: .3rem 0;
        border: 0px solid;
        opacity: .8;
        cursor: pointer;
      }
      .edit-btn: hover {

      }
      `}
    </style>
  </div>
  );
}


export default EditButton;
