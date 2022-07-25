import '../css/components/Form.sass'
import { useForm } from 'react-hook-form'
import FormInput from './FormInput'

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
        
        <FormInput name='name' id='nameInput' register={register} errors={errors} />

        <FormInput name='email' id='emailInput' register={register} errors={errors} />

        <FormInput name='message' id='messageInput' register={register} errors={errors} />

        

        <input type="submit" value={'Send'} />

      </form>
    </div>
  )
}