import React from "react"
import EventsJson from '././Events.json'

export default ({props}) => {
  const { REACT_ENV } = props
  if(REACT_ENV == "DEV")console.log(props)

  return (
    <>
        <section className="support_campaign pad_bottom mt-5">
            <div className="container">
                <div className="row justify-content-center section-title-wrap">
                    <div className="col-lg-12">
                        <h1>Our Reward Powers</h1>
                        <p>
                            The French Revolution constituted for the conscience of the dominant aristocratic class a fall from innocence the natural
                            chain of events.
                        </p>
                    </div>
                </div>
                
                <div className="row">
                    {EventsJson.map((elem) => {
                        return (
                        <>
                            {elem.card.map((row) => {
                                let { imgUrl, title } = row
                                return (
                                <>
                                    <div className="col-lg-6 mb-30">
                                        <div className="campaign_box">
                                            <div className="camppaign d-flex">
                                                <div className="img-box">
                                                    <img className="img-fluid" src={`/images/${imgUrl}`} height="50" width="50" style={{maxWidth: "50px;"}} alt="" />
                                                </div>
                                                <div>
                                                    <h4 className="tt-c">{title}</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                                )
                            })}
                        </>
                        )
                    })}
                </div>
            </div>
        </section>
    </>
  )
}