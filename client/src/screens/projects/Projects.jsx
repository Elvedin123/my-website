import projectscss from './Projects.module.css'

export default function Projects() {
  return (
    <div id="projects" className={projectscss.maincontainer}>
      <div className={projectscss.workline}>
        <span className={projectscss.mywork}>My work</span>
      </div>
      <div className={projectscss.gameterest}>
        <div className={projectscss.projectcontainer}>
          <div className={projectscss.titlecontainer}>
            <h1 className={projectscss.title}>Gameterest</h1>
          </div>

          <p className={projectscss.description}> Full stack app that allows users to view and comment on anticpated videogames. Users will be shown a list of games in which they can like, add to their profile, and leave comments/reviews. Users will have to sign up in order to interact with the videogames, but guests can view games and read comments.</p>
        </div>
        <div className={projectscss.rightcontainer}>
          <div className={projectscss.imgcontainer}>
            <img src="/Gameterestscreens.png" alt="gameterest" />
          </div>
          <div className={projectscss.mainlink}>
            <div className={projectscss.linkcontainer}>
              <a href="https://gameterest2.herokuapp.com/" target="_blank" className={projectscss.gameterestlink}><h1 className={projectscss.visit}>Visit Gameterest</h1></a>
            </div>
          </div>
        </div>
      </div>
      <div className={projectscss.toolscontainer}>
        <h3 className={projectscss.tools}>Tools</h3>
        <div className={projectscss.imgcontainer}>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" />
        </div>

      </div>
    </div>
  )
}
