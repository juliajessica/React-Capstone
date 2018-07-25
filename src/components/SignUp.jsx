import React from 'react';
// import PlantSearchContainer from './PlantSearchContainer';
import { Link } from 'react-router-dom';
function SignUp(){

  return(
    <div>
      <div className="sign-up">
        <h3>Sign Up</h3>
          <form>
            <div className="sign-up-input">
              <input type="text" placeholder="FIRST NAME"></input>
              <input placeholder="LAST NAME" type="text"></input>
              <input placeholder="EMAIL" type="text"></input>
              <input type="text" placeholder="USER NAME"></input>
              <input placeholder="PASSWORD" type="password" className="password"></input>
              <input placeholder="CONFIRM PASSWORD" type="password" className="password"></input>
              <Link to='/plant-search'><button type="button" className="sign-up-btn">SIGN UP</button></Link>
            </div>
          </form>

      </div>
      <style jsx>{`
        .sign-up {
          height: 565px;
          font-weight: bold;
          color: black;
          margin: auto;
        }
        .sign-up-input {
          display:flex;
          flex-direction: column;
          align-items: center;
          padding: 2rem;
        }
        .sign-up-input input{
          padding: .7rem;
          font-size: 1rem;
          border-radius: 5px;
          margin: .4rem;
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
        .sign-up-btn {
          margin: 1rem;
          color: white;
          width: 15rem;
          background-color:#0A07DF;
          border: 0px solid;
          border-radius: 5px;
          padding: .5rem 0;
          margin: 2rem, auto;
          opacity: .8;
          cursor: pointer;
        }
      `}
      </style>

    </div>
  );
}

export default SignUp;
