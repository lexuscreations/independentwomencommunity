import React from "react"
import Hero from './Partials/Hero'
import NumbesCard from './Partials/NumbesCard'
import Events from './Partials/Events'
import HowDonationUse from './Partials/HowDonationUse'

export default props => {

  const { REACT_ENV } = props
  if(REACT_ENV == "DEV")console.log(props.props)

  return (
    <>
      <Hero props={props}/>
      <NumbesCard props={props}/>
      <Events props={props}/>
      {props.isDonationFooterActive?<HowDonationUse props={props}/>:null}
    </>
  )
}