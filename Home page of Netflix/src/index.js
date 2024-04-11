import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import logo from './images/logo.png';
import Row1 from './movie_row1';
import Row2 from './movie_row2';
import Row3 from './movie_row3';
import Row4 from './movie_row4';
import globe from './images/globe.png';

const Home = () => {
  return (
    <>
      {/* Top box */}
      <div className='new_move'>

        {/* Navigation bar */}
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <img src={logo} alt="logo" className='logo_img' />
            <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ." id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mx-4">
                <li className="nav-item">
                  <a className="nav-link active text-white" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active text-white" aria-current="page" href="#">TV Shows</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active text-white" aria-current="page" href="#">Movies</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active text-white" aria-current="page" href="#">Latest</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active text-white" aria-current="page" href="#">My List</a>
                </li>
              </ul>
              <form className="d-flex">
                <input className="form-control rounded-0" type="search" placeholder="Search" />
                <button type="button" className="btn bg-light me-3 rounded-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
                  </svg>
                </button>
                <button type="button" className="btn bg-light text-dark">Nikhil</button>
              </form>
            </div>
          </div>
        </nav>

      </div>

      {/* Movies box */}

      <div className='row'>
        <Row1 />
      </div>

      <div className='row'>
        <Row2 />
      </div>

      <div className='row'>
        <Row3 />
      </div>

      <div className='row'>
        <Row4 />
      </div>

      {/* Row set - 2  */}

      <div className='row'>
        <Row2 />
      </div>

      <div className='row'>
        <Row3 />
      </div>

      <div className='row'>
        <Row4 />
      </div>

      {/* footer section */}

      <div className='fotter'>
        <h3>Questions? Call 000-800-919-1694</h3>
        <div className='links'>
          <div className='collums'>
            <p>FAQ</p>
            <p>Investor Relations</p>
            <p>Ways to Watch</p>
            <p>Corporate Information</p>
            <p>Netflix Originals</p>
            <div>
              <div className="dropdown">
                <button className="btn dropdown-toggle lang-btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <img src={globe} alt='' className='globe-logo' />
                  English
                </button>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">English</a></li>
                  <li><a className="dropdown-item" href="#">Hindi</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className='collums'>
            <p>Help Centre</p>
            <p>Jobs</p>
            <p>Terms of Use</p>
            <p>Contact Us</p>
          </div>
          <div className='collums'>
            <p>Account</p>
            <p>Redeem Gift Cards</p>
            <p>Privacy</p>
            <p>Speed Test</p>
          </div>
          <div className='collums'>
            <p>Media Center</p>
            <p>Buy Gift Cards</p>
            <p>Cookie Preferences</p>
            <p>Legal Notices</p>
          </div>
        </div>
      </div>

    </>
  );
}

ReactDOM.render(<Home />, document.getElementById('root'));