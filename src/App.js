
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from "./Components/NavItems/Home";
import About from "./Components/NavItems/About";
import Contact from "./Components/NavItems/Contact";
import Courses from './Components/NavItems/Courses';
import './App.css';
import { BsSearch } from "react-icons/bs";


function App() {

  return (
    <div >


      <Router>
        <nav className="navbar navbar-expand-lg navbar-light navbar-background">
          <div className="container-fluid">

            <a className="navbar-brand" href="/">
              <img src="Images/Screenshot 2023-05-13 201144.png" alt="for education logo" width="245" height="65" />
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end ul-div" id="navbarSupportedContent">
              <ul className="navbar-nav mb-2 mb-lg-0 m-0">
                <li className="nav-item me-3">
                  <Link className="nav-link active" to='/'>Home</Link>
                </li>
                <li className="nav-item me-3">
                  <Link className="nav-link active" to='/about'>About</Link>
                </li>
                <li className="nav-item me-3">
                  <Link className='nav-link active' to='/contact'>Contact</Link>

                </li>
                <li className="nav-item me-4">
                  <Link className='nav-link active' to='/course'>Course</Link>
                </li>
              </ul>
              <button className='btn sign-up btn-warning'>Sign Up</button>
              <form className="d-flex">
                <input className="form-control me-2 collapse" id='collapseInput' type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-dark w-auto" type="button" data-bs-toggle="collapse" data-bs-target="#collapseInput" aria-expanded="false" aria-controls="collapseInput"><BsSearch /></button>
              </form>
            </div>
          </div>

        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path='/course' element={<Courses />} />
        </Routes>
      </Router>



    </div>
  );
}

export default App;
