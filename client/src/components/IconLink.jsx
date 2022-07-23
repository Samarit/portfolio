import IconSVG from "./IconSVG";

export default function IconLink( {id, url} ) {
  return (
    <a href={`https://${url}`} >
      <IconSVG id={id}/>
    </a>
  )
}