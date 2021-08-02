import React from "react"

export default props => {

  let footerSocialFacebookLink = "https://www.facebook.com/fatimasiddiqui2409/"
  let footerSocialTwitterLink = "https://twitter.com/"
  let footerSocialInstagramLink = "https://www.instagram.com/fatimasiddiqui2409/?utm_medium=copy_link"
  let footerSocialYoutubeLink = "https://youtube.com/"
  let footerSocialGoogleLink = "mailto:independentwomancommunity@gmail.com"

  const { REACT_ENV } = props
  if(REACT_ENV == "DEV")console.log(props.props)

  return (
    <>
      <div class="col-lg-2 col-md-6 col-sm-6">
        <div class="single-footer-widget f_social_wd">
            <h6 class="footer_title">Follow Us</h6>
            <p>Let us be social</p>
            <div class="f_social">
                <a href={footerSocialFacebookLink} target="_blank">
                    <i class="fab fa-facebook-f"></i>
                </a>
                <a href={footerSocialTwitterLink} target="_blank">
                    <i class="fab fa-twitter"></i>
                </a>
                <a href={footerSocialInstagramLink} target="_blank">
                    <i class="fab fa-instagram"></i>
                </a>
                <a href={footerSocialYoutubeLink} target="_blank">
                    <i class="fab fa-youtube"></i>
                </a>
                <a href={footerSocialGoogleLink} target="_blank">
                    <i class="fab fa-google"></i>
                </a>
            </div>
          </div>
      </div>
    </>
  )
}