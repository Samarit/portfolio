// Icon from sprites with id
export default function IconSVG( {id, ...rest} ) {

  const {width, height} = rest
  console.log(width, height)

  return (
    <div 
      className="icon" 
      id={id} 
      style={{
        backgroundImage: `url(/icons/${id}.svg)`}}>
    </div>
  )
}