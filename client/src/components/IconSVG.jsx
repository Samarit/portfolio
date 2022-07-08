// Icon from sprites with id
export default function IconSVG( {id} ) {

  return (
    <div className="icon" id={id} style={{backgroundImage: `url(/icons/${id}.svg)`,backgroundSize: 'contain', width: '30px', height: '30px'}}>
    </div>
  )
}