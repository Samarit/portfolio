import IconSVG from "./IconSVG";

export default function ContactLink( {id, url} ) {
  return (
    <a href={`https://${url}`}>
      <IconSVG id={id}/>
    </a>
  )
}