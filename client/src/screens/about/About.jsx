import aboutcss from "./About.module.css"

export default function About() {
  return (
    <div id="about" className={aboutcss.maincontainer}>

      <div className={aboutcss.workline}>
        <span className={aboutcss.about}>about</span>
      </div>
      <div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}
