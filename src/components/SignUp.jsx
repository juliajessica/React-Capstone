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
          padding: 0 2rem;
          height: 562px;
        }
      `}
      </style>


    </div>
  );
}

export default SignUp;
