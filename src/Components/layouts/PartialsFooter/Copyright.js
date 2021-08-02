import React from "react"

export default props => {

  const { REACT_ENV } = props
  if(REACT_ENV == "DEV")console.log(props.props)

  return (
    <>
      <div class="row">
          <div class="col-lg-12">
              <p class="copyright">
                  Copyright &copy;
                  {new Date().getFullYear()}
                  All rights reserved | Design & Developed By <i class="fa fa-heart-o" aria-hidden="true"></i><a href="https://github.com/lexuscreations" target="_blank">LexusCreations</a>
              </p>
          </div>
      </div>
    </>
  )
}