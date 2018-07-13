import React from 'react';
import { Link } from 'react-router-dom';

function Login(){
  let loginStyles = {
    fontWeight: 'bold',
    color: 'black',
    fontSize: '28px'
  }

  return(
    <div style={loginStyles}>
      <h1>NURTURE</h1>
        <Link to='/plant-search'><button type="button">SIGN IN</button></Link>
        <button type="button">SIGN UP</button>
      <p>Forgot your logins? Click Here!</p>

    </div>
  );
}

export default Login;
