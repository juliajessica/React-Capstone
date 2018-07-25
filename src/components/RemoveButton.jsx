import React from 'react';

function RemoveButton(){

  function refreshPage(){
    window.location.reload();
  }

  return(
    <div>
      <button type="button" onClick={ refreshPage } className="edit-cal">REMOVE</button>
    <style jsx>{`
      .edit-cal {
        font-size: .8rem;
        color: white;
        width: 10rem;
        background-color:#0A07DF;
        border-radius: 5px;
        padding: .5rem 0;
        margin: .3rem 0;
        border: 0px solid;
        opacity: .8;
      }
      `}
    </style>
  </div>
  );
}


export default RemoveButton;
