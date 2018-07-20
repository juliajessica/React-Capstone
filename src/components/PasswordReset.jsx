import React from 'react';
import SignInButton from './SignInButton';
import { Link } from 'react-router-dom';

function PasswordReset(){

  return(
    <div>
      <div className="password-reset">
        <h3>Password Reset</h3>
        <div className="password-reset-input">
          <input type="text" placeholder="EMAIL"></input>
          <Link to=''><button type="button" className="reset-button">RESET PASSWORD</button></Link>
        </div>

      </div>
      <style jsx>{`
        .password-reset {
          height: 565px;
        }
        .password-reset-input {
          display:flex;
          flex-direction: column;
          align-items: center;
          padding: 2rem;
        }
        .password-reset-input input{
          padding: .7rem;
          font-size: 1rem;
          border-radius: 5px;
          margin: .4rem 0;
          width: 20rem;
          border: 0px solid;
        }
        input[type=text] {
          color: white;
          background-color: #E18472;
        }
        .reset-button {
          color: white;
          width: 15rem;
          background-color:#0A07DF;
          border: 0px solid;
          border-radius: 5px;
          padding: .5rem 0;
          margin: .3rem 0;
          opacity: .8;
        }
      `}
    </style>

    </div>
  );
}

export default PasswordReset;
