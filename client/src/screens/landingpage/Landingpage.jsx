import React from 'react'
import landingpagecss from "./Landingpage.module.css"
import Nav from '../../components/Nav/Nav'
import Projects from '../projects/Projects'
export default function Landingpage() {
  return (
    <div className={landingpagecss.home}>
      <div id='home' className={landingpagecss.maincontainer}>
        <div className={landingpagecss.textcontainer}>
          <h1 className={landingpagecss.hello}>Hello,</h1>
          <h1 className={landingpagecss.elvedin}>I am elvedin</h1>
          <h1 className={landingpagecss.developer}>full stack software developer</h1>
        </div>
        <div className={landingpagecss.imgcontainer}>
          <img className={landingpagecss.img} src="/Elvedinhome.png" alt="Elvedin" />
        </div>
      </div>
      <Nav />
      <Projects />
    </div>
  )
}
