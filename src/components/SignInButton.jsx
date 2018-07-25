import React from 'react';
import { Link } from 'react-router-dom';

function SignInButton(){

  return(
    <div>
      <div className="sign-in-button">
        <Link to='/plant-search'><button type="button" className="sign-in-btn">SIGN IN</button></Link>
      </div>
      <style jsx>{`
        .sign-in-btn {
          color: white;
          width: 15rem;
          background-color:#DB9121;
          border-radius: 5px;
          padding: .5rem 0;
          margin: .3rem 0;
          border: 0px solid;
          cursor: pointer;
        }
      `}
      </style>


    </div>
  );
}

export default SignInButton;
