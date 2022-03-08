import formcss from './Form.module.css'

export default function Form() {
  return (
    <div>
      <form className={formcss.form} action="">
        <input className={formcss.input} type="text" placeholder='Full Name' />
        <br />
        <input className={formcss.input} type="text" placeholder='Email' />
        <br />
        <textarea className={formcss.input} name="" placeholder='Message' id="" cols="30" rows="10"></textarea>
        <button className={formcss.button}><h4 className={formcss.buttontext}>Send email</h4></button>
      </form>

    </div>
  )
}
