import React from "react"
import './Error404.css'

export default props => {
  const pathname = window.location.pathname
  const { REACT_ENV } = props
  if(REACT_ENV == "DEV")console.log(props)
  return (
    <>
    <div className="mt-5 pt-5 container">
      <h1 className="comVueErr404Tit">Error404</h1>
      <h4>{pathname}</h4>
    </div>
    </>
  )
}
