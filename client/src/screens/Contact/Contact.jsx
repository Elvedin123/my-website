import contactcss from './Contact.module.css'
import Form from '../../components/Form/Form'
import { RiLinkedinBoxLine } from 'react-icons/ri'
import { RiGithubLine } from 'react-icons/ri'
import { GoMail } from 'react-icons/go'

export default function Contact() {
  return (
    <div id='contact' className={contactcss.maincontainer}>Contact
      <div className={contactcss.workline}>
        <span className={contactcss.contact}>contact</span>
      </div>
      <span className={contactcss.formtitle}> LETS GET IN TOUCH!</span>
      <Form />
      <div className={contactcss.footer}>
        <div className={contactcss.linkcontainer} >
          <a className={contactcss.links} href="#home">Home</a>
          <a className={contactcss.links} href="#projects">Projects</a>
          <a className={contactcss.links} href="#about">About</a>
          <a className={contactcss.links} href="#resume">resume</a>
          <a className={contactcss.links} href="#contact">contact</a>
        </div>
        <div className={contactcss.icons}>
          <a className={contactcss.icon} href="https://www.linkedin.com/in/elvedincekic12/" target="_blank" rel="noreferrer"> <RiLinkedinBoxLine /></a>
          <a className={contactcss.icon} href="https://github.com/Elvedin123" target="_blank" rel="noreferrer"> <RiGithubLine /></a>
          <a className={contactcss.icon} href="#contact" > <GoMail /></a>
        </div>
      </div>
    </div>
  )
}
