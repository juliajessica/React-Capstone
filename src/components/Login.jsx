import React from 'react';
import { Link } from 'react-router-dom';
import bgLogin from './../assets/imgs/login-bg.svg';

function Login(){


  return(
    <div className='loginStyles'>
      <h1>NURTURE</h1>
      <form>
        <div className="login-input">
          <input type="text" placeholder="USER NAME"></input>
          <input placeholder="PASSWORD" type="password" className="password"></input>
        </div>
        <div className="login-btns">
          <Link to='/plant-search'><button type="button">SIGN IN</button></Link>
          <button type="button">SIGN UP</button>
        </div>
      </form>
      <p className="login-text">Forgot your logins? Click Here!</p>

      <style jsx>{`
        .loginStyles {
          padding: 10rem 0rem;
          font-weight: bold;
          color: black;
          background-image: url(${bgLogin});
          background-repeat: no-repeat;
          background-position: center;
          background-size: cover;
        }
        .loginStyles h1{
          text-align: center;
          color: white;
          font-size: 3rem;
        }
        .login-input {
          display:flex;
          flex-direction: column;
          align-items: center;
          padding: 2rem;
        }
        .login-input input{
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
        input[type=password]{
          color: white;
          background-color: #E18472;
        }

        .login-text {
          text-align: center;
          color: white;
          font-size: .8rem;
          font-weight: light;
        }
        .login-btns {
          display:flex;
          flex-direction: column;
          align-items: center;
        }
        .loginStyles button:nth-child(1) {
          color: white;
          width: 15rem;
          background-color:#DB9121;
          border-radius: 5px;
          padding: .5rem 0;
          margin: .3rem 0;
          border: 0px solid;
        }
        .loginStyles button:nth-child(2) {
          color: white;
          width: 15rem;
          background-color:#0A07DF;
          border: 0px solid;
          border-radius: 5px;
          padding: .5rem 0;
          margin: .3rem 0;
          opacity: .8;
        }

      `}</style>
    </div>
  );
}

export default Login;


//input[type=text]:focus {
//   border: 3px solid #DA806F;
// }
