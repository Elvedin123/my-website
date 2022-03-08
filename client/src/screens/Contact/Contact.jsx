import contactcss from './Contact.module.css'
import Form from '../../components/Form/Form'
export default function Contact() {
  return (
    <div id='contact' className={contactcss.maincontainer}>Contact
      <div className={contactcss.workline}>
        <span className={contactcss.contact}>contact</span>
      </div>
      <span className={contactcss.formtitle}> LETS GET IN TOUCH!</span>
      <Form />
    </div>
  )
}
