import '../css/Form.sass'
import { useForm } from 'react-hook-form'
import { useEffect } from 'react'

const formSend = async (url, method) => {
  const res = await fetch( url, {method: method})
  const data = await res.json()
  console.log(data)
}



const formSubmit = (e) => {
  //e.preventDefault()
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
    console.log(`Errors: ${errors}`)
  }

  return (
    <div className="form-container">

      <form onSubmit={ handleSubmit(onSubmit) }>
        
        <div className="form-header">Send me a message</div>
        
        <input {...register('email', {required: '⚠This field is required'})} name="email" id="emailInout" placeholder='Email' />
        {errors.email && <p className='form-error-message'>{errors.email.message}</p>}
        <input {...register('name') } name="name" id="nameInput" placeholder='Name'/>
        <input {...register('message')} name="message" id="messageInput" placeholder='Message...'/>

        <button type="submit" onClick={console.log(errors)}>submit</button>

      </form>
    </div>
  )
}