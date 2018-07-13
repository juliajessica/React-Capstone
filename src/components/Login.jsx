import React from 'react';

function Login(){
  let loginStyles = {
    fontWeight: 'bold',
    color: 'black',
    fontSize: '28px'
  }

  return(
    <div style={loginStyles}>
      <h1>NURTURE</h1>
        <button type="button">SIGN IN</button>
        <button type="button">SIGN UP</button>
      <p>Forgot your logins? Click Here!</p>

    </div>
  );
}

export default Login;
