import React from 'react';
import Nav from './Nav';

function SignUp(){

  return(
    <div>
      <div className="sign-up">
        <h3>Sign Up</h3>

      </div>
      <Nav/>
      <style jsx>{`
        .sign-up {
          height: 565px;
        }
      `}
      </style>


    </div>
  );
}

export default SignUp;
