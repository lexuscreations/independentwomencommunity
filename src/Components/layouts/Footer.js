import React, { useState } from "react"
import Socials from './PartialsFooter/Socials'
import Copyright from './PartialsFooter/Copyright'

export default props => {

const [Placeholder, setPlaceholder] = useState("Email Address")

console.log(props);

  let footerabouttext = "IWC is to provide a safe & secure platform to all the women of our country from different regions of India who want to express themselves and have enthusiasm to do something or achieve something !!! <br/> WE ARE THE WOMEN OF INDEPENDENT INDIA"

  return (
    <>
      <footer className="footer-area section_gap">
          <div className="container">
              <div className="row">
                  <div className="col-lg-5 col-md-6 col-sm-6">
                      <div className="single-footer-widget">
                          <h6 className="footer_title">About Us</h6>
                          <p className="tt-c">{footerabouttext}</p>
                      </div>
                  </div>
                  {props.isNewsLaterActive?
                  (
                    <div className="col-lg-5 col-md-6 col-sm-6">
                      <div className="single-footer-widget">
                        <h6 className="footer_title">Newsletter</h6>
                        <p>Stay updated with our latest trends</p>
                        <div id="mc_embed_signup">
                          <form target="_blank" action="" method="post" className="subscribe_form relative">
                            <div className="input-group d-flex flex-row">
                              <input name="EMAIL" placeholder={Placeholder} onFocus={() => {setPlaceholder("")}} onBlur={() => {setPlaceholder("Enter Email Address")}} required type="email" />
                              <button className="btn sub-btn">
                                <i className="fa fa-paper-plane" aria-hidden="true"></i>
                              </button>
                            </div>
                            <div className="mt-10 info"></div>
                          </form>
                        </div>
                      </div>
                    </div>
                  ):""}
                  {<Socials/>}
              </div>
              {<Copyright/>}
          </div>
      </footer>
    </>
  )
}