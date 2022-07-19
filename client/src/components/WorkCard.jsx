import IconLink from "./IconLink"

const _iconOnCLick = (e) => {
  e.stopPropagation()
}

export default function WorkCard( {id, url, urlGit} ) {
  return (
    <li className="card work" id={id} >
      <IconLink id={'github'} url={urlGit} onClick={_iconOnCLick}/>
    </li>
  )
}