export default function FormInput( {id, name, register, errors} ) {

  return (
    <div className="input-wrapper">

      <input { ...register( name, {required: 'This field is required'} )} 
        name={name} 
        id={id} 
        placeholder={name}/>

      {errors[name] && <p className='input-error'>{errors[name].message}</p>}
    </div>
  )
}