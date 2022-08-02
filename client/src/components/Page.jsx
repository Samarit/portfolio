export default function Page( {id, title, children} ) {
  // If title not passed => use id 
  title = title || id 

  return (
    <div className={`page ${id}`} id={id}>

      <h1 className='page-title'> { `<${title.toLowerCase()}>` } </h1>
      
      {children}
      
      <h1 className='page-title'> { `</${title.toLowerCase()}>` } </h1>
    
    </div>
  )
}