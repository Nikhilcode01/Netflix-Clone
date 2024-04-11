import React from 'react';
import ReactDOM from 'react-dom';
import './indexs.css';
import logo from './images/logo.png';
import globe from './images/globe.png';

const Login = () => {
  return (
    <>
      <div className='top'>
        <img src={logo} alt="logo" />
      </div>

      <div className='login-section'>
        <section className='login-box'>
          <h2 className='text-white'>Sign in</h2>
          <form className='mt-4'>
            <div className='mb-3 bg-white rounded px-2'>
              <label className='form-label small-text' htmlFor="ExampleInputEmail1">Email or phone number</label>
              <input type='email' className='form-control border-0 p-0' id='exampleInputEmail1' aria-describedby="emailHelp" />
            </div>

            <div className="mb-3 bg-white rounded px-2">
              <label htmlFor="exampleInputPassword1" className="form-label small-text">Password</label>
              <input type="password" className="form-control border-0 p-0" id="exampleInputPassword1" />
            </div>
            <a href="./landing.html" type="submit" className="btn btn-danger mt-3 sign-in-button">Sign In</a>
            <div className="mb-3 mt-3 form-check">
              <input type="checkbox" className="form-check-input" id="exampleCheck1" />
              <label className="form-check-label text-white small-text" htmlFor="exampleCheck1">Remember Me</label>
            </div>

            <div className="mt-3 d-flex">
              {/* <img width="20px" src="./images/fb.png" alt="" /> */}
              <p className="m-0 small-text text-white mx-2">Login with Facebook</p>
            </div>
            <div className="mt-3 ">
              {/* <img width="20px" src="./images/fb.png" alt="" /> */}
              <p className="m-0  text-white"> <span className='p1'>New to Netflix?</span>  Sign up now.</p>
              <p className="m-0 small-text text-white  mt-2"> <span className='p2'>This page is protected by Google reCAPTCHA to ensure you're not a bot. <a href="#"> Learn more.</a> </span> </p>
            </div>
          </form>
        </section>
      </div>

      <div className='fotter'>
        <h3>Questions? Call 000-800-919-1694</h3>
        <div className='links'>
          <div className='collums'>
            <p>FAQ</p>
            <p>Cookie Preferences</p>
            <p>
              <div className="dropdown">
                <button className="btn dropdown-toggle lang-btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <img src={globe} alt='' className='globe-logo'/>
                  English
                </button>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">English</a></li>
                  <li><a className="dropdown-item" href="#">Hindi</a></li>
                </ul>
              </div>
            </p>
          </div>
          <div className='collums'>
            <p>Help Centre</p>
            <p>Corporate Information</p>
          </div>
          <div className='collums'>
            <p>Teams of Use</p>
          </div>
          <div className='collums'>
            <p>Privacy</p>
          </div>
        </div>
      </div>

    </>
  );
}


ReactDOM.render(<Login />, document.getElementById('root'));