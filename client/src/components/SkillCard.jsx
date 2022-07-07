import IconSVG from "./IconSVG"

export default function SkillCard( {skill} ) {
  const { index, name, id} = skill

  return (
    <li className="card-container" key={index}>
      <div className="card">
        <IconSVG id={id} width={'30px'}/>
        <p className="card-name">{name}</p>
      </div>

    </li>
  )
}