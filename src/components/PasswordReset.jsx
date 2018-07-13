import React from 'react';
import Nav from './Nav';

function PasswordReset(){

  return(
    <div>
      <div className="password-reset">
        <h3>Password Reset</h3>

      </div>
      <Nav/>
      <style jsx>{`
        .password-reset {
          padding: 0 2rem;
          height: 562px;
        }
      `}
      </style>


    </div>
  );
}

export default PasswordReset;