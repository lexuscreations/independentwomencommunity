import React from "react"
import { NavLink } from 'react-router-dom'

export default ({props}) => {
    let footerdonationSecTextPara = "financial benefits for upcoming new women entrepreneur, also helps in  women study, provide better future to women."
    const { REACT_ENV } = props
    if(REACT_ENV == "DEV")console.log(props)

    return (
    <>
        <section class="experience_donation section_gap pb-4">
            <div class="container">
                <div class="row align-items-center justify-content-center">
                    <div class="col-lg-12">
                        <h1 class="tt-c">Know How your Donation will help us</h1>

                        <p class="tt-c">{footerdonationSecTextPara}</p>
                        <NavLink to="/donate" class="main_btn2 mr-10">make donation now</NavLink>
                        <NavLink to="/fundraising" class="main_btn2">Create Fundraising today</NavLink>
                    </div>
                </div>
            </div>
        </section>
    </>
    )
}