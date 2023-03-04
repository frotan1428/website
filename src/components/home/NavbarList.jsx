import React from 'react'
import { Link } from 'react-router-dom'


const NavbarList = () => {
  return (
    <div className="container-xxl bg-danger ">
       <div className="container-xxl position-relative p-0">
    <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
    <img src={require("../../assets/trimmed.png")} width={200}/>
    <Link href="/" className="navbar-brand p-0">

      
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
      <span className="fa fa-bars" />
    </button>
    <div className="collapse navbar-collapse" id="navbarCollapse">
      <div className="navbar-nav ms-auto py-1">
        <Link to="/" className="nav-item nav-link ">Home</Link>
        <Link to="/about" className="nav-item nav-link">About</Link>
        <Link to="/service" className="nav-item nav-link">Service</Link>
        <div className="nav-item dropdown">
          <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
          <div className="dropdown-menu m-0">
            <Link to="feature" className="dropdown-item">Features</Link>
            <Link to="quote" className="dropdown-item">Free Quote</Link>
            <Link to="team" className="dropdown-item">Our Team</Link>
            <Link to="testmonials" className="dropdown-item">Testimonial</Link>
            <Link to="univercity" className="dropdown-item">Univercity</Link>
            <Link to="*" className="dropdown-item">404 Page</Link>
          </div>
        </div>
        <Link to="contact" className="nav-item nav-link">Contact</Link>
      </div>
    </div>
  </nav>
  </div>
  </div>
  )
}

export default NavbarList