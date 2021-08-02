import React from "react"
import { BrowserRouter, Route, Switch} from "react-router-dom"
import './App.css'
import './Common/Style/Style.css'
import './Common/Style/mystyle.css'
import './Common/Style/responsive.css'
import Home from "./Components/Views/Home/Home"
import Navbar from "./Components/layouts/Navbar"
import Footer from "./Components/layouts/Footer"
import Error404 from "./Components/Views/Errors/Error404"
import { REACT_ENV, isDonationFooterActive, isNewsLaterActive } from './config.json'

const App = () => {
  console.log(process.env.NODE_ENV)
  return (
    <>
      <BrowserRouter>
        <Navbar REACT_ENV={REACT_ENV} />

        <Switch>

          <Route exact path="/" component={(props) => <Home props={props} isDonationFooterActive={isDonationFooterActive} REACT_ENV={REACT_ENV}/>} />

          <Route component={(props) => <Error404 props={props} REACT_ENV={REACT_ENV} />} />

        </Switch>

        <Footer isNewsLaterActive={isNewsLaterActive} REACT_ENV={REACT_ENV} />
    </BrowserRouter>
    </>
  )
}

export default App
