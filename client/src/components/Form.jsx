import '../css/components/Form.sass'
import { useForm } from 'react-hook-form'
import FormInput from './FormInput'
import axios from 'axios'

const formSend = async (url, options) => {
  const res = await axios({
    method: options.method, 
    url: url,
    data: options.data
  })
  console.log(res)
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