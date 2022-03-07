import aboutcss from "./About.module.css"

export default function About() {
  return (
    <div id="about" className={aboutcss.maincontainer}>

      <div className={aboutcss.workline}>
        <span className={aboutcss.about}>about</span>
      </div>
      <div className={aboutcss.aboutme}>
        <div>
          <img src="/PictureofElv.png" alt="elv" />
        </div>
        <div className={aboutcss.textcontainer}>
          <span className={aboutcss.intro}>
            Hi, my name is Elvedin Cekic. I am a full stack software engineer based in New York City.
          </span>
          <span className={aboutcss.blurb}>
            Professional Soccer player turned Software Engineer. As a natural team player, I approach complex problems with a variety of skills; iterating and improving on projects while working closely with colleagues. Driven for results, I thrive where out of the box solutions are important.
          </span>
        </div>

      </div>
      <div className={aboutcss.skillset}>
        <span className={aboutcss.skilltitle}> Programming Languages:
        </span>
        <span className={aboutcss.tech}>
          HTML | CSS | Javascript
        </span>
        <br />
        <span className={aboutcss.skilltitle}> Libraries & Frameworks:
        </span>
        <span className={aboutcss.tech}>
          Bootstrap | React | MongoDB | Mongoose | Ruby | Ruby on rails
        </span>
        <br />
        <span className={aboutcss.skilltitle}> Additional Skills:
        </span>
        <span className={aboutcss.tech}>
          Github | Slack | Adobe Suite | Microsoft | MailChimp | SocialPilot | WordPress | Constant Contacts | Airtable
        </span>
      </div>
    </div>
  )
}
