import IconSVG from "./IconSVG";

export default function ContactLink( {id, url} ) {
  console.log(id, url)
  return (
    <a href={`https://${url}`}>
      <IconSVG id={id}/>
    </a>
  )
}