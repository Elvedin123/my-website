import formcss from './Form.module.css'
import { send } from "emailjs-com"
import { useState } from 'react'
export default function Form() {
  const default_input = {
    from_name: "",
    reply_to: "",
    to_name: "Elvedin Cekic",
    message: ""
  }
  const [toSend, setToSend] = useState(default_input)
  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    send(
      'service_cmqd986',
      'template_3gkyb5t',
      toSend,
      'keB0GgXknztsLwyi8'
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
  };
  return (
    <div>
      <form onSubmit={onSubmit} className={formcss.form} >
        <input className={formcss.input} onChange={handleChange} type="text" name="from_name" placeholder='Full Name' />
        <br />
        <input className={formcss.input} onChange={handleChange} type="text" name="reply_to" placeholder='Email' />
        <br />
        <textarea className={formcss.input} onChange={handleChange} type="text" name="message" placeholder='Message' id="" cols="30" rows="10"></textarea>
        <button className={formcss.button}><h4 type="submit" className={formcss.buttontext}>Send email</h4></button>
      </form>

    </div >
  )
}
