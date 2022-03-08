import formcss from './Form.module.css'

export default function Form() {
  return (
    <form action="">
      <input type="text" placeholder='Fullname' />
      <br />
      <input type="text" placeholder='Email' />
      <br />
      <textarea name="" placeholder='Message' id="" cols="30" rows="10"></textarea>
    </form>
  )
}
