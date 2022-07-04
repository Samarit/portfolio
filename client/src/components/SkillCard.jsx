

export default function SkillCard( {skill} ) {
  const { id, name, img} = skill

  return (
    <li className="card-container" key={id}>
      <div className="card">

        <div className="card-icon">
          <img src={''} alt="Img" />
        </div>

        <p className="card-name">{name}</p>
      </div>

    </li>
  )
}