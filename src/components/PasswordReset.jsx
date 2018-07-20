import React from 'react';
import SignInButton from './SignInButton';

function PasswordReset(){

  return(
    <div>
      <div className="password-reset">
        <h3>Password Reset</h3>
        <SignInButton />

      </div>
      <style jsx>{`
        .password-reset {
          height: 565px;
        }
      `}
      </style>


    </div>
  );
}

export default PasswordReset;
