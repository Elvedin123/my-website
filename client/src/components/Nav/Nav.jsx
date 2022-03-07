import navcss from './Nav.module.css'
import { RiLinkedinBoxLine } from 'react-icons/ri'
import { RiGithubLine } from 'react-icons/ri'
import { GoMail } from 'react-icons/go'

export default function Nav() {
  return (
    <div className={navcss.matrixcontainer} >
      <img className={navcss.img} src="/Matrix.png" alt="matrix" />
      <div className={navcss.linkcontainer} >
        <a className={navcss.links} href="#home">Home</a>
        <a className={navcss.links} href="#projects">Projects</a>
        <a className={navcss.links} href="#about">About</a>
        <a className={navcss.links} href="#resume">resume</a>
        <a className={navcss.links} href="#contact">contact</a>
      </div>
      <div className={navcss.icons}>
        <a className={navcss.icon} href="https://www.linkedin.com/in/elvedincekic12/" target="_blank"> <RiLinkedinBoxLine /></a>
        <a className={navcss.icon} href="https://github.com/Elvedin123" target="_blank"> <RiGithubLine /></a>
        <a className={navcss.icon} href="#contact" target="_blank"> <GoMail /></a>
      </div>

    </div>
  )
}
