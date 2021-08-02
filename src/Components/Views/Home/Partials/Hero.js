import React from "react"
import { NavLink } from 'react-router-dom'

export default ({props}) => {

  let herosectionparagraph = "❝The power you have is to be the best version of yourself you can be, so you can create a better world❞"
  let herosectionHeading = "Independent Women Community"
  const { REACT_ENV } = props
  if(REACT_ENV == "DEV")console.log(props)

  return (
    <>
      <section className="home_banner_area" style={{backgroundImage: `url('/images/banner/home.jpg')`}}>
          <div className="overlay"></div>
          <div className="banner_inner d-flex align-items-center mt-5">
              <div className="container">
                  <div className="banner_content row">
                      <div className="mt-5 tt-c">
                          <h1 className="display-1 text-light fw-bold">{herosectionHeading}</h1>
                          <p className="tt-c">{herosectionparagraph}</p>
                          <NavLink className="main_btn mr-10" to="/donate">donate now</NavLink>
                          <NavLink className="white_bg_btn" to="/activities">view activity</NavLink>
                      </div>
                  </div>
              </div>
          </div>
      </section>
    </>
  )
}