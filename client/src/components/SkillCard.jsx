import IconSVG from "./IconSVG"

export default function SkillCard( {skill} ) {
  const { index, name, id} = skill

  return (
    <li className="card" key={index}>
      <IconSVG id={id}/>
      <p className="card-name">{name}</p>
    </li>
  )
}