import React from "react"
import { NavLink } from 'react-router-dom'

export default props => {
  return (
    <>
      <header className="header_area">
          <div className="main_menu">
              <nav className="navbar navbar-expand-lg navbar-light bg-light">
                  <div className="container-fluid">

                    <NavLink className="navbar-brand" to="/">
                          <img src="/images/squareWhiteFaviconTransparent.png" alt="Logo" width="56" height="50" />
                    </NavLink>

                      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                          <span className="navbar-toggler-icon"></span>
                      </button>

                      <div className="collapse navbar-collapse m-auto justify-content-end" id="navbarSupportedContent">
                          <ul className="navbar-nav mb-2 mb-lg-0 nav tt-c">
                              <li className="nav-item active">
                                  <NavLink className="nav-link" to="/">home</NavLink>
                              </li>
                              <li className="nav-item ">
                                  <NavLink className="nav-link" to="/events.html">events</NavLink>
                              </li>
                              <li className="nav-item ">
                                  <NavLink className="nav-link" to="/about.html">About Us</NavLink>
                              </li>
                              <li className="nav-item">
                                  <NavLink className="nav-link" to="/contact.html">Contact</NavLink>
                              </li>
                              <li className="nav-item">
                                  <NavLink className="main_btn" to="/signup.html">Sign up</NavLink>
                              </li>
                              <li className="nav-item">
                                  <NavLink className="main_btn" to="/signin.html">Sign In</NavLink>
                              </li>
                          </ul>
                      </div>

                  </div>
              </nav>
          </div>
      </header>
    </>
  )
}