import '../css/components/Form.sass'
import { useForm } from 'react-hook-form'

const formSend = async (url, options) => {
  const res = await fetch( url, {
    method: options.method, 
    body: JSON.stringify(options.body),
    headers: {
      'Content-Type': 'application/json;charset=utf-8' 
    }
  })
  const respond = await res.json()
  console.log(respond)
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
    formSend( '/api/sendmail', {
      method: 'POST',
      body: data
    })  
  }

  return (
    <div className="form-container">
      <form onSubmit={ handleSubmit(onSubmit) }>
        
        <div className="form-header">Send me a message</div>
        
        <div className="input-wrapper">
          <input {...register('name', {required: 'This field is required'}) } name="name" id="nameInput" placeholder='Name'/>
          {errors.name && <p className='form-error'>{errors.name.message}</p>}
        </div>

        <div className="input-wrapper">
          <input 
            {...register('email', 
              {required: 'This field is required',
                pattern: {
                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                message: 'Incorrect email'
            }})} 
            name="email" 
            id="emailInout" 
            placeholder='Email' />
          {errors.email && <p className='form-error'>{errors.email.message}</p>}
        </div>

        <div className="input-wrapper">
          <input 
            {...register('text', 
              {required: 'Type something!'})} 
            name="text" 
            id="textInput" 
            placeholder='Message...'/>
          {errors.text && <p className='form-error'>{errors.text.message}</p>}
        </div>

        <input type="submit" value={'Send'} />

      </form>
    </div>
  )
}