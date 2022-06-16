import '../css/Form.sass'
import { useForm } from 'react-hook-form'

const formSend = async (url, method) => {
  const res = await fetch( url, {method: method})
  const data = await res.json()
  console.log(data)
}

const formSubmit = (e) => {
  e.preventDefault()
  formSend( '/api/sendmail', 'POST')
}

export default function Form() {

  const { 
    register, 
    handleSubmit, 
    formState : {errors} 
  } = useForm()

  const onSubmit = (data) => {
    console.log(data)
    console.log(errors)
  }

  return (
    <div className="form-container">

      <form onSubmit={ handleSubmit(onSubmit) }>
        
        <div className="form-header">Send me a message</div>
        
        <input {...register('email', {required: true})} name="email" id="emailInout" placeholder='Email' />
        {errors.email && <p>This field is required</p>}
        <input {...register('name')} name="name" id="nameInput" placeholder='Name'/>
        <input {...register('message')} name="message" id="messageInput" placeholder='Message...'/>

        <button type="submit" >submit</button>

      </form>
    </div>
  )
}