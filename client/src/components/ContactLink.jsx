import IconSVG from "./IconSVG";

export default function ContactLink( {id, url} ) {
  console.log(id, url)
  return (
    <a href={`https://${url}`}>
      <IconSVG id={id} width={'30px'} height={'30px'}/>
    </a>
  )
}