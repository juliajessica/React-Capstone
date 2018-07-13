import React from 'react';
import { Link } from 'react-router-dom';
import bgLogin from './../assets/imgs/login-bg.png';

function Login(){

  return(
    <div className='loginStyles'>
      <h1>NURTURE</h1>
      <div className="login-input">
        <input placeholder="USER NAME"></input>
        <input placeholder="PASSWORD"></input>
      </div>
      <div className="login-btns">
        <Link to='/plant-search'><button type="button">SIGN IN</button></Link>
        <button type="button">SIGN UP</button>
      </div>
      <p className="login-text">Forgot your logins? Click Here!</p>

      <style jsx>{`
        .loginStyles {
          margin: 0 auto;
          font-weight: bold;
          color: black;
          background-image: url({bgLogin});
        }
        .loginStyles h1{
          text-align: center;
        }
        .login-input {
          display:flex;
          flex-direction: column;
          justify-content: center;
        }
        .login-text {
          text-align: center;
        }

        .login-btns {
          display:flex;
          flex-direction: column;
          justify-content: center;
        }
        .loginStyles button:nth-child(1) {
          color: white;
          background-color:#DB9121;
        }
        .loginStyles button:nth-child(2) {
          color: white;
          background-color:#0A07DF;
        }

      `}</style>
    </div>
  );
}

export default Login;
