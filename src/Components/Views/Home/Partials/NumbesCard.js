import React from "react"

export default ({props}) => {

  const { REACT_ENV } = props
  if(REACT_ENV == "DEV")console.log(props)

  return (
    <>
        <section className="donation_details pad_top">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6 single_donation_box">
                        <img src="/images/icons/home1.png" alt="" />
                        <h4>Total Donation</h4>
                        <p>The French Revolutioncons tituted for the conscience of the dominant.</p>
                    </div>
                    <div className="col-lg-3 col-md-6 single_donation_box">
                        <img src="/images/icons/home2.png" alt="" />
                        <h4>Total Donation</h4>
                        <p>The French Revolutioncons tituted for the conscience of the dominant.</p>
                    </div>
                    <div className="col-lg-3 col-md-6 single_donation_box">
                        <img src="/images/icons/home3.png" alt="Office" />
                        <h4>Total Branches</h4>
                        <p>Currently We Are Only Working With Bhopal.</p>
                    </div>
                    <div className="col-lg-3 col-md-6 single_donation_box">
                        <img src="/images/icons/home4.png" alt="certificate" />
                        <h4>Total Certificate</h4>
                        <p>The French Revolutioncons tituted for the conscience of the dominant.</p>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}