import sprites from '../icons/sprites.svg'

// Icon from sprites with id
export default function IconSVG( {id} ) {

  return (
    <div className="icon" id={id}>
      <img src="" alt="">
        <svg>
          <use href={`${sprites}#${id}`} />
        </svg>
      </img>
    </div>
  )
}